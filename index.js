console.log('quote');
const request = require('request');

request('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',(err,res,body)=>{

    const data = JSON.parse(body);
    console.log(data);
    console.log(data[0].content)

    document.querySelector('.quote').innerHTML = data[0].content;
})

const btnConn = document.querySelector("#btn1");

// btnConn.addEventListener('click',()=>{

    
//     //windoeOne = new BrowserWindow({width:300,height:400});
//     //windoeOne.loadFile('windowOne.html');
//     //windoeOne.loadURL('https://youtube.com');
// }
// const BrowserWindow = require('electron').remote.BrowserWindow;

// const btnConn = document.querySelector("#btn1");

// btnConn.addEventListener('click',()=>{
//     windoeOne = new BrowserWindow({width:300,height:400});
//     windoeOne.loadFile('windowOne.html');
//     windoeOne.loadURL('https://youtube.com');


// })

