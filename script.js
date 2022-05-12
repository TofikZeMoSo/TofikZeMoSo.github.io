function openWeb(evt, openWeb) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(openWeb).style.display = "block";
    evt.currentTarget.className += " active";
  }

  var elements = document.getElementsByClassName("Column");

    var i;

    function one() {
        for(i =0; i < elements.length; i++) {
            elements[i].style.msFlex = "50%";
            elements[i].style.flex = "50%";
        }
    }
    

    function two() {
        for(i =0; i < elements.length; i++) {
            elements[i].style.msFlex = "50%";
            elements[i].style.flex = "50%";
        }
    }
    
    function three() {
        for(i =0; i < elements.length; i++) {
            elements[i].style.msFlex = "25%";
            elements[i].style.flex = "25%";
        }
    }
    

var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}