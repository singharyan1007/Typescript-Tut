"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
//function with object as parameter and no return type
//bad behavior
// createUser({name:"Aryan",isPaid:false,email:'ad@ad.dev'})
var newUser = { name: "Aryan", isPaid: false, email: "s@s.com" };
createUser(newUser);
//This syntax does not return any error
function createCourse() {
    return {};
}
//Example
function createCoursee() {
    return { name: 'ReactJS', isPaid: false };
}
//function using type alias
function createUserStruct(user) {
    return { name: "", email: "", isActive: true };
}
//? -> in typescript it means this field is optional 
var username = {
    _id: 12345,
    name: "Aryan",
    email: "a@a.dev",
    isActive: false,
};
console.log(username);
username.email = "s@a.com";
