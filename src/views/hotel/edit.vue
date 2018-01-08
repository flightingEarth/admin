<template>
    <hotel-form title="酒店编辑" :ruleForm="ruleForm"></hotel-form>
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
            getHotel().then(response => {
                this.ruleForm = response.data.data
            })
        },
    }
</script>
