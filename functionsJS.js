//             LEARNING EVENTS IN JS

//adding theme icon to the page using event listeners
let mode = document.querySelector("#theme")
let i=1;

//simple

/*
mode.addEventListener("click",()=>{
    if(i%2!==0){
        document.querySelector("body").classList.add("light"); 
        document.querySelector("body").classList.remove("dark");
        i++;
    }else{
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light"); 
        i++;
    }


});
*/

/*toggle(className) means:
  If the element doesn’t have that class → add it
  If the element already has that class → remove i*/

//optimized
mode.addEventListener("click",()=>{
    document.querySelector("body").classList.toggle("dark")
});




