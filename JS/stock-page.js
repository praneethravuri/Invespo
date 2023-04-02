/*
const userName = localStorage.getItem("userName");
const email = localStorage.getItem("email");
document.getElementById("display-username").innerHTML ="Welcome, " +  userName;
*/

$(document).ready(function(){
    $(".table-name").hide();
    $(".domestic-stocks").hide();
    $(".foreign-stocks").hide();
    $(".order-box").hide();
})


let email = "pravuri@gmu.edu";
let data = {
    "pravuri@gmu.edu" : {
        "name" : "Praneeth Ravuri",
        "portfolio_1" : {
            "msft": {
                "quantity": 10,
                "boughtOn": "01/03/2022",
            },
            "aapl": {
                "quantity": 110,
                "boughtOn": "09/30/2022",
            },
            "ali": {
                "quantity": 1000,
                "boughtOn": "01/04/2023",
            }
        },
        "portfolio_2" : {
            "nflx": {
                "quantity": 20,
                "boughtOn": "12/15/2022",
            },
            "googl": {
                "quantity": 5,
                "boughtOn": "08/20/2022",
            },
            "baba": {
                "quantity": 50,
                "boughtOn": "06/02/2022",
            }
        }
    },
    "johndoe@gmu.edu" : {
        "name" : "John Doe",
        "portfolio_1" : {
            "amzn": {
                "quantity": 5,
                "boughtOn": "11/01/2022",
            },
            "nvda": {
                "quantity": 15,
                "boughtOn": "07/17/2022",
            },
            "tcehy": {
                "quantity": 200,
                "boughtOn": "06/05/2022",
            }
        },
        "portfolio_2" : {
            "tsla": {
                "quantity": 10,
                "boughtOn": "09/15/2022",
            },
            "nflx": {
                "quantity": 20,
                "boughtOn": "12/22/2022",
            },
            "baba": {
                "quantity": 40,
                "boughtOn": "08/07/2022",
            }
        }
    },
    "xyz@gmail.com" : {
        "name" : "XYZ",
        "portfolio_1" : {
            "amzn": {
                "quantity": 20,
                "boughtOn": "07/01/2022",
            },
            "nke": {
                "quantity": 30,
                "boughtOn": "05/15/2022",
            },
            "baba": {
                "quantity": 50,
                "boughtOn": "06/02/2022",
            }
        },
        "portfolio_2" : {
            "nvda": {
                "quantity": 10,
                "boughtOn": "01/01/2023",
            },
            "tsm": {
                "quantity": 80,
                "boughtOn": "11/20/2022",
            },
            "crm": {
                "quantity": 25,
                "boughtOn": "09/10/2022",
            }
        }
    }
}



