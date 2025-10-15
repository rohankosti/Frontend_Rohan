let bg_change = document.querySelector(".bg_change");
document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    document.getElementById("loader").style.cssText =
      "display: none !important;";
  }, 2000);
});

bg_change.addEventListener("click", (e) => {
  document.body.classList.toggle("dark_theme");
});

document.addEventListener("DOMContentLoaded", () => {
  // counter function
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id);
    // console.log(obj);
    
    let current = start;
    let range = end ;
    let stepTime =10 ;

    let timer = setInterval(() => {
      current++;
      obj.textContent = current;
      if (current == end) {
        clearInterval(timer);
      }
    }, stepTime);
  }
  counter("count1", 0, 768, 2000); 
  counter("count2", 0, 900, 2500); 
  counter("count3", 0, 220, 4000);  
  // counter("count4", 0, 24, 2000);  
});




