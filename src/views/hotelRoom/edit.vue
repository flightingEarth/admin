<template>
    <hotel-form title="编辑房型" :ruleForm="ruleForm"></hotel-form>
</template>

<script>
    import HotelForm from './Form'
    import { getHotelRoom } from 'api/hotelRoom'

    export default {
        components: { HotelForm },
        data() {
            return {
                ruleForm: undefined
            }
        },
        created() {
            getHotelRoom(this.$route.params.id).then(response => {
                this.ruleForm = response.data.data
            })
        },
    }
</script>
