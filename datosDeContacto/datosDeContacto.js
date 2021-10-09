Vue.component('datosDeContacto', {
    data() {
        return {
            titulo: 'Datos de contacto'
        }
    },
    template: `
    <div class="row justify-content-center">
        <div class="col fondo">
            <div id="card-pedido" class="card color-borde m-5 p-5 fondo-card">
                <div class="card-body fondo-card">
                    <form action="POST">
                        <div class="row">
                            <div class="col">
                                <p class="fs-2 mx-3 color-texto">{{ titulo }}</p>
                                <input-vertical concepto="Nombre" dato="nombre"></input-vertical>
                                <input-vertical concepto="Apellido" dato="apellido"></input-vertical>
                                <input-vertical concepto="Telefono" dato="telefono"></input-vertical>
                                <input-vertical concepto="Correo Electrónico" dato="correoElectronico"></input-vertical>
                            </div>
                        </div>
                        <boton-paso nombre="Continuar"></boton-paso>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `
})