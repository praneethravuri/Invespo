/*
const userName = localStorage.getItem("userName");
const email = localStorage.getItem("email");
document.getElementById("display-username").innerHTML ="Welcome, " +  userName;
*/


let email = "pravuri@gmu.edu";
let data = {
    "pravuri@gmu.edu" : {
        "name" : "Praneeth Ravuri",
        "portfolio_1" : {
            "msft": {
                "companyName": "Microsoft",
                "ticker": "MSFT",
                "quantity": 10,
                "boughtOn": "01/03/2022",
                "originalPrice":329.01,
                "currentPrice": 252.51,
                "type" : "domestic"
            },
            "aapl": {
                "companyName": "Apple",
                "ticker": "AAPL",
                "quantity": 110,
                "boughtOn": "09/30/2022",
                "originalPrice":138.20,
                "currentPrice": 144.49,
                "type" : "domestic"
            },
            "ali": {
                "companyName": "Alibaba Holding Company",
                "ticker": "ALI",
                "quantity": 1000,
                "boughtOn": "01/04/2023",
                "originalPrice":91.98,
                "currentPrice": 110.83,
                "type" : "foreign"
            }
        },
        "portfolio_2" : {
            "nflx": {
                "companyName": "Netflix",
                "ticker": "NFLX",
                "quantity": 20,
                "boughtOn": "12/15/2022",
                "originalPrice": 558.10,
                "currentPrice": 584.50,
                "type": "domestic"
            },
            "googl": {
                "companyName": "Alphabet",
                "ticker": "GOOGL",
                "quantity": 5,
                "boughtOn": "08/20/2022",
                "originalPrice": 2735.73,
                "currentPrice": 2216.00,
                "type": "domestic"
            },
            "baba": {
                "companyName": "Alibaba Group",
                "ticker": "BABA",
                "quantity": 50,
                "boughtOn": "06/02/2022",
                "originalPrice": 219.78,
                "currentPrice": 233.40,
                "type": "foreign"
            }
        }
    },
    "johndoe@gmu.edu" : {
        "name" : "John Doe",
        "portfolio_1" : {
            "amzn": {
                "companyName": "Amazon",
                "ticker": "AMZN",
                "quantity": 5,
                "boughtOn": "11/01/2022",
                "originalPrice": 3155.91,
                "currentPrice": 3052.03,
                "type": "domestic"
            },
            "nvda": {
                "companyName": "Nvidia",
                "ticker": "NVDA",
                "quantity": 15,
                "boughtOn": "07/17/2022",
                "originalPrice": 208.79,
                "currentPrice": 195.22,
                "type": "domestic"
            },
            "tcehy": {
                "companyName": "Tencent Holdings",
                "ticker": "TCEHY",
                "quantity": 200,
                "boughtOn": "06/05/2022",
                "originalPrice": 70.41,
                "currentPrice": 75.66,
                "type": "foreign"
            }
        },
        "portfolio_2" : {
            "tsla": {
                "companyName": "Tesla",
                "ticker": "TSLA",
                "quantity": 10,
                "boughtOn": "09/15/2022",
                "originalPrice": 748.74,
                "currentPrice": 670.00,
                "type": "domestic"
            },
            "nflx": {
                "companyName": "Netflix",
                "ticker": "NFLX",
                "quantity": 20,
                "boughtOn": "12/22/2022",
                "originalPrice": 573.24,
                "currentPrice": 584.50,
                "type": "domestic"
            },
            "baba": {
                "companyName": "Alibaba Group",
                "ticker": "BABA",
                "quantity": 40,
                "boughtOn": "08/07/2022",
                "originalPrice": 221.11,
                "currentPrice": 233.40,
                "type": "foreign"
            }
        }
    },
    "xyz@gmail.com" : {
        "name" : "XYZ",
        "portfolio_1" : {
            "amzn": {
                "companyName": "Amazon",
                "ticker": "AMZN",
                "quantity": 20,
                "boughtOn": "07/01/2022",
                "originalPrice": 3605.94,
                "currentPrice": 3381.00,
                "type": "domestic"
            },
            "nke": {
                "companyName": "Nike",
                "ticker": "NKE",
                "quantity": 30,
                "boughtOn": "05/15/2022",
                "originalPrice": 152.50,
                "currentPrice": 165.20,
                "type": "domestic"
            },
            "baba": {
                "companyName": "Alibaba Group",
                "ticker": "BABA",
                "quantity": 50,
                "boughtOn": "06/02/2022",
                "originalPrice": 219.78,
                "currentPrice": 233.40,
                "type": "foreign"
            }
        },
        "portfolio_2" : {
            "nvda": {
                "companyName": "NVIDIA",
                "ticker": "NVDA",
                "quantity": 10,
                "boughtOn": "01/01/2023",
                "originalPrice": 339.79,
                "currentPrice": 329.50,
                "type": "domestic"
            },
            "tsm": {
                "companyName": "Taiwan Semiconductor Manufacturing Company",
                "ticker": "TSM",
                "quantity": 80,
                "boughtOn": "11/20/2022",
                "originalPrice": 111.44,
                "currentPrice": 126.80,
                "type": "foreign"
            },
            "crm": {
                "companyName": "Salesforce",
                "ticker": "CRM",
                "quantity": 25,
                "boughtOn": "09/10/2022",
                "originalPrice": 267.68,
                "currentPrice": 276.60,
                "type": "domestic"
            }
        }
    }
}

