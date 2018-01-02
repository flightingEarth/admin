<template>
    <div class="main">
        <div class="search">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <div class="title">
                    <i class="iconfont icon-shuxie"></i>
                    <span>编辑门票</span>
                </div>
                <div class="input">
                    <el-row>
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
<<<<<<< HEAD
                                <span><i>|</i>门票名称:</span>
                                <el-form-item label="门票名称" prop="ticketName">
                                    <el-input v-model="ruleForm.ticketName"></el-input>
=======
                                <span><i>|</i>票&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;种:</span>
                                <el-form-item label="膳食安排" prop="ticketType">
                                    <el-select v-model="ruleForm.ticketType" placeholder="请选择">
                                        <el-option label="普通票" value="0"></el-option>
                                    </el-select>
>>>>>>> sss
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
<<<<<<< HEAD
                                <span><i>|</i>票&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;种:</span>
                                <el-form-item label="票种" prop="ticketType">
                                    <el-select v-model="ruleForm.ticketType" placeholder="请选择">
                                        <el-option label="普通票" value="0"></el-option>
                                        <el-option label="年票" value="1"></el-option>
                                    </el-select>
=======
                                <span><i>|</i>门票名称:</span>
                                <el-form-item label="膳食安排" prop="ticketName">
                                    <el-input v-model="ruleForm.ticketName"></el-input>
>>>>>>> sss
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>审核状态:</span>
<<<<<<< HEAD
                                <el-form-item label="活动区域" prop="auditStatus">
                                    <el-select v-model="ruleForm.auditStatus" placeholder="请选择">
=======
                                <el-form-item label="活动区域" prop="status">
                                    <el-select v-model="ruleForm.status" placeholder="请选择">
>>>>>>> sss
                                        <el-option label="审核通过" value="0"></el-option>
                                        <el-option label="审核未通过" value="1"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>上&nbsp;下&nbsp; 架:</span>
<<<<<<< HEAD
                                <el-form-item label="活动区域" prop="status">
                                    <el-select v-model="ruleForm.status" placeholder="请选择">
=======
                                <el-form-item label="活动区域" prop="upDown">
                                    <el-select v-model="ruleForm.upDown" placeholder="请选择">
>>>>>>> sss
                                        <el-option label="上架" value="0"></el-option>
                                        <el-option label="下架" value="1"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>

<<<<<<< HEAD
                        <el-col :span="20">
                            <div class="grid-content bg-purple-light double">
                                <span><i>|</i>入园时间:</span>
                                <el-form-item label="入园时间" prop="in_time">
                                    <el-time-select
                                            v-model="ruleForm.in_time"
                                            :picker-options="{start: '08:30',step: '00:15',end: '12:30'}"
                                            placeholder="入园时间">
                                    </el-time-select>
                                    <span class="zhi">至</span>

                                    <el-time-select
                                            v-model="ruleForm.out_time"
                                            :picker-options="{start: '12:30',step: '00:15',end: '20:30'}"
                                            placeholder="闭园时间">
                                    </el-time-select>
