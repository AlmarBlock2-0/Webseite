document.getElementById('content').innerHTML = "";

fetch('./day1.txt')
.then(response => response.text())
.then(data => {
    document.getElementById('content').innerHTML = data;
})
.catch(error => console.error('Fehler:', error));