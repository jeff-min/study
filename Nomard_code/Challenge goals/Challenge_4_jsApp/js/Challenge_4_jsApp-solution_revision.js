// ? greeting.js

const select = document.querySelector(".js-select");

function handleChange() {
    const selected = select.value;
    localStorage.setItem("country", selected);
    }

function loadCountries() {
    const selected = localStorage.getItem("country"); /* key 만 갖는다 */
    if (selected) {
    const option = document.querySelector(`option[value="${selected}"]`);
        option.selected = true;
    }
    // # 선택 되는 경우밖에 없어서 굳이 else 넣지 않은것 같으며, 가능하네.
}

loadCountries();
select.addEventListener("change", handleChange);
