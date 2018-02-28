<template>
    <ticket-form title="门票编辑" :ruleForm="ruleForm"></ticket-form>
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
          console.log(this.$route.params.id)
            getTicket(this.$route.params.id).then(response => {
                this.ruleForm = response.data.data
            })
        },
    }
</script>
