<template>
    <ticket-form :ruleForm="ruleForm"></ticket-form>
</template>

<script>
    import TicketForm from './Form'
    import { getTicket } from 'api/ticket'

    export default {
        components: { TicketForm },
        data() {
            return {
                ruleForm: undefined
            }
        },
        created() {
            getTicket(this.$route.params.scenicId, this.$route.params.id).then(response => {
                this.ruleForm = response.data.data
            })
        },
    }
</script>
