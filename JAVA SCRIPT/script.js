
 let Id =document.getElementById("heading");

 let id=document.getElementById("main");
 console.log(Id);
 console.log(id);
 console.dir(Id);


// Let's Break Down the Code 
// 1.)innerHTML = mtlb ke andar jo bhi likha hoga wo change ho jayega tag ki effect ke sath
// 2.) innerText = mtlb ke andar jo bhi likha hoga wo change ho jayega lekin jo html tag hoga wo change nahi hoga
// 3.) textContent = (same as innertext)
// mtlb ke andar jo bhi likha hoga wo change ho jayega lekin jo html tag hoga wo change nahi hoga

 document.getElementById("heading").innerHTML ="Hello Rohan";
//  document.getElementById("heading").textContent ="<h6>Hello Rohan</h6> ";
 Id.style.color = "red";

 document.getElementById("main").innerText = "<h3>Hello </h3>";
 id.style.backgroundColor="yellow";