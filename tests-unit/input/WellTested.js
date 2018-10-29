// A promise that is well tested. Ran both accept and reject. maybe?

function createPromise(acc) {
    return new Promise(function (res, rej) {
        if (acc) {
            res(12);
        } else {
            rej(25);
        }
    })
}

createPromise(true).then(function (v) {
    return v;
});

createPromise(false).then(function (v) {
    return v;
});