=======
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>取票地址:</span>
                                <el-form-item label="膳食安排" prop="address">
                                    <el-input v-model="ruleForm.address"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>进行活动:</span>
                                <el-form-item label="活动区域" prop="activities">
                                    <el-select v-model="ruleForm.activities" placeholder="请选择">
                                        <el-option label="无活动" value="0"></el-option>
                                        <el-option label="有活动" value="1"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>


                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>时间类型:</span>
                                <el-form-item label="膳食安排" prop="timeType">
                                    <el-radio-group v-model="ruleForm.timeType">
                                        <el-radio label="全部"></el-radio>
                                        <el-radio label="日常票"></el-radio>
                                        <el-radio label="周末票"></el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>支付方式:</span>
                                <el-form-item label="膳食安排" prop="pay">
                                    <el-radio-group v-model="ruleForm.pay">
                                        <el-radio label="在线支付"></el-radio>
                                        <el-radio label="景区到付"></el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="20">
                            <div class="grid-content bg-purple-light double">
                                <span><i>|</i>入园时间:</span>
                                <el-form-item label="活动区域" prop="inTime">
                                    <el-date-picker
                                            v-model="inTime"
                                            type="date"
                                            placeholder="选择日期">
                                    </el-date-picker>
                                    <span class="zhi">至</span>
                                    <el-date-picker
                                            v-model="outTime"
                                            type="date"
                                            placeholder="选择日期"
                                            :picker-options="minInTime">
                                    </el-date-picker>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="22">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>入园方式:</span>
                                <el-form-item label="活动形式" prop="inType">
                                    <el-input type="textarea" v-model="ruleForm.inType"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="22">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>包含项目:</span>
                                <el-form-item label="活动形式" prop="include">
                                    <el-input type="textarea" v-model="ruleForm.include"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="22">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>退票说明:</span>
                                <el-form-item label="活动形式" prop="refundTicket">
                                    <el-input type="textarea" v-model="ruleForm.refundTicket"></el-input>
>>>>>>> sss
                                </el-form-item>
                            </div>
                        </el-col>

                    </el-row>
                </div>
                <div class="title title1">
                    <i class="iconfont icon-gouwuche"></i>
                    <span>门票购买规则</span>
                </div>
                <div class="input">
                    <el-row>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light double double12">
<<<<<<< HEAD
                                <span><i>|</i>可&nbsp;&nbsp;&nbsp;售&nbsp;&nbsp;日&nbsp;&nbsp;期:</span>
                                <el-form-item label="售卖日期" prop="sell_start_time">
                                    <el-date-picker
                                            v-model="sell_start_time"
                                            type="date"
                                            format="yyyy-MM-dd"
=======
                                <span><i>|</i>有&nbsp;&nbsp;&nbsp;效&nbsp;&nbsp;日&nbsp;&nbsp;期:</span>
                                <el-form-item label="活动区域" prop="validTime">
                                    <el-date-picker
                                            v-model="validTime"
                                            type="date"
>>>>>>> sss
                                            placeholder="选择日期">
                                    </el-date-picker>
                                    <span class="zhi">至</span>
                                    <el-date-picker
<<<<<<< HEAD
                                            v-model="ruleForm.sell_end_time"
                                            type="date"
                                            placeholder="选择日期"
                                            format="yyyy-MM-dd"
                                            :picker-options="minInTime">
=======
                                            v-model="validedTime"
                                            type="date"
                                            placeholder="选择日期"
                                            :picker-options="minValidTime">
>>>>>>> sss
                                    </el-date-picker>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
<<<<<<< HEAD
                                <span><i>|</i>推迟游玩天数:</span>
                                <el-form-item label="推迟游玩天数" prop="delay_days">
                                    <el-input value="number" v-model="ruleForm.delay_days"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>提前预定天数:</span>
                                <el-form-item label="提前预定天数" prop="orderTime">
                                    <el-input value="number"  v-model="ruleForm.advance_date"></el-input>
=======
                                <span><i>|</i>提前预定时间:</span>
                                <el-form-item label="膳食安排" prop="orderTime">
                                    <el-input v-model="ruleForm.orderTime"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>预订频次限制:</span>
                                <el-form-item label="膳食安排" prop="timesLimit">
                                    <el-radio-group v-model="ruleForm.timesLimit">
                                        <el-radio label="无"></el-radio>
                                        <el-radio label="1天"></el-radio>
                                        <el-radio label="1周"></el-radio>
                                        <el-radio label="1月"></el-radio>
                                        <el-radio label="1年"></el-radio>
                                    </el-radio-group>
>>>>>>> sss
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
<<<<<<< HEAD
                                <span><i>|</i>提前预定时间:</span>
                                <el-form-item label="膳食安排" prop="advance_time">
                                    <el-time-select
                                            v-model="ruleForm.advance_time"
                                            :picker-options="{start: '08:30',step: '00:15',end: '12:30'}"
                                            placeholder="入园时间">
                                    </el-time-select>