let p1 = data[email].portfolio_1;
let p2 = data[email].portfolio_2;

let p1Stocks = Object.keys(p1);
let p2Stocks = Object.keys(p2);

// data => email => portfolio => ticker => company properties

$(document).ready(function(){
    $("#port-1").click(function(){
        for(let i = 0; i< p1Stocks.length; i++){
            let currTicker = p1Stocks[i];
            let currComp = p1[currTicker];
            let currCompType = p1[currTicker]["type"];
            if(currCompType === "domestic"){
                let row = "<tr>"
                row += "<td>" + currComp["companyName"] + "</td>"
                row += "<td>" + currComp["ticker"] + "</td>"
                row += "<td>" + currComp["quantity"] + "</td>"
                row += "<td>" + currComp["boughtOn"] + "</td>"
                row += "<td>" + currComp["originalPrice"] + "</td>"
                row += "<td>" + currComp["currentPrice"] + "</td>"
                row += "<td>" + "pnl" + "</td>"
                row += "<td>" + "trade" + "</td>"
                row += "</tr>";
                $(".domestic-stocks").append(row);
            }
            else if(currCompType === "foreign"){
                let row = "<tr>"
                row += "<td>" + currComp["companyName"] + "</td>"
                row += "<td>" + currComp["ticker"] + "</td>"
                row += "<td>" + currComp["quantity"] + "</td>"
                row += "<td>" + currComp["boughtOn"] + "</td>"
                row += "<td>" + currComp["originalPrice"] + "</td>"
                row += "<td>" + currComp["currentPrice"] + "</td>"
                row += "<td>" + "pnl" + "</td>"
                row += "<td>" + "trade" + "</td>"
                row += "</tr>";
                $(".foreign-stocks").append(row);
            }
        }
    });
});

$(document).ready(function(){
    $("#port-2").click(function(){
        for(let i = 0; i< p2Stocks.length; i++){
            let currTicker = p2Stocks[i];
            let currComp = p2[currTicker];
            let currCompType = p2[currTicker]["type"];
            if(currCompType === "domestic"){
                let row = "<tr>"
                row += "<td>" + currComp["companyName"] + "</td>"
                row += "<td>" + currComp["ticker"] + "</td>"
                row += "<td>" + currComp["quantity"] + "</td>"
                row += "<td>" + currComp["boughtOn"] + "</td>"
                row += "<td>" + currComp["originalPrice"] + "</td>"
                row += "<td>" + currComp["currentPrice"] + "</td>"
                row += "<td>" + "pnl" + "</td>"
                row += "<td>" + "trade" + "</td>"
                row += "</tr>";
                $(".domestic-stocks").append(row);
            }
            else if(currCompType === "foreign"){
                let row = "<tr>"
                row += "<td>" + currComp["companyName"] + "</td>"
                row += "<td>" + currComp["ticker"] + "</td>"
                row += "<td>" + currComp["quantity"] + "</td>"
                row += "<td>" + currComp["boughtOn"] + "</td>"
                row += "<td>" + currComp["originalPrice"] + "</td>"
                row += "<td>" + currComp["currentPrice"] + "</td>"
                row += "<td>" + "pnl" + "</td>"
                row += "<td>" + "trade" + "</td>"
                row += "</tr>";
                $(".foreign-stocks").append(row);
            }
        }
    });
});

