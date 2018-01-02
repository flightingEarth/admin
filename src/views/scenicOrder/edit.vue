<template>
    <hotel-form :ruleForm="ruleForm"></hotel-form>
</template>

<script>
    import HotelForm from './Form'
    import { getHotel } from 'api/hotel'

    export default {
        components: { HotelForm },
        data() {
            return {
                ruleForm: undefined
            }
        },
        created() {
            getHotel(this.$route.params.id).then(response => {
                this.ruleForm = response.data.data
            })
        },
    }
</script>
