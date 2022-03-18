var images = ['plantation/1.jpeg','plantation/2.jpeg','plantation/3.jpeg','plantation/4.jpeg','plantation/5.jpeg',
'plantation/6.jpeg','plantation/7.jpeg','plantation/8.jpeg','plantation/9.jpeg','plantation/10.jpeg'];
var i =0;
function slideshow() {
document.getElementById("image").src=images[i];
if (i<images.length-1){
i++;
}
else{
i=0;
}
setTimeout("slideshow()",2000);
}
window.onload=slideshow;
