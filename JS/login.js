let emailPassword = new Object();

emailPassword = {
    "pravuri@gmu.edu" : "Praneeth1!",
    "johndoe@gmu.edu" : "Johndoe1!",
    "xyz@gmail.com" : "xyz1!"
};

function checkCredentials(){
    const emailField = document.getElementById('email').value;
    const passwordField = document.getElementById('pass').value;

    if(emailPassword[emailField] === passwordField){
        let userName = emailField.split("@")[0];
        document.getElementById('message-box').innerHTML = "Successfully logged in";
        document.getElementById('message-box').style.color = 'green';
        window.location.href = "stock-page.html"
    }
    else{
        document.getElementById('message-box').innerHTML = "Login Failed. Please try again";
        document.getElementById('message-box').style.color = 'red';
    }
};