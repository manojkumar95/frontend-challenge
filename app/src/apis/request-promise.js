const sendRequest = async (url, method, body) => {
    const headers = new Headers({})
    headers.append('X-AYLIEN-NewsAPI-Application-ID', 'c061afed')
    headers.append('X-AYLIEN-NewsAPI-Application-Key', 'ccabb896e83b5c623e74812210d165cc')
    headers.append('content-type', 'application/json')

    const options = {
        method: method,
        headers,
        // mode: 'no-cors'
    };
    if (method == 'POST' || method == "PUT") {
        options.body = JSON.stringify(body);
    }

    const result = await fetch(url, options);
    return result.json();
}

module.exports = sendRequest;