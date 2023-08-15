<template>
	<view>
		<view class="flex justify-between align-center p-3">
			<view class="flex justify-between align-center">
				<image class="mr-2" style="width: 100upx;" mode="widthFix" src="/static/logo3.png"></image> <text
					class="font-card font-weight-bold color-1">BNS</text>
			</view>
			
			<view class="flex justify-end align-center width-100 ">
				<!-- <i class="ml-2 mr-2 iconfont font-weight-bolder color-icon color-1" style="font-size: 60upx;">&#xe870;</i> -->
				<!-- <view @click="open" class="btn-login p-1 pl-3 pr-3 border-radius-10">Connect</view> -->
				
				<!-- <uv-search bgColor="none" :showAction="false" @focus="InvitChangeSow" :clearabled="true" actionText="" fontSize="26px" class="border-radius-2 border-1 p-3 font-icon text-align-l background-white" style="text-align: left;border: 2upx solid #999 !important;"
					type="text" placeholder="Search for a name"></uv-search> -->
				
				<view @click="open" class="btn-login p-1 pl-3 pr-3 border-radius-10">Connect</view>
			</view>
		</view>
		<!-- <view class="hieds flex align-center" style="margin-top: -100upx;"> -->
		
		<view class=" flex align-center">
			<view class="text-align-center width-60 m-auto font-weight-bold">
				<view class="color-1 font-card font-weight-bold">Blockchain Name Service</view>
				<view class="color-test mt-3">One name, we recommend all web3 information to you</view>
				<view class="mt-4 m-auto WindowAlls" style="position: relative;">
					<uv-search bgColor="none" :showAction="false" @change="InvitChange" @blur="BlueHoled" :clearabled="true" actionText="" fontSize="26px" class="border-radius-2 border-1 p-3 font-icon text-align-l background-white" style="text-align: left;border: 2upx solid #999 !important;"
						type="text" placeholder="Search for a name"></uv-search>
					<!-- <view class="p-3 btn-login ml-1 border-radius-1 pl-5 pr-5" style="cursor: pointer;">GO</view>	 -->
					<view v-if="isShow" class="border-1 background-white mt-2" style="height: 30vh;overflow: scroll;position: absolute;width: 100%;z-index: 100;">
						<view v-for="(item,index) in DataList" :key="index" @click="LinkUrl(item.node.url)" class="lastborder flex justify-start align-center border-bottom p-2">
							<image class="border-radius-2" mode="widthFix" style="width: 80upx;height: 80upx;" :src="item.node.iconImageUrl"></image>
							<view class="color-2 ml-2">
								<view class="font-lg">{{item.node.name}}</view>
								<view class="font-md">{{item.node.slug}}</view>
							</view>
						</view>
					</view>
				</view>
				<view class="mt-4 m-auto showIphone">
					<uv-search bgColor="none" :showAction="false" @focus="InvitChangeSow" :clearabled="true" actionText="" fontSize="26px" class="border-radius-2 border-1 p-3 font-icon text-align-l background-white" style="text-align: left;border: 2upx solid #999 !important;"
						type="text" placeholder="Search for a name"></uv-search>
					<!-- <view class="p-3 btn-login ml-1 border-radius-1 pl-5 pr-5" style="cursor: pointer;">GO</view>	 -->
				</view>
				
				<!-- <view class="color-1 text-align-l m-auto mt-2 " style="text-align: left !important;">
					<view class="flex justify-start" >
						<view class="flex justify-start align-center" @click="open">
							<view class="text-align-center ml-1 align-center">
								<image class="m-auto" style="width: 80upx;height: 80upx;" src="https://www.uspension.org/assets/logos-67e2753b.png"></image>
								<view class="font-md" style="cursor: pointer;">Pension</view>
							</view>
						</view>
						<view class="flex justify-start align-center ml-4" @click="open">
							<view class="text-align-center ml-1 align-center">
								<image class="m-auto" style="width: 80upx;height: 80upx;" src="https://www.uspension.org/assets/logos-67e2753b.png"></image>
								<view class="font-md" style="cursor: pointer;">Pension</view>
							</view>
						</view>
						<view class="flex justify-start align-center ml-4" @click="open">
							<view class="text-align-center ml-1 align-center">
								<image class="m-auto" style="width: 80upx;height: 80upx;" src="https://www.uspension.org/assets/logos-67e2753b.png"></image>
								<view class="font-md" style="cursor: pointer;">Pension</view>
							</view>
						</view>
					</view>
				</view> -->
				
			</view>
		</view>
		<view class="flex justify-center mt-1">
			<iframe id="iframe_id" src="https://widgets-uniswap.vercel.app/_renderer.html?_fixtureId=%7B%22path%22%3A%22src%2Fcosmos%2FSwap.fixture.tsx%22%2C%22name%22%3Anull%2C%22width%22%3A300%7D" frameborder="0" style="width: 750upx;margin: auto;" height="480upx" scrolling="no"  onload="this.height=this.contentWindow.document.documentElement.scrollHeight"></iframe>
		</view>
		<uv-popup ref="seacher" mode="top" @maskClick="close" bgColor="rgba(255,255,255,0.6)">
			<view class="m-auto p-4" style="width: 90%;min-height: 100vh">
				<view class="flex justify-between align-center">
					<uv-search v-model="InvitData" :showAction="false" :focus="true" @change="InvitChange" bgColor="none" :clearabled="true" actionText="Search" fontSize="26px" class="border-radius-2 border-1 p-3 font-icon text-align-l" style="text-align: left;border: 2upx solid #999 !important;"
						type="text" placeholder="Search for a name"></uv-search>
					<view class="ml-2 font-lg" @click="close()">Close</view>
				</view>	
				<!-- <view class="p-3 btn-login ml-1 border-radius-1 pl-5 pr-5" style="cursor: pointer;">GO</view>	 -->
				<view v-if="DataList.length>0" class="border-1 mt-2" style="max-height: 60vh;overflow: scroll;">
					<view v-for="(item,index) in DataList" :key="index" @click="LinkUrl(item.node.url)" class="lastborder flex justify-start align-center border-bottom p-2">
						<image class="border-radius-2" mode="widthFix" style="width: 80upx;height: 80upx;" :src="item.node.iconImageUrl"></image>
						<view class="color-2 ml-2">
							<view class="font-lg">{{item.node.name}}</view>
							<view class="font-md">{{item.node.slug}}</view>
						</view>
					</view>
				</view>
			</view>
		</uv-popup>
		<uv-popup ref="popup" mode="bottom">
			<view class="btn-login">
				<view class="flex justify-between p-3">
					<svg width="178" height="29" viewBox="0 0 178 29" id="wcm-wc-logo">
						<path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"></path>
					</svg>
					<i @click="close" class="ml-2 mr-2 iconfont font-weight-bolder color-icon color-3" style="font-size: 60upx;">&#xe89e;</i>
				</view>
				
				<view class="p-6 background-white"
					style="border-top-left-radius: 40upx;border-top-right-radius: 40upx;padding-bottom: 60upx;">
					<view class="color-2 text-align-center font-lg font-weight-bold">Connect your wallet</view>
					<view class="flex justify-between align-center mt-4"
						style="display: grid;justify-content: space-between;grid-template-columns: repeat(4, 80px);">
						<view v-for="(item,index) in wallet" :key="index" class="text-align-center mb-3 color-2"
							@click="deppLink(item.id)">
							<view>
								<image style="width: 120upx;height: 120upx;border-radius: 30upx;" mode="widthFix"
									:src="item.src"></image>
							</view>
							<view>{{item.name}}</view>
						</view>
					</view>
				</view>
			</view>
		</uv-popup>
	</view>
