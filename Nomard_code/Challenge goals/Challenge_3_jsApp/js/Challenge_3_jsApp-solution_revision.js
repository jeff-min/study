// ? clock.js

const clockTitle = document.querySelector(".js-clock");

function getTime() {
const xmasDay = new Date(`${new Date().getFullYear()}-12-24:00:00:00+0900`);    //  #  new Date  로 초기화  
const now = new Date(); 

// This is in milisecondsx                              // # getTime() 메서드는 지정된 날짜의 시간을 해당하는 숫자 값으로반환
                                                        // ! getTime() 메서드를 사용 하지 않음... 바로 new Date() 초기화 시키면서 시간의 거리를 빼줬는데 
                                                        // ! getTime() 사용해 / 1000ms 단위로 숫자값을 전환해 빼지 않아도 가능 했던것.
                                                        // This is in miliseconds x 라고 적어주심.. 그럼 계산적으로 그냥 빼줄 수 있는게 맞구나..... 
const difference = new Date(xmasDay - now);
const secondsInMs = Math.floor(difference / 1000);      // # Math.floor() 가장 큰 정수 값을 반환.   || 초/분/시간 단위별로 나눠줌 
const minutesInMs = Math.floor(secondsInMs / 60);       // @ difference 거리를 /1000 나눠 초단위를 구한 secondsInMs 변수 || 그 secondsInMs 변수를 / 60 나눠 분단위를 구한 minutesInMs 변수
const hoursInMs = Math.floor(minutesInMs / 60);         // @ 구한 변수를 계속 활용해 깔끔한 코드를 씀.
const days = Math.floor(hoursInMs / 24);

const seconds = secondsInMs % 60;                       // # 우린 D-day 이니  % [나머지 연산 할당]을 사용해
const minutes = minutesInMs % 60;                       // @ 값은 의미 없음 || 60 값의 범주를 넘을 수 가 없음 || 싸이클이 계속 돌다 값이 다 나눠지면 0 에 수렴함 
const hours = hoursInMs % 24;

const daysStr = `${days < 10 ? `0${days}` : days}d`;        // #  clockTitle.innerHTML 적용전 변수를 줌으로써 정리하여금 깔끔한 코드를 씀.
const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m `;
const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;

clockTitle.innerHTML = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
}

function init() {
getTime();
setInterval(getTime, 1000);
}
init();
                                                        // ! miss )   1000ms 단위로 숫자값을 전환해 빼지 않아도 가능 했던것. 
                                                        // ! miss )   difference 거리를 /1000 나눠 초단위를 구한 secondsInMs 변수 || 그 secondsInMs 변수를 / 60 나눠 분단위를 구한 minutesInMs 변수 활용  // 더럽고 반복적인 작업을 생략시킬 수 있음.
                                                        // @ miss )   D-day 라서  싸이클이 계속 돌다 값이 다 나눠지면 0 에 수렴함  이게 중요한것  나눗셈을 먼저하나  나머지 연산을 먼저하나 상관 없었음
                                                        // @ miss )   단지 맞는 단위의 변수를 잘 파악해 기입해주고 다시 단위를 구하는것만 주의 했었어야 했음

//  $)   /   : 나눗셈 할당
//  $)   %   : 나머지 연산 할당