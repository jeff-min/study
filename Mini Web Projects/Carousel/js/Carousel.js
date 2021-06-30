
// const img = document.querySelector('img')
// n=1
// let slideIndex = n;
// let changeSrc = `images/image-${slideIndex}.png`;
// img.src = changeSrc;

// let numbertext = new Object();
//     numberText = {
//     1: '1 / 4',
//     2: '2 / 4',
//     3: '3 / 4',
//     4: '4 / 4'
// }
// let captionText = new Object();
//     captionText = {
//     1: 'Caption ONE',
//     2: 'Caption TWO',
//     3: 'Caption THREE',
//     4: 'Caption FOUR'
// }
let slide = document.querySelector('.slideImage');
let dot = document.querySelector('.dot');

slide = [];


let slideIndex = 1;
changeImage(slideIndex);
//slide
function plusSlides(n) {
    changeImage(slideIndex += n);
}
// dot
function currentSlide(n) {
    changeImage(slideIndex = n);
}


function changeImage(n){
    
    let slide = document.querySelectorAll('.slideImage');
    let dot = document.querySelectorAll('.dot');
    

    if(n > slide.length){
        slideIndex = 1
    }else if(n < 1){
        slideIndex = 4;
    }
    for(i = 0; i < slide.length; i++){
        slide[i].style.display = "none";
        // slide[i].classList.remove = "current-Image";
        // slide[i].classList.add = "slideImage";
        
    }
    for (i = 0; i < dot.length; i++) {
        
        dot[i].className.replace(" active", "");
    }
    // slide[slideIndex-1].classList.add = "current-Image";
    // slide[slideIndex-1].style.display = "block";

    
    slide[slideIndex-1].style.display = "block";
    dot[slideIndex-1].classList.add = "active";

    // console.log(slide)
    // console.log(slide[slideIndex-1])
    
    /*
?    let slide = document.querySelectorAll('.slideImage');
?    let dot = document.querySelectorAll('.dot');

!   let slide = document.querySelector('.slideImage'); 으로 사용해서 
!    모든 요소를 잡지 않았기 떄문에 자동 배열이 생성이 안됐었음
#   같은 class 는 자동으로 배열 생성되어진다고 알고 있어서 해맸다 ..배운것도 아마 document.getElementsByClassName();
#   으로 잡아서 그랬던거 같다.

@    Document.querySelector()는 제공한 선택자 또는 선택자 뭉치와 일치하는 문서 내 첫 번째 Element를 반환합니다.일치하는 요소가 없으면 null을 반환합니다.
    이러하듯 선택자 뭉치에서 첫 뻔째 Element 만을 반환했기에 배열이 없으니 undefined가 뜰 수 밖에...    
*/

}

// @ 테스트 결과  getElementsByClassName 잡아주니 역시 자동 배열이 생김!!..
// ? 배열 num 을 잡아서 .num 클래스를 갖고 있는 요소애게 클래스를 추가해주는데 에러.. 배열 전체를 하면 안돼나?
// ? 그뒤로 num[0].classList.add = "num2"  index를 잡아서 해줫더니 오류는 안떳지만 console 로 확인해보니 ... class 가 추가 되진 않았음...흠
let num = document.getElementsByClassName('num');
console.log(num);

//! num.classList.add = "num2"    //error  -Cannot set property 'add' of undefined 아마 위와 같은 맥락으로 지정해주지 않아 찾을 수 없다고 뜨는 거 같다.
console.log(num[0]);    // 배열확인
console.log(num[2]);
num[0].classList.add = "num2";  //????????????????????
let num2 = document.getElementsByClassName('num2');
console.log(num);
console.log(num2);

