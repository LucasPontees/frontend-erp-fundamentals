<template>
    <footer>
        <p id="footer">Fundamentos para Vue &copy; 2024 </p>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
#footer {
    height: 30px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: static;;
    text-align: center;
    padding: 20px;
    border-top: solid 1px #222;
}
</style>