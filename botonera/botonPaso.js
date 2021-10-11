Vue.component('boton-paso', {
    props: ['nombre'],
    methods: {
        mostrarPasoDeIngresoDeTalles: function () {
            this.$emit('mostrar-talles');
        }
    },
    template: `
    <div class="row">
        <div class="col text-center">
            <button @click="mostrarPasoDeIngresoDeTalles()" type="button" class="btn btn-success">
                {{ this.nombre }}
            </button>
        </div>
    </div>
    `
})