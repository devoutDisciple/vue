<template>
    <div>foo --- {{msg}}</div>
</template>
<script>
export default {
    name: 'foo',
    data() {
        console.log(this.$store.state)
        return {
            msg: this.$store.state.testA.count
        }
    }
}
</script>

