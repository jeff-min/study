// ? 사용자의 이름을 기억하게 하는 방법.js

const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");


const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem("USER_LS", text);
}


function handleSubmit(event){
    // # 보통 이벤트가 발생하면 root 에서 일어나고 form 에서 일어난다.
    // # 이벤트는 일종의 거품과도 같아  || 거품처럼 위로 올라가지... 올라가면서 || 다른 모든것들이 event에 반응하지
    // # form 을 제출하는 event가 발생하면 event가 계속 올라가 document까지 || 그 document 다른곳으로 갈거다.(전송되어진다.) || 페이지가 새로고침 되어진다.

    // ! 이게 event의 기본동작(기본값)

    //  @ 우린 event의 기본동작(기본값)을 막을거야
    //  @ event기본 동작을  막는 1단계이다. || event 의 preventDefault
    //  # form 의 event 가 막혀서 전송이안됌 // 새로고침이 안됌 // 텍스트가 안사라짐
    event.preventDefault();
    const currentValue = input.value;   //# 2단계 : input 창에 써진 value 값을  currentValue 변수로 지정
    paintGreeting(currentValue);        //# 3단계 : text 로 반환해 보여주는 함수가 paintGreeting 이니 사용 || 단 / 저장을한게 아니라 기억을 못해서 새로고침 하면 사라짐. || loadName함수를 실행시키게 프로그래밍 되있을뿐. 
    saveName(currentValue);             //# 4단계 :  saveName(currentValue);  같이 실행 함으로써 = localStorage에 작은 정보를 저장함으로서 // 기억할 수 있게 됌.
}

    // user 갖지 않을 때 함수
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit)
}

    // user 갖을 때 함수
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);              /* 텍스트를 색칠 할려면 폼을 숨겨야해 */
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null ){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}
init();

// #    local storage
// $    작은 자바스크립트 정보를 유저 컴퓨터에 저장하는 방법.  || ex) 참거짓 / 설정한 object 키:값
//      요소검사 -> 어플리케이션 - >  로컬스토리지 로 이동 확인



// localStorage.getItem("jeff" , true)
// # 라고 세팅을 하면   로컬스토리지 공간에는  Key : Value 가 생긴다.
// @ 로컬스토리지 공간에서 value 값을 바꿔도 영향이 간다. || ex) Value 값을 asdasd 로 바꾸면
// localStorage.getItem("jeff")
// # =>  asdasd 
// localStorage.getItem("username")
// # =>  null       || null 이란    true/false 같은 것.         
// $    null       : 존재하지 않음 (undefined)