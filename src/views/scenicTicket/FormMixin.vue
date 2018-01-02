<script>
import { getList } from 'api/scenicType'

export default {
    data() {
        return {
            scenicTypes: [],
            scenicStarList: [],
        }
    },
    created() {
        this.loadScenicTypes()
        console.log(this.scenicStarList)
//        this.scenicStarList = this.scenicStarList
    },
    methods: {
        loadScenicTypes() {
            let formData = {}
            getList(formData).then(response => {
                this.scenicTypes = response.data.data

            })
        },
        loadScenicStar() {
            this.scenicStarList =  [
                    {'id':1,'name':'1A'},
                    {'id':2,'name':'2A'},
                    {'id':3,'name':'3A'},
                    {'id':4,'name':'4A'},
                    {'id':5,'name':'5A'}
                ]
        }
    },
}
</script>