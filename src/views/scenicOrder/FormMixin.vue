<script>
import { getList } from 'api/scenicType'

export default {
    data() {
        return {
            scenicTypes: [],
        }
    },
    created() {
        this.loadScenicTypes()
    },
    methods: {
        loadScenicTypes() {
            let formData = {}
            getList(formData).then(response => {
                this.scenicTypes = response.data.data
            })
        }
    },
}
</script>