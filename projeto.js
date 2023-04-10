const meuPrimeiroApp = Vue.createApp({

    data(){
        return{
            textoDinamico: null,
            corTexto: "Black"
        }
    }
})
const mountedApp = meuPrimeiroApp.mount('#formPrincipal')