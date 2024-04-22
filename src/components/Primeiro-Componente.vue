<template>
    <h1>Ola vue !</h1>
    <p>meu nome eh {{nome}} e trabalho como {{profissao}}</p>
</template>

<script>

export default {
    name: 'PrimeiroComponente',
    data() {
        return {
            nome: 'Lucas',
            profissao: 'Programador'
        }
    }
}
</script>