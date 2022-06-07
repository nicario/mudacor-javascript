const botao = document.querySelector('.botao');
const titulo = document.querySelector('.titulo-mutavel');
const background = document.querySelector('.titulo');
const corpo = document.querySelector('.corpo');
const color = ['#f00', '#0f0', '#00f', '#f0f', '#0ff', '#ff0'];

botao.addEventListener('click', function(){
  let ramdom = ramdonNumber();
  console.log(ramdom);

  corpo.style.backgroundColor = color[ramdom];
  background.style.color = color[ramdom];
  titulo.textContent = color[ramdom];
});

function ramdonNumber(){
  return Math.floor(Math.random() * color.length);
}

