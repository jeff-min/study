let gameStart = document.querySelector('.start');
// !서로 다른수도 아니였음
// let firNumber =  Math.floor(Math.random()*10);
// let secNumber =  Math.floor(Math.random()*10);
// let tirNumber =  Math.floor(Math.random()*10);
// let three = `${firNumber}${secNumber}${tirNumber}`
// console.log(three);
alert('숫자를 먼저 적고 Game Start를 누르시오')

//# 계속 바뀌지 않고 일단 지정해놓고 첫번째 게임을 해보려함 // 그래서 전역변수로 지정함
const randomNumber = [];
    randomNumber[0] = Math.floor(Math.random() * 10);
    do {
    randomNumber[1] = Math.floor(Math.random() * 10);
    } while(randomNumber[1] === randomNumber[0])
    do {
    randomNumber[2] = Math.floor(Math.random() * 10);
    } while(randomNumber[2] === randomNumber[0] || randomNumber[2] === randomNumber[1]);
    // let test111 =  parseInt(`${randomNumber[0]}${randomNumber[1]}${randomNumber[2]}`); // 숫자형
    let fixed = `${randomNumber[0]}${randomNumber[1]}${randomNumber[2]}`; // 자료형
    console.log(fixed);


function start(){
    random();
    //?  random() 함수로 만들어서 쓸려고 하면  random지역변수로 사용한건  밖에서 사용할 때 변수를 찾지 못함...어떻게 사용해야하나 
    const randomNumber = [];
    randomNumber[0] = Math.floor(Math.random() * 10);
    do {
    randomNumber[1] = Math.floor(Math.random() * 10);
    } while(randomNumber[1] === randomNumber[0])
    do {
    randomNumber[2] = Math.floor(Math.random() * 10);
    } while(randomNumber[2] === randomNumber[0] || randomNumber[2] === randomNumber[1]);
    // let test111 =  parseInt(`${randomNumber[0]}${randomNumber[1]}${randomNumber[2]}`); // 숫자형
    let test111 = `${randomNumber[0]}${randomNumber[1]}${randomNumber[2]}`; // 자료형
    console.log(test111);
    // console.log(`${randomNumber[0]}${randomNumber[1]}${randomNumber[2]}`);
    // console.log(123)
}
gameStart.addEventListener('click' , start);



function random(){
    // let firNumber =  Math.floor(Math.random()*10);
    // let secNumber =  Math.floor(Math.random()*10);
    // let tirNumber =  Math.floor(Math.random()*10);
    // let three = `${firNumber}${secNumber}${tirNumber}`
    // console.log(three);
    //! 생각해보니 첫뻔째게임도 문제인게 서로다른 숫자여야함
    // randomNumber = [];
    // randomNumber.append()
    //?? 흠 결국 첫번째 게임은 괜찮지만 리게임 할때가 문제  - 새로받은 세자리수를 배열에 넣어주면 될 거 같은데 반복문으로 안돌리고 변수로 지정해버리니 랜덤한 수 한번 생성된 그값만...써버리니...
    // ?? 흠..loop 를 통해 변수또한 계속 바꿔줄 수 없나
    

    // for(i=0;i<1;i++){
    //     let test =Math.floor(Math.random()*10);
            // for(i=0;i<1;i++){
            //     let test2 =Math.floor(Math.random()*10);
                    // for(i=0;i<1;i++){ ...}
            // }
    //     console.log(test)
    // }  지정을 어떻게하지?

    //# 몇번 돌린진 모르지만 꼭한번은 돌리면되니 for 보다 do ...while 문을 사용
    //# 방법  - 지정 배열을 append로 넣을 생각이엿는데 이미 변수로 지정한후에 넣는게 아니라 바로 배열로 넣어줘 index로 활용
    //! 그리고 틀렸던 부분 - 아예 랜덤숫자가 아니라 서로 다른 숫자 즉
    //! 조건 -randomNumber[0] 과 [1]값이 같아지면 다음 do...while 구문을 실행
    //! 즉 - [0][1][2] 값이 같은 숫자가 나올 수 없느것.
    const randomNumber = [];
    randomNumber[0] = Math.floor(Math.random() * 10);
    do {
    randomNumber[1] = Math.floor(Math.random() * 10);
    } while(randomNumber[1] === randomNumber[0])
    do {
    randomNumber[2] = Math.floor(Math.random() * 10);
    } while(randomNumber[2] === randomNumber[0] || randomNumber[2] === randomNumber[1]);
    let test111 =  `${randomNumber[0]}${randomNumber[1]}${randomNumber[2]}`;
}



let input = document.querySelector('.input');
// let int = + input.value;        //# + 를 붙혀  int형 숫자값으로 만들어 줄 수 있지만  일단 자료형으로 해봄
// console.log(typeof int);
// console.log(int);
// console.log(typeof 123);
// console.log(123);
function alarm(){

    if (window.event.keyCode == 13) {   // 엔터키가 눌렸을 때 실행할 내용  -엔터키 keycode  =13
        if(input.value !== Number  /* 숫자가 아닐시 */){
            // window.alert('숫자를 적어주세요')
            
            // if(input.value == String)
            //???  typeof 확인한 input.value 는  string 이 맞는대 왜 안돼지 ? ... 왜 !== 아닐시에는 에러는 안나지 그럼 string은 아니란 소리가 되는건가...?
            //??    Number 로 바꿔주고 해도 둘다 안돼네


            if (input.value.length !== 3) {  // Maximum call stack size exceeded 초과됫다느대..? 뭐가 많다는거지 ?? 
                window.alert('세자리 수가 아닙니다.')
                // value.length == 3 인경우느 아래 코드처럼 print 해주고 있음 .result에....
    
            }else if(input.value.length == 3){
            let text = document.querySelector(".result");
            text.innerText = input.value;
            }
        }

        if(input.value !== fixed){
            
            console.log('랜덤수와 input 값과 다름')
            console.log(input.value);
            console.log(fixed)
        
        }if(input.value == fixed){
            let resultImpo = document.querySelector('.resultImpo')
            resultImpo.innerText = 'GOAL';
        }
        
    
    }
    
}

input.addEventListener('keyup',alarm)
