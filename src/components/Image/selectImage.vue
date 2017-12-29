<template>
    <div class="modal-body">
        <div class="category-list-region" v-show="categoryVisible">
            <ul class="category-list">
                <li class="category-item active">
                    未分组
                    <span>3</span>
                </li>
                <li class="category-item">
                    女装
                    <span>1</span>
                </li>
            </ul>
        </div>
        <div class="attachment-list-region">
            <ul class="image-list">
                <li class="image-item" @click="checkImage" v-for="image in images">
                    <img class="image-box" width="120" height="120" :src="image.links"/>
                    <div class="image-meta">{{ image.width + '*' + iamge.height }}</div>
                    <div class="image-title">{{ image.name }}</div>
                    <div class="attachment-selected" v-if="image.checked">
                        <i class="el-icon-check"></i>
                    </div>
                </li>
            </ul>

            <div class="attachment-pagination">
                <el-button type="success" class="fl" v-show="categoryVisible" @click="changeUploadImage" size="small">上传图片</el-button>
                <el-pagination class="fr"
                               small
                               layout="prev, pager, next"
                               :total="50">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'SelectImage',
        props:{
            categoryVisible: {
                type: Boolean,
                default: true
            },
            images: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                networkImageUrl: '',
                dialogImageUrl: '',
            }
        },
        methods:{
            changeUploadImage() {
                this.$emit('changeUploadImage')
            },
            checkImage() {

            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    //分类
    .category-list-region {
        float: left;
        width: 160px;
        height: 529px;
        padding: 9px 0;
        background: #f2f2f2;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        overflow: hidden;
        .category-list {
            li {
                position: relative;
                height: 40px;
                line-height: 40px;
                padding: 0 40px 0 15px;
                cursor: pointer;
                text-overflow: ellipsis;
                overflow: hidden;
                font-size: 12px;
                span {
                    position: absolute;
                    right: 10px;
                    top: 0;
                    color: #999;
                }
            }
            .active{
                background: #fff;
            }
        }
    }

    //图片展示
    .attachment-list-region{
        padding: 20px 20px 10px 0   ;
        /*width: 680px;*/
        .image-list{
            height: 430px;
            margin-left: 5px;
            .image-item {
                position: relative;
                float: left;
                width: 120px;
                height: 120px;
                margin-left: 15px;
                margin-bottom: 30px;
                cursor: pointer;
                .image-box {
                    background: #ccc;
                    /*width: 120px;*/
                    /*height: 120px;*/
                    background-size: cover;
                    background-position: 50% 50%;
                }
                .image-meta {
                    position: absolute;
                    width: 120px;
                    height: 25px;
                    line-height: 25px;
                    color: #fff;
                    text-align: center;
                    background: rgba(0,0,0,0.2);
                    bottom: 0;
                }
                .image-title {
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    margin-top: 5px;
                    font-size: 12px;
                }
                .attachment-selected {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border: 2px solid #07d;
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    box-sizing: border-box;
                    font-size: 12px;
                    i {
                        position: absolute;
                        right: 1px;
                        bottom: 1px;
                        z-index: 2;
                        color: #fff;
                    }
                }
                .attachment-selected::after {
                    position: absolute;
                    display: block;
                    content: ' ';
                    right: 0;
                    bottom: 0;
                    border: 14px solid #07d;
                    border-left-color: transparent;
                    border-top-color: transparent;
                    z-index: 1;
                }
            }
        }

        .attachment-pagination {
            position: absolute;
            bottom: 90px;
            width: 680px;
            padding: 6px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            background: #f8f8f8;
            .ui-pagination-total{
                padding: 6px 0;
                float:right;
            }
        }
    }
</style>