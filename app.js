
// const routes = {
//   '/': this.app,
//   '/pedidos': "./mis-pedidos.html"
// }

var app = new Vue({
    el: "#app",
    data:
    {
      tituloUno: 'Datos de contacto',
      mensajeDeAdvertencia: 'Ingrese el número empezando con 11',
      tituloDos: 'Talles',
      cantidad: 0,
      pedidosVisibles: false,
      datosDeContactoVisibles: true,
      tallesVisibles: false
    },
    methods: {
      volverALaHome: function () {
        window.location.pathname = "/";
        this.datosDeContactoVisibles = true;
        this.pedidosVisibles = false;
        this.tallesVisibles = false;
      },
      mostrarPasoDeTalles: function () {
        window.location.pathname =
        this.datosDeContactoVisibles = false;
        this.tallesVisibles = true;
        this.pedidosVisibles = false;
      },
      ocultarTodoYMostrarPedidos: function () {
        this.datosDeContactoVisibles = false;
        this.tallesVisibles = false;
        this.pedidosVisibles = true;
      }
    }
});



