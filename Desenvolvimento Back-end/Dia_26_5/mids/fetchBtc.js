const fetchBtc = async (req, res, next) => {
    const endPoint = "https://api.coindesk.com/v1/bpi/currentprice/BTC.json";

    const response = await fetch(endPoint);
    console.log(response);
}

fetchBtc()