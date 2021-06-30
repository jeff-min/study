// ? greeting.js

/*
상용구를 사용하여 국가 선택을 저장하는 앱을 만듭니다.
# 국가를 선택했을때 localStorage에 Key 와 Value 값을 저장하게 만들라.

조건
국가 선택을 localStorage에 저장하십시오.
새로 고칠 때 저장된 선택을로드합니다.


단서
#옵션에 '값'을 추가하는 것을 잊지 마십시오.
#localStorage와 동일한 값을 가진 옵션을 '선택'해야합니다.
select
https://developer.mozilla.org/ko/docs/Web/API/HTMLElement/change_event
option
https://developer.mozilla.org/ko/docs/Web/HTML/Element/option

.querySelector()    Check out the section: 좀 더 복잡한 선택자
https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector

*/ 

const select = document.querySelector(".js-select")

function handleChange(){
    const selected = select.value;
    localStorage.setItem("contury",selected)
    // # 저장소를 내가 재설정이라; setItem
}

function loadStorage(){
    const  selected = localStorage.getItem("contury");
    if(selected){
    const option = document.querySelector(`option[value='${selected}']`);
                                    // # contury 값을 갖는 option
    option.selected = true;           // # 선택 = ture
    }else{
        alert("error")
    }
}
// # 단순 조건 함수 실행
loadStorage();
select.addEventListener("change",handleChange);
//# 옵션이 번경 될 때에 이벤트가 필요한 경우이니
//  # select 에서 일어나는 일이니... select.addEventListener();