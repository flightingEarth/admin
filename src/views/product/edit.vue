<template>
    <product-form :product="product"></product-form>
</template>

<script>
import ProductForm from './Form'
import { getProduct } from 'api/product'

export default {
    components: { ProductForm },
    data() {
        return {
            product: undefined
        }
    },
    created() {
        getProduct(this.$route.params.id).then(response => {
            this.product = response.data.data
        })
    },
}
</script>
