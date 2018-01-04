<template>
    <div class="page-showcase-dashboard">
        <el-col :span="21" class="maxBox">
            <div class="titl">
                <i class="iconfont icon-tupian"></i>添加图片
            </div>
            <div class="media-title mb-15">
                <template v-if="isActive > 0">
                    <el-popover
                        v-model="currentCategory.visible"
                        placement="bottom"
                        width="200"
                        @show="handleShowRenameCategory(currentCategory.name)"
                        @hide="handleHideRenameCategory"
                        trigger="click">
                        <el-input size="small" v-model="changeCategoryName"></el-input>
                        <div class="popover-foot">
                            <el-button type="primary" size="small" @click="handleRenameCategory">确定</el-button>
                            <el-button size="small" class="fr" @click="currentCategory.visible = false">取消</el-button>
                        </div>
                        <el-button type="text" size="mini" slot="reference">重命名</el-button>
                    </el-popover>
                    <el-popover
                        v-model="currentCategory.deleteVisible"
                        placement="bottom"
                        title="确定删除图片？"
                        width="200"
                        trigger="click">
                        <div style="font-size: 12px;">仅删除分组，不删除图片，组内图片将自动归入未分组</div>
                        <div class="popover-foot">
                            <el-button type="primary" size="small" @click="handleDeleteCategory">确定</el-button>
                            <el-button size="small" class="fr" @click="currentCategory.deleteVisible = false">取消
                            </el-button>
                        </div>
                        <el-button type="text" size="mini" slot="reference">删除</el-button>
                    </el-popover>
                </template>

                <el-button type="primary" class="fr" @click="uploadImageVisible = true">上传图片</el-button>
            </div>
            <div class="action-bar">
                    <span class="media-title-wrap">
                            <h1>{{currentCategory.name}}</h1>
                        </span>
                <label class="mini">
                    <input type="checkbox" v-model="checkAll" @click="handleCheckAllChange"/>全选
                </label>
                <el-popover
                    v-model="selectMultipleImageVisible"
                    @hide="groupingHide"
                    @show="groupingShow"
                    placement="bottom"
                    width="200"
                    title="选择分组"
                    trigger="click">
                    <ul>
                        <li v-for="category in categories">
                            <input type="radio" :id="category.id" :value="category.id" v-model="defaultCategory">
                            <label :for="category.id">{{ category.name }}</label>
                        </li>
                    </ul>
                    <div class="popover-foot">
                        <el-button type="primary" size="small" @click="handleChangeImageCategory('all')">确定</el-button>
                        <el-button size="small" class="fr" @click="selectMultipleImageVisible = false">取消</el-button>
                    </div>
                    <el-button type="text" size="mini" slot="reference" :disabled="isCheckedImage">分组</el-button>
                </el-popover>

                <el-popover
                    v-model="deleteMultipleImageVisible"
                    placement="bottom"
                    width="200"
                    title="确定删除图片？"
                    trigger="click">
                    若删除，不会对目前已使用该图片的相关业务造成影响。
                    <div class="popover-foot">
                        <el-button type="primary" size="small" @click="handleDeleteImage('all')">确定</el-button>
                        <el-button size="small" class="fr" @click="deleteMultipleImageVisible = false">取消</el-button>
                    </div>
                    <el-button type="text" size="mini" slot="reference" :disabled="isCheckedImage">删除</el-button>
                </el-popover>
            </div>
            <template v-if="images.length > 0">
                <el-row :gutter="10" class="image-list">
                    <el-col :span="3" :key="index" class="image-item" v-for="(image, index) in images">
                        <div class="image-box"><img :src="image.links" width="160" height="160"/></div>
                        <div class="image-title">
                            <label class="mini">
                                <input type="checkbox" v-model="image.checked" @click="handleCheckedImagesChange"/>
                                {{ image.name }}
                            </label>
                        </div>
                        <div class="image-opt">
                            <el-popover
                                v-model="image.renameVisible"
                                placement="bottom"
                                width="200"
                                title="修改名称"
                                @show="handleChangeImageNameShow(image.name)"
                                @hide="handleChangeImageNameHide"
                                trigger="click">
                                <el-input size="small" v-model="changeImageName"></el-input>
                                <div class="popover-foot">
                                    <el-button type="primary" size="small" @click="handleRenameImage(image)">确定
                                    </el-button>
                                    <el-button size="small" class="fr" @click="image.renameVisible = false">取消
                                    </el-button>
                                </div>
                                <el-button type="text" size="mini" slot="reference">改名</el-button>
                            </el-popover>

                            <!--<el-popover-->
                            <!--v-model="image.linkVisible"-->
                            <!--placement="bottom"-->
                            <!--width="400"-->
                            <!--trigger="click">-->
                            <!--<el-input placeholder="请输入内容" v-model="image.path" >-->
                            <!--<el-button slot="append" @click="copyImageLink">复制</el-button>-->
                            <!--</el-input>-->
                            <!--<el-button type="text" size="mini" slot="reference">链接</el-button>-->
                            <!--</el-popover>-->

                            <el-popover
                                v-model="image.categoryVisible"
                                @hide="groupingHide"
                                @show="groupingShow"
                                placement="bottom"
                                width="200"
                                title="选择分组"
                                trigger="click">
                                <ul>
                                    <li v-for="(category, i) in categories">
                                        <input type="radio" :id="index + '-' + category.id + '-single'"
                                               :value="category.id" v-model="defaultCategory">
                                        <label :for="index + '-' + category.id + '-single'">{{ category.name }}</label>
                                    </li>
                                </ul>
                                <div class="popover-foot">
                                    <el-button type="primary" size="small"
                                               @click="handleChangeImageCategory(image, index)">确定
                                    </el-button>
                                    <el-button size="small" class="fr" @click="image.categoryVisible = false">取消
                                    </el-button>
                                </div>
                                <el-button type="text" size="mini" slot="reference">分组</el-button>
                            </el-popover>

                            <el-popover
                                v-model="image.deleteVisible"
                                placement="bottom"
                                width="200"
                                title="确定删除该图片？"
                                trigger="click">
                                若删除，不会对目前已使用该图片的相关业务造成影响。
                                <div class="popover-foot">
                                    <el-button type="primary" size="small" @click="handleDeleteImage(image.id, index)">
                                        确定
                                    </el-button>
                                    <el-button size="small" class="fr" @click="image.deleteVisible = false">取消
                                    </el-button>
                                </div>
                                <el-button type="text" size="mini" slot="reference">删除</el-button>
                            </el-popover>
                        </div>
                    </el-col>

                </el-row>
                <div class="pagination">
                    <el-pagination
                        @current-change="handleCurrentChange"
                        :page-size="limit"
                        layout="prev, pager, next"
                        :total="total">
                    </el-pagination>
                </div>

            </template>

            <template v-else>
                <div class="no-result"
                     style="border: none;color: rgb(153, 153, 153);text-align: center;padding-top:39px;">
                    暂无数据，可点击右上角“上传图片”按钮添加
                </div>
            </template>
        </el-col>
        <el-col :span="3" class="addGroup">
            <div class="category-container">
                <ul class="category-list">
                    <li class="ui-tooltip" v-for="(category,index) in categories"
                        @click="handleSelectionCategory(index, category)" :class="{active:isActive == index}">
                        <span class="category-name">{{category.name}}</span>
                        <span class="category-num">{{category.count}}</span>
                    </li>
                </ul>
                <div class="text-center">
                    <el-popover
                        v-model="addCategoryVisible"
                        placement="bottom"
                        width="200"
                        title="添加分组"
                        trigger="click">
                        <el-input size="small" v-model="newCategoryName"></el-input>
                        <div class="popover-foot">
                            <el-button type="primary" size="small" @click="handleAddGroup">确定</el-button>
                            <el-button size="small" class="fr" @click="addCategoryVisible = false">取消</el-button>
                        </div>
                        <el-button size="small" :plain="true" type="info" icon="plus" slot="reference">添加分组</el-button>
                    </el-popover>
                </div>
            </div>
        </el-col>
        <Upload-image :categoryId="currentCategory.id" @submit="loadCategories" @close="uploadImageVisible = false"
                      :visible="uploadImageVisible"></Upload-image>

    </div>

