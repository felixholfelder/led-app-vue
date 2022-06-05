export function get(url) {
    return fetch(global.LED_REST_URL + url, {
        method: 'GET',
        headers: authHeaders()
    })
        .then((response) => { return response.json() })
}

export function post(url, body) {
    return fetch(global.LED_REST_URL + url, {
        method: 'POST',
        headers: authHeaders(),
        body: JSON.stringify(body),
    })
        .then((response) => { return response.json() })
}

function authHeaders() {
    return {
        Authorization: `Basic ${process.env.LED_REST_BASE}`,
        'Content-type': 'application/json; charset=UTF-8'
    }
}