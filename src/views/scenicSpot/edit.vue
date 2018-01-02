<template>
    <scenic-form :ruleForm="ruleForm"></scenic-form>
</template>

<script>
    import ScenicForm from './Form'
    import { getScenic } from 'api/scenic'

    export default {
        components: { ScenicForm },
        data() {
            return {
                ruleForm: undefined
            }
        },
        created() {
            getScenic(this.$route.params.id).then(response => {
                this.ruleForm = response.data.data
            })
        },
    }
</script>