=======
                                <span><i>|</i>团购最低张数:</span>
                                <el-form-item label="膳食安排" prop="minNumber">
                                    <el-input v-model="ruleForm.minNumber"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>结&nbsp;&nbsp;&nbsp;算&nbsp;&nbsp;方&nbsp;&nbsp;式:</span>
                                <el-form-item label="膳食安排" prop="balanceType">
                                    <el-radio-group v-model="ruleForm.balanceType">
                                        <el-radio label="系统结算"></el-radio>
                                        <el-radio label="自主结算"></el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>身份证是否必填:</span>
                                <el-form-item label="膳食安排" prop="card">
                                    <el-radio-group v-model="ruleForm.card">
                                        <el-radio label="是"></el-radio>
                                        <el-radio label="否"></el-radio>
                                    </el-radio-group>
>>>>>>> sss
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>
                </div>


                <div class="title title1">
                    <i class="iconfont icon-guize"></i>
                    <span>门票使用规则</span>
                </div>
                <div class="input">
                    <el-row>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
<<<<<<< HEAD
                                <span><i>|</i>一次最多购买的票数:</span>
                                <el-form-item label="一次最多购买的票数" prop="orderTime">
                                    <el-input v-model="ruleForm.buy_limit_up"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>一次最少购买的票数:</span>
                                <el-form-item label="一次最多购买的票数" prop="orderTime">
                                    <el-input v-model="ruleForm.buy_limit_low"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>限购方式:</span>
                                <el-form-item label="限购方式" prop="orderTime">
                                    <el-select v-model="ruleForm.buy_limit_date" placeholder="请选择">
                                        <el-option label="整个销售时间段" value="0"></el-option>
                                        <el-option label="每日" value="1"></el-option>
                                        <el-option label="每周" value="2"></el-option>
                                        <el-option label="每月" value="3"></el-option>
                                        <el-option label="每年" value="4"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>


                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>限购规则:</span>
                                <el-form-item label="限购方式" prop="orderTime">
                                    <el-select v-model="ruleForm.buy_limit" placeholder="请选择">
                                        <el-option label="不限" value="0"></el-option>
                                        <el-option label="手机号限购每张" value="1"></el-option>
                                        <el-option label="手机号限购每笔" value="2"></el-option>
                                        <el-option label="身份证限购每张" value="3"></el-option>
                                        <el-option label="身份整限购每笔" value="4"></el-option>
                                        <el-option label="手机号+身份证每张" value="5"></el-option>
                                        <el-option label="手机号+身份证每笔" value="6"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>限购张数:</span>
                                <el-form-item label="限购张数" prop="orderTime">
                                    <el-input value="number" v-model="ruleForm.buy_limit_num"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>



                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>退票规则:</span>
                                <el-form-item label="退票规则" prop="refund_rule">
                                    <el-select v-model="ruleForm.refund_rule" placeholder="请选择">
                                        <el-option label="随时退" value="0"></el-option>
                                        <el-option label="可退" value="1"></el-option>
                                        <el-option label="不可退" value="2"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>可退天数限制:</span>
                                <el-form-item label="膳食安排" prop="refund_day">
                                    <el-input v-model="ruleForm.refund_day"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>可退时分限制:</span>
                                <el-form-item label="可退时分限制" prop="refund_time">
                                    <el-time-select
                                            v-model="ruleForm.refund_time"
                                            :picker-options="{ start: '08:30', step: '00:15', end: '18:30'}"
                                            placeholder="选择时间">
                                    </el-time-select>