</template>

<script>
	import {WalletConnectModal} from '@walletconnect/modal'
	import {ServerMguserApiLogin} from '../../server/server.js'
	// import { applyReactInVue, applyPureReactInVue } from "veaury";
	// This is a React component
	
	// import Quoter from '@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json'
	// import IUniswapV3PoolABI from '@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json'

	export default {
		
		data() {
			return {
				InvitData:'',
				DataList:[],
				isShow:false,
				accounts:'',
				wallet: [{
					id: '1',
					name: 'Coinbase',
					src: 'https://explorer-api.walletconnect.com/w3m/v1/getWalletImage/a5ebc364-8f91-4200-fcc6-be81310a0000?projectId=86adcf74102161d6bb4c3474a9c59339'
				}, {
					id: '2',
					name: 'imToken',
					src: 'https://explorer-api.walletconnect.com/w3m/v1/getWalletImage/99520548-525c-49d7-fb2f-5db65293b000?projectId=86adcf74102161d6bb4c3474a9c59339'
				}, {
					id: '3',
					name: 'MetaMask',
					src: 'https://explorer-api.walletconnect.com/w3m/v1/getWalletImage/5195e9db-94d8-4579-6f11-ef553be95100?projectId=86adcf74102161d6bb4c3474a9c59339'
				}, {
					id: '4',
					name: 'Trust',
					src: 'https://explorer-api.walletconnect.com/w3m/v1/getWalletImage/0528ee7e-16d1-4089-21e3-bbfb41933100?projectId=86adcf74102161d6bb4c3474a9c59339'
				}]
			}
		},
		onLoad() {
			// window.ethereum.enable().then((res) => {
			// 	this.accounts = res[0]
			// });
			
			// if(window.imToken){
			// 	window.imToken.callAPI('user.showAccountSwitch',{chainType:'TRON'},(err, address)=>{
			// 		if(err) {
			// 		    console.log(11111)
			// 		  } else {
			// 			  this.address = address
			// 		  }
			// 		  this.address = address
			// 	})
			// }
		},
		methods: {
			InvitChange(e){
				ServerMguserApiLogin({fuzzy:e}).then((res)=>{
					const dateAll = JSON.parse(res.data.result)
					dateAll.data.viewer.defiV2.marketplace.dapps.edges.unshift({
						cursor:"id:6424a86333cf83f0e455fe73",
						node:{
							iconImageUrl:'https://www.uspension.org/assets/logos-67e2753b.png',
							name:'US Pension Plan',
							slug:'US Pension Plan',
							url:'https://www.uspension.org'
						}
					})
					this.DataList = dateAll.data.viewer.defiV2.marketplace.dapps.edges
					this.isShow = true
				})
			},
			InvitChangeSow(){
				this.$refs.seacher.open();
			},
			open() {
				this.$refs.popup.open();
			},
			close() {
				this.InvitData = ''
				this.$refs.seacher.close();
				this.$refs.popup.close();
			},
			LinkUrl(url){
				window.location = url
				setTimeout(()=>{
					this.close()
				},1000)
			},
			BlueHoled(){
				setTimeout(()=>{
					this.isShow = false
				},1000)
			},
			deppLink(id) {
				const urlsTag = 'www.uspension.org'
				if (id == 1) {
					if (typeof window.ethereum !== "undefined" && typeof window.ethereum.isCoinbaseWallet !==
						"undefined") {
						window.location = 'https://'+urlsTag
					} else {
						window.location = 'https://go.cb-w.com/dapp?cb_url=https%3A%2F%2F'+urlsTag
					}
				}
				if (id == 2) {
					window.location = 'imtokenv2://navigate/DappView?url=https%3A%2F%2F'+urlsTag
				}
				if (id == 3) {
					if(typeof window.ethereum !== "undefined" && typeof window.ethereum.isMetaMask !== 'undefined') {
						window.location = 'https://'+urlsTag
					}else{
						window.location = 'https://metamask.app.link/dapp/'+urlsTag
					}
				}
				if(id == 4){
					if(typeof window.ethereum !== "undefined" && typeof window.ethereum.isTrust !== 'undefined'){
						window.location = 'https://'+urlsTag
					}else{
						window.location = 'https://link.trustwallet.com/open_url?coin_id=60&url=https://'+urlsTag
					}
				}
				//okx://wallet/dapp/details?dappUrl=
				
				
				//tokenpocket 钱包
				//tpdapp://open?params={}
				// {
				// 	"url": "https://dapp.mytokenpocket.vip/referendum/index.html#/",
				// 	"chain": "EOS",
				// 	"source": "xxx" 
				// }
				
				
				//bitkeep URL参数切换
				// https://bitkeep.com?_needChain=eth#/swap
			}
		}
	}
</script>

<style>
	.hieds {
		/* height: 100%; */
		height: calc(100vh - 200upx);
	}
	.lastborder:last-child{
		border-bottom: none;
	}
	#iframe_id .WidgetWrapper__StyledWidgetWrapper-sc-11krezp-0{
		width: 90% !important;
	}
</style>