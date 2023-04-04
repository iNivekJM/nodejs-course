const fs = require('fs');

// const first = fs.readFileSync('./data/first.txt','utf-8')
// const second = fs.readFileSync('./data/second.txt','utf-8')

// // console.log(fs);
// console.log(first);
// console.log(second);

// fs.writeFileSync('./data/third.txt','Este es un tercer archivo',{
//     flag: 'a'
// })

fs.readFile('./data/first.txt', 'utf-8',  (error, data) => {
    if(error) {
        console.log(error)
    }
    console.log(data)
    fs.writeFile('./data/new.txt', data, (err, data) => {
        console.log(err)
        console.log(data)
    })
})