function start() {
  // Inicio da função start()
  $('#start-game').hide()

  $('#bg-game').append("<div id='jogador' class='anima1'></div>")
  $('#bg-game').append("<div id='inimigo1' class='anima2'></div>")
  $('#bg-game').append("<div id='inimigo2'></div>")
  $('#bg-game').append("<div id='amigo' class='anima3'></div>")

  //Variaveis
  var jogo = {}

  var TECLA = {
    W: 87,
    S: 83,
    D: 68
  }

  jogo.pressionou = []

  //Verifica se o usuário pressionou alguma tecla
  $(document).keydown(function (e) {
    jogo.pressionou[e.which] = true
  })

  $(document).keyup(function (e) {
    jogo.pressionou[e.which] = false
  })

  //Game Loop
  jogo.timer = setInterval(loop, 30)

  function loop() {
    moveFundo()
    movejogador()
  } // Fim da função loop()
}

function moveFundo() {
  esquerda = parseInt($('#bg-game').css('background-position'))
  $('#bg-game').css('background-position', esquerda - 2)
}

function movejogador() {
  if (jogo.pressionou[TECLA.W]) {
    var topo = parseInt($('#jogador').css('top'))
    $('#jogador').css('top', topo - 10)
  }

  if (jogo.pressionou[TECLA.S]) {
    var topo = parseInt($('#jogador').css('top'))
    $('#jogador').css('top', topo + 10)
  }

  if (jogo.pressionou[TECLA.D]) {
    //Chama função Disparo
  }
} // fim da função movejogador()
