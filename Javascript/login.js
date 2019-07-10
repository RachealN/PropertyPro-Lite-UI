function check(form)
        {
            if(form.un.value == "" && form.pw.value == ""){
                alert("Please all enter credentials")
            }
            else{
                 if(form.un.value == "user@gmail.com" && form.pw.value == 12345){
                    window.location.href="property.html";
              
            }
                else if(form.un.value == "agent@gmail.com" && form.pw.value== 12345){
                window.location.href="agent.html";
               
            }
                else{
                    alert("Wrong credentials. For testing: 'User'=> {'email':'user@gmail.com', 'password':'12345'},'Agent'=> {'email':'agent@gmail.com', 'password':'12345'}");
             }
            }
        }