$(document).ready(function(){
    $.getJSON("http://localhost:8080/credentials.json", function(data){
        $("#signin-button").click(function(){
            let email = $("#email").val();
            let password = $("#pass").val();

            if(email in data){
                if(data[email].password === password){
                    $("#message-box").text("Successfully logged in")
                    .css("color", "green");
                    localStorage.setItem("email", email);
                    console.log(email);
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
});