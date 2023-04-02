const userName = localStorage.getItem("userName");
const email = localStorage.getItem("email");
document.getElementById("display-username").innerHTML ="Welcome, " +  userName;

async function readJSONFile(url) {
    const data = await $.getJSON(url);
    return data;
}

let companies = await readJSONFile("http://localhost:8080/JS/companies.json");
let data = await readJSONFile("http://localhost:8080/JS/stocks.json")



$(document).ready(function(){
    $(".table-name").hide();
    $(".domestic-stocks").hide();
    $(".foreign-stocks").hide();
});

document.getElementById("order-box").style.display = "none";

// Search box for stocks
$(document).ready(function(){
    $("#stock-lookup-table").hide();
    for(let st in companies){
        let row = "<tr>"
        row += "<td>" + st.toUpperCase() + "</td>"
        row += "<td>" + companies[st]["companyName"] + "</td>"
        row += "<td>" + companies[st]["originalPrice"] + "</td>"
        row += "<td>" + companies[st]["currentPrice"] + "</td>"
        row += "<td>" + companies[st]["type"] + "</td>"
        $("#lookup").append(row);
    }
});

$(document).ready(function(){
    $("#search-input").on("keyup", function(){
        let value = $(this).val().toLowerCase();
        $("#lookup tr").filter(function(){
            $("#stock-lookup-table").show();
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    }).on("keyup", function(){
        if($(this).val() === '') {
            $("#stock-lookup-table").hide();
        }
    });
});



let companiesList = Object.keys(companies);

let p1 = data[email].portfolio_1;
let p2 = data[email].portfolio_2;

let p1Stocks = Object.keys(p1);
let p2Stocks = Object.keys(p2);


// data => email => portfolio => ticker => company properties
// companies => ticker => company name => original price => current price => type

function calculatePNL(currCompQuantity, currCompCP, currCompOP){
    let currPNL = currCompQuantity * (currCompCP - currCompOP);
    return Math.round(currPNL * 100) / 100;
}

function displayOrderBox(currTicker, currCompName, currCompCP, currCompOP, currCompQuantity){
    document.getElementById("order-box").style.display = "block";
    document.getElementById("stock-name").innerHTML = currCompName + " (" + currTicker + ")";
    document.getElementById("quantity").innerHTML = "";
    document.getElementById("currentPrice").innerHTML ="Current Price: " + currCompCP;
    document.getElementById("originalPrice").innerHTML ="Original Price: " + currCompOP;
    document.getElementById("quantity").innerHTML = "Quantity: " + currCompQuantity;
}

$(document).ready(function(){
    $("#port-1").click(function(){
        $(".domestic-stocks").find("tr:gt(0)").remove();
        $(".foreign-stocks").find("tr:gt(0)").remove();
        $(".domestic-stocks").show();
        $(".foreign-stocks").show();
        for(let i = 0; i< p1Stocks.length; i++){
            let currTicker = p1Stocks[i]; // msft
            let currComp = p1[currTicker]; // {msft: {...}}
            let currCompType = companies[currTicker]["type"] // domestic
            let currCompName = companies[currTicker]["companyName"]; // microsoft
            let currCompQuantity = p1[currTicker]["quantity"]; // quantity
            let currCompOP = companies[currTicker]["originalPrice"]; // original price
            let currCompCP = companies[currTicker]["currentPrice"]; // current price
            let currCompDate = p1[currTicker]["boughtOn"]; // date
            if(currCompType === "domestic"){
                let className = "order-btn-" + currTicker;
                let row = "<tr>"
                row += "<td>" + currCompName + "</td>"
                row += "<td>" + currTicker + "</td>"
                row += "<td>" + currCompQuantity + "</td>"
                row += "<td>" + currCompDate + "</td>"
                row += "<td>" + currCompOP + "</td>"
                row += "<td>" + currCompCP + "</td>"
                row += "<td>" + calculatePNL(currCompQuantity, currCompCP, currCompOP)  + "</td>"
                row += "<td><button id = 'order-btn' class=" + className + ">Order</button></td>"
                $(".domestic-stocks").append(row);

                $(".order-btn-" + currTicker).click(function(){
                    displayOrderBox(currTicker, currCompName, currCompCP, currCompOP, currCompQuantity);
                });
            }
            else if(currCompType === "foreign"){
                let className = "order-btn-" + currTicker;
                let row = "<tr>"
                row += "<td>" + currCompName + "</td>"
                row += "<td>" + currTicker + "</td>"
                row += "<td>" + currCompQuantity + "</td>"
                row += "<td>" + currCompDate + "</td>"
                row += "<td>" + currCompOP + "</td>"
                row += "<td>" + currCompCP + "</td>"
                row += "<td>" + calculatePNL(currCompQuantity, currCompCP, currCompOP)  + "</td>"
                row += "<td><button id = 'order-btn' class=" + className + ">Order</button></td>"
                $(".foreign-stocks").append(row);

                $(".order-btn-" + currTicker).click(function(){
                    displayOrderBox(currTicker, currCompName, currCompCP, currCompOP, currCompQuantity);
                });
            }
        }
    });
});

$(document).ready(function(){
    $("#port-2").click(function(){
        $(".domestic-stocks").find("tr:gt(0)").remove();
        $(".foreign-stocks").find("tr:gt(0)").remove();
        $(".domestic-stocks").show();
        $(".foreign-stocks").show();
        for(let i = 0; i< p2Stocks.length; i++){
            let currTicker = p2Stocks[i]; // msft
            let currComp = p2[currTicker]; // {msft: {...}}
            let currCompType = companies[currTicker]["type"] // domestic
            let currCompName = companies[currTicker]["companyName"]; // microsoft
            let currCompQuantity = p2[currTicker]["quantity"]; // quantity
            let currCompOP = companies[currTicker]["originalPrice"]; // original price
            let currCompCP = companies[currTicker]["currentPrice"]; // current price
            let currCompDate = p2[currTicker]["boughtOn"]; // date
            if(currCompType === "domestic"){
                let className = "order-btn-" + currTicker;
                let row = "<tr>"
                row += "<td>" + currCompName + "</td>"
                row += "<td>" + currTicker + "</td>"
                row += "<td>" + currCompQuantity + "</td>"
                row += "<td>" + currCompDate + "</td>"
                row += "<td>" + currCompOP + "</td>"
                row += "<td>" + currCompCP + "</td>"
                row += "<td>" + calculatePNL(currCompQuantity, currCompCP, currCompOP)  + "</td>"
                row += "<td><button id = 'order-btn' class=" + className + ">Order</button></td>"
                $(".domestic-stocks").append(row);

                $(".order-btn-" + currTicker).click(function(){
                    displayOrderBox(currTicker, currCompName, currCompCP, currCompOP, currCompQuantity);
                });
            }
            else if(currCompType === "foreign"){
                let className = "order-btn-" + currTicker;
                let row = "<tr>"
                row += "<td>" + currCompName + "</td>"
                row += "<td>" + currTicker + "</td>"
                row += "<td>" + currCompQuantity + "</td>"
                row += "<td>" + currCompDate + "</td>"
                row += "<td>" + currCompOP + "</td>"
                row += "<td>" + currCompCP + "</td>"
                row += "<td>" + calculatePNL(currCompQuantity, currCompCP, currCompOP)  + "</td>"
                row += "<td><button id = 'order-btn' class=" + className + ">Order</button></td>"
                $(".foreign-stocks").append(row);

                $(".order-btn-" + currTicker).click(function(){
                    displayOrderBox(currTicker, currCompName, currCompCP, currCompOP, currCompQuantity);
                });
            }
        }
    });
});

$(document).ready(function(){
    $("#close-btn").click(function(){
        $("#order-box").hide();
    });
});