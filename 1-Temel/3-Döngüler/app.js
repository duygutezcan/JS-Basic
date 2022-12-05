//  const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// let text = "";
// for (let i = 0; i < cars.length; i++) {
//     text += "<li>" + cars[i] + "</li>";
//     console.log(cars[i])
//     console.log(text)

// }
// document.getElementById("cars").innerHTML = text
// //document.getElementById("cars").innerHTML = text // index div içine yazdı

// function toggle(){
//     var div = document.getElementById("cars")
//     if (div.style.display === "none") {
//         div.style.display = "block";
//       } else {
//         div.style.display = "none";
//       }
// } 

// const person = {fname:"John", lname:"Doe", age:25};
// let txt = "";
// for(let x in person)
// {
//     txt += person[x] + " "
//     console.log(x)
//     console.log(txt)
// }

// const cars = ["BMW", "Volvo", "Mini"];
// let txt = "";
// for(let x of cars)
// {
//     txt += x;
//     console.log(x)
// }

// let txt = "";
// let i = 0;
// while(i<10)
// {
//     txt += "<br> The number is " + i;
//     console.log(i)
//     i++;
// }

let txt = "";
let i =0;
do{
    txt += "<br> The number is " + i;
    console.log(i);
    i++;
}
while(i<10);