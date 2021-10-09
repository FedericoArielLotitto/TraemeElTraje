Vue.component('input-horizontal', {
    data: function () {
        return {
            talleCliente: '',
        }
    },
    props: [
        'concepto',
        'dato',
        'patron'
    ],
    template: `
    <div class= "row" >
        <div class="col my-3">
            <label class="color-texto" :for="dato">{{ concepto }}</label>
        </div>
        <div class="col my-3">
            <input v-model="talleCliente" type="number" step="0.01" min="0" class="form-control" :id="dato">
        </div>
    </div>
    `
        
});