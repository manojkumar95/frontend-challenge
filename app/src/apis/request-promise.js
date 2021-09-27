const sendRequest = (url, method, body) => {
    const options = {
        method: method,
        headers: new Headers({
            'content-type': 'application/json',
            'X-AYLIEN-NewsAPI-Application-ID': 'c061afed',
            'X-AYLIEN-NewsAPI-Application-Key': 'ccabb896e83b5c623e74812210d165cc',
            "Access-Control-Allow-Origin": "*",
            "Accept": "*",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }),
        mode: 'no-cors'
    };
    if (method == 'POST' || method == "PUT") {
        options.body = JSON.stringify(body);
    }

    return fetch(url, options);
}

module.exports = sendRequest;