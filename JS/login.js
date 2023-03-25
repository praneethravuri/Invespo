let emailPassword = new Object();

emailPassword = {
    "pravuri@gmu.edu" : {
        "password" : "Praneeth1!",
        "name" : "Praneeth Ravuri",
        "portfolios" : ["pravuri1", "pravuri2"]
    },
    "johndoe@gmu.edu" : {
        "password" : "Johndoe1!",
        "name" : "John Doe",
        "portfolios" : ["johndoe1"]
    },
    "xyz@gmail.com" : {
        "password" : "xyz1!",
        "name" : "XYZ",
        "portfolios" : ["xyz1"]
    }
}

$(document).ready(function(){
    $("#signin-button").click(function(){
        let email = $("#email").val();
        let password = $("#pass").val();

        if(email in emailPassword){
            if(emailPassword[email].password === password){
                $("#message-box").text("Successfully logged in")
                .css("color", "green");
                localStorage.setItem("userName", emailPassword[email].name);
                window.location.href = "stock-page.html";
            }
            else{
                $("#message-box").text("Incorrect password. Please try again.")
                .css("color", "red");
            }
        }
        else{
            $("#message-box").text("This email address does not exist")
            .css("color", "red");
        }
    });
});