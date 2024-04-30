<template>
    <input type="text" :placeholder="placeholder">
</template>
<script>
export default {
    name: 'Inputs',
    props: {
        placeholder: String
    }
}
</script>