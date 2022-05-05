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

var navChange = document.querySelector("nav");
window.addEventListener("scroll", ()=> {
    if (window.pageYOffset > 1) {
        navChange.style.marginTop="-1.5cm";
        navChange.style.transitionProperty="all";
        navChange.style.transitionTimingFunction="ease-in-out";
        navChange.style.transitionDuration="2s";
        navChange.style.transitionDelay="2ms";
        
    } 
    else {
        navChange.style.marginTop="0%";
    }
    
    
    });
    


    //header change function @ media query

    function myFunction(x) {
        if (x.matches) { // If media query matches
            window.removeEventListener("scroll", ()=> {

            if (window.pageYOffset > 1) {
            navChange.style.marginTop = "1.5cm";

            }
        
        });
        
        }
         else {
            navChange.style.marginTop = "0%";
        }
      }
      
      
      var x = window.matchMedia("(max-width: 700px)")
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction) // Attach listener function on state changes



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













//get current date year only function

var updatedTime = document.querySelector('#getDate');
var newTime = new Date();
var newShortTime = newTime.getFullYear();
updatedTime.innerHTML = newShortTime;

//get current date year only function