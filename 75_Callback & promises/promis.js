console.log('This is promises');        

let prom1 = new Promise((resolve, reject) => { // Promise Resolve is called when the promise is fulfilled and reject is called when the promise is rejected.
let a = Math.random();
if(a > 0.5){ // if the random number is greater than 0.5, the promise is rejected
    reject('Promise rejected');
}
else{
setTimeout(() => { // setTimeout is used to simulate an asynchronous operation
        console.log('This is the first promise');
        resolve(1);
    }, 3000);
}
});

let prom2 = new Promise((resolve, reject) => { 
let a = Math.random();
if(a > 0.5){ 
    reject('Promise rejected');
}
else{
setTimeout(() => { 
        console.log('This is the second promise');
        resolve(2);
    }, 4000);
}
});

//  let p3 = Promise.all([prom1, prom2])// Promise.all is used to wait for all the promises to be resolved or rejected.  
// p3.then((value) => { 
//     console.log(value);
// }).catch((error) => { 
//     console.log(error);
// })

// let p3 = Promise.allSettled([prom1, prom2])// Promise.allSettled is used to wait for all the promises to be settled (either resolved or rejected) and returns an array of objects with the status and value/reason of each promise
// p3.then((value) => { 
//     console.log(value);
// }).catch((error) => { 
//     console.log(error);
// })
// let p3 = Promise.race([prom1, prom2])// Promise.race is used to wait for the first promise to be resolved or rejected.
// p3.then((value) => { 
//     console.log(value);
// }).catch((error) => { 
//     console.log(error);
// })
// 
// let p3 = Promise.any([prom1, prom2])// Promise.any is used to wait for the first promise to be resolved.
// p3.then((value) => { 
//     console.log(value);
// }).catch((error) => { 
//     console.log(error);
// })  
// let p3 = Promise.resolve(5)// Promise.resolve is used to create a promise that is resolved with a given value.
// p3.then((value) => { 
//     console.log(value);
// }).catch((error) => { 
//     console.log(error);
// })

let p3 = Promise.reject([prom1, prom2])// Promise.reject is used to create a promise that is rejected with a given reason.
p3.then((value) => { 
    console.log(value);
}).catch((error) => { 
    console.log(error);
})


// prom1.then((value) => { // then is used to handle the resolved value of the promise
//     console.log(value);
// }).catch((error) => { // catch is used to handle the error
//     console.log(error);
// })