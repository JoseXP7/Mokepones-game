let ataquePlayer
let ataqueIA
let vidasPlayer = 3
let vidasIA = 3

function iniciarGame() {
  let divReiniciar = document.getElementById("reiniciar")
  divReiniciar.style.display = "none"

  let divSeleccionAtaque = document.getElementById("seleccionar-ataque")
  divSeleccionAtaque.style.display = "none"

  let btnPetPlayer = document.getElementById("btn-pet")
  btnPetPlayer.addEventListener("click", seleccionarPetPlayer)

  let btnFire = document.getElementById("btn-fire")
  btnFire.addEventListener("click", ataqueFire)
  let btnWater = document.getElementById("btn-water")
  btnWater.addEventListener("click", ataqueWater)
  let btnEarth = document.getElementById("btn-earth")
  btnEarth.addEventListener("click", ataqueEarth)

  let btnReload = document.getElementById("btn-reload")
  btnReload.addEventListener("click", reload)
}

function seleccionarPetPlayer() {
  let divSeleccionPet = document.getElementById("seleccionar-pet")
  divSeleccionPet.style.display = "none"

  let divSeleccionAtaque = document.getElementById("seleccionar-ataque")
  divSeleccionAtaque.style.display = "flex"

  let input1 = document.getElementById("hipodoge")
  let input2 = document.getElementById("capipepo")
  let input3 = document.getElementById("ratigueya")
  let spanPetPlayer = document.getElementById("pet-player")
  if (input1.checked) {
    spanPetPlayer.innerHTML = "Hipodoge"
  } else if (input2.checked) {
    spanPetPlayer.innerHTML = "Capipepo"
  } else if (input3.checked) {
    spanPetPlayer.innerHTML = "Ratigueya"
  } else {
    alert("¡Tienes que seleccionar!")
  }
  seleccionarPetIA() //llama a la funcion para ejecutarla despues de que el jugador selecciono a su mascota
}

function seleccionarPetIA() {
  let petAleatorio = aleatorio(1,3)
  let spanPetIA = document.getElementById("pet-ia")
  if (petAleatorio == 1) {
    spanPetIA.innerHTML = "Hipodoge"
  } else if (petAleatorio == 2) {
    spanPetIA.innerHTML = "Capipepo"
  } else if (petAleatorio == 3) {
    spanPetIA.innerHTML = "Ratigueya"
  }
}

function ataqueFire() {
  ataquePlayer = "Fuego"
  ataqueAleatorioIA()
}

function ataqueWater() {
  ataquePlayer = "Agua"
  ataqueAleatorioIA()
}

function ataqueEarth() {
  ataquePlayer = "Tierra"
  ataqueAleatorioIA()
}

function peleaResultado() {
  let spanVidasPlayer = document.getElementById("vidas-player")
  let spanVidasIA = document.getElementById("vidas-ia")
  if (ataquePlayer == ataqueIA) {
    crearMensaje("EMPATE")
  } else if (ataquePlayer == "Fuego" && ataqueIA == "Tierra" || ataquePlayer == "Agua" && ataqueIA == "Fuego" || ataquePlayer == "Tierra" && ataqueIA == "Agua") {
    crearMensaje(" - Ganaste!")
    vidasIA--
    spanVidasIA.innerHTML = vidasIA
  } else {
    crearMensaje(" - Perdiste!")
    vidasPlayer--
    spanVidasPlayer.innerHTML = vidasPlayer
  }
  validacionVidas()
}

function validacionVidas() {
  if (vidasIA == 0) {
    mensajeFinal("¡Ganaste el Combate!")
    apagarBotones()
  } else if (vidasPlayer == 0) {
    mensajeFinal("Perdiste...")
    apagarBotones()
  }
}

function apagarBotones() {
  let btnFire = document.getElementById("btn-fire")
  btnFire.disabled = true
  let btnWater = document.getElementById("btn-water")
  btnWater.disabled = true
  let btnEarth = document.getElementById("btn-earth")
  btnEarth.disabled = true

  let divReiniciar = document.getElementById("reiniciar")
  divReiniciar.style.display = "block"
}

function reload() {
  document.location.reload()
}

function ataqueAleatorioIA() {
  let ataqueAleatorioIA = aleatorio(1,3)
  if (ataqueAleatorioIA == 1) {
    ataqueIA = "Fuego"
  } else if (ataqueAleatorioIA == 2) {
    ataqueIA = "Agua"
  } else if (ataqueAleatorioIA == 3) {
    ataqueIA = "Tierra"
  }
  peleaResultado()
}

function crearMensaje(resultado) {
  let sectionMensaje = document.getElementById("resultado")
  let ataquesPlayer = document.getElementById("ataques-player")
  let ataquesIA = document.getElementById("ataques-ia")


  let newAtaquePlayer = document.createElement("p")
  let newAtaqueIA = document.createElement("p")

  sectionMensaje.innerHTML = resultado
  newAtaquePlayer.innerHTML = ataquePlayer
  newAtaqueIA.innerHTML = ataqueIA

  //let parrafo = document.createElement("p")
  //parrafo.innerHTML = "Tu mascota atacó con " + ataquePlayer + ", la mascota enemiga atacó con " + ataqueIA + " " + resultado
  ataquesPlayer.appendChild(newAtaquePlayer)
  ataquesIA.appendChild(newAtaqueIA)
}

function mensajeFinal(resultadoFinal) {
  let sectionMensaje = document.getElementById("resultado")
  sectionMensaje.innerHTML = resultadoFinal
}

function aleatorio(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min)
}
window.addEventListener("load", iniciarGame) //window es el navegador y el parametro load es cuando carga el navegador
