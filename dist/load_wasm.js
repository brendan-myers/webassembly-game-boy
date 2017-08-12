/**
 * https://developer.mozilla.org/en-US/docs/WebAssembly/Loading_and_running
 */
const fetchAndInstantiate = (url, importObject) => {
    return fetch(url).then(response =>
        response.arrayBuffer()
    ).then(bytes =>
        WebAssembly.instantiate(bytes, importObject)
    ).then(results =>
        results.instance
    )
}