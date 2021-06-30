const clockContainer = document.querySelector(".js-clock") ,
        clockTitle = clockContainer.querySelector("h1"); /* 이렇게도 쓸 수 있지. / js-title 이라고 클래스명을 만들어도 되고 */

        /*
#        Date 객체 초기화
#        JavaScript Date 객체를 생성하는 법은 new 연산자를 사용하는 것이 유일하다.
#        const now = new Date();

        */
function getTime(){
        const date = new Date();            /* 여기서 new Date 는 객체함수 (내장함수)   */
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        // # 객체 안에 텍스트를 넣기 위해  innerText 사용  // =  `사용할 문자열을 만드는 것 `
        clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}`: minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;


        // @ ternary operator(삼항연산자)  || 작은 if 라고도한대... || 의무문으로 물어 보는거지.  if 처럼 동작하고 
    /*
        @           ${seconds < 10 ? `0${seconds}` : seconds
#   여기서 ? 은 의문으로 질문   || (if)참이면 전자 실행 : (else)거짓이면 후자부분 실행
        */ 
}

function init(){ /* 먼저   getTime(); 으로 시간을 얻고  || setInterval 을 설정하자. */
    getTime();
    setInterval(getTime,1000);
    
}
init();

// $ setInterval  ()  : 이 함수는 두 인자값(argument)을 받는데 
// # 첫뻔재 인자 : 실행할 함수를 받고 
// # 두번째 인자 : 함수를 실행할 시간 간격  || millisecond 기준이라 1000 = 1 초

// # 처음 시작할 때 웬만하면 형식을 맞춰주고  init() 함수를 쓰곤 한다

/*

function init(){
    여기 안에다는 사용할 함수 // clock 을 만들었으니 getTime() 을 넣었음//
}
init();


*/ 

