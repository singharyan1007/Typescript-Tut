type StringNum=[string,number];

function numb(num:[string,number]):StringNum|string|number{
    if(num[0]=="Aryan"){
        return num[0]
    }
    return 1;
}

const print=numb(["Aryan",1]);
console.log(print);

type coordinates=[number,number,number?];

function setcoord(cor:coordinates){
    const [x,y,z]=cor;
    console.log(x);
    console.log(y);
    console.log(z);
}
setcoord([1,2]);

//Using rest operator
function setcoord1(...cor:coordinates){
    const [x,y,z]=cor;
    console.log(x);
    console.log(y);
    console.log(z);
}
setcoord1(1,2,3);



export {};