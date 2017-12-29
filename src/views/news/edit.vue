<template>
    <news-form :news="news"></news-form>
</template>

<script>
import NewsForm from './Form'
import { getNews } from 'api/news'

export default {
    components: { NewsForm },
    data() {
        return {
            news: undefined
        }
    },
    created() {
        getNews(this.$route.params.id).then(response => {
            this.news = response.data.data
        })
    },
}
</script>
