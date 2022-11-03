const { readFile, writeFile } = require("fs").promises;

//Util package helps in using the promisify function
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

//TODO: always use try catch block when using async await
const start = async () => {
  try {
    const first = await readFilePromise("./content/first.txt", "utf8");
    const second = await readFilePromise("./content/second.txt", "utf8");
    await writeFilePromise(
      "./content/result-mind-grenade.txt",
      `THIS IS AWESOME : ${first} ${second}`,{flag:'a'}
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }
// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))
