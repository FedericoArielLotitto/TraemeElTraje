Vue.component('input-vertical', {
    data: function () {
        return {
            informacionCliente: '',
        }
    },
    props: [
        'concepto',
        'dato',
        'patron'
    ],
    template: `
        <div class="p-3 ">
            <label class="color-texto form-label" :for="dato">{{ concepto }}</label>
            <input v-model="informacionCliente" type="text" class="form-control input" :id="dato" :pattern="patron">
        </div>
    `
});