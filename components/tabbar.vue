<template>
	<view>
		<view class='tab-bar-container' :style="{'height': isIphoneX ? '80px': '45px' }">
			<!-- 普通用户 -->
			<block v-if="Status==1">
				<navigator class="navigator" :class="{'active': index == navActive}" v-for="(item, index) in navs" :key="item.url"
				 open-type="switchTab" :url="item.url" hover-class="none">
					<view class="tabImage">
						<image class="tabbarIcon" mode="aspectFill" :src="item.selectedIconPath" v-if="index == navActive"></image>
						<image class="tabbarIcon" mode="aspectFill" :src="item.iconPath" v-else></image>
					</view>
					<view class="text">{{item.text}}</view>
				</navigator>
			</block>


			<!-- 扫码员 -->
			<block v-else>
				<navigator class="navigator" :class="{'active': index == navActive}" v-for="(item, index) in navs2" :key="item.url"
				 open-type="switchTab" :url="item.url" hover-class="none">
					<view class="tabImage">
						<image class="tabbarIcon" mode="aspectFill" :src="item.selectedIconPath" v-if="index == navActive"></image>
						<image class="tabbarIcon" mode="aspectFill" :src="item.iconPath" v-else></image>
					</view>
					<view class="text">{{item.text}}</view>
				</navigator>
			</block>


		</view>
	</view>


</template>

<script>
	let App = getApp();



	export default {
		name: "tabbar",
		data() {
			return {
				currentIndexNav: 0,
				navs: [{
						text: '首页(uni)',
						url: '../index/index',
						"iconPath": "/static/images/link-icon1.png",
						"selectedIconPath": "/static/images/link-icon1-hover.png"
					},
					{
						text: '我的(uni)',
						url: '../my/my',
						"iconPath": "/static/images/link-icon2.png",
						"selectedIconPath": "/static/images/link-icon2-hover.png"
					},
				],

				navs2: [{
						text: '首页(uni)扫码',
						url: '../scanPeople/scanPeople',
						"iconPath": "/static/images/link-icon1.png",
						"selectedIconPath": "/static/images/link-icon1-hover.png"
					},
					{
						text: '我的(uni)扫码',
						url: '../my/my',
						"iconPath": "/static/images/link-icon2.png",
						"selectedIconPath": "/static/images/link-icon2-hover.png"
					},
				],


				isIphoneX: App.globalData.isIphoneX,
				// // 身份 1:参会人员 2:扫码人员
				Status: App.globalData.Status,
			}
		},
		props: {
			// 当前导航高亮
			navActive: {
				// 类型
				type: Number,
				// 默认值
				value: 0
			}
		},
		mounted() {
			console.log(this.isIphoneX, "88");
			console.log(this.Status, "9999")
		},
		methods: {

		},
	}
</script>

<style lang="scss" scoped>
	.tab-bar-container {
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 999;
		width: 100%;
		box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.12);
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		padding: 0 5rpx;
		padding-top: 8rpx;
		box-sizing: border-box;
		background-color: #fff;
		// background-color: red;

		.navigator {
			// height: 100%;
			width: 50%;
			display: flex;
			flex-wrap: wrap;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			position: relative;

			.tabImage {
				font-size: 0;

				image {
					width: 22px;
					height: 22px;
				}
			}

			.text {
				font-size: 24rpx;
				color: #333;
			}

			&.active {
				.text {
					color: #9c528a;
				}
			}
		}
	}
</style>
