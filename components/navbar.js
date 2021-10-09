Vue.component('nav-bar', {
    data: function () {
        return {
            home: '/index.html',
            brand: 'Traeme el traje',
            enlacePedidos: '/mis-pedidos.html',
            opcionUno: 'Mis pedidos'
        }
    },
    template:
        `<nav id="navbar" class="fondo-navbar navbar navbar-expand-md">
            <div class="container-fluid">
                <a class="navbar-brand color-texto-navbar" :href="home">{{ brand }}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#opcionesDePedido">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="opcionesDePedido">
                <div class="navbar-nav">
                    <a class="color-texto-navbar active " aria-current="page" :href="enlacePedidos">{{ opcionUno }}</a>
                </div>
            </div>
        </div>
    </nav>`
});