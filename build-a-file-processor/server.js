// Starter file — add your code here
/*
const fs = require("fs");
console.log(fs);

const data = fs.readFile("assets/poem.txt", { encoding: "utf8" }, (err,data)=> { 
    console.log(data);
});
*/
const fsPromises = require("fs/promises");

async function main() {
    const data = await fsPromises.readFile("assets/poem.txt", { encoding: "utf8" });
    console.log(data);
}

main();