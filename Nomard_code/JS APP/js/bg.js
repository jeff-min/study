const body = document.querySelector("body")

const IMG_NUMBER = 4;

// function handleImagLoad(){
//     console.log("finished loading")
// }

// 이미지 보여주는 함수     // 이미지 넘버가 필요한 함수라 변수명에 적어준것
// @  genRandom();인  randomNumber변수가  paintImage(randomNumber) 함수에 호출되면서 imgNumber에 대입되어 쓰임 
function paintImage(imgNumber){
    const image = new Image();
    image.src = `./images/${imgNumber + 1}.jpg`;
                    //#     +1 하는 이유는 genRandom(); 이 0 값을 줄 수 도 있기 때문
    image.classList.add('bgImage');
    body.appendChild(image);
    // image.addEventListener("loadend",handleImagLoad )  API 종사하면 눈속임용
}

// 랜덤 잰 함수
function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER)
    return number;
    // # Math.random() 으로 0~~1 사이의 랜덤의 수를 가져올 수 있음
    // # Math.floor()  소수점 버림
    // # Math.ceil() 소수좀 올림
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
init();