const colors = require('colors')
const argv = require('./config/yargs').argv
const porHacer = require('./por-hacer/por-hacer')
let comando = argv._[0]
switch(comando) {
  case 'crear':
    let nuevaTarea = porHacer.crear(argv.descripcion);
    console.log(nuevaTarea)
    break;
  case 'listar':
    let listado = porHacer.getListado()
    for(tarea of listado) {
      console.log('=======Por Hacer========='.green)
      console.log('Tarea', tarea.descripcion)
      console.log('Estado', tarea.completado)
      console.log('========================='.green)
    }
    break;
  case 'actualizar':
    let actualizar = porHacer.actualizar(argv.descripcion, argv.completado);
    console.log(actualizar)
    break;
  case 'borrar':
    let borrar = porHacer.borrar(argv.descripcion)
    console.log(borrar)
    break;
  default:
    console.log('Comando no reconocido')
}