// ? clock.js

const clockContainer = document.querySelector(".js-clock"),
        clockTitle = clockContainer.querySelector("h1");
//  Date 생성자
//  Date 생성자는 시간의 특정 지점을 나타내는 Date 객체를 생성한다.
//  Date 객체는 1970년 1월 1일 UTC(국제표준시) 00:00으로부터 지난 시간을 밀리초로 나타내는 유닉스 타임스탬프를 사용한다.

// #    Date 객체 초기화
// #    JavaScript Date 객체를 생성하는 법은 new 연산자를 사용하는 것이 유일하다.

function getTime() {
    // # UTC/GMT +0900 (대한민국 표준시)그리니치 천문대가 있는 곳의 시간인 세계협정시(세계표준시)에서 9시간을 더하면 한국시간이 되는 것이다.
    const xmasDay = new Date("2021-12-24:00:00:00+0900");

    // const set_day =  xmasDay.getDate();
    // const set_hours =  xmasDay.getHours();
    // const set_minutes =  xmasDay.getMinutes();
    // const set_seconds =  xmasDay.getSeconds();

// function startTime() {
//     const nowDay = new Date();

//     const day = nowDay.getDate();
//     const hours = nowDay.getHours();
//     const minutes = nowDay.getMinutes();
//     const seconds = nowDay.getSeconds();
//     }
    // ! startTime 와 endTime  함수를 구해놓고 함수끼리 뺄려했음 ;;; xx
    // # 따로 구할 필요 없이 이거 하나로 끝날 수 있다. ||  현 시간
const now = new Date();


// #     getTime() 메서드    ||  getTime() 메서드는 표준시에 따라 지정된 날짜의 시간에 해당하는 숫자 값을 반환한다.
// function D_day(){
//     endTime.gettime() - startTime.gettime();
// }

const D_day = xmasDay.getTime() - now.getTime();

// #    Math.floor() 
// #    함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환합니다.
// #    floor()는 Math의 정적 메서드이므로, 사용자가 생성한 Math 객체의 메서드로 호출할 수 없고 항상 Math.floor()를 사용해야 합니다. (Math는 생성자가 아닙니다)
// #    참고: Math.floor(null)은 NaN 대신 0을 반환합니다. 

// @    gettime() 으로 숫자 값을 반환했지만 / millisecond 기준이라 1000 = 1 초
//  $)   /   : 나눗셈 할당
//  $)   %   : 나머지 연산 할당

const day = Math.floor((D_day /(1000*60*60*24)));
const hour = Math.floor((D_day % (1000*60*60*24))/(1000*60*60));
const minute = Math.floor((D_day % (1000*60*60))/(1000*60));
const second = Math.floor((D_day % (1000*60))/1000);
//  # 1000 = 1초 단위로  초/분/시간/일 단위로 나눔.(전체 d_day 총 숫자 값에)
// !    const day = Math.floor(D_day % (1000*60*60*24)); 만 했더니 ...  이상하다..
// ?    D_day 값이 크리스마스와 현시점에 시간을 숫자화 해서 뺀 나머지 값... 총 ms 단위로 표기되어져있다.

// #    %   : 나머지 연산 할당 
// #    그걸 Math.floor() 으로 가장 큰 수를 반환을 받기 위해 사용
// #    즉 나머지를 정수화 시킴

// ?    1000ms 으로 곱해져 있고 원래 단위인 60초 즉 60*1000 = 60000을 나눠준다.
// so )    /   : 나눗셈 할당 이 아니라     ||        %   : 나머지 연산 할당 으로 나눈 이유
// @    그렇게 되면 값은 의미 없음 || 60000 의 범주를 넘을 수 가 없음 || 싸이클이 계속 돌다 값이 다 나눠지면 0 에 수렴함 

// ?    그 나머지를  우리는 second 단위로 받고 싶기 때문에 . 1000 을 나눠주면 
// @    결국   [나눗셈 할당]으로 1000 나눠주면서 값만 중요하게 됌 ... 그래서 총 60초의 사이클이 만들어짐. 

clockTitle.innerText = 
    `${day}d ${hour < 10 ? `0${hour}`:hour}h ${minute < 10 ? `0${minute}`:minute}m ${second < 10 ? `0${second}`:second}s`;

}

function init() {
getTime();
setInterval(getTime, 1000);
}
init();