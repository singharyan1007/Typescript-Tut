interface User{
    readonly dbId: number;
    email: string;
    userId:number;
    googleId?: string;
    // startTrial:()=>string;
    startTrial():string;
    getCoupon(couponName:string,value:number):number;
}

const aryan:User = {
    dbId: 1,
    githubUsername: "singharyan1007",
    email: "a@a.com",
    userId: 1,
    getCoupon:(name:"discount",val:10)=>{
        return 10
    },
    startTrial:()=>{
        return "trial started"
    }
}

//reopening an interface
interface User{
    githubUsername:string;
}
interface Admin extends User{
    role:"admin"|"superadmin"|"learner"|"student";
}
const singh:Admin = {dbId: 1,
    githubUsername: "singharyan1007",
    email: "a@a.com",
    userId: 1,
    getCoupon:(name:"discount",val:10)=>{
        return 10
    },
    startTrial:()=>{
        return "trial started"
    },
role:"admin"}
console.log(aryan);
console.log(singh);
export {}