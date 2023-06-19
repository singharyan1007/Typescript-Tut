"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function myunion(a) {
    if (a == "Hello") {
        return "Return type is String";
    }
    else {
        return 1;
    }
}
myunion("Hello");
myunion(1);
var aryan = { name: "Aryan", id: 1017, admin: false };
aryan = { username: "as", id: 1017, admin: true };
function user(usr) {
    if ('username' in usr) {
        return { username: usr.username, id: usr.id, admin: usr.admin };
    }
    return { name: "Aryan", id: 1007, admin: false };
}
var usr = user(aryan);
console.log(usr);
var data = [1, 2, 3];
var data2 = ["1", "2"];
var data3 = [1, 2, "aryan"];
var seat;
