let date = new Date();
let dayOfWeek = date.getDay();
let time = date.getHours();

const text_day_1 = ["<span>Mo</span>", "<span>Di</span>", "<span>Mi</span>", "<span>Do</span>", "<span>Fr</span>"]
const text_day_2 = ["<span>Di</span>", "<span>Mi</span>", "<span>Do</span>", "<span>Fr</span>", "<span>Mo</span>"]
const text_day_3 = ["<span>Mi</span>", "<span>Do</span>", "<span>Fr</span>", "<span>Mo</span>", "<span>Di</span>"]
const text_day_4 = ["<span>Do</span>", "<span>Fr</span>", "<span>Mo</span>", "<span>Di</span>", "<span>Mi</span>"]
const text_day_5 = ["<span>Fr</span>", "<span>Mo</span>", "<span>Di</span>", "<span>Mi</span>", "<span>Do</span>"]

const day_1 = document.getElementById("day1");
const day_2 = document.getElementById("day2");
const day_3 = document.getElementById("day3");
const day_4 = document.getElementById("day4");
const day_5 = document.getElementById("day5");

_nav(1)

window.onload = function() {
    if (dayOfWeek == 1 && time <= 13) {
        _day(1);
    }
    else if (dayOfWeek == 1 && time >= 13) {
        _day(2);
    }

    if (dayOfWeek == 2 && time <= 13) {
        _day(2);
    }
    else if (dayOfWeek == 2 && time >= 13){
        _day(3);
    }

    if (dayOfWeek == 3 && time <= 13) {
        _day(3);
    }
    else if (dayOfWeek == 3 && time >= 13){
        _day(4);
    }

    if (dayOfWeek == 4 && time <= 13) {
        _day(4);
    }
    else if (dayOfWeek == 4 && time >= 13){
        _day(5);
    }

    if (dayOfWeek == 5 && time <= 13) {
        _day(5);
    }
    else if (dayOfWeek == 5 && time >= 13){
        _day(1);
    }

    if (dayOfWeek == 6 || dayOfWeek == 7){
        _day(1);
    }
}

function _day(day){
    if (day == 1) {
        day_1.innerHTML = text_day_1[0];
        day_2.innerHTML = text_day_1[1];
        day_3.innerHTML = text_day_1[2];
        day_4.innerHTML = text_day_1[3];
        day_5.innerHTML = text_day_1[4];
    }

    if (day == 2) {
        day_1.innerHTML = text_day_2[0];
        day_2.innerHTML = text_day_2[1];
        day_3.innerHTML = text_day_2[2];
        day_4.innerHTML = text_day_2[3];
        day_5.innerHTML = text_day_2[4];
    }

    if (day == 3) {
        day_1.innerHTML = text_day_3[0];
        day_2.innerHTML = text_day_3[1];
        day_3.innerHTML = text_day_3[2];
        day_4.innerHTML = text_day_3[3];
        day_5.innerHTML = text_day_3[4];
    }

    if (day == 4) {
        day_1.innerHTML = text_day_4[0];
        day_2.innerHTML = text_day_4[1];
        day_3.innerHTML = text_day_4[2];
        day_4.innerHTML = text_day_4[3];
        day_5.innerHTML = text_day_4[4];
    }

    if (day == 5) {
        day_1.innerHTML = text_day_5[0];
        day_2.innerHTML = text_day_5[1];
        day_3.innerHTML = text_day_5[2];
        day_4.innerHTML = text_day_5[3];
        day_5.innerHTML = text_day_5[4];
    }
}

function _clear(){
    day_1.style.backgroundColor = "#393939";
    day_1.style.color = "#ffffff";
    day_2.style.backgroundColor = "#393939";
    day_2.style.color = "#ffffff";
    day_3.style.backgroundColor = "#393939";
    day_3.style.color = "#ffffff";
    day_4.style.backgroundColor = "#393939";
    day_4.style.color = "#ffffff";
    day_5.style.backgroundColor = "#393939";
    day_5.style.color = "#ffffff";
}

function _nav(day){
    _clear();
    if (day == 1) {
        day_1.style.backgroundColor = "white";
        day_1.style.color = "black";
    }
    if (day == 2) {
        day_2.style.backgroundColor = "white";
        day_2.style.color = "black";
    }
    if (day == 3) {
        day_3.style.backgroundColor = "white";
        day_3.style.color = "black";
    }
    if (day == 4) {
        day_4.style.backgroundColor = "white";
        day_4.style.color = "black";
    }
    if (day == 5) {
        day_5.style.backgroundColor = "white";
        day_5.style.color = "black";
    }
}