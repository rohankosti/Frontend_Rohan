 let fname = document.querySelector(".fname");
        let lname = document.querySelector(".lname");
        let address = document.querySelector(".address");
        let gender = document.querySelector(".gender");
        let email = document.querySelector(".email");
        let mobile = document.querySelector(".mobile");
        let course = document.querySelector(".course");

        let reg_form = document.getElementById("reg_form");
        console.log(reg_form);

        reg_form.addEventListener("submit", (e) => {
            e.preventDefault();

            if (fname.value.length <= 0) {
                alert("Firsht Name Is Reqiured");
                fname.focus();
            }

            else if (lname.value.length <= 0) {
                alert("Last Name Is Reqwired");
                lname.focus();
            }

            else if (address.value.length <= 0) {
                alert("Addresh Is Required")
                address.focus();
            }

            else if (gender.value == null) {
                console.log(gender.value);
                alert("Gender Is Require");
                gender.focus();
                console.log(gender.value);
            }

            else if (email.value.length <= 0) {
                alert("Email Is Reqiured");
                email.focus();
            }
            else if (mobile.value.length <= 0 || mobile.value.length > 10) {
                alert("Mobile Number Is Required");
                mobile.focus();
            }
            else if (course.value == "select course")
                // console.log(course.value);

            {
                alert("Select Course From List");
                course.focus();
            }
            else{
                 alert("Form Succesfully Sumbit")
                 window.location.href="lec_12_Login.html";

            }
        });
