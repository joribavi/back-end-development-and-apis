// Starter file — add your code here
/*
const fs = require("fs");
console.log(fs);

const data = fs.readFile("assets/poem.txt", { encoding: "utf8" }, (err,data)=> { 
    console.log(data);
});
*/
/*
const fsPromises = require("fs/promises");

async function main() {
    const data = await fsPromises.readFile("assets/poem.txt", { encoding: "utf8" });
    console.log(data);
}


main();

*/
const fs = require("fs");
/*
function main(){
    const data = fs.writeFileSync("assets/output.txt", "Hello, freeCodeCamp!");   
}

function main(){
     fs.appendFileSync("assets/output.txt", "\nBest Learning Place");
}

main();
*/

function testIfFileExists() {

    const exists = fs.existsSync("assets/output.txt");
    console.log(exists);
    const entries = fs.readdirSync("assets");
    console.log(entries);
}

const buf = Buffer.from("Hello, Node!")
console.log(buf.toString("hex"));
console.log(buf.toString("base64"));

const buf2 = Buffer.alloc(8, 0xff);
console.log(buf2);

const decoded = Buffer.from("ZnJlZUNvZGVDYW1w", "base64").toString("utf8");
console.log(decoded);

testIfFileExists();

const crypto = require("crypto"); 
const hash = crypto.createHash("sha256").update("freeCodeCamp!").digest("hex");
console.log(hash);

const random = crypto.randomBytes(16).toString("hex");
console.log(random);

const id = crypto.randomUUID();
console.log(id); 

const os = require("os"); 
const osPlatform = os.platform();
const osArch = os.arch();
const hostName = os.hostname();

console.log(osPlatform,osArch,hostName);

console.log(os.totalmem());
console.log(os.freemem());
console.log(os.uptime());
console.log("number of cores");
console.log(os.cpus().length);

console.log("File Path Learning Activity");
const path = require("path");
const filePath = path.join(__dirname, "assets", "poem.txt"); 
console.log(filePath);

const fileName = path.basename(filePath);
const dirName  = path.dirname(filePath);
const extName = path.extname(filePath);

console.log("File Name", fileName, "forder Name", dirName, "file Ext", extName);
