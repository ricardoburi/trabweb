const meuPrimeiroApp = Vue.createApp({

    data() { //criando variaveis
        return {
            msgInicial: 'Bem-vindo ao VUE.JS', 
            verMsg: false,
            corMsg: false,
            contador: 0,
            cores: [
                { ptbr: 'AZUL' },
                { ptbr: 'VERDE' },
                { ptbr: 'VERMELHO' }
            ],
            msgText: "Para nada!"     //computed  
        }
    },


    // diferença de "computed" para "methods"
    //methods vai deixar um valor relacionado diretamente ao alert
    //computed tem que ligar a variável com o "this."
    methods: {
        avisoSistema(msgText) {
            alert(this.msgText)  
        }
    }
})

// criação do template para reutilizar os elementos criados
meuPrimeiroApp.component('botao-inutil', {
    template: `
    <button>
    Utilidade deste app
    </button> `
})
const mountedApp = meuPrimeiroApp.mount('#divPrincipal')
