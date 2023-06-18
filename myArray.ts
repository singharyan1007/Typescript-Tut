const superHeroes:string[] = ["Spiderman", "Ironman", "Superman", "Batman"];
const superVillains:string[] = ["Venom", "Thanos", "Joker", "Bane"];
// const mixed:string[] = ["Spiderman", 1, "Superman", 2]; will give an error cuz of mixed types
superHeroes.push("Aryan");

//Another way of declaring an array
const myArray:Array<string> = ["Spiderman", "Ironman", "Superman", "Batman"];

//Now
type User={
    name:string,
    isActive:boolean,
}

const allUsers:User[]=[];

allUsers.push({
    name:"John",
    isActive:true,
});

