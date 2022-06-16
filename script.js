function myFunction(){
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}


let x,y;
x = 5+6;
y = x*10;
console.log(y);


const  cars = ["sabb","volvo","bmv"];
cars[0] = "toyta";
cars.push("audi");

document.getElementById("arr").innerHTML = cars;

const car = {name:"kamal",Fname:"baljeet",Mname:"rajani"}

car.house="1388";

car.sons="four";

console.log(car.name+" " + "father name is:" + car.Fname);
let a = 5;
console.log(Math.pow(a,2))

let d = firstFunction(20,5)

function firstFunction(p1,p2){
    return p1 * p2
}

document.write(d+"<br>");

let s = tocelsius(85);
function tocelsius(f){
    return 5/9 * (f-40);
}
document.write(s);


const person = {
    firstName: "Hello",
    lastName: "World",
    age:50,
    eyeColor:"Blue",
    fullName:function(){
        return this.firstName + " " + this.lastName;
    }
}
console.log(person.fullName());
console.log(person.firstName + " is " + person.age + " years old");

function displaydate(){
    document.getElementById("date").innerHTML = Date();
}


let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

console.log(text.length);

let txt = "the character \\ is called backlash";
console.log(txt);

let yy = new String("john");
console.log(yy);

let equal = "kamal";
let objs = new String("kamal");
let obj = new String("kamal");
console.log(objs == obj);


let str = "apple, Banana, kiwi";
let part = str.slice(4,10);

console.log(part+" " + str.length);


let parts = str.slice(-12,-4);
console.log(parts);

let single = str.slice(3);
console.log(single);


let strin = "apple, Banana, kiwi";
    console.log(strin.substring(2));

    let strng = "apple, Banana, kiwi";

    console.log(strng.substr(2,4));

    let tet = "   Please visit Microsoft and Microsoft!   ";
    let rep = tet.replace(/Microsoft/g,"google");
    console.log(rep);

console.log(tet.toUpperCase());
console.log(tet.toLocaleLowerCase());


console.log(strin.concat(" ",tet));

let tri = tet.trim();

console.log(tet.length,tri.length);



let padd = 5;
let kk = padd.toString();
  let start =  kk.padStart(4);
  console.log(start);



  let t = "HEALLO WORLD";
t.split(",");
console.log(t);

let st = "Please locate where 'locate' LOC occurs!";

console.log(st.lastIndexOf("locate"));
console.log(st.match(/loc/gi));

let firstname = "punnet";
let lastname = "sharma";


let he = `Welcome ${firstname} ${lastname}!`;
console.log(he);

let price = 10;
let vat = 0.25;

let total = `Total: ${(price * (1 + vat)).toFixed(2)}`;
console.log(total);


let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let ht = `<h2>${header}</h2><ul>`;

for(const x of tags){
ht += `<li>${x}</li>`;
}

ht+=`<ul>`;

document.write(ht);
console.log(ht);


let ys = new Number(123);
console.log(ys);

let nums = new Date("1970-01-01");

let num = new Date("2017-09-30");

console.log(Number(nums));
console.log(Number(num));


const carlist = ["saab","volvo","bmw"];

carlist[0] = "opel";
let carindex = carlist[0];
console.log(carlist);
console.log(carindex);

const fruits = ["banana","apple","orange","mango"];

//let fru = fruits[fruits.length- 1];
//console.log(fru);

let fr = "<ul>";
for(let i = 0; i<fruits.length; i++){
    fr+="<li>"+ fruits[i] +"</li>";
}
fr +="<ul>";
document.write(fr);
console.log(fr);


const ob = ["Banana", "Orange", "Apple", "Mango"];

let fruobj = "<ul>";
ob.forEach(myFun);
fruobj+="</ul>";
document.write(fruobj);

function myFun(value){
fruobj+="<li>"+value+"</li>";
}


function arrayPush(){
    ob.push("Lemon");
    console.log(ob);
}

const points = new Array(40, 100, 1, 5, 25, 10);

console.log(points.join("*"));
