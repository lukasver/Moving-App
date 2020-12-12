import { counter } from './utils';

const idGen = counter();

function itemCreate(id,item,description,listed,price) {
return {id,item,description,listed,price}
}

const dormitorio = [{
  id: idGen(),
  item: 'Cama sommier',
  description: 'Queen size -4almohadas',
  price: '$1000',
  listed: true,
}, {
  id: idGen(),
  item: "TV 32",
  description: 'KenBrown',
  price: '$1000',
  listed: true,
}, {
  id: idGen(),
  item: 'Repisa 3 estantes',
  description: 'Color blanco, melamina. 36 x 36 x 104',
  price: '$1000',
  listed: true,
},{
  id: idGen(),
  item: 'Repisa 4 estantes',
  description: 'Cromo y madera oscura. 115 alto x 64 ancho x 29 prof.',
  price: '$1000',
  listed: true,
},{
  id: idGen(),
  item: 'Canastos de Ratan',
  description: '3 canastos blancos de rattan',
  price: '$1000',
  listed: true,
},{
  id: idGen(),
  item: 'Canastos para ropa',
  description: ' 3 canastos para ropa, 1 circular de tela, 1 cricular tipo bambu con tapa, 1 rectangular negro con tapa',
  price: '$1000',
  listed: true,
},{
  id: idGen(),
  item: 'Placar 2 puertas',
  description: 'Color blanco, melamina. 61 ancho x 32 prof x 180 alto',
  price: '$1000',
  listed: true,
},{
  id: idGen(),
  item: 'Aire Acondicionado BGH',
  description: 'Silent Air frio/calor ....',
  price: '$1000',
  listed: true,
},{
  id: idGen(),
  item: ' Caja Fuerte',
  description: 'vacía',
  price: '$1000',
  listed: true,
},{
  id: idGen(),
  item: 'Frazadas varias',
  description: '...',
  price: '$1000',
  listed: true,
},{
  id: idGen(),
  item: 'Masajeador de cuello/cervical',
  description: '...',
  price: '$1000',
  listed: true,
}
]

const bano = [
  itemCreate(idGen(),'Repisa','3 estantes madera con blanco 33x34x80', true, '$1000'),
  itemCreate(idGen(),'Secador de pelo','Rowenta',true, '$1000'),
  itemCreate(idGen(),'Tacho Basura','Cromado chico',true, '$1000'),
]

const living = [
  itemCreate(idGen(),'Espejo redondo', 'Color negro 60cm espejo+marco. Espejo 33cm.',true, '$1000'),
  itemCreate(idGen(),'Mesa matera','Plegable simil madera 48cm x 37cm x 66cm alto',true, '$1000'),
  itemCreate(idGen(),'Plantas interior', 'Lenguas de suegra, Treboles, Bambú, Potus, Palo de agua',true, '$1000'),
]

const cocina = [
  itemCreate(idGen(),'Lavarropas','LG',true, '$1000'),
  itemCreate(idGen(),'Heladera','Kohinoor 65cm ancho 175cm alto 62cm prof',true, '$1000'),
  itemCreate(idGen(),'Microondas','BGH Quick Chef',true, '$1000'),
]

const exterior = [
  itemCreate(idGen(),'Mesa redonda', 'metálica', true, '$1000'),
  itemCreate(idGen(),'Plantas','aromáticas, aloe, suculentas, cactus, monedas', true, '$1000'),
  itemCreate(idGen(),'Tenders', 'metálicos', true, '$1000'),
]

const comedor = [
  itemCreate(idGen(),'Mesa redonda', 'metálica', true, '$1000'),
  itemCreate(idGen(),'Plantas','aromáticas, aloe, suculentas, cactus, monedas', true, '$1000'),
  itemCreate(idGen(),'Tenders', 'metálicos', true, '$1000'),
]

export {
  dormitorio,
  bano,
  living,
  comedor,
  cocina,
  exterior
}