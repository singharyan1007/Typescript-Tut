// A better approach to enums is to use const as a prefix to declaring the enum. This will ensure that the enum is not transpiled to JavaScript and will be used as is.
const enum mySeat{
    AISLE,
    MIDDLE,
    WINDOW,
    FOURTH
}
//By default value is initilised as 0 to first element and then incremented by 1 for each element. But we can also assign values to each element.

const hcSeat=mySeat.AISLE;
console.log(hcSeat); // 0

//Can be assigned values too