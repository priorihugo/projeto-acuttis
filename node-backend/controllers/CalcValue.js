//Auxiliares
export const toMinutes = (data) => {
    const [horas, minutos] = data.split(":");
    return Number(horas) * 60 + Number(minutos);
  };
  
  export const joinObjects = (obj1, obj2) => {
    console.log("obj1 ", obj1);
    console.log("obj2 ", obj2);
    const keys = Object.keys(obj1);
    console.log("keys ", keys);
    let obj = {};
    for (let key of keys) {
      console.log("key ", key);
      obj[key] = Number(obj1[key]) + Number(obj2[key]);
    }
    return obj;
  };


//Constantes
const faixasHoras = [
  { inicio: "00:00", fim: "05:00" },
  { inicio: "05:00", fim: "22:00" },
  { inicio: "22:00", fim: "24:00" },
];

function calcularMinutosPorFaixaHorario(inicio, fim) {
  let resultado = {};

  for (let i = 0; i < faixasHoras.length; i++) {
    if (
      fim < toMinutes(faixasHoras[i].inicio) ||
      inicio >= toMinutes(faixasHoras[i].fim)
    ) {
      // Não há sobreposição com a faixa 0 a 5
      resultado[`${faixasHoras[i].inicio}-${faixasHoras[i].fim}`] = 0;
    } else {
      //caso meu inicio seja menor que o inicio da faixa de valor, isto significa que ele n pertence ao intervalo
      //logo uso o proprio inicio da faixa para contabilixar os minutos
      //caso contrario o meu inicio esta em algum ponto da faixa
      const inicioVal =
        inicio < toMinutes(faixasHoras[i].inicio)
          ? toMinutes(faixasHoras[i].inicio)
          : inicio;

      //de modo semelhante caso meu fim seja menor que o fim da faixa, isto significa que ele pertence ao intervalo
      //logo usamos o fim passado por parametro para calcular os minutos
      //inclusive caso esta condição seja verdadeira, podemos parar a iteração
      const fimVal =
        fim < toMinutes(faixasHoras[i].fim)
          ? fim
          : toMinutes(faixasHoras[i].fim);

      //o resultado esta em minutos, dado que todo o sistema funciona com conversão para minutos
      resultado[`${faixasHoras[i].inicio}-${faixasHoras[i].fim}`] =
        fimVal - inicioVal;
    }
  }

  return resultado;
}

export const CalcValue = (request, response) => {
  console.log("request ", request.query);
  const inicio = toMinutes(request.query.inicio);
  const fim = toMinutes(request.query.fim);
  if (inicio > fim) {
    const f1 = calcularMinutosPorFaixaHorario(inicio, toMinutes("24:00"));
    const f2 = calcularMinutosPorFaixaHorario(toMinutes("00:00"), fim);
    const minutosFaixa = joinObjects(f1, f2);
    console.log("minutosFaixa ", minutosFaixa);
  } else {
    const minutosFaixa = calcularMinutosPorFaixaHorario(inicio, fim);
    console.log("minutosFaixa ", minutosFaixa);
  }

  return response.status(200).json("deu certo");
};
