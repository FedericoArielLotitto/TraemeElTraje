Vue.component('pedidos', {
    data() {
        return {
            misPedidos: ['pedido1','pedido2']
    }},
    // computed: {
    //     buscarPedidos: function() {
    //         let pedidoService = new PedidoService();
    //         this.misPedidos = pedidoService.buscarPedidos()
    //     }
    // },
    template: `
    <div class="row g-0 justify-content-center">
    <div class="col fondo">
        <div id="card-pedido" class="card m-5 p-2 color-borde fondo-card">
            <div class="card-body fondo-card">
                <table class="table">
                    <thead class="fondo-card">
                        <tr>
                            <td scope="col" class="color-texto">
                                <p class="fs-2 color-texto">Nombre</p>
                            </td>
                        </tr>
                    </thead>
                    <tbody class="fondo" v-for="pedido in misPedidos">
                        <tr>
                            <td class="color-texto">{{ pedido }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </div>
    `
});
