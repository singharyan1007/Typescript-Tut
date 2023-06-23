"use strict";
// class User{
//     name:string
//     age:number
//     constructor(name:string,age:number){
//         this.name=name
//         this.age=age
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
// const aryan=new User("Aryan",21);
// console.log(aryan)
var User = /** @class */ (function () {
    function User(email, name, age, coursecount) {
        this.city = "Bengaluru";
        this._courseCount = 5;
        this.email = email;
        this.name = name;
        this.age = age;
        this.coursecount = coursecount;
        console.log("Inside constructor");
    }
    Object.defineProperty(User.prototype, "courseCount", {
        //In getter ans setter, type is not required
        get: function () {
            return this._courseCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "couseCount", {
        // set couseCount(count:number):number{
        //     this._courseCount=count
        // } this code shows an error cause no typescript does not allow setter to return anything
        set: function (count) {
            if (count <= 1) {
                throw new Error("Invalid course count, should be more than 1");
            }
            this._courseCount = count;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "coursecountnum", {
        get: function () {
            return this.coursecount;
        },
        set: function (count) {
            if (count <= 4) {
                throw new Error("Invalid course count, should be more than 4");
            }
            this.coursecount = count;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var Aryan = new User("k", "jj", 21, 3);
console.log(Aryan.courseCount);
console.log(Aryan);
