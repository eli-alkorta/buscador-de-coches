// crear los años
const years = document.createElement('option');
const  max = new Date().getFullYear();
let  min = max - 10;

for(let i = max; i >  min; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

function getCars() {
  return [
    {
      marca: 'BMW',
      modelo: 'Serie 3',
      year: 2012,
      precio: 30000,
      puertas: 4,
      color: 'Blanco',
      transmision: 'automatico'
    },
    { marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
    {
      marca: 'Ford',
      modelo: 'Mustang',
      year: 2015,
      precio: 20000,
      puertas: 2,
      color: 'Blanco',
      transmision: 'automatico'
    },
    { marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
    {
      marca: 'BMW',
      modelo: 'Serie 5',
      year: 2016,
      precio: 70000,
      puertas: 4,
      color: 'Rojo',
      transmision: 'automatico'
    },
    {
      marca: 'Mercedes Benz',
      modelo: 'Clase C',
      year: 2015,
      precio: 25000,
      puertas: 4,
      color: 'Blanco',
      transmision: 'automatico'
    },
    {
      marca: 'Chevrolet',
      modelo: 'Camaro',
      year: 2018,
      precio: 60000,
      puertas: 2,
      color: 'Rojo',
      transmision: 'manual'
    },
    { marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
    {
      marca: 'Dodge',
      modelo: 'Challenger',
      year: 2017,
      precio: 40000,
      puertas: 4,
      color: 'Blanco',
      transmision: 'automatico'
    },
    { marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
    {
      marca: 'Dodge',
      modelo: 'Challenger',
      year: 2012,
      precio: 25000,
      puertas: 2,
      color: 'Rojo',
      transmision: 'manual'
    },
    {
      marca: 'Mercedes Benz',
      modelo: 'Clase C',
      year: 2018,
      precio: 45000,
      puertas: 4,
      color: 'Azul',
      transmision: 'automatico'
    },
    {
      marca: 'BMW',
      modelo: 'Serie 5',
      year: 2019,
      precio: 90000,
      puertas: 4,
      color: 'Blanco',
      transmision: 'automatico'
    },
    { marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
    {
      marca: 'Dodge',
      modelo: 'Challenger',
      year: 2015,
      precio: 35000,
      puertas: 2,
      color: 'Azul',
      transmision: 'automatico'
    },
    {
      marca: 'BMW',
      modelo: 'Serie 3',
      year: 2018,
      precio: 50000,
      puertas: 4,
      color: 'Blanco',
      transmision: 'automatico'
    },
    {
      marca: 'BMW',
      modelo: 'Serie 5',
      year: 2017,
      precio: 80000,
      puertas: 4,
      color: 'Negro',
      transmision: 'automatico'
    },
    {
      marca: 'Mercedes Benz',
      modelo: 'Clase C',
      year: 2018,
      precio: 40000,
      puertas: 4,
      color: 'Blanco',
      transmision: 'automatico'
    },
    { marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
  ]
};

let searchData = {
  brand: '',
  year: '',
  min: '',
  max: '',
  doors: '',
  transmision: '',
  color: ''
}

const cars = getCars();

window.addEventListener('load', () => {
  showCars(cars);
})

const brand = document.querySelector('#marca');
brand.addEventListener('input', e => {
  searchData.brand = e.target.value;

  filterCars();
})

const year = document.querySelector('#year');
year.addEventListener('input', e => {
  searchData.year = Number(e.target.value);

  filterCars();
})

const minimo = document.querySelector('#minimo');
minimo.addEventListener('input', e => {
  searchData.min = Number(e.target.value);

  filterCars();
})

const maximo = document.querySelector('#maximo');
maximo.addEventListener('input', e => {
  searchData.max = Number(e.target.value);

  filterCars();
})

const doors = document.querySelector('#puertas');
doors.addEventListener('input', e => {
  searchData.doors = Number(e.target.value);

  filterCars();
})

const transmision = document.querySelector('#transmision');
transmision.addEventListener('input', e => {
  searchData.transmision = e.target.value;

  filterCars();
})

const color = document.querySelector('#color');
color.addEventListener('input', e => {
  searchData.color = e.target.value;

  filterCars();
})

function cleanHTML() {

  const result = document.querySelector('#resultado');

  while(result.firstChild) {
    result.removeChild(result.firstChild);
  }
}

function showCars(cars) {
  cleanHTML();

  const result = document.querySelector('#resultado');

  cars.forEach(auto => {
    const paragraph = document.createElement('p');
    paragraph.innerHTML= `<p>${auto.marca} ${auto.modelo} - ${auto.year} - ${auto.puertas} puertas - Transmisión: ${auto.transmision} - Precio: ${auto.precio} - Color: ${auto.color}</p>`;
    result.appendChild(paragraph);
  })
}


function noResults() {
  cleanHTML();

  const noResult = document.createElement('div');
  noResult.classList.add('alerta', 'error');
  noResult.appendChild(document.createTextNode('No hay resultados'));
  document.querySelector('#resultado').appendChild(noResult);
}

function filterCars() {
  const result = getCars().filter(filterBrand).filter(filterYear).filter(filterMin).filter(filterMax).filter(filterDoors).filter(filterTransmision).filter(filterColor);

  if(result.length) {
    showCars(result);
  } else {
    noResults();
  }
}

function filterBrand(car) {
  if(searchData.brand){
    return car.marca === searchData.brand;
  } else {
    return car;
  }
}

function filterYear(car) {
  if(searchData.year){
    return car.year === searchData.year;
  } else {
    return car;
  }
}  

function filterMin(car) {
  if(searchData.min){
    return car.precio >= searchData.min;
  } else {
    return car;
  }
}  

function filterMax(car) {
  if(searchData.max){
    return car.precio <= searchData.max;
  } else {
    return car;
  }
} 

function filterDoors(car) {
  if(searchData.doors){
    return car.puertas === searchData.doors;
  } else {
    return car;
  }
}

function filterTransmision(car) {
  if(searchData.transmision){
    return car.transmision === searchData.transmision;
  } else {
    return car;
  }
}

function filterColor(car) {
  if(searchData.color){
    return car.color === searchData.color;
  } else {
    return car;
  }
}

