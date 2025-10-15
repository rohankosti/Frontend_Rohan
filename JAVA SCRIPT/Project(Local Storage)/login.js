 let form=document.getElementById("loginForm");
//  console.log(form);
 
 let current_email= "rohan@gmail.com";
 let cuurent_password="rohan2004";

    form.addEventListener("submit",(e)=>{
 
     e.preventDefault(); //Page ko Refrece nhi krta bar bar refrece hone she bachata hai 
      let email=document.getElementById("email").value;
      console.log(email);
      
      let password=document.getElementById("password").value;
      console.log(password);

      if (current_email==email && cuurent_password==password) 
      {
             
           localStorage.setItem("isLogin","true");
           localStorage.setItem("useremail","rohan@gmail.com");

           window.location.href="lec_12_Dashboard.html";
          //  form.innerHTML="<a href='lec_12_Dashboard.html'>User Dashboard</a>"
         
      }
      else
      {
           document.getElementById("errors").innerHTML=`<h5>Your Email <h6>${email}</h6><h5> Is Wrong ! Enter A Valid Email..</h5>`;
      }
    });
   

     let btn= document.getElementById("btn");
     let data=document.getElementById("data");
     console.log(data);
     

     btn.addEventListener("click",()=>{

        let email= localStorage.getItem("useremail");
         data.innerHTML=`<h4>Your Email :- </h4><h6>${email}</h6>`;
     })