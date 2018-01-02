<template>
    <hotel-form :ruleForm="ruleForm"></hotel-form>
</template>

<script>
    import HotelForm from './Form'
    import { getProduct } from 'api/hotelProduct'

    export default {
        components: { HotelForm },
        data() {
            return {
                ruleForm: undefined
            }
        },
        created() {
            getProduct(this.$route.params.id).then(response => {
                this.ruleForm = response.data.data
            })
        },
    }
</script>
