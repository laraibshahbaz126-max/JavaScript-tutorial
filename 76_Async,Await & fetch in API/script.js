//  async function getData() {//simulate getting data from server...
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455);
//         }, 5000);
//     });
// }


async function getData(){
 let x = await fetch('https://jsonplaceholder.typicode.com/posts/1')
 let data = await x.json()
  console.log(data)
}
    


con



async function main(){
   console.log("Loading modules...");


   console.log("Do something else while waiting for data...");


   console.log("Load data from server...");

let data =  await getData();

   console.log(data);

   console.log("Process data...");

   console.log("Next task started...");
}
main()






// data.then((v) => {
// console.log(data);

// console.log("Process data...");

// console.log("Next task started...")});