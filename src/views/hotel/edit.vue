<template>
    <hotel-form :hotel="hotel"></hotel-form>
</template>

<script>
    import HotelForm from './Form'
    import { getList } from 'api/hotel'

    export default {
        components: { HotelForm },
        data() {
            return {
                hotel: undefined
            }
        },
        created() {
            getList(this.$route.params.id).then(response => {
                this.hotel = response.data.data
            })
        },
    }
</script>
