const DATE = new Date();
let today = new Date();
let date = new Date();
// console.log(today);
// today 요일 날짜 월 연도 표기

let now = Date.now();   // 원시값???인듯
// console.log(now);

let day = today.getDay()+1;       //요일(0–6)
// console.log(day);
let dat = today.getDate();     //일(1–31)
console.log(dat);
let month = today.getMonth()+1;   //월(0–11)
// console.log(month);
let year  = today.getFullYear();   
// console.log(year);
let todayStr = today.toDateString();    //문자형 날짜표기 - 요일,월 일 ,년도
console.log(todayStr);

 //new를 쓰는 이유 : new를 쓰면 이번달의 로컬 월을 정확하게 받아온다.     
 //new를 쓰지 않았을때 이번달을 받아오려면 +1을 해줘야한다. 
let firstDay = new Date(today.getFullYear(), today.getMonth(),1);   //현재월 1일 라벨링


let latsDay = new Date(today.getFullYear(),today.getMonth()+1,0)// 현재 월의 마지막 날짜
        //! 30,31 각각 조정 힘드니 +1 이 다음달 / 1시작 이니 / 0 이면 넘어가지 않음.


//요일 찾기
function first(){ 
    // let week = new Array('SUN','MON','TUE','WED','THU','FRI','SAT')
    let week = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    let getday = new Date('2021-6-1').getDay();
    let check = week[getday];
    return check;
    
}


function prevMonth(){
    let set = new Date('June 1, 2021')
    today = new Date(today.getFullYear(), today.getMonth()-1, set.getDate());
    // console.log(prev);
    inputCalendar();
    todayStr = today.toDateString(); 
    splitString(todayStr, "space");
    

    // let splits = todayStr.split(' ', 4);
    if(todayStr == 'Tue Jun 01 2021'){
        let reset = new Date(`${month} ${dat} ${year}`)
        todayStr = reset.toDateString(); // todayStr 재변수 줌
        console.log(todayStr);
        splitString(todayStr, "space"); 
        
    }
}
function nextMonth(){
    let set = new Date('June 1, 2021')
    today = new Date(today.getFullYear(), today.getMonth()+1, set.getDate());
    // console.log(next);
    inputCalendar()
    todayStr = today.toDateString(); 
    console.log(todayStr)
    splitString(todayStr, "space");
    

    // let splits = todayStr.split(' ', 4);
    if(todayStr == 'Tue Jun 01 2021'){
        let reset = new Date(`${month} ${dat} ${year}`)
        todayStr = reset.toDateString(); 
        console.log(todayStr);
        splitString(todayStr, "space");
        
    }
}


function inputCalendar(){
    let tbCalendar = document.querySelector('.calendar');
    // var row = document.querySelector('tr');
    // var cell = document.querySelector('td');

    // maintr.innerHTML ="dddwdw";
    // cell.innerText ="dd";
    // ? cell 생성을 안하니 안됫었던거임


    let firstDay = new Date(today.getFullYear(), today.getMonth(),1);
    let latsDay = new Date(today.getFullYear(),today.getMonth()+1,0);

    // 총괄 tbCalendar인 테이블의 갯수가 2개 넘을경우  -1  출력이되어진게 사라지겟지.
    while(tbCalendar.rows.length > 2){
        tbCalendar.deleteRow(tbCalendar.rows.length-1);
    } 


    let row = null;
    row = tbCalendar.insertRow();
    let count = 0;

    // row에 요일만큼 셀 추가 
    for(i=0; i<firstDay.getDay(); i++){
        
        cell = row.insertCell();//셀 insert
        count = count + 1;//열의 갯수를 계속 다음으로 위치하게 해주는 역할
    }
    // i출력 / 
    for(i=1; i<=latsDay.getDate(); i++){
        cell = row.insertCell();
        cell.innerHTML = i;
        count = count + 1;
        
    // 7기준 row 추가 셀추가
        if (count%7 == 0){ //1주일이 7일
            //7로 나눴을때 나머지가 0이면 count가 7번째에 위치함을 의미
            row = tbCalendar.insertRow();
             //토요일 다음에 올 열을 추가
        }

        // current 구분
        if (today.getFullYear() == date.getFullYear()
        && today.getMonth() == date.getMonth()
        && i == date.getDate()) {
            //i 오늘 날자 일 수
        cell.style.color = "red";
        }
        
        
    }

    // let ROW = tbCalendar.rows;
    // console.log(ROW)
    // let TD = document.querySelector('.calendar td')
    // console.log(TD);
    // let test = ROW.match();
    // console.log(test);


}
inputCalendar();

