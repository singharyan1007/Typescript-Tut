console.log("Aryan");
var use = {
    name: "aryan",
    age: "22",
    email: "singh.aryan837@gmail.com"
};
//write a binary search program
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var low = 0;
var high = arr.length - 1;
var mid = Math.floor((low + high) / 2);
var search = 5;
while (low <= high) {
    if (arr[mid] == search) {
        console.log("element found at index " + mid);
        break;
    }
    else if (arr[mid] < search) {
        low = mid + 1;
    }
    else {
        high = mid - 1;
    }
    mid = Math.floor((low + high) / 2);
}
if (low > high) {
    console.log("element not found");
}
//write a program to find the square root of a number
