<template>
    <cases-form :cases="cases"></cases-form>
</template>

<script>
import CasesForm from './Form'
import { getCase } from 'api/cases'

export default {
    components: { CasesForm },
    data() {
        return {
            cases: undefined
        }
    },
    created() {
        getCase(this.$route.params.id).then(response => {
            this.cases = response.data.data
        })
    },
}
</script>
