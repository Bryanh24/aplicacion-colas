//Comando para establecer la conexion 
var socket = io();
var lblTicket1 = $('#lblTicket1');
var lblTicket2 = $('#lblTicket2');
var lblTicket3 = $('#lblTicket3');
var lblTicket4 = $('#lblTicket4');

var lblEscritorio1 = $('#lblEscritorio1');
var lblEscritorio2 = $('#lblEscritorio2');
var lblEscritorio3 = $('#lblEscritorio3');
var lblEscritorio4 = $('#lblEscritorio4');

var tickets = [lblTicket1, lblTicket2, lblTicket3, lblTicket4];
var escritorios = [lblEscritorio1, lblEscritorio2, lblEscritorio3, lblEscritorio4];

socket.on('connect', function() {
    console.log('conectado al servidor');
})

socket.on('disconnect', function() {
    console.log('desconectado del servidor');
})

socket.on('estadoActual', function(data) {
    //console.log(data);
    actualizaHTML(data.ultimosCuatro);
});

socket.on('ultimos4', function(data) {
    //  console.log(data);
    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    actualizaHTML(data.ultimosCuatro);
});

function actualizaHTML(ultimosCuatro) {

    for (var i = 0; i <= ultimosCuatro.length - 1; i++) {

        tickets[i].text('Ticket ' + ultimosCuatro[i].numero);
        escritorios[i].text('Escritorio ' + ultimosCuatro[i].escritorio);
    }

}