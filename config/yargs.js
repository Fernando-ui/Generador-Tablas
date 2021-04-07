const arvg = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe:'Añade el numero base para la operacion'
            })
            .option('l', {
                alias: 'listar',
                type: 'boolean',
                demandOption: true,
                default: false,
                describe:'Nos muestra u oculta la tabla correspondiente'
            })
            .option('h', {
                alias: 'puntoFinal',
                type: 'number',
                demandOption: true,
                default: 10,
                describe:'Nos muestra el valor maximo de la tabla'
            })
            .check((argv, options )=>{
                if(isNaN(argv.b)){

                    throw 'La base tiene que ser un numero'
                }else{
                    return true
                }
            })
            .argv;
        
module.exports = {

    arvg
};