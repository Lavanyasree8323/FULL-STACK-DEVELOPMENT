const qr=require("qrcode");

let data={
    "name":"Novitech R&D Pvt Ltd",
    "email":"novitech@gmail.com",
    "id":123
};
let stJson=JSON.stringify(data)
qr.toString(stJson,{type:"terminal"},function(err,code)
{
    if(err)return console.log("error")
    console.log(code);
})