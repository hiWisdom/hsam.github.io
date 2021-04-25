
var toTop = document.getElementsByClassName("to_top");
window.addEventListener("scroll", () => {
if (window.pageYOffset => 300px) {toTop.style.display("block");} 
else {toTop.style.display("none");}
})