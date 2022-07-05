
const example = 'example very very crazy';

// função síncrona com método de assincrona, é assincrona pq ss
const loadData = async () => {
  const response = await fetch('http://localhost:6924');
  console.log('resp do server 1:', await response.json());
};

loadData();

fetch('http://localhost:6924')
.then((response) => {
  console.log('deu certo', response);
})
.catch((error) => {
  console.log('deu pau', error);
})
.finally(() => {
  console.log('request finalizou');
})