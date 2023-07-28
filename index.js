const message = 'Estructura equipo de trabajo' 

document.querySelector('#header').innerHTML = message

console.log(message)

let equipo = [
	{
  		nombre: "Florencia Romina Varela",
    	posicion: "Supervisor"
 	 },
  	{
  		nombre: "Nicolás Cuesta",
    	posicion: "Jefe"
  	},
  	{
  		nombre: "Diego García Abad",
    	posicion: "Gerente"
  	},
 	{
  		nombre: "Maximiliano Burassi",
    	posicion: "analista semisenior"
 	 },
  	{
  		nombre: "Luz Amarilla",
    	posicion: "analista senior"
  	},
  	{
  		nombre: "Aldana Orihuel",
    	posicion: "analista semisenior"
  	},
  	{
  		nombre: "Martina Chaffardon",
    	posicion: "analista junior"
  },

]

let junior = equipo.filter(miembro => miembro.posicion == "analista junior")

let semiseniors = equipo.filter(miembro => miembro.posicion == "analista semisenior")

let senior = equipo.filter(miembro => miembro.posicion == "analista senior")

let supervisor = equipo.filter(miembro => miembro.posicion == "Supervisor")

let jefe = equipo.filter(miembro => miembro.posicion == "Jefe")

let gerente = equipo.filter(miembro => miembro.posicion == "Gerente")

console.log(semiseniors);

console.log(junior)

console.log(senior)

console.log(supervisor)

console.log(jefe)

console.log(gerente)