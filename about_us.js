//Back to the Top Function

var toTop = document.querySelector(".back_to_top");
window.addEventListener("scroll", ()=>{
if (window.pageYOffset > 100) {
    toTop.classList.add("active");
} else {
    toTop.classList.remove("active");
}


})


//create variables





//reset feedback form expressions fields//
function resetExpressions() {
   document.getElementById("feedback_expression_0").style.display="none";
   document.getElementById("feedback_expression_1").style.display="none";
   document.getElementById("feedback_expression_2").style.display="none";

}


function sendEffect() {
 document.querySelector(".send_feedback_effect").innerHTML="Sending...";

}




//Feedback expression smiley script begins//


var activeHappy = document.querySelector(".feedback_expression_0").addEventListener("click", ()=>{
    document.getElementById("feedback_expression_0").style.display="block";
    document.getElementById("feedback_expression_0").style.color="yellow";
    document.getElementById("feedback_expression_0").letterSpacing="2px";
    document.getElementById("feedback_expression_1").style.display="none";
    document.getElementById("feedback_expression_2").style.display="none";

});
var activeNeutral = document.querySelector(".feedback_expression_1").addEventListener("click", ()=>{
    document.getElementById("feedback_expression_1").style.display="block";
    document.getElementById("feedback_expression_0").style.display="none";
    document.getElementById("feedback_expression_2").style.display="none";

});
var activeSad = document.querySelector(".feedback_expression_2").addEventListener("click", ()=>{
    document.getElementById("feedback_expression_2").style.display="block";
    document.getElementById("feedback_expression_2").style.color="red";
    document.getElementById("feedback_expression_2").style.letterSpacing="2px";
    document.getElementById("feedback_expression_0").style.display="none";
    document.getElementById("feedback_expression_1").style.display="none";

});

//Feedback expression smiley script ends//