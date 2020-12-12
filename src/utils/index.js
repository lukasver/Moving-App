// --- Id Generator ------------------------------------

export function counter() {
  var id = 0;
  return function () {
    id = id + 1;
    return id
  }
}

// --- html code generator ---

let test = [{ id: 1, name: 'Espejo redondo' }, { id: 2, name: 'Planta: Lengua de suegra' }, { id: 3, name: 'Termo Stanley' },]

export function htmlGenerator(arrayDeObjetos) {
  let result;
  if (arrayDeObjetos.length) {
    result = arrayDeObjetos.map(item => (
      `<ul><li>ID: ${item.id}</li><li>Item: ${item.name}</li></ul>`
    ))
  } else {
    return 'Sin items'
  }
  return result
}