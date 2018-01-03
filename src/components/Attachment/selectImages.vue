<template>
    <div class="upload-image-region">
        <el-dialog custom-class="widget-attachment" top="0" :before-close="handleClose" :show-close="false"
                   :visible.sync="visible" :close-on-click-modal="false">

            <div class="modal-header" slot="title">
                <i class="el-icon-close close" @click="handleClose"></i>

                <template v-if="backTitle">
                    <a @click="dialogSwitch" class="title" style="margin-right: 4px; color: #38f">< {{ backTitle }}</a>
                    <span style="font-size: 14px;"> | </span>
                </template>

                <span class="title">{{ title }}</span>

                <!--<div class="ui-search-box">-->
                <!--<el-input placeholder="搜索" size="small" v-model="keyword" :on-icon-click="searchImage" icon="search">-->
                <!--</el-input>-->
                <!--</div>-->
            </div>

            <div class="modal-body">
                <div class="category-list-region" v-show="categoryVisible">
                    <ul class="category-list">
                        <li class="category-item" v-for="(category,index) in categories"
                            @click="handleSelectionCategory(index, category)" :class="{active:isActive == index}">
                            {{category.name}}
                            <!--<span class="category-name">{{category.name}}</span>-->
                            <span class="category-num">{{category.count}}</span>
                        </li>
                    </ul>
                </div>
                <div class="attachment-list-region">
                    <ul class="image-list">
                        <li class="image-item" v-for="image in images" @click="handleSelectImage(image)">
                            <img class="image-box" width="120" height="120" :src="image.links"/>
                            <div class="image-meta">{{ image.width + '*' + image.height }}</div>
                            <!--<div class="image-title">{{ image.name }}</div>-->
                            <div class="attachment-selected" v-if="image.checked">
                                <i class="el-icon-check"></i>
                            </div>
                        </li>
                    </ul>

                    <div class="attachment-pagination">
                        <el-button type="success" class="addImg" v-show="categoryVisible" @click="uploadImageVisible = true"
                                   size="small">
                            <i class="iconfont icon-iconjia"></i>
                        </el-button>
                        <p v-show="categoryVisible">暂无数据，点击添加</p>
                    </div>
                </div>
            </div>


            <div slot="footer" class="dialog-footer">
                <el-button type="primary" :class="{ 'ui-btn-disabled': isDisabled }" style="width: 120px;"
                           @click="submit">确 定
                </el-button>
            </div>
        </el-dialog>

        <Upload-image :categoryId="currentCategory.id" backTitle="我的图片" @submit="loadImages"
                      @close="uploadImageVisible = false" :visible="uploadImageVisible"></Upload-image>

    </div>
</template>

<script>
    import UploadImage from '@/components/Attachment/uploadImage';
    import {getImages} from 'api/image'
    import {getCategories} from 'api/imageCategory'
    import "../../iconfont/iconfont.css"

    export default {
        name: 'SelectImages',
        components: {
            UploadImage
        },
        props: {
            visible: {
                type: Boolean,
                default: false
            },
            backTitle: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: '上传图片'
            },
            min: {
                type: Number,
                default: 0
            },
            max: {
                type: Number,
                default: 0
            }
        },
        data(){
            return {
                isActive: 0,
                isDisabled: true,
                titles: [],
                keyword: '',
                categoryVisible: true,
                images: [],
                categories: [{
                    "name": "未命名",
                    "count": 1
                    },
                    {
                        "name": "未命名1",
                        "count": 2
                    },
                    {
                        "name": "未命名2",
                        "count": 3
                    }
                ],
                selected: [],
                currentCategory: {id: 0},
                count: 0,
                total: 0,
                page: 1,
                limit: 15,
                uploadImageVisible: false
            }
        },
        created() {
            this.loadCategories()
            this.loadImages()
        },
        watch: {
            count: function (val, oldVal) {
                this.isDisabled = (val > 0) ? false : true
            }
        },
        methods: {
            loadImages() {
                let para = {
                    page: this.page,
                    limit: this.limit
                };
                if (this.currentCategory.id) {
                    para.category_id = this.currentCategory.id
                }
                getImages(para).then(response => {
                    this.images = response.data.data
                    this.total = response.data.meta.pagination.total
                })
            },
            loadCategories() {
                getCategories().then(response => {
                    this.categories = response.data.data
                    this.currentCategory = this.categories[0]
                })
            },
            handleCurrentChange(val) {
                this.page = val
                this.loadImages()
            },
            //关闭窗口
            handleClose() {
                this.$emit('close')
                this.count == 0
                this.images.forEach(function (image, index) {
                    if (image.checked) {
                        this.images[index].checked = false
                    }
                }, this)
            },
            dialogSwitch() {

            },
            //选择图片
            handleSelectionCategory(index, category) {
                this.isActive = index
                this.currentCategory = category
                this.loadImages()
                this.isDisabled = true
            },
            searchImage() {

            },
            handleSelectImage(image) {
                if (!image.checked && this.max != 0 && (this.count + 1) > this.max) {
                    return false
                }

                image.checked = image.checked ? false : true

                if (image.checked) {
                    this.count += 1
                } else {
                    this.count -= 1
                }
            },
            submit() {
                if (!this.isDisabled) {
                    let selected = []
                    this.images.forEach(function (image, index) {
                        if (image.checked) {
                            selected.push(image)
                        }
                    })
                    this.$emit('submit', selected)
                    this.handleClose()
                }

            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .modal-body {
        height: 528px;
    }

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
            .active {
                background: #fff;
            }
        }
    }

    .modal-header {
        position: relative;
        border: 0;
        .title {
            position: absolute;
            top: 5px;
            left: 20px;
            /*color: #fff;*/
        }
    }

    //图片展示
    .attachment-list-region {
        padding: 20px 20px 10px 0;
        /*width: 680px;*/
        .image-list {
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
                    background: rgba(0, 0, 0, 0.2);
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
            bottom: 0;
            padding: 6px;
            margin-left: 160px;
            height: 40px;
            left: 33%;
            line-height: 40px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            /*background: #f8f8f8;*/
            .addImg{
                width: 120px;
                height: 120px;
                border: 5px dashed #f2f2f2;
                background: #fff;
                span{
                    .icon-iconjia{
                        color: #E6E6E6!important;
                        font-size: 30px;
                    }
                }
            }
            p{
                color: #999;
            }
        }
    }
</style>
