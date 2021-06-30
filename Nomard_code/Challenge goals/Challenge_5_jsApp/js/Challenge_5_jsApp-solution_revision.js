import "./styles.css";

const pendingList = document.getElementById("js-pending"),      //# pendingList  /  finishedList 각각 만들어줄려고 함  
    finishedList = document.getElementById("js-finished"),      // @ 2개씩 작성 하긴 했네
    form = document.getElementById("js-form"),
    input = form.querySelector("input");

const PENDING = "PENDING";
const FINISHED = "FINISHED";

let pendingTasks, finishedTasks;        // # 계속 변수를 바꿀 건 let 미리 선언

function getTaskObject(text) {          // # 할 일  -  object 를 만드는대 처음부터 string 으로 받으면서 (현시각 날자로 받음) 
    return {
    id: String(Date.now()),
    text
    };
}

function savePendingTask(task) {        // # 저장 PENDING
    pendingTasks.push(task);            // # pendingTasks 안에 넣기(task)
}

function findInFinished(taskId) {       //# 배열 찾기  FINISHED 
    return finishedTasks.find(function(task) {  //? find() ??
    return task.id === taskId;
    });
}

function findInPending(taskId) {            // # 
    return pendingTasks.find(function(task) {
    return task.id === taskId;
    });
}

function removeFromPending(taskId) {        // # filter 변환한 새로운 배열  / 삭제
    pendingTasks = pendingTasks.filter(function(task) {
    return task.id !== taskId;
    });
}

function removeFromFinished(taskId) {       
    finishedTasks = finishedTasks.filter(function(task) {
    return task.id !== taskId;
    });
}

function addToFinished(task) {      // # finishedTasks에 추가
    finishedTasks.push(task);
}

function addToPending(task) {
    pendingTasks.push(task);
}

function deleteTask(e) {        // # 할 일 삭제
    const li = e.target.parentNode;
    li.parentNode.removeChild(li);
    removeFromFinished(li.id);
    removeFromPending(li.id);
    saveState();
}

function handleFinishClick(e) {
    const li = e.target.parentNode;
    li.parentNode.removeChild(li);
    const task = findInPending(li.id);
    removeFromPending(li.id);
    addToFinished(task);
    paintFinishedTask(task);
    saveState();
}

function handleBackClick(e) {       // #  복원 
    const li = e.target.parentNode;
    li.parentNode.removeChild(li);                  //#  target 인 li 요소 삭제               
    const task = findInFinished(li.id);             //#  target 인 li.id  배열 찾기
    removeFromFinished(li.id);                      //#  target 인 li.id  배열 삭제
    addToPending(task);                             //#  할 일(task) pendingTasks 에 추가
    paintPendingTask(task);                         //#  화면에 출력
    saveState();                                    //#  저장
}

function buildGenericLi(task) {                 //# buildGenericLi 함수인 deleteBtn 은 한번만들어주고  같이 쓰이니 paintPendingTask /paintFinishedTask 각각
    const li = document.createElement("li");                //#  const genericLi = buildGenericLi(task); 변수를 주고 ;;;... //pendingList.append(genericLi); 으로 안에 넣어줌
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");
    span.innerText = task.text;
    deleteBtn.innerText = "❌";
    deleteBtn.addEventListener("click", deleteTask);
    li.append(span, deleteBtn);
    li.id = task.id;
    return li;                                      //! miss) 내가  li 을 find 하는대 해맸다 .. 위에 find() 와 // return 을 잘못씀 
}

function paintPendingTask(task) {               // # 화면에 출력
    const genericLi = buildGenericLi(task);
    const completeBtn = document.createElement("button");
    completeBtn.innerText = "✅";
    completeBtn.addEventListener("click", handleFinishClick);
    genericLi.append(completeBtn);              // ?  genericLi 이  buildGenericLi() 인데  .append() 가 가능 한거면 함수 안에도 넣을 수 있는건가 ?
    pendingList.append(genericLi);              // # pendingList 에도 genericLi 인 buildGenericLi() - 삭제 이벤트기능인  deleteBtn 을 넣는다.
}

function paintFinishedTask(task) {
    const genericLi = buildGenericLi(task);
    const backBtn = document.createElement("button");
    backBtn.innerText = "⏪";
    backBtn.addEventListener("click", handleBackClick);
    genericLi.append(backBtn);
    finishedList.append(genericLi);
}

function saveState() {                      // # pendingTasks / finishedTasks 호출해  저장
    localStorage.setItem(PENDING, JSON.stringify(pendingTasks));
    localStorage.setItem(FINISHED, JSON.stringify(finishedTasks));
}

function loadState() {              // #  string 을 object 로 바꿔준  PENDING  / FINISHED 배열 저장소
    pendingTasks = JSON.parse(localStorage.getItem(PENDING)) || [];
    finishedTasks = JSON.parse(localStorage.getItem(FINISHED)) || [];
}

function restoreState() {           // #  할 일 요소를 각각 forEach 로 반환해 배열 만듬
    pendingTasks.forEach(function(task) {
    paintPendingTask(task);
    });
    finishedTasks.forEach(function(task) {
    paintFinishedTask(task);
    });
}

function handleFormSubmit(e) {      //  # input 이벤트  // 기존 이벤트 막고  // paintPendingTask(출력)  과 savePendingTask(배열저장) 에  만들어준 taskObj 형식을 보내준다.
    e.preventDefault();
    const taskObj = getTaskObject(input.value);
    input.value = "";
    paintPendingTask(taskObj);
    savePendingTask(taskObj);
    saveState();
}

function init() {           // # 실행
    form.addEventListener("submit", handleFormSubmit);
    loadState();
    restoreState();
                            // ?  연관 되어 있지 않은 함수는 .. init() 실행 함수에서 같이 실행!
}
init();