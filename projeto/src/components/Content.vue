<template>
  <div class="row">
    <div class="col-md-6">
        <v-btn @click="fetch()">Ver Endereço Capital-SP</v-btn>
        <h5>Logradouro: {{addressLogradouro}}</h5>
        <h5>CEP: {{addressCep}}</h5>
        <h5>Nº: {{addressNumero}}</h5>
    </div>
    <div class="col-md-6">
        <h2> Endereço da Matriz</h2>
        <h5>Logradouro: {{addressMatriz.logradouro}}</h5>
        <h5>CEP: {{addressMatriz.cep}}</h5>
        <h5>Nº: {{addressMatriz.siafi}}</h5>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

  export default  {
    name: 'Content',
    data(){
        return{
            addressLogradouro: null,
            addressCep: null,
            addressNumero: null,
        }
    },
    computed: {
        addressMatriz(){
            return this.$store.state.addressMatriz
        }
    },
    methods:{
        fetch(){
            axios.get('https://viacep.com.br/ws/01001000/json')
            .then(response => {
                console.log(response);
                this.addressLogradouro = response.data.logradouro;
                this.addressCep = response.data.cep;
                this.addressNumero = response.data.siafi;
            })
        }
    },
    created(){
        this.$store.dispatch("getAddressMatriz");
    }
}
</script>