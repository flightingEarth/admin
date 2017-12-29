<template>
    <div class="modal-header" slot="title">
        <i class="el-icon-close close" @click="handleUploadCancel"></i>

        <template v-if="type == 1">
            <a @click="changeType" class="title" style="margin-right: 4px; color: #38f">< {{ backTitle }}</a>
            <span style="font-size: 14px;"> | </span>
            <div class="ui-search-box">
                <el-input placeholder="搜索" size="small" @keyup.enter="imageSearch" icon="search">
                </el-input>
            </div>
        </template>

        <span class="title">{{ title }}</span>
    </div>
</template>

<script>
    export default {
        name: 'ModalHeader',
        props:{
            title: {
                type: String,
                default:''
            },
            search: {
                type: Boolean,
                default: false
            },
            backTitle: {
                type: String,
                default:''
            },
            type: {
                type: Number,
                default: 0
            }
        },

        methods:{
            handleUploadCancel() {
                this.$emit('handleUploadCancel')
            },
            backType() {
                console.log(11)
                this.$emit('changeType')
            },
            imageSearch() {
                console.log('enter')
            }
        }
    }
</script>
