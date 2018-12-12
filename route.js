function showp1(){
    document.getElementById('p1').style.display = "";
    document.getElementById('p2').style.display = "none";
    document.getElementById('p3').style.display = "none";

}

function showp2(){
    document.getElementById('p1').style.display = "none";
    document.getElementById('p2').style.display = "";
    document.getElementById('p3').style.display = "none";
	
}

function showp3(){
    document.getElementById('p1').style.display = "none";
    document.getElementById('p2').style.display = "none";
    document.getElementById('p3').style.display = "";
}

showp1()

function activeC(e) {
   var elems = document.getElementsByClassName("active");
   [].forEach.call(elems, function(el) {
     el.classList.remove("active");
   });
   e.target.className = "active";
}