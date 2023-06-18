"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function signUpUSer(name, email, isPaid) {
    console.log(name, email, isPaid);
}
;
//But if you want to pass only two values to the function, then we can set one as default
//using the arrow function
var loginUSer = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
};
signUpUSer('John', 'a@a.dev', true);
loginUSer('John', 'something');
//Return type of a function
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    ;
    return false;
}
var getHello = function (s) {
    return "Hello";
};
var heros = ["Superman", "Batman", "Spiderman"];
heros.map((function (hero) {
    return "hero is ".concat(hero);
}));
//same thing could be written typesafely as
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errormsg) {
    throw new Error(errormsg);
}