</template>

<script>
    import {getImages, updateImagesCategory, updateImages, destroyImages} from 'api/image'

    import {getCategories, addCategory, updateCategory, destroyCategory} from 'api/imageCategory'

    import UploadImage from '@/components/Attachment/uploadImage';

    export default {
        name: 'Attachment',
        components: {
            UploadImage
        },
        data() {
            return {
                defaultCategory: '',
                addCategoryVisible: false, //添加分组显示
                newCategoryName: '',  //添加分组的组名
                changeCategoryName: '', //组名重命名
                changeImageName: '', //图片改名
                selectMultipleImageVisible: false,
                deleteMultipleImageVisible: false,
                isActive: 0,
                uploadImageVisible: false,
                checkAll: false,
                currentCategory: {},
                categories: [],
                isCheckedImage: true, //控制分组 是否可以选中
                images: [],
                total: 0,
                limit: 20,
                page: 1
            };
        },
        created() {
            this.loadCategories()
        },
        methods: {
            loadImages() {
                let para = {
                    page: this.page,
                    category_id: this.currentCategory.id,
                    limit: this.limit
                };
                getImages(para).then(response => {
                    this.images = response.data.data
                    this.total = response.data.meta.total
                })
            },
            loadCategories() {
                getCategories().then(response => {
                    this.categories = response.data.data
                    this.currentCategory = this.categories[0]
                    this.loadImages()
                })
            },
            handleCurrentChange(val) {
                this.page = val
                this.loadImages()
            },
            //选择分组
            handleSelectionCategory(index, category) {
                this.isActive = index
                category.index = index
                this.currentCategory = category
                this.checkAll = false
                this.loadImages()
            },
            //添加分组
            handleAddGroup() {
                if (this.newCategoryName) {
                    let formData = new FormData()
                    formData.append('name', this.newCategoryName)

                    addCategory(formData).then(response => {
                        this.categories.push(response.data.data)
                        this.newCategoryName = ''
                    })
                }
                this.addCategoryVisible = false
            },
            // 重命名组名显示市触发
            handleShowRenameCategory(name) {
                this.changeCategoryName = name
            },
            // 重命名组名 隐藏时触发
            handleHideRenameCategory() {
                this.changeCategoryName = ''
            },
            //组名 重命名 确定
            handleRenameCategory() {
                if (this.changeCategoryName) {
                    let categoryName = this.changeCategoryName
                    let formData = {'name': categoryName}
                    let id = this.currentCategory.id
                    updateCategory(id, formData).then(response => {
                        this.categories.find(function (category, index) {
                            if (id == category.id) {
                                this.categories[index].name = categoryName
                                this.currentCategory.name = categoryName
                                return true
                            }
                        }, this)
                    })
                }
                this.currentCategory.visible = false
            },
            //删除分组
            handleDeleteCategory() {
                destroyCategory(this.currentCategory.id).then(response => {
                    let id = this.currentCategory.id
                    let categories = this.categories
                    this.categories.forEach(function (category, index) {
                        if (category.id == id) {
                            categories.splice(index, 1)
                        }
                    })
                    this.categories = categories
                    this.currentCategory = this.categories[0]
                    this.currentCategory.deleteVisible = false
                    this.isActive = 0
                })

            },
            //全选
            handleCheckAllChange() {
                this.checkAll = this.checkAll ? false : true
                if (this.images.length > 0) {
                    this.images.forEach(function (image) {
                        image.checked = this.checkAll
                    }, this);
                }
                this.isCheckedImage = this.checkAll ? false : true
            },
            //更改图片的分组
            handleChangeImageCategory(image, index) {
                let selected = []

                if (image == 'all') {
                    if (this.defaultCategory == this.currentCategory.id) {
                        this.selectMultipleImageVisible = false
                        return false
                    }

                    this.images.forEach(function (image, index) {
                        if (image.checked) {
                            selected.push(image.id)
                        }
                    }, this)
                    this.checkAll = false
                    this.isCheckedImage = true
                    this.selectMultipleImageVisible = false
                } else {
                    if (this.defaultCategory == this.currentCategory.id) {
                        image.categoryVisible = false
                        return false
                    }

                    selected.push(image.id)
                    this.images.splice(index, 1)
                }

                let formData = Object.assign({
                    'id': selected,
                    'category_id': this.defaultCategory,
                    'original_category_id': this.currentCategory.id
                })

                updateImagesCategory(formData).then(response => {
                    if (image == 'all') {
                        this.loadImages(this.currentCategory.id)
                    }
                })

                //分类总数增加
                this.categories.forEach(function (category, index) {
                    if (category.id == this.defaultCategory) {
                        this.categories[index].count += selected.length
                    } else if (category.id == this.currentCategory.id) {
                        this.categories[index].count -= selected.length
                    }
                }, this)
            },
            //删除图片
            handleDeleteImage(id, index) {
                let selected = []
                if (id == 'all') {
                    this.images.forEach(function (image) {
                        if (image.checked) {
                            selected.push(image.id)
                        }
                    }, this)
                } else {
                    selected.push(id)
                    this.images.splice(index, 1)
                }

                let formData = Object.assign({'id': selected, 'category_id': this.currentCategory.id})

                destroyImages(formData).then(response => {
                    if (id == 'all') {
                        this.loadImages(this.currentCategory.id)
                        this.deleteMultipleImageVisible = false
                    }
                })

                //分类总数减少
                this.categories.forEach(function (category, index) {
                    if (category.id == this.currentCategory.id) {
                        this.categories[index].count -= selected.length
                        return null
                    }
                }, this)
            },
            //选择单个
            handleCheckedImagesChange() {
                let count = 0;
                this.images.forEach(function (image) {
                    if (image.checked) {
                        count += 1
                    }
                }, this);
                this.isCheckedImage = (count == 0) ? true : false //是否选择有图片选中
                this.checkAll = (this.images.length == count) ? true : false
            },
            //选择图片
            groupingHide() {
                this.defaultCategory = this.currentCategory.id
            },
            groupingShow() {
                this.defaultCategory = this.currentCategory.id
            },
            //修改图片名称
            handleRenameImage(image) {
                if (this.changeImageName) {
                    let formData = Object.assign({'name': this.changeImageName})
                    updateImages(image.id, formData).then(response => {
                        image.name = this.changeImageName
                        image.renameVisible = false
                    })

                }

            },
            //修改图片名称前  弹窗的显示
            handleChangeImageNameShow(name) {
                this.changeImageName = name
            },
            //修改图片名称  弹窗的隐藏
            handleChangeImageNameHide() {
                this.changeImageName = ''
            },
            //复制图片链接
            copyImageLink(id) {
                this.images.forEach(function (image, index) {
                    if (id == image.id) {
//                        this.images[index].name = this.changeImageName
                        this.images[index].renameVisible = false
                    }
                }, this)
            },
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .app-main {
        display: grid;
    }

    .media-container {
        overflow: hidden;
        margin-right: 150px;
    }

    .category-container {
        width: 120px;
        min-height: 350px;
        padding: 10px 0;
        background: #F8F8F8;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;

        .category-list {
            margin-bottom: 15px;
            max-height: 996px;
            overflow-y: auto;
            .active {
                background: #fff;
            }
            li {
                .category-name {
                    width: 80px;
                    display: inline-block;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                }
                .category-num {
                    position: absolute;
                    top: 0;
                    right: 8px;
                    color: #999;
                }
                height: 40px;
                line-height: 40px;
                position: relative;
                padding: 0 31px 0 8px;
                margin-right: 1px;
                cursor: pointer;
            }
        }
    }

    .media-title {
        height: 28px;
    }

    .media-title-wrap h1 {
        display: inline;
        line-height: 28px;
        font-size: 16px;
        font-weight: normal;
        margin-right: 10px;
    }

    .action-bar {
        background: #f8f8f8;
        padding: 6px 6px;
        margin-bottom: 20px;
        min-height: 28px;
        line-height: 28px;
    }

    .mini input {
        margin: 0 6px 0 0;
        vertical-align: baseline;
        font-size: 12px;
    }

    .popover-foot {
        margin-top: 6px;
        button {
            padding: 7px 20px;
        }
    }

    .image-box {
        width: 160px;
        height: 160px;
        background: #ddd;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;
    }

    .image-item {
        margin-bottom: 20px;
    }

    .image-title {
        padding: 8px 0px 0px;
        overflow: hidden;
        label {
            display: inline-block;
            width: 160px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
    }

    .pagination {
        text-align: right;
        margin: 0 20px 30px 0;
    }

    .maxBox {
        padding: 20px 160px 20px 20px;
        width: 96%;
        margin-left: 20px;
        margin-top: 20px;
        box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.08), -3px -3px 4px rgba(0, 0, 0, 0.08);
        .titl{
            border-bottom: 2px solid #eff0f3;
            padding-bottom: 20px;
            margin-bottom: 20px;
            font-size: 14px;
            font-weight: 700;
            .iconfont{
                margin-right: 10px;
            }
        }
    }

    .addGroup {
        /*background: blue;*/
        position: absolute;
        right: 60px;
        top: 200px;
        width: inherit;
    }
</style>