let companies = {
    "msft": {
        "companyName": "Microsoft",
        "originalPrice":329.01,
        "currentPrice": 252.51,
        "type" : "domestic"
    },
    "aapl": {
        "companyName": "Apple",
        "originalPrice":138.20,
        "currentPrice": 144.49,
        "type" : "domestic"
    },
    "ali": {
        "companyName": "Alibaba Holding Company",
        "originalPrice":91.98,
        "currentPrice": 110.83,
        "type" : "foreign"
    },
    "nflx": {
        "companyName": "Netflix",
        "originalPrice": 558.10,
        "currentPrice": 584.50,
        "type": "domestic"
    },
    "googl": {
        "companyName": "Alphabet",
        "originalPrice": 2735.73,
        "currentPrice": 2216.00,
        "type": "domestic"
    },
    "baba": {
        "companyName": "Alibaba Group",
        "originalPrice": 219.78,
        "currentPrice": 233.40,
        "type": "foreign"
    },
    "amzn": {
        "companyName": "Amazon",
        "originalPrice": 3155.91,
        "currentPrice": 3052.03,
        "type": "domestic"
    },
    "nvda": {
        "companyName": "Nvidia",
        "originalPrice": 208.79,
        "currentPrice": 195.22,
        "type": "domestic"
    },
    "tcehy": {
        "companyName": "Tencent Holdings",
        "originalPrice": 70.41,
        "currentPrice": 75.66,
        "type": "foreign"
    },
    "tsla": {
        "companyName": "Tesla",
        "originalPrice": 748.74,
        "currentPrice": 670.00,
        "type": "domestic"
    },
    "nflx": {
        "companyName": "Netflix",
        "originalPrice": 573.24,
        "currentPrice": 584.50,
        "type": "domestic"
    },
    "baba": {
        "companyName": "Alibaba Group",
        "originalPrice": 221.11,
        "currentPrice": 233.40,
        "type": "foreign"
    },
    "amzn": {
        "companyName": "Amazon",
        "originalPrice": 3605.94,
        "currentPrice": 3381.00,
        "type": "domestic"
    },
    "nke": {
        "companyName": "Nike",
        "originalPrice": 152.50,
        "currentPrice": 165.20,
        "type": "domestic"
    },
    "baba": {
        "companyName": "Alibaba Group",
        "originalPrice": 219.78,
        "currentPrice": 233.40,
        "type": "foreign"
    },
    "nvda": {
        "companyName": "NVIDIA",
        "originalPrice": 339.79,
        "currentPrice": 329.50,
        "type": "domestic"
    },
    "tsm": {
        "companyName": "Taiwan Semiconductor Manufacturing Company",
        "originalPrice": 111.44,
        "currentPrice": 126.80,
        "type": "foreign"
    },
    "crm": {
        "companyName": "Salesforce",
        "originalPrice": 267.68,
        "currentPrice": 276.60,
        "type": "domestic"
    }
}

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

function displayOrderBox(currTicker, currCompName, currCompCP, currCompOP){
    console.log(currCompName);
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
                let row = "<tr>"
                row += "<td>" + currCompName + "</td>"
                row += "<td>" + currTicker + "</td>"
                row += "<td>" + currCompQuantity + "</td>"
                row += "<td>" + currCompDate + "</td>"
                row += "<td>" + currCompOP + "</td>"
                row += "<td>" + currCompCP + "</td>"
                row += "<td>" + calculatePNL(currCompQuantity, currCompCP, currCompOP)  + "</td>"
                $(".domestic-stocks").append(row);
            }
            else if(currCompType === "foreign"){
                let row = "<tr>"
                row += "<td>" + currCompName + "</td>"
                row += "<td>" + currTicker + "</td>"
                row += "<td>" + currCompQuantity + "</td>"
                row += "<td>" + currCompDate + "</td>"
                row += "<td>" + currCompOP + "</td>"
                row += "<td>" + currCompCP + "</td>"
                row += "<td>" + calculatePNL(currCompQuantity, currCompCP, currCompOP)  + "</td>"
                $(".foreign-stocks").append(row);
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
                let row = "<tr>"
                row += "<td>" + currCompName + "</td>"
                row += "<td>" + currTicker + "</td>"
                row += "<td>" + currCompQuantity + "</td>"
                row += "<td>" + currCompDate + "</td>"
                row += "<td>" + currCompOP + "</td>"
                row += "<td>" + currCompCP + "</td>"
                row += "<td>" + calculatePNL(currCompQuantity, currCompCP, currCompOP)  + "</td>"
                $(".domestic-stocks").append(row);
            }
            else if(currCompType === "foreign"){
                let row = "<tr>"
                row += "<td>" + currCompName + "</td>"
                row += "<td>" + currTicker + "</td>"
                row += "<td>" + currCompQuantity + "</td>"
                row += "<td>" + currCompDate + "</td>"
                row += "<td>" + currCompOP + "</td>"
                row += "<td>" + currCompCP + "</td>"
                row += "<td>" + calculatePNL(currCompQuantity, currCompCP, currCompOP)  + "</td>"
                $(".foreign-stocks").append(row);
            }
        }
    });
});