<template>
    <product-form title="编辑产品" :ruleForm="ruleForm"></product-form>
</template>

<script>
    import ProductForm from './Form'
    import { getProduct } from 'api/hotelProduct'

    export default {
        components: { ProductForm },
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
