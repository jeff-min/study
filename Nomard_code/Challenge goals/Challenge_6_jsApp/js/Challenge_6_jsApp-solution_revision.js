const range = document.getElementById("js-range");
const title = document.querySelector(".js-title");
const guessForm = document.getElementById("js-guess");
const result = document.getElementById("js-result");

function handleRangeChange(e) {
  const selectedRange = title.querySelector("span");
  selectedRange.innerHTML = range.value;
}                                               // # 바뀌는 부분만 span을 잡아서  range.value; 값으로 
                                              //! 내가 h3 를 다잡고 이벤트 되었을때 표현되니 .. 없어지다가 range 건들였을때 발현되는거 같다.
                                              // so ) h3 는 처음부터 보여지는 부분이고 span 만 바뀌는 range-value 으로 해야 이벤트가 일어났을때 span 부분만 나타남

function handleGuessSubmit(e) {
  e.preventDefault();
  const guessInput = guessForm.querySelector("input");
  if (guessInput.value === "") {  // 공백이 아니라  뭔가 정보가 있을 시 return 인듯; 그래야 user 가 적은 input.value 값을 기억해서 쓸 수 있으니.
    return;
  }
  const max = range.value;
  const random = Math.ceil(Math.random() * max);
  const userGuess = parseInt(guessInput.value, 10);   //# parseInt(string, radix);      // radix 10 설정 - 10진수로  string인 guessInput.value 를 10진수로 반환
  const resultSpan = result.querySelector("span");
  resultSpan.innerHTML = `
  You chose: ${userGuess},
  the machine chose: ${random}.<br />
  <strong>${userGuess === random ? "You won!" : "You lost!"}</strong>
  `;                                              //! 내가 조건문if 를 썻는대 저렇게 작은조건문을 쓰면 됫었지! 깔금하게
}

guessForm.addEventListener("submit", handleGuessSubmit);
range.addEventListener("input", handleRangeChange);

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