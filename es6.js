function getScores(){
    return [70,80,90,100,101];
}

let [xa,ya,...z] = getScores();

console.log(xa);
console.log(ya);
console.log(z);
//console.log(aa);

let ab,ba;
[ab,ba] = [10,20];

console.log(ab);
console.log(ba);

function getItems(){
    return [10,20];
}

let itemss = getItems();

// let thirdIem = itemss[2] != undefined ? itemss[2] : 0; 
// console.log(thirdIem);


let [ , , thirdIem = 10 ] = getItems();

console.log(thirdIem);

function getData(){
    return null
}

console.log(getData() || []);

function getProfile(){
    return [
        'jhon',
        'Doe',
        ['Red','Green','Blue']
    ];
}

let [firstName,lastName,[color1,color2,color3]] = getProfile();

console.log(color1,color2,color3);

let sa = 10;
    sb = 20;

    [sa,sb] = [sb,sa];

    console.log(sa);
    console.log(sb);


    function stat(s,m){
        return [
            s + m,
            (s+ m) / 2,
            s- m
        ]
    }

    let [sum,average,difference] = stat(10,20);

    console.log(sum);
    console.log(average);
    console.log(difference);


    //learn destructing obj in es6


    let persons = {
        firstName:"John",
        lastName:"Doe",
        currentAge: 28,
        middleName:'c'
    };
    //console.log(persons.firstName);

    let {firstName:f, lastName:l, middleName = '', currentAge: age = 18} = persons
    console.log(middleName);
    console.log(age);

let display  = (p) => {
        console.log(`${p.firstName} ${p.lastName}`);
    }

    display(persons);


    //learn classes && function concept in javascipt

    // function Person(name){
    //     this.name = name;
    // }

    // Person.prototype.getName = function(){
    //     return this.name;
    // }

    // let john = new Person("John Doe");

//console.log(getName instanceof Person);

    //console.log(john.getName());



    class Person{
        constructor(name){
            this.name = name;
        }

        get name(){
            return this._name;
        }

        set name(newName){
            newName = newName.trim();

            if(newName === ''){
                throw 'the name cannot empty';
            }
            this._name = newName;
        }
    }

Person.name = "jane smith";

    let john = new Person("Anil kumar");

    console.log(john.name);


    // function Animal(legs){
    //     this.legs = legs;
    // }


    // Animal.prototype.Walk = function(){
    //     console.log('walking on ' + this.legs + 'legs');
    // }

    // function Bird(legs){
    //     Animal.call(this,legs);
    // }

    // Bird.prototype.fly = function(){
    //     console.log('flying');
    // }

    // var pigeon = new Bird(2);

    // pigeon.Walk();
    // pigeon.fly();


    class Animal {
        constructor(legs){
            this.legs = legs;
        }

        walk(){
            console.log("walking on " + this.legs + " legs" );
        }
    }



    class Bird extends Animal{
        constructor(legs){
            super(legs);
        }

        fly(){
            super.walk();
            console.log('flying');
        }
    }


    let bird = new Bird(2);
    //bird.walk();
    bird.fly();


    class Queue extends Array{
        enqueue(e){
            super.push(e);
        }

        dequeue(){
            return super.shift();
        }

        peek(){
            return !this.empty() ? this[0] : undefined;
        }

        empty(){
            return this.length === 0;
        }
    }

    var customer = new Queue();

    customer.enqueue('A');
    customer.enqueue('B');
    customer.enqueue('c');

    while(!customer.empty()){
        console.log(customer.dequeue());
    }



    function Person1(name){
        this.name = name;
    }

    let p = new Person1("harri");
    Person1('lily');
    console.log(p.name);
    console.log(window);


    // function Person2(name){
    //     if(!new.target){
    //         throw "must use new operator with person";
    //     }
    //     this.name = name;
    // }


    class Person2{
        constructor(name){
            this.name = name;
            console.log(new.target.name);
        }
    }

    class Employee extends Person2 {
        constructor(name,title){
            super(name);
            this.title = title;
        }
    }

    let p2 = new Person2("John Doe");
    let Emp = new Employee("Lily Bush",'programmer');

    console.log(p2.name);
    console.log(Emp.name,Emp.title);





//     function getUser(){
// let users = [];

//      setTimeout(()=>{
//         users=[
//             {username:'john',email:'john@gmail.com'},
//             {username:'jane',email:'jane@gmail.com'},
//        ];
//      },1000);
//      return users;
//     }

//     function findUser(username){
//         let users = getUser();
//         let user = users.find((user) => user.username === username);
//         return user;
//     }

//     console.log(findUser('jane'));


    // const promise  = new Promise((resolve,reject)=>{

    //     if(success){
    //         resolve(value);
    //     }
    //     else{
    //         reject(error);
    //     }

    // });


// let success = true;

// function getUsers(){
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             if(success){
//                 resolve([
//                     {username:'akhil',email:'akhil@gmail.com'},
//                     {username:'perdeep',email:'perdeep@gmail.com'}
//                 ]);
//             }else{
//                 reject('failed to user list');
//             }

//         },5000);
//     });
// }


// function onFullfilled(users){
//     console.log(users);
// }

// function onRejected(error){
//     console.log(error);
// }


// const promise1 = getUsers();

// promise1.then(onFullfilled,onRejected);


// let p3 = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(10);
//         },3*100);
// });


// p3.then((result)=>{
//     console.log(result);

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve( result * 2);
//         },3 * 1000);
//     });

// }).then((result)=>{
//     console.log(result);

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve( result * 3);
//         },3 * 1000);
//     });

// }).then((result)=>{
//     console.log(result);

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve( result * 4);
//         },3 * 1000);
//     });

// });


// p3.then((rsult)=>{
//     console.log(rsult);

//     return rsult * 2;
// })
// p3.then((rsult)=>{
//     console.log(rsult);

//     return rsult * 3;
// })
// p3.then((rsult)=>{
//     console.log(rsult);

//     return rsult * 4;
// })


function getU(userId){
    return new Promise((resolve,reject)=>{
        console.log('get the user form the database.');

        setTimeout(()=>{
            resolve({
                userId : userId,
                username : 'admin'
            });
        },1000);
    });
}

function getService(user){
    return new Promise((resolve,reject)=>{
        console.log(`get the service of ${user.username} from the api`);
        setTimeout(()=>{
            resolve(['email','vpn','cdn']);
        }, 3 * 1000);
    });
}

function getServiceCost(sevices){
    return new Promise((resolve,reject)=>{
        console.log(`Calculate the service cost of ${sevices}.`);
   
        setTimeout(()=>{
            resolve(sevices.length * 100);
        }, 2 * 1000);

    });
}


getU(100)
.then(getService)
.then(getServiceCost)
.then(console.log);


let box = {
    height:10,
    width:20
}

let style = {
    color: "red",
    borderColor:"solid"
}

let styleBox = Object.assign({},box,style);
console.log(styleBox);



let use = {
    firstName : 'Raju',
    lastName : 'Doe'
}

const handler = {
    get(target, prop){
        return prop === 'fullName' ? `${target.firstName} ${target.lastName}` : target[prop];
    }
}


const proxyUser = new Proxy(use,handler);

console.log(proxyUser.fullName);



let as = 10;
    bs = 20;

    [as,bs] = [bs,as];

    console.log(as,bs);