=======
                                <span><i>|</i>使&nbsp;&nbsp;&nbsp;用&nbsp;&nbsp;&nbsp;方&nbsp;&nbsp;&nbsp;式:</span>
                                <el-form-item label="膳食安排" prop="useType">
                                    <el-select v-model="ruleForm.useType" placeholder="请选择">
                                        <el-option label="刷身份证" value="0"></el-option>
                                        <el-option label="刷票" value="1"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>使用有效期（天）:</span>
                                <el-form-item label="膳食安排" prop="useTime">
                                    <el-input v-model="ruleForm.useTime"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>预订延后（h）:</span>
                                <el-form-item label="膳食安排" prop="delay">
                                    <el-input v-model="ruleForm.delay"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>可&nbsp;申&nbsp;请&nbsp;退票&nbsp;时间:</span>
                                <el-form-item label="膳食安排" prop="refundTicketTime">
                                    <el-input v-model="ruleForm.refundTicketTime"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>退票规则::</span>
                                <el-form-item label="膳食安排" prop="refundTicketRule">
                                    <el-radio-group v-model="ruleForm.refundTicketRule">
                                        <el-radio label="可退"></el-radio>
                                        <el-radio label="不可退"></el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>是否支持部分可退:</span>
                                <el-form-item label="膳食安排" prop="support">
                                    <el-radio-group v-model="ruleForm.support">
                                        <el-radio label="是"></el-radio>
                                        <el-radio label="否"></el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>改期规则:</span>
                                <el-form-item label="膳食安排" prop="changeRule">
                                    <el-radio-group v-model="ruleForm.changeRule">
                                        <el-radio label="可改"></el-radio>
                                        <el-radio label="不可改"></el-radio>
                                    </el-radio-group>
>>>>>>> sss
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>
                </div>

                <div class="title title1">
                    <i class="iconfont icon-qian"></i>
                    <span>价格信息</span>
                </div>
                <div class="input">
                    <el-row>
<<<<<<< HEAD
                        <el-col :span="8">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>市场价格:</span>
                                <el-form-item label="市场价格" prop="market_price">
                                    <el-input v-model="ruleForm.market_price"></el-input>
=======

                        <el-col :span="8">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>市场价格:</span>
                                <el-form-item label="膳食安排" prop="marketPrice">
                                    <el-input v-model="ruleForm.marketPrice"></el-input>
>>>>>>> sss
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>供应价格:</span>
<<<<<<< HEAD
                                <el-form-item label="供应价格" prop="provide_price">
                                    <el-input v-model="ruleForm.provide_price"></el-input>
=======
                                <el-form-item label="膳食安排" prop="supplyTime">
                                    <el-input v-model="ruleForm.supplyTime"></el-input>
>>>>>>> sss
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>销售价格:</span>
<<<<<<< HEAD
                                <el-form-item label="销售价格" prop="shop_price">
                                    <el-input v-model="ruleForm.shop_price"></el-input>
=======
                                <el-form-item label="膳食安排" prop="salesPrice">
                                    <el-input v-model="ruleForm.salesPrice"></el-input>
>>>>>>> sss
                                </el-form-item>
                            </div>
                        </el-col>

<<<<<<< HEAD
                        <el-col :span="8">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>库存:</span>
                                <el-form-item label="销售价格" prop="remain">
                                    <el-input v-model="ruleForm.remain"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="22">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>取票地址:</span>
                                <el-form-item label="取票地址" prop="address">
                                    <el-input v-model="ruleForm.address"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="22">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>入园方式:</span>
                                <el-form-item label="活动形式" prop="park_mode">
                                    <el-input type="textarea" v-model="ruleForm.park_mode"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="22">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>包含项目:</span>
                                <el-form-item label="包含项目" prop="contain_item">
                                    <el-input type="textarea" v-model="ruleForm.contain_item"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="22">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>退票说明:</span>
                                <el-form-item label="活动形式" prop="refund_info">
                                    <el-input type="textarea" v-model="ruleForm.refund_info"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="22">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>使用说明:</span>
                                <el-form-item label="使用说明" prop="instructions">
                                    <el-input type="textarea" v-model="ruleForm.instructions"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
