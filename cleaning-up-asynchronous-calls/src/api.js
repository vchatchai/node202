function cancellable(promise) {
    let cannceled = false;


    const promiseWrapper = new Promise((resolve, reject) => {
        promise.then((val) => {
            return cannceled ? reject({ cannceled: true }) : resolve(val);
        }, (error) => {
            return cannceled ? reject({ cannceled: true }) : reject(error);
        });
    });

    promiseWrapper.cancel = function cancel() {
        cannceled = true;
    };

    return promiseWrapper;
}

export function users(fail) {
    return cancellable(new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fail) {
                reject(fail);
            } else {
                resolve({
                    users: [
                        { id: 0, name: 'First' },
                        { id: 1, name: 'Second' },
                        { id: 2, name: 'Third' },
                    ]
                });
            }
        },4000);
    }))
}