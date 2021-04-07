const { multiplicaciones } = require('./helpers/multiplicar');
const {arvg}  = require('./config/yargs');



console.clear();

const {l,h} = arvg;

multiplicaciones(arvg.b,l,h) 
    .then((resp) => {
        console.log(resp);
        console.log('todo ha salido bien');
    })
    .catch((err)=>{
        console.log(err);
    });