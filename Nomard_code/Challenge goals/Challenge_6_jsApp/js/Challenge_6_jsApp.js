/*
Javascript를 사용하여 숫자 추측 게임을 만드십시오!

0과 사용자가 정의한 숫자 사이의 범위에서 임의의 숫자를 찾습니다.
Use range input.

실시간으로 범위 값을 업데이트합니다.
사용자가 번호를 선택한 후에 만 ​​재생됩니다.

게임이 패배하거나이긴 경우 사용자에게 알립니다.
*/ 
const form = document.querySelector(".chooseBox"),
    rangeBar = document.getElementById("rangeBar"),
    text = document.querySelector("h3"),
    result = document.querySelector(".result"),
    selectNumbers = document.querySelector(".userNumbers");

const submit =  document.querySelector(".submit")

let range = 0;

function updateValue(event) {
    range = event.target.value;
    text.textContent = `Generate a number between 0 and ${range}`;
    // textContent 만 가능
}
// ! updateValue 왜 input을 눌러야 나오는교,,?
rangeBar.addEventListener("input", updateValue);

function gamePlay(){
    const guessNumber = document.querySelector(".guessNumber");
    // const parsing = Math.floor(parseInt(guessNumber));
    const randomNumber = Math.floor(Math.random() * range);
                            //# event.target.value; = range 를 곱해줌으로써 //  rangeBar 의 수만큼 제한됌

    const G_parsedNumber = Math.floor(parseInt(guessNumber.value)); //# 선택한 숫자값은  문자형임 / 숫자로 전환해줌
    const R_parsedNumber = Math.floor(parseInt(randomNumber) );             //# 같은 숫자형 조건문 가능

    selectNumbers.innerText = `you chose ${guessNumber.value} machine chose ${randomNumber}`;
    


    if(G_parsedNumber === R_parsedNumber){
        result.innerText = "YOU Win!"
    }else if(G_parsedNumber !== R_parsedNumber){
        result.innerText = "YOU Lost"
    }else if(G_parsedNumber =""){
        result.innerText  = "choose number"
    }
}

submit.addEventListener("click", gamePlay);


function init(){
    gamePlay();
}
init();
//$     parseint() radix란
//#      https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/parseInt
//#      https://velog.io/@mukeunzi/JavaScript-parseInt%EC%97%90%EC%84%9C-radix%EB%A5%BC-%EC%83%9D%EB%9E%B5%ED%95%B4%EB%8F%84-%EB%90%A0%EA%B9%8C

/*
$ string
분석할 값. 만약 string이 문자열이 아니면 문자열로 변환(ToString 추상 연산을 사용)합니다. 문자열의 선행 공백은 무시합니다.
$ radixOptional
string이 표현하는 정수를 나타내는 2와 36 사이의 진수(수의 진법 체계에 기준이 되는 값). 주의하세요-기본값이 10이 아닙니다!

# 반환 값
주어진 string로부터 분석한 정수.
또는 아래의 경우에는 NaN을 반환합니다

radix가 2보다 작거나 36보다 큰 경우
첫번째 non-whitespace 문자가 숫자로 변환되지 않는 경우

# 예시
console.log(parseInt('0x30')); // 1. return 48
console.log(parseInt('030')); // 2. return (ECMAScript5 이상)30
console.log(parseInt('30')); // 3. return 30

1번은 16진수로, 2번과 3번은 10진수로 변환되었습니다. radix는 string의 prefix에 따라 결정되기 때문인데요.
그 이유는 프로그래밍에서 16진수(prefix '0x')와 8진수(prefix '0')의 표기법과 관련이 있습니다.
JavaScript에서는 radix를 생략할 경우 16진수나 8진수,혹은 10진수로 값을 설정합니다.
string이 0x로 시작할 경우에는 16진수, 0일 때는 8진수나 10진수,
이 외에는 10진수로 변환을 시도합니다.
*/