Vue.component('nav-bar', {
    data: function () {
        return {
            home: '/index.html',
            brand: 'Traeme el traje',
            // enlacePedidos: '/mis-pedidos.html',
            opcionUno: 'Mis pedidos'
        }
    },
    methods: {
        mostrarPedidos() {
            this.$emit('mostrar-pedidos')
        },
        volverALaHome() {
            this.$emit('volver-a-home')
        }
    },
    template:
        `<nav id="navbar" class="fondo-navbar navbar navbar-expand-md">
            <div class="container-fluid">
                <a class="navbar-brand color-texto-navbar" @click="volverALaHome()">{{ brand }}</a>
            <button class="navbar-toggler light" type="button" data-bs-toggle="collapse"
                data-bs-target="#opcionesDePedido">
                <span><i class="fas fa-bars menu-icon"></i></span>
            </button>
            <div class="collapse navbar-collapse" id="opcionesDePedido">
                <div class="navbar-nav">
                    <a class="color-texto-navbar active " aria-current="page" @click="mostrarPedidos()">{{ opcionUno }}</a>
                </div>
            </div>
        </div>
    </nav>`
});