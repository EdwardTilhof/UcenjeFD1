const {createApp} = Vue;

createApp({
    data(){
        return{
            brojac:0
        }
    },
    methods:{
        povecaj(){
            this.brojac++;
        },
        umanji(){
            this.brojac--;
        }
    }
}).mount('#app');