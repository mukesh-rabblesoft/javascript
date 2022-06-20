"use strict";

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


points.splice(2,2,60,70);
console.log(points);

let sli = points.slice(2);
console.log(sli);



const veg = ["Banana", "Orange", "Apple", "Mango"];

veg.sort();
veg.reverse();
console.log(veg);


let sortnum = [40, 100, 1, 5, 25, 10];

console.log(sortnum);

sortnum.sort(function(a,b){
    return a-b
});
console.log(sortnum);

sortnum.sort(function(a,b){
    return b -a
});

console.log(sortnum);

const random = [40, 100, 1, 5, 25, 10];


function randomNum(){
    random.sort(function(){
        return 0.5 - Math.random();
    });
    console.log(random);
}


console.log(myArrMax(random));

function myArrMax(){
    return Math.max.apply(null,random)
}


console.log(myArrMin());

function myArrMin(){
    return Math.min.apply(null,random)
}





const obcars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];

    obcars.sort(function(a,b){
        return a.year  - b.year;
    })


  console.log(obcars[0].type + " " + obcars[0].year);
  console.log(obcars[1].type + " " + obcars[1].year);
  console.log(obcars[2].type + " " + obcars[2].year);

  const number = [45, 4, 9, 16, 25];
    

number.forEach(forFunction);

  function forFunction(value,index,array){
            console.log(value);
  }

  const numbers1 = [45, 4, 9, 16, 25];

numbers1.map(doubleFun);

  function doubleFun(value,index,array){
            console.log(value * 2);
  }

  //leaning set method in javascript

  const letters = new Set();
 

  letters.add("anil");
  letters.add("karan"); 
  letters.add("rajan");
  console.log(letters);
  console.log(letters.size);


  letters.forEach(function(value){
            console.log(value);
  });
  
  console.log("---------------");

  for(const x of letters.values()){
        console.log(x);
  }


  //learning new map 

const mapfruits = new Map([
    ["apples",500],
    ["banana",300],
    ["orange",200]
]);

mapfruits.set("grapes",600)
    console.log(mapfruits);
    console.log(mapfruits.size);



    mapfruits.delete("banana");
    console.log(mapfruits);


    function scopfunction(){
        carname = "volvo";
    }

var ds = 5;
var hd = 6;
    console.log(ds + hd);

    useFunction();
function useFunction(){
    y = 3.14;
    console.log(y);
}
    
function showButton(){
    var btn = "<button>hello</button>";
    document.write(btn);
}


function thisFunction(){
    console.log(this);
}

thisFunction();

let arrorFunction = (a,b)=> a*b;

console.log(arrorFunction(4,5));

var hello;

hello =(val)=>{
    return "hello" + val;
}

console.log(hello(" universe world"));



class Car{
    constructor(name,year){
        this.name = name;
        this.year = year;
    }

age(x){
    //let date = new Date();

    return x - this.year;
}

}


const mycar = new Car("Ford",2016);
console.log(mycar.name);
console.log(mycar.year);
console.log(mycar.age(2018));


//click on button and inset data in <li> tag in javascript

let items = [];

function insertValue(){

    let inputVal = document.getElementById("txtfield").value;

        if(inputVal == ''){
            alert("Field is Required");
        }
        else{
            items.push(inputVal);
            document.getElementById("txtfield").value='';
    
            var str = '<ul>'
    
            items.forEach(function(item) {
              str += '<li>'+ item + '</li>';
            }); 
            
            str += '</ul>';
            document.getElementById("list").innerHTML = str;
        }

}

//click on image change image in javascript

function changeImage(){
   let image = document.getElementById("imageChange");
    image.src="tree-736885__480.jpg";
}



let texts = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';


const objjj = JSON.parse(texts);
console.log(objjj.employees[0]);


//learning Array Destructing in javascript

function getScrores(){
    return [70,80,90];
}