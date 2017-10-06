onmessage = function(e) {
    Atomics.store(e.data, 0, 14)
    postMessage('test')
}
