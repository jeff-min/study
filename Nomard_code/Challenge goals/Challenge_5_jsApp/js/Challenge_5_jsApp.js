// ? todo.js

/* 
두 개의 보드로 할 일 목록 만들기 : 보류 중, 완료 됨.

사용자가 보드간에 전환 할 수 있습니다.

사용자가 할 일을 삭제하도록 허용합니다.


localStorage에 모든 것을 저장하고 새로 고침시 모든 것을 복원하십시오.
*/

const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos"
const TODOS_FIN = "finished_toDos"


let toDos = [];
let finish = [];

let toDoFinishList = document.querySelector(".js-finishedList")
// finished 옮기기
function finishedToDo(event){
    let btn = event.target;
    let li = btn.parentNode;
    // toDoList.removeChild(li);
    toDoFinishList.appendChild(li);

    // toDoFinish = toDoList.cloneNode();
    
    let moveToDos = toDos.filter(function(toDo){
        return toDo.id == parseInt(li.id);
    })
    finish = moveToDos;
    
    save_fin();
}

//return 다시 배열 되돌리기
function returnToDo(){

}  

//삭제 //
function deleteToDo(event){
    let btn = event.target;
    let li = btn.parentNode;
    toDoList.removeChild(li);
    // console.dir(event.target)
    // console.log(event.target.parentNode)
    
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    })
    toDos = cleanToDos;
    saveToDos();
}
// finish 삭제
function fin_deleteToDo(event){
    let fin_btn = event.target;
    let fin_li = fin_btn.parentNode;
    toDoFinishList.removeChild(fin_li);
    // console.dir(event.target)
    // console.log(event.target.parentNode)
    
    let moveToDos = finish.filter(function(toDo){
        return toDo.id !== parseInt(fin_li.id);
    })


    finish = moveToDos;
    save_fin();
}


// 저장 //
function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
// finish 저장
function save_fin(){
    localStorage.setItem(TODOS_FIN, JSON.stringify(finish));
}


// 보여주기 || 추가 삭제 
function paintToDo(text){
    const li  = document.createElement("li");
    const delBtn  = document.createElement("button");
    delBtn.innerText = "❌"
    delBtn.addEventListener("click",deleteToDo)
    const checkBtn = document.createElement("button");
    checkBtn.innerText = "✔"
    checkBtn.addEventListener("click",finishedToDo);
    const span  = document.createElement("span");
    span.innerText = text;
    const newId = toDos.length + 1 ;

    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(checkBtn);
    toDoList.appendChild(li);

    li.id = newId;
    const toDoObj = {
        text : text,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDos();
    
}
// finished_painToDo
function fin_paintToDo(text){
    
    const li  = document.createElement("li");
    const fin_delBtn  = document.createElement("button");
    fin_delBtn.innerText = "❌"
    fin_delBtn.addEventListener("click",fin_deleteToDo)
    const checkBtn = document.createElement("button");
    checkBtn.innerText = "↩"
    checkBtn.addEventListener("click",returnToDo);
    const span  = document.createElement("span");
    span.innerText = text;
    const secondId = finish.length  +1;

    li.appendChild(span);
    li.appendChild(fin_delBtn);
    li.appendChild(checkBtn);
    toDoFinishList.appendChild(li);

    li.id = secondId;
    const sec_toDoObj = {
        text : text,
        id : secondId
    };
    finish.push(sec_toDoObj);
    save_fin();
}


// 전송 이벤트 //
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value
    paintToDo(currentValue);
    toDoInput.value = "";
}


// 기억 //
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null ){
        let parsedToDos = JSON.parse(loadedToDos);
        // console.log(parsedToDos);

        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        })
    }
}
function finisiedLoadToDos(){
    const fin_loadedToDos = localStorage.getItem(TODOS_FIN);
    if(fin_loadedToDos !== null ){
        let parsedToDos = JSON.parse(fin_loadedToDos);

        parsedToDos.forEach(function(toDo){
            fin_paintToDo(toDo.text);
        })
    }
}

// 실행 //
function init(){
    loadToDos();
    finisiedLoadToDos();
    toDoForm.addEventListener("submit" ,handleSubmit)
}
init();
