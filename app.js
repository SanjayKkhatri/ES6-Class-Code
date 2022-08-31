// function abc() {
//   console.log("hello");
// }

// let obj = {
//   name: "Ghous",
//   getName: function () {
//     console.log(this.name);
//   },
// };

// abc();

// abc.call();
// abc.apply();

// obj.getName();

// let foo = function (a, b) {
//   return a + b;
// };

// let foo = _ => "hello";

// console.log(foo());

// function abc(a, b) {
//   console.log(arguments);
// }

// let foo = () => {
//   console.log(arguments);
// };

// foo(23, 32);

// abc(10, 32);

// function foo(a, a) {
//   console.log(a);
// }

// foo(12, 13);

// let foo = (a, a) => {
//   console.log(a);
// };

// foo();

// function abc(a, b) {
//   console.log(a, b);
//   console.log(this);
// }

// abc.apply(1, 2);

// let obj = {
//   name: "Ghous",
//   getName: function () {
//     console.log(this);
//   },
// };

// nameFunc();

// fetch()

// console.log("one");
// setTimeout(() => {
//   console.log("two");
// }, 3000);
// console.log("three");

// fetch('https://jsonplaceholder.typicode.com/users')

// let myPromise = new Promise((resolve, reject) => {
//   //   resolve("Wada pura huwa");
//   reject("Wada toot gaya :(");
// });

// myPromise
//   .then((res) => console.log("then===>", res))
//   .catch((err) => console.log("catch===>", err));

// let arr = [];
// let getData = () => {
//   fetch("https://jsonplaceholder.typicode.com/photos")
//     .then((res) => res.json())
//     .then((res) => myData(res))
//     .catch((err) => console.log("catch==>", err));
// };

// getData();

// function myData(data) {
//   console.log(data);
// }

let getData = () => {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.jsdsson())
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

// getData()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// getData()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

let setDataToHtml = async () => {
  try {
    let photos = await getData();

    console.log(photos);
  } catch (err) {
    console.log(err);
  }
};

setDataToHtml();
