let stocks = {
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
};

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

