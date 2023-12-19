document.getElementById('content').innerHTML = "";
document.getElementById('header').innerHTML = "";


load(1);


function load(day) {
    fetch('./day'+String(day)+'.txt')
    .then(response => response.text())
    .then(data => {
        document.getElementById('content').innerHTML = data;
        _cleardate();
        getValue();
        _nav(day)
        load_header(day);
    })
    .catch(error => console.error('Fehler:', error));
}

function load_header(day) {
    fetch('./day'+String(day)+'_header.txt')
    .then(response => response.text())
    .then(data_header => {
        document.getElementById('header').innerHTML = data_header;
        _format_header();
    })
    .catch(error => console.error('Fehler:', error));
}

function _format_header() {
    length_con = document.getElementsByClassName("info_content").length

    if (length_con >= 1) {
        cells_info = document.getElementsByClassName("info_content");
        cells_info[0].setAttribute("class", "info_content list");
    }

    if (length_con >= 2) {
        cells_info = document.getElementsByClassName("info_content");
        cells_info[1].setAttribute("class", "info_content odd");
    }    

    if (length_con >= 3) {
        cells_info = document.getElementsByClassName("info_content");
        cells_info[2].setAttribute("class", "info_content even");
    }    

    if (length_con >= 4) {
        cells_info = document.getElementsByClassName("info_content");
        cells_info[3].setAttribute("class", "info_content odd");
    }

    if (length_con >= 5) {
        cells_info = document.getElementsByClassName("info_content");
        cells_info[4].setAttribute("class", "info_content even");
    }
    if (length_con >= 6) {
        cells_info = document.getElementsByClassName("info_content");
        cells_info[5].setAttribute("class", "info_content odd");
    }    

    if (length_con >= 7) {
        cells_info = document.getElementsByClassName("info_content");
        cells_info[6].setAttribute("class", "info_content even");
    }    

    if (length_con >= 8) {
        cells_info = document.getElementsByClassName("info_content");
        cells_info[7].setAttribute("class", "info_content odd");
    }

    if (length_con >= 9) {
        cells_info = document.getElementsByClassName("info_content");
        cells_info[4].setAttribute("class", "info_content even");
    }
} 

