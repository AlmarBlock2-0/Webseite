document.getElementById('content').innerHTML = "";

fetch('./day2.txt')
.then(response => response.text())
.then(data => {
    document.getElementById('content').innerHTML = data;
})
.catch(error => console.error('Fehler:', error));