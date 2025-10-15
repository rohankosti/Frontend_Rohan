let devlopment = document.getElementById("devlopment");
let Marketing = document.getElementById("Marketing");
let support = document.getElementById("support");

let devlopment_section = document.querySelector(".devlopment_section");
let Support_section = document.querySelector(".Support_section");
let marketing_section = document.querySelector(".marketing_section");


devlopment.addEventListener("click", (e) => {
  console.log("devlopment");
  Support_section.style.display = "none";
  marketing_section.style.display = "none";
  devlopment_section.style.display = "block";
  devlopment_section.style.display = "flex";
});
Marketing.addEventListener("click", (e) => {
  console.log("devlopment");
  devlopment_section.style.display = "none";
  Support_section.style.display = "none";
  marketing_section.style.display = "block";
  marketing_section.style.display = "flex";
});
support.addEventListener("click", (e) => {
  console.log("devlopment");
  marketing_section.style.display = "none";
  devlopment_section.style.display = "none";
  Support_section.style.display = "block";
  Support_section.style.display = "flex";
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

