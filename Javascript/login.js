function check(form)
        {
            if(form.un.value == "" && form.pw.value == ""){
                alert("Please all enter credentials")
            }
            else{
                 if(form.un.value == "user@gmail.com" && form.pw.value == 12345){
                    window.location.href="property.html";
              
            }
                else if(form.un.value == "user@gmail.com" && form.pw.value== 12345){
                window.location.href="#";
               
            }
                else{
                    alert("Wrong credentials. For testing: 'Admin' => {'email':'admin@gmail.com', 'Password':'12345'}, 'User'=> {'email':'user@gmail.com', 'password':'12345'}");
             }
            }
        }