=======
>>>>>>> sss
                    </el-row>
                </div>


                <div class="input">
                    <el-row>
                        <el-col :span="24">
                            <el-button type="primary" @click="submitForm('ruleForm')">添加</el-button>
                            <el-button>返回</el-button>
                        </el-col>
                    </el-row>
                </div>

            </el-form>
        </div>


    </div>
</template>

<script>
<<<<<<< HEAD
    import { parseTime } from '@/utils';
    import { updateTicket, addTicket } from '@/api/ticket'
    export default {
        name: 'addTicket',
        props: {
            ruleForm: {
                type: Object,
                default() {
                    return {
                    }
                }
            }
        },
        data() {
            return {
                scenicId: 0,
                sell_start_time: '',
                minInTime: {
                    disabledDate: (time) => {
//                        console.log(time)
                        return time.getTime() < this.sell_start_time
                    }
                },
=======
    import {fetchList} from '@/api/article';
    export default {
        name: 'addTicket',
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
                activeName: 'second',
                checkAll: false,
                checkedCities: [],
                isIndeterminate: true,
                inTime: "",
                outTime: "",
                minInTime: {
                    disabledDate: (time) => {
                        return time.getTime() < this.inTime
                    }
                },
                validTime: "",
                validedTime: "",
>>>>>>> sss
                minValidTime: {
                    disabledDate: (time) => {
                        return time.getTime() < this.validTime
                    }
                },
<<<<<<< HEAD
                rules: {
                    ticketType: [
                        {required: true, message: '请选择门票票种', trigger: 'change'}
                    ],
                    ticketName: [
                        {required: true, message: '请输入门票名称', trigger: 'blur'}
                    ],
                    status: [
                        {required: true, message: '请选择门票售卖状态', trigger: 'change'}
                    ],
                    auditStatus: [
                        {required: true, message: '请选择门票审核状态', trigger: 'change'}
                    ],
                    address: [
                        { required: true, message: '请填写取票地址', trigger: 'blur'}
                    ],
                    in_time: [
                        {required: true, message: '请填写入园时间', trigger: 'change'}
                    ],
                    sell_end_time: [
                        {required: true, type:'date', message: '请选择售卖日期', trigger: 'change'}
                    ],
                    advance_date: [
                        {required: true, message: '请填写提前预定天数', trigger: 'blur'}
                    ],
                    advance_time: [
                        {required: true, message: '请选择提前预订时间', trigger: 'blur'}
                    ],
                    buy_limit_up: [
                        {required: true, message: '请填写一次最多购买的票数', trigger: 'blur'}
                    ],
                    buy_limit_low: [
                        {required: true, message: '请填写一次最少购买的票数', trigger: 'blur'}
                    ],
                    buy_limit: [
                        {required: true, message: '请选择限购的规则', trigger: 'change'}
                    ],
                    buy_limit_date: [
                        {required: true, message: '请选择限购的方式', trigger: 'change'}
                    ],
                    buy_limit_num: [
                        {required: true, message: '请选择限购的限购张数', trigger: 'blur'}
                    ],
                    market_price: [
                        {required: true, message: '请请输入门票市场价',trigger: 'blur'}
                    ],
                    shop_price: [
                        {required: true, message: '请填写门票的销售价', trigger: 'blur'}
                    ],
                    provide_price: [
                        {required: true, message: '请填写门票的供应价', trigger: 'blur'}
                    ],
                    delay_days: [
                        {required: true, message: '请填写门票可推迟游玩的天数', trigger: 'blur'}
                    ],
                    refund_rule: [
                        {required: true, message: '请选择退票规则', trigger: 'change'}
                    ],
                    refund_day: [
                        {required: true, message: '请填写门票可退天数限制', trigger: 'blur'}
                    ],
                    refund_time: [
                        {required: true, message: '请选择门票可退时间限制', trigger: 'blur'}
                    ],
                    park_mode: [
                        {required: true, message: '请填写包含项目', trigger: 'blur'}
                    ],
                    contain_item: [
                        {required: true, message: '请填写入园方式', trigger: 'blur'}
                    ],
                    refund_info: [
                        {required: true, message: '请填写退款说明', trigger: 'blur'}
                    ],
                    instructions: [
                        {required: true, message: '请填写使用说明', trigger: 'blur'}
=======
                ruleForm: {
                    ticketType: "",
                    ticketName: "",
                    status: "",
                    upDown: "",
                    address: "",
                    activities: "",
                    timeType: "",
                    pay: "",
                    inType: "",
                    include: "",
                    refundTicket: "",
                    orderTime: "",
                    timesLimit: "",
                    minNumber: "",
                    balanceType: "",
                    card: "",
                    useType: "",
                    useTime: "",
                    delay: "",
                    refundTicketTime: "",
                    refundTicketRule: "",
                    support: "",
                    changeRule: "",
                    marketPrice: "",
                    supplyTime: "",
                    salesPrice: ""
                },
                rules: {
                    ticketType: [
                        {required: true, message: '此处不能为空', trigger: 'change'}
                    ],
                    ticketName: [
                        {required: true, message: '此处不能为空', trigger: 'blur'}
                    ],
                    status: [
                        {required: true, message: '此处不能为空', trigger: 'change'}
                    ],
                    upDown: [
                        {required: true, message: '此处不能为空', trigger: 'change'}
                    ],
                    address: [
                        {required: true, message: '此处不能为空', trigger: 'blur'}
                    ],
                    activities: [
                        {required: true, message: '此处不能为空', trigger: 'change'}
                    ],
                    timeType: [
                        {required: true, message: '此处不能为空', trigger: 'change'}
                    ],
                    pay: [
                        {required: true, message: '此处不能为空', trigger: 'change'}
                    ],
                    inType: [
                        {required: true, message: '此处不能为空', trigger: 'blur'}
                    ],
                    include: [
                        {required: true, message: '此处不能为空', trigger: 'blur'}
                    ],
                    refundTicket: [
                        {required: true, message: '此处不能为空', trigger: 'blur'}
                    ],
                    orderTime: [
                        {required: true, message: '此处不能为空', trigger: 'blur'}
                    ],
                    timesLimit: [
                        {required: true, message: '此处不能为空', trigger: 'change'}
                    ],
                    minNumber: [
                        {required: true, message: '此处不能为空', trigger: 'blur'}
                    ],
                    balanceType: [
                        {required: true, message: '此处不能为空', trigger: 'change'}
                    ],
                    card: [
                        {required: true, message: '此处不能为空', trigger: 'change'}
                    ],
                    useType: [
                        {required: true, message: '此处不能为空', trigger: 'change'}
                    ],
                    useTime: [
                        {required: true, message: '此处不能为空', trigger: 'blur'}
                    ],
                    delay: [
                        {required: true, message: '此处不能为空', trigger: 'blur'}
                    ],
                    refundTicketTime: [
                        {required: true, message: '此处不能为空', trigger: 'blur'}
                    ],
                    refundTicketRule: [
                        {required: true, message: '此处不能为空', trigger: 'change'}
                    ],
                    support: [
                        {required: true, message: '此处不能为空', trigger: 'change'}
                    ],
                    changeRule: [
                        {required: true, message: '此处不能为空', trigger: 'change'}
                    ],
                    marketPrice: [
                        {required: true, message: '此处不能为空', trigger: 'blur'}
                    ],
                    supplyTime: [
                        {required: true, message: '此处不能为空', trigger: 'blur'}
                    ],
                    salesPrice: [
                        {required: true, message: '此处不能为空', trigger: 'blur'}
>>>>>>> sss
                    ]
                }
            }
        },
<<<<<<< HEAD
        created() {
            this.scenicId = this.$route.params.scenicId
        },
=======
>>>>>>> sss
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList)
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url
                this.dialogVisible = true
            },

            submitForm(formName) {
<<<<<<< HEAD
                console.log(this.ruleForm.sell_end_time, parseTime(this.ruleForm.sell_end_time, '{y}-{m}-{d}'))
                if (!this.sell_start_time || !this.ruleForm.sell_end_time || this.sell_start_time == '0-0-0 0:0:0' || this.ruleForm.sell_end_time == '0-0-0 0:0:0') {
                    this.$message({
                        message: '请选择可售日期！',
                        type: 'error'
                    });
                    return false;
                }

                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.ruleForm.sell_start_time = parseTime(this.sell_start_time, '{y}-{m}-{d}');
                        this.ruleForm.sell_end_time = parseTime(this.ruleForm.sell_end_time, '{y}-{m}-{d}');

                        this.addLoading = true
                        if (this.ruleForm.tieketId == undefined) {
                            addTicket(this.scenicId, this.ruleForm).then(response => {
                                this.$message({
                                    message: '添加成功！',
                                    type: 'success'
                                });
                                this.handleCancel();
                            })
                        } else {
                            updateTicket(this.scenicId, this.ruleForm.tieketId, this.ruleForm).then(response => {
                                this.$message({
                                    message: '更新成功！',
                                    type: 'success'
                                });
                                this.handleCancel();
                            })
                        }

=======
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        console.log(this.ruleForm)
>>>>>>> sss
                    } else {
                        console.log('error submit!!')
                        return false
                    }
                })
            },
            resetForm(formName) {
                this.$refs[formName].resetFields()
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main {
        background: #fafafa;
        width: 100%;
        padding: 20px;
        .search {
            width: 100%;
            overflow: hidden;
            box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.08), -3px -3px 4px rgba(0, 0, 0, 0.08);
            background: #fff;
            padding: 20px;
            box-sizing: border-box;
            color: #666;
            margin-top: 5px;
            .title {
                border-bottom: 1px solid #E6E6E6;
                margin-top: 10px;
                padding-bottom: 10px;
                margin-bottom: 20px;
                span {
                    margin-left: 10px;
                }
            }
            .title1 {
                margin-top: 30px;
            }
            .input {
                span {
                    float: left;
                    margin-top: 10px;
                    margin-right: 10px;
                    i {
                        color: red;
                        margin-right: 5px;
                    }
                }
                .el-input {
                    float: left;
                    width: 73%;
                }
                .el-textarea {
                    width: 80%;
                }
                .grid-content {
                    margin-left: 20px;
                }
                .el-select {
                    width: 73%;
                }
                .el-cascader {
                    margin: 0;
                    width: 80%;
                }
                .el-col-24 {
                    text-align: center;
                    margin-top: 20px;
                    border-top: 1px solid #E6E6E6;
                    padding-top: 20px;
                    button {
                        width: 100px;
                        height: 36px;
                        line-height: 36px;
                        text-align: center;
                        padding: 0;
                    }
                    .el-button--primary {
                        border-color: #5FCAB1;
                        background: #5FCAB1;
                    }
                }
                .double {
                    .el-input {
                        width: 22.6%;
                    }
                    .zhi {
                        float: left;
                        margin-left: 10px;
                        margin-top: 0;
                    }
                }
                .double12 {
                    .el-input {
                        width: 36.6%;
                    }
                }
                .imgSuggest {
                    margin-left: 100px;
                    font-size: 12px;
                    color: #666;
                }
            }
            .el-tabs {
                margin-left: 40px;
                margin-top: 20px;
            }
            .tab {
                position: relative;
                .checkAll {
                    position: absolute;
                    right: 10px;
                    top: 10px;
                }
            }

        }
        .stayIn {
            color: #666;
        }
        .btn {
            display: inline-block;
            width: 80px;
            height: 36px;
            text-align: center;
            border-radius: 3px;
        }
        .refuse {
            background: #5fcab1;
            color: #fff;
        }
        .agree {
            border: 1px solid #DEDEDE;
            color: #666;
            margin-left: 0;
            margin-top: 5px;
        }
<<<<<<< HEAD

    }


=======
    }
>>>>>>> sss
</style>
