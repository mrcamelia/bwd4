var i;
var acrdon = document.getElementsByClassName("accordion").length;
var ans = document.getElementsByClassName("answer");

for (i=0;i<acrdon;i++){
    acrdon[i].addEventListener("click", function(){
    if (ans[i].style.display =="none"){
        document.querySelector.style.display =="block";
    } else {
        document.querySelector.style.display =="block";
    }   
    });
}