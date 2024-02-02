export default function initFuncionamento(){
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number)
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number)

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();
  let horarioAberto = horarioAgora >= horarioSemana[0] && horarioSemana[1] > horarioAgora
  const semanaAberto = diasSemana.includes(diaAgora)
  

  if(semanaAberto && horarioAberto){
    funcionamento.classList.add('aberto')
  }
}   

