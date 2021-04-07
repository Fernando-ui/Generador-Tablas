const fs = require('fs');
const colors = require('colors');

const multiplicaciones = async( base, listar, limite) => {

    try{
        let ans = '';
    
        for(let i = 0; i < limite +1; i++){
    
            ans += `${base} X ${i} = ${base * i}\n`;
            
        }
        
        fs.writeFileSync(`./salida/tabla-${base}-hasta-${limite}.txt`,ans)

        if(listar){
            console.log('===================='.random);
            console.log(`Tabla de ${base}`.random);
            console.log('===================='.random);

            console.log(ans.random);
        }
        
        return `tabla-${base}.txt`;
        

    }catch(err){

        throw err;
    }
};

module.exports = {
    multiplicaciones
}