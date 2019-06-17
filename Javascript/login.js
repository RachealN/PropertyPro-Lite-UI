function login(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
        if(email == "" || password ==""){
            alert("Please all enter credentials")
        }
        else{
             if(email == "admin@admin.com" && password=="admin1234"){
                window.location.href="post.html";
          
        }
            else if(email == "user@user.com" && password=="user1234"){
            window.location.href="property.html";
           
        }
            else{
                alert("Wrong credentials. For testing: 'Admin' => {'email':'admin@admin.com', 'Password':'admin1234'}, 'User'=> {'email':'user@user.com', 'password':'user1234'}");
         }
        }
       
    }