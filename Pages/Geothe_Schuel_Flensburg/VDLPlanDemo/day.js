document.getElementById('content').innerHTML = "";


load(1);


function load(day) {
    fetch('./day'+String(day)+'.txt')
    .then(response => response.text())
    .then(data => {
        document.getElementById('content').innerHTML = data;
        getValue();
    })
    .catch(error => console.error('Fehler:', error));
}