function splitString(stringToSplit, separator){
    // todayStr.split('space');
    // todayStr.split('');
    // var arrayOfStrings = stringToSplit.split(separator);
    
    let desDay = document.querySelector('.current-day p'); 
    let desDate = document.querySelector('.current-date p'); 
    let desMonth = document.querySelector('.current-month p'); 
    let splits = todayStr.split(' ', 4);

    // splitString(todayStr, space);
    desDay.innerHTML = splits[0];
    desDate.innerHTML = splits[2];
    desMonth.innerHTML = splits[1] +"&#x2000;"+ splits[3];
    // desMonth.innerHTML = splits[3];

    // if(click()){ // nextMonth()실행된다면? 을 조건을 두고싶은데 어찌 짜야하지  이건 - click() = ture 여서 실행인거 같은데
    //     today = new Date(today.getFullYear(), today.getMonth()+1, today.getDate());
    //     splitString(today, "space");
    // }else if(click()){   //prevMonth()
    //     today = new Date(today.getFullYear(), today.getMonth()-1, today.getDate());
    //     splitString(today, "space");
    // }else if(click()){ //click()

    // }   
    console.log(desDay);
}
splitString(todayStr, "space");


// 클릭 event
function click(){
    document.querySelector('.prev').addEventListener('click',nextMonth);
    document.querySelector('.next').addEventListener('click',prevMonth);
    // let desDay = document.querySelector('.current-day p'); 
    //     console.log(desDay);
}
//! html 에서 onclick 금지 html 과 javascript 는 항상 분리 원칙으로
document.querySelector('.prev').addEventListener('click',nextMonth);
document.querySelector('.next').addEventListener('click',prevMonth);


//  특정 날짜 출력
function designate(){
    let tbCalendar = document.querySelector('.calendar');
    let Tbody = document.querySelector('tbody');
    let test = document.querySelectorAll('td');
    console.log(tbCalendar);
    console.log(Tbody);
    console.dir(test);
    // // !childNodes 는 볼 수 있던대  그럼 배열을 갖게 한다면? 그런대 애초에 지정한 데이터를 갖게해야하잖아..임의로 정해주는게 아니라 흐음..
    //? 어떻게 클릭한 정보를 추출하지  - 눌렀다는걸 어떻게 저장 ? 인식 ?
    
    let designateset = new Date('June 1, 2021')
    // today = new Date(today.getFullYear(), today.getMonth()+1, set.getDate());
    console.log(designateset);
    // inputCalendar()
    // todayStr = today.toDateString(); 
    // splitString(todayStr, "space");
    

}
document.querySelector('td').addEventListener('click', designate); 
// ???????? querySlecrtor 로 하면 또 td 요소 첫번째만 잡히는대...흠 
// TypeError - document.querySelectorAll(...).addEventListener is not a function
// addEventListener 와 같은 함수를 사용할때는 querySelectorAll 의타입이 적절하지 않은가?

//  td에 주어진 date 값을 뽑아낼려면 선택자의 모든 요소를 가져와야할텐데..?

//      요소가 갖는 데이터를 볼려고 dir 을 생각했는데 .. 객체를 보고 싶을 때 사용이군....
//?     dir 
//!     log랑 함께 쓰면 편함. 객체는 dir, 나머지는 log로 로깅하면 편하다.   // DOM 객체를 로깅해보자.
//!     DOM 객체의 메서드가 뭐가 있는지 보고싶은데 태그만 보일때 dir 사용    //함수도 객체라는 것을 기억