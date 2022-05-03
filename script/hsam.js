//Back to the Top Function

var toTop = document.querySelector(".back_to_top");
window.addEventListener("scroll", ()=>{
if (window.pageYOffset > 100) {
    toTop.classList.add("active");
} else {
    toTop.classList.remove("active");
}


});

//header change function
window.addEventListener("scroll", ()=>{
    var navChange = document.querySelector("nav");
    if (window.pageYOffset > 1) {
        navChange.style.marginTop="-1.5cm";
        navChange.style.transitionProperty="all";
        navChange.style.transitionTimingFunction="ease-in-out";
        navChange.style.transitionDuration="2s";
        navChange.style.transitionDelay="2ms";
        
    } else {
        navChange.style.marginTop="0%";
    }
    
    
    });
    


//welcome note change function

var welcomeNoteEvents = document.querySelector("#welcome_note_content_A");
    welcomeNoteEvents.style.color="crimson";
    welcomeNoteEvents.style.textDecoration="underline";

    window.addEventListener("scroll", ()=>{
        if (window.pageYOffset > 15) {
            welcomeNoteEvents.style.marginTop="70vh";
            welcomeNoteEvents.style.transitionProperty="all";
            welcomeNoteEvents.style.transitionDuration="2s";
            welcomeNoteEvents.style.transitionDelay="1s";
            welcomeNoteEvents.style.transitionTimingFunction ="cubic-bezier(.17,.67,.83,.67)";
            welcomeNoteEvents.style.marginLeft="15vh";
            welcomeNoteEvents.style.color="gold";
        } 

        // else if(window.pageYOffset > 20) {
        //     welcomeNoteEvents.style.marginTop="15vh";
        //     welcomeNoteEvents.style.transitionProperty="all";
        //     welcomeNoteEvents.style.transitionDuration="2s";
        //     welcomeNoteEvents.style.transitionDelay="2ms";
        // }
        
        else {
            welcomeNoteEvents.style.marginTop= "";
            welcomeNoteEvents.style.marginLeft= "";            
            welcomeNoteEvents.style.color= "crimson";
        }

    });




//event listener

var aboutUsWord = document.querySelector("#about_us_word");
aboutUsWord.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        aboutUsWord.style.display="block";

        
    } else {
        aboutUsWord.style.display="none";
    }

});   



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



//get current date year only function

var getDateYear = document.getElementById("getDate");

var newDate = new Date();

var newDateYear = newDate.getFullYear();

getDateYear.innerHTML = newDateYear;

getDateYear.style.color = "white";

//get current date year only function