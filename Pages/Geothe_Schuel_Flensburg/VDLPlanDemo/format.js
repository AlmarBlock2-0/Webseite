function getValue() {
  if (document.getElementById('input').value != null) {
      mark(document.getElementById('input').value);
  }
  else{
    _load()
  }
}

function mark(str) { 
  klasse = str.split(/(?<=\d)(?=[a-zA-Z])/);
  stufe = klasse[0];
  buchstabe = klasse[1];
  str2 = `${stufe}(.*?${buchstabe})`

  
  
  var reg = new RegExp(str2);
  var table = document.getElementsByTagName("tbody")[0]; 
  var cells = table.getElementsByTagName("td"); 

  for (var i = 0; i < cells.length; i++) { 
    var cellValue = cells[i].textContent;
    var parent = cells[i].parentNode;
    if (parent.getAttribute("class") === "list odd white") {
      parent.setAttribute("class", "list odd");
    } 
    if (parent.getAttribute("class") === "list even white") {
      parent.setAttribute("class", "list even");
    }
  }  


  for (var i = 0; i < cells.length; i++) { 
    var cellValue = cells[i].textContent;
    var parent = cells[i].parentNode;
    if (reg.test(cellValue)) { 
      if (parent.getAttribute("class") === "date") {
        parent.setAttribute("class", "date");
      }
      else if (parent.getAttribute("class") === "list odd") {
        parent.setAttribute("class", "list odd white");
      }
      else {
        parent.setAttribute("class", "list even white");
      }
    }
  }  
} 

setTimeout(function() {
  var date = document.getElementsByTagName("tr")[1];
  date.setAttribute("class", "date");
}, 2000);
