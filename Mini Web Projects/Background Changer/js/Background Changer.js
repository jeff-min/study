// function random(){
//     let num = Math.floor(Math.random()*16);
//     console.log(num)
//     console.log(typeof(num));
// }
const arr = new Array(); // 배열 선언
function change(){
    let num = Math.floor(Math.random()*16);

    if(num === 10){
        num = 'A';
    }else if(num === 11){
        num = 'B';
    }else if(num === 12){
        num = 'C';
    }else if(num === 13){
        num = 'D';
    }else if(num === 14){
        num = 'E';
    }else if(num === 15){
        num = 'F';
    }
    console.log(num);
    console.log(typeof(num));
    arr.push(num);
    return

}
// change(); 

function repeat(){

    for(i=0;i<=5;i++){
        change();
    }
    console.log(arr);
    
}
// repeat();

function reset(){
      // 배열 리셋
    arr.length = 0;
    console.log(arr)
}
function text(){
    const hexColor = document.querySelector('.hex_color');
    hexColor.innerHTML = `#${arr[0]}${arr[1]}${arr[2]}${arr[3]}${arr[4]}${arr[5]}`;
}

function click(event){
    click = document.querySelector('button');
    click.addEventListener('click',reset);
    click.addEventListener('click',repeat);
    click.addEventListener('click',text);
    click.addEventListener('click',backgroundColor);

}
click();

//  backgound
function backgroundColor (){
    const backgound = document.querySelector('body');
    backgound.style.backgroundColor  = `#${arr[0]}${arr[1]}${arr[2]}${arr[3]}${arr[4]}${arr[5]}`;
    // backgound.style.backgroundColor  = `#B75DBD`;
}

/*
Hex Code란?
0~9까지의 숫자와 A~F까지의 알파벳이 랜덤하게 구성되어 이루는 6자리 코드를 의미합니다. 예를 들면 000000, 3474FF 등 모두 유효한 Hex Code입니다. CSS에서는 Hex Code앞에 #를 붙여 색상값으로 이용할 수 있습니다.
예) #3474FF
*/
