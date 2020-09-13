const fs = require('fs');
let listadoPorHacer = [];
const cargarDB = () => {
  try {
    listadoPorHacer = require('../db/data.json');
  } catch (error) {
    listadoPorHacer = [];
  };
};
const getListado = () => {
  cargarDB();
  return listadoPorHacer;
}
const guardarDB = () => {
  let data = JSON.stringify(listadoPorHacer);
  fs.writeFile('db/data.json', data, (err) => {
    if (err) throw new Error('No se pudo grabar', err);
  });
};
const crear = (descripcion) => {
  cargarDB();
  let nuevaTareaPorHacer = {
    descripcion,
    completado: false
  };
  listadoPorHacer.push(nuevaTareaPorHacer);
  guardarDB();
  return nuevaTareaPorHacer;
};
const actualizar = (descripcion, completado = true) => {
  cargarDB();
  let index = listadoPorHacer.findIndex(el => el.descripcion === descripcion);
  if(index >= 0) {
    listadoPorHacer[index].completado = completado;
    guardarDB();
    return true
  } else {
    return false
  }
};
const borrar = (descripcion => {
  cargarDB();
  let index = listadoPorHacer.findIndex(el => el.descripcion === descripcion);
  if(index >= 0) {
    listadoPorHacer.splice(index);
    guardarDB();
    return true
  } else { 
    return false
  }
})
module.exports = {
  crear,
  getListado,
  actualizar,
  borrar
};