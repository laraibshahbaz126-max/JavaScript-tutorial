console.log("Hello, World!");
console.log("Hello, everyone!");

setTimeout(() => {
    console.log("This message is displayed after 2 seconds.");
}, 2000);

setTimeout(() => {
    console.log("This message is displayed after 4 seconds.");
}, 4000);



console.log("This message is displayed immediately.");

const fn = () => {
    console.log("This is the callback function.");
}
const callback = (message, fn) => { // This function is used to execute a callback function after a certain message is logged.
    console.log(message);
    fn();
}

const loadScript = (src, callback) => { // This function is used to load a script dynamically and execute a callback function once the script is loaded.
    let script = document.createElement("script");
    script.src = src;//
    script.onload = () => callback("Script loaded successfully.",fn); // This line executes the callback function once the script is loaded.
    document.head.append(script);// This line appends the script to the head of the document.
};

 loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback) // This line loads the Prism.js script and executes the callback function once the script is loaded.



    // (message,fn) => {
//     console.log(message);
//    fn("Callback executed.",() => {
//         dg("This is  callback.",() => {
//             jl("This is the final callback.");
//         })
//     }


// );
// });