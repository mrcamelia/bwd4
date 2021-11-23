var i;
var right = document.getElementsByClassName("qna");

for (i=0;i<right.length;i++){
right[i].addEventListener('click', function(){
    this.classList.toggle('active');
    });
}
