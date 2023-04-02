const userName = localStorage.getItem("userName");
const email = localStorage.getItem("email");
document.getElementById("display-username").innerHTML ="Welcome, " +  userName;

let stocks = {
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


$(document).ready(function(){
    $(".stock-table").hide();
    $(".caption").hide();
});

$(document).ready(function(){
    $(".port-btn").click(function(){
        $(".stock-table").show();
        $(".caption").show();
    })
})

function calculatePNL(ticker){
    let currStock = stocks[ticker];
    let currPNL = currStock["quantity"] * (currStock["currentPrice"] - currStock["originalPrice"]);
    return Math.round(currPNL * 100)/100;
};

let pnl = {
    "msft" : calculatePNL("msft"),
    "aapl" : calculatePNL("aapl"),
    "ali" : calculatePNL("ali")
};

for(let i in pnl){
    document.getElementById("name-" + i).innerHTML = stocks[i]["companyName"];
    document.getElementById("ticker-" + i).innerHTML = stocks[i]["ticker"];
    document.getElementById("quantity-" + i).innerHTML = stocks[i]["quantity"];
    document.getElementById("date-" + i).innerHTML = stocks[i]["boughtOn"];
    document.getElementById("originalPrice-" + i).innerHTML = stocks[i]["originalPrice"];
    document.getElementById("currentPrice-" + i).innerHTML = stocks[i]["currentPrice"];
    document.getElementById("pnl-" + i).innerHTML = pnl[i];
}

function displayInfo(stockName){
    document.getElementById("order-box").style.border = "2px solid whitesmoke";
    document.getElementById("stock-name").innerHTML = stocks[stockName]["companyName"] + " (" + stocks[stockName]["ticker"] + ")";
    document.getElementById("originalPrice").innerHTML = "Original Price: " + stocks[stockName]["originalPrice"];
    document.getElementById("currentPrice").innerHTML = "Current Price: " + stocks[stockName]["currentPrice"];
    document.getElementById("quantity-owned").innerHTML = "Quantity: " + stocks[stockName]["quantity"];
    document.getElementById("close-btn").innerHTML = "Close";
    document.getElementById("form-control").style.display = "block";
}

function closeDiv(){
    document.getElementById("stock-name").innerHTML = "";
    document.getElementById("originalPrice").innerHTML = "";
    document.getElementById("currentPrice").innerHTML = "";
    document.getElementById("quantity-owned").innerHTML = "";
    document.getElementById("close-btn").innerHTML = "";
    document.getElementById("order-box").style.border = "none";
    document.getElementById("form-control").style.display = "none";
}

function submitRequest(){
    let quantity = document.getElementById("quantity-space").value;
    let comp = document.getElementById("stock-name").innerHTML.split("(")[1].split(")")[0].toLowerCase();
    if(document.getElementById("buy-radio").checked){
        stocks[comp]["quantity"] += quantity;
        console.log(stocks[comp]["quantity"]);
    }
}


$(document).ready(function(){
    $(".caption").css("padding", "10px")
})
