Vue.component('boton-paso', {
    props: ['nombre'],
    template: `
    <div class="row p-2">
        <div class="col text-center">
            <button type="button" class="btn btn-success">
                {{ this.nombre }}
            </button>
        </div>
    </div>
    `
})