let descripcion = {
  alias: 'd',
  demand: true,
  desc: 'Descripción de la tarea por hacer'
}
let completado = {
  default: true,
  alias: 'c',
  desc: 'Marca como completado la tarea'
}
const argv = require('yargs')
  .command('crear', 'Crea una nueva tarea por hacer', {descripcion})
  .command('listar', 'Muestra una lista de las tareas por hacer')
  .command('actualizar', 'Actualiza a completado la tarea', {descripcion, completado})
  .command('borrar', 'Borra una tarea de la lista', {descripcion})
  .help()
  .argv
module.exports = {
  argv
}