<script>
import { getList } from 'api/category'

export default {
    data() {
        return {
            selected: null,
            options: [],
            tags: null,
            allTag: [],
            startTime: {
                time: ''
            },
        }
    },
    created() {
        this.loadCategories()
//        this.loadTags()
    },
    methods: {
        loadCategories() {
            let formData = new FormData()
            formData.append('type', 2)

            getList(formData).then(response => {
                this.categories = response.data.data
            })

        },
        loadTags() {
            this.$http.get('tags')
                .then((response) => {
                    this.allTag = response.data.data
                })
        },
    },
}
</script>