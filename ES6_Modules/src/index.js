import u, { printName as printUserName, printAge as printUserAge } from "./user";

const user = new u('Bruce Wayne', 23)
console.log(user)
printUserName(user)
printUserAge(user)