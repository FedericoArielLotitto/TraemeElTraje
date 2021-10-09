Vue.component('talles', {
    data() {
        return {
            titulo: "Talles"
        }
    },
    template: `
    <div class="row justify-content-center">
        <div class="col fondo">
            <div id="card-pedido" class="card color-borde m-5 fondo-card">
                <div class="card-body fondo-card">
                    <form action="POST">
                        <div class="row m-5">
                            <div class="col">
                                <p class="fs-2 color-texto">{{ titulo }}</p>
                                <input-horizontal concepto="Contorno de cuello" dato="contornoDeCuello"></input-horizontal>
                                <input-horizontal concepto="Contorno de pecho" dato="contornoDePecho"></input-horizontal>
                                <input-horizontal concepto="Contorno de cintura" dato="contornoDeCintura"></input-horizontal>
                            </div>
                            <boton-paso nombre="Continuar"></boton-paso>
                            <boton-paso nombre="Volver"></boton-paso>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `
})