"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function numb(num) {
    if (num[0] == "Aryan") {
        return num[0];
    }
    return 1;
}
var print = numb(["Aryan", 1]);
console.log(print);
function setcoord(cor) {
    var x = cor[0], y = cor[1], z = cor[2];
    console.log(x);
    console.log(y);
    console.log(z);
}
setcoord([1, 2]);
//Using rest operator
function setcoord1() {
    var cor = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        cor[_i] = arguments[_i];
    }
    var x = cor[0], y = cor[1], z = cor[2];
    console.log(x);
    console.log(y);
    console.log(z);
}
setcoord1(1, 2, 3);
