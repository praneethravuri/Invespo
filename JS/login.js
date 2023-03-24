let emailPassword = new Object();

emailPassword = {
    "pravuri@gmu.edu" : {
        "password" : "Praneeth1!",
        "userName" : "Praneeth Ravuri"
    },
    "johndoe@gmu.edu" : {
        "password" : "Johndoe1!",
        "userName" : "John Doe"
    },
    "xyz@gmail.com" : {
        "password" : "xyz1!",
        "userName" : "XYZ"
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