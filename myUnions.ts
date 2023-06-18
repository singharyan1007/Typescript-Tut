function myunion(a:number|string):string|number{
    if(a=="Hello"){
        return "Return type is String"
    }else{
        return 1;
    }
}

myunion("Hello");
myunion(1);