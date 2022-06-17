export interface Noticias {
    id: number;
    titulo: string;
    contenido:string;
    frase:string;
    contenido2:string;
    contenido3:string;
    contenido4:string;
    list1: string;
    contenido5: string;
    imag:string;
    fecha:string;
    autor:string;
}

export let ListaNoticias:Array<Noticias>=[
{
    id:1,
    titulo: "¿Por qué debemos cuidar de nuestra salud mental?",
    contenido: "Debido a los últimos acontecimientos...",
    frase: "Para más información ingrese al siguiente link",
    contenido2:"Los eventos ocurridos han venido desiquilibrando la vida que llevabamos antes. Dentro de las mas afectadas se encuentra la salud mental, la cual incluye el bienestar emocional, psicologico y social.",
    contenido3: "La importancia del cuidado de la salud mental radica en las aportaciones que tiene en nuestra vida cotidiana:",
    contenido4: "Cabe resaltar, que la salud mental juega un papel crucial en el cuidado de la salud física, ya que algunas afecciones mentales pueden aumentar el riesgo de complicaciones a la salud, por ejemplo, accidentes cerebrovasculares, diabetes tipo 2 y enfermedades cardíacas.",
    list1: "Nos permite enfrentar el estrés de la vida, estar físicamente saludables, tener relaciones sanas, contruibuir de forma significativa a nuestra comunidad, trabajar productivamente, alcanzar nuestro completo potencial.",
    contenido5: "https://www.cetys.mx/noticias/por-que-es-importante-cuidar-de-nuestra-salud-mental/",
    imag: "../../assets/img/220501202711-covid-long-hauler-symptoms-gupta-dnt-vpx-exlarge-169.jpg",
    fecha: Date().toString(),
    autor:"Campus ensenada"
},
{
    id:2,
    titulo: "¿Qué son las enfermedades cardiovasculares?",
    contenido: "Son enfermedades que afectan al corazón...",
    frase: "Para más información ingrese al siguiente link",
    contenido2:"Las enfermedades cardiovasculares son aquellas qaue afectan al corazon estrechando las arterias y reduciendo la cantidad de sangre que el corazón recibe, lo que genera que el corazón trabaje con más difilcutades.",
    contenido3:"En la actualidad, las enfermedades cardiovasculares son la principal causa de mortalidad en todo el mundo.",
    contenido4:"Las enfermedades más frecuentes que tratan los cardiologos son: Insuficiente cardíaca, Hipertensión arterial, Hipercolesterolemia o exceso de colesterol, Infarto de miocardio, Agnia de pecho, Transtornos del ritmo cardíaco, entre otros",
    contenido5:"https://cardiavant.com/enfermedad-trata-un-cardiologo/",
    list1: "Este tipo de enfermedades se presentan muchas veces sin dolor y sin sintomas obvios. Esto puede llevar a problemas de salud todavía más serios, como el ataque al corazón, la embolia o el daño a los riñones. ",
    imag: "../../assets/img/548b12a023a62.jpg",
    fecha: Date().toString(),
    autor:"yo"
}

];