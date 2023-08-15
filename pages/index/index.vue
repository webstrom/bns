<template>
	<view class="width-60 m-auto">
		<view style="height: 198upx;">
			<view style="position: fixed;left: 50%;top: 0;width: 95%;transform: translate(-50%,0);z-index: 10;" class="flex justify-between align-center background-white pl-0 pr-0">
				<view class="flex justify-between align-center">
					<image class="mr-2" style="width: 100upx;" mode="widthFix" src="/static/logo3.png"></image> 
					<text class="font-card font-weight-bold color-1">BNS</text>
				</view>
				<view class="ml-2 mr-2 m-auto  border-radius-100 p-2 width-100" style="overflow: hidden;" @click="orderCodeHoled(accounts)">
					<view v-if="accounts!=''" class=" text-align-center p-1 pl-3 pr-3 border-radius-10 font-small" style="background: rgba(0,0,0,0.1);">
						<view style="text-overflow:ellipsis;overflow: hidden;">{{accounts}}</view>
						<view class="font-md font-weight-bold">${{USDTNUM}} USDT</view>
					</view>
				</view>
				<view class="flex justify-end align-center">
					<view v-if="accounts!=''" @click="open" class="btn-login p-1 pl-3 pr-3 border-radius-10">Wallet</view>
				</view>
			</view>
		</view>
		
		
		<view class="flex align-center">
			<view class=" width-60 m-auto font-weight-bold">
				<view class="text-align-center color-1 font-card font-weight-bold">Blockchain Name Service</view>
				<view class="text-align-center color-test mt-1">One name, we recommend all web3 information to you</view>
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
				<view class="mt-2 m-auto showIphone">
					<uv-search bgColor="none" :showAction="false" @focus="InvitChangeSow" :clearabled="true" actionText="" fontSize="26px" class="border-radius-2 border-1 p-3 font-icon text-align-l background-white" style="text-align: left;border: 2upx solid #999 !important;"
						type="text" placeholder="Search for a name"></uv-search>
					<!-- <view class="p-3 btn-login ml-1 border-radius-1 pl-5 pr-5" style="cursor: pointer;">GO</view>	 -->
				</view>
				<view class="font-lg border-top p-2 pl-0 mt-3">Recommend</view>
				<view class="color-1 text-align-l m-auto mt-2 " style="text-align: left !important;">
					<view class="flex justify-between" >
						<template v-for="(item,index) in boforList" >
							<view v-if="item.show" :key="index" class="flex justify-start align-center" @click="clickLink(item.link)">
								<view class="text-align-center ml-1 align-center">
									<image class="m-auto" style="width: 80upx;height: 80upx;" :src="item.src"></image>
									<view class="font-md" style="cursor: pointer;">{{item.name}}</view>
								</view>
							</view>
						</template>
					</view>
				</view>
				<view class="font-lg mt-2 border-top p-2 pl-0 pb-0">Ranking list</view>
				<view class="pb-3">
					<view v-for="(item,index) in dappList" :key="index" @click="clickLink(item.link)" class="flex justify-start mt-5 fristall">
						<image class="imgWidth" style="width: 80upx;height: 80upx;" :src="item.src"></image>
						<view class="font-md ml-3" style="cursor: pointer;">
							<view>{{item.name}}</view>
							<view class="font-small color-test" style="text-overflow:ellipsis;overflow: hidden;white-space: nowrap;width: 540upx;">{{item.introduce}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- <view class="p-3">
			<view class="font-lg font-weight-bold">Quick Order Query</view>
			<view class="mt-3 flex justify-between align-center">
				<uv-search :actionStyle="{'font-size':'40upx','width':'140upx','text-align':'center','font-weight': 600}" bgColor="none" :showAction="true" @custom="orderList" :clearabled="true" actionText="Query" fontSize="26px" class="border-radius-2 border-1 p-3 font-icon text-align-l background-white" style="text-align: left;border: 2upx solid #999 !important;"
					type="text" placeholder="Txn Hash"></uv-search>
			</view>
		</view> -->
		<!-- <view class="flex justify-center mt-1">
			<iframe id="iframe_id" src="https://widgets-uniswap.vercel.app/_renderer.html?_fixtureId=%7B%22path%22%3A%22src%2Fcosmos%2FSwap.fixture.tsx%22%2C%22name%22%3Anull%2C%22width%22%3A300%7D" frameborder="0" style="width: 750upx;margin: auto;" height="480upx" scrolling="no"  onload="this.height=this.contentWindow.document.documentElement.scrollHeight"></iframe>
		</view> -->
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
	import {ServerMguserApiLogin} from '../../server/server.js'
	import Web3 from 'web3'
	export default {
		data() {
			return {
				InvitData:'',
				DataList:[],
				isShow:false,
				accounts:'',
				USDTNUM:0,
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
				}],
				boforList:[
					{
						name:'Pension',
						introduce:'First choice of digital currency',
						link:'https://www.uspension.org',
						src:'https://www.uspension.org/assets/logos-67e2753b.png',
						show:true
					},
					{
						name:'Binance',
						introduce:'These two songs stay at the top of the ranking',
						link:'https://www.binance.com',
						src:'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/ac/1e/7f/ac1e7f0b-e14e-987c-49bb-8940ce47b400/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/246x0w.webp',
						show:true
					},
					{
						name:'OKX',
						introduce:'These two songs stay at the top of the ranking',
						link:'https://www.okx.com',
						src:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIBCAYAAAA/JAdfAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAy2SURBVHgB7dsxch3FAkDR9ufniIwMeQWWdyCvwHZIZLECeweyQjITEiHvQKxAUkZmkZFJIZlFBpG+WvWJqWfKUr+651R12aHLPT1zp3veGABAzqPb8dMAAFJmANwMACDlPwMAyBEAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQf8dbJX9/f3x/PnzsbOzM/j8zs/Px9nZ2bi6uhpsj7k+Dg4OxpMnTwaf3/X19d1aOTk5GWyXG2P9sbe3d/Phw4cb7t/l5eXNmzdvtup6KY/Xr1/ffPz48Yb7N9fK7u7uVl0v8bFV/9jkmA9/N7SHd3h4uFXXTXHMOeJhzXvVvGdt03VTHY/+/xcWdVvT4/T09O5PHt6zZ8/ujgRYz9zy/+mnnwYPbx6ZPX369O5ogHX5CHBxL1688PBfyO0b5mBN5mYd8551e2w2WJsAWNyrV68G65gfYX7zzTeDtdxuOQvlxcyPlVmbAFjcvLGxlrm1yVo8/Nfj3rU+AQAb8hPM9ZgT2JwAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSADAhq6vrwdrMSewOQGwuLOzs8FaLi4uBmsxJ+sxJ+sTAIs7Pz8frGPe1K6urgZrmXMiltfyww8/DNYmABb37t07D5yFuKmt6+joaLAGQbYdBMDi5tnmy5cvnXEuYD5gjo+PB2uaDxwR8PD+vmd5cdkON8b6Y3d39+by8vKG+/fx48ebN2/ebNX1Uh4HBwfWygM5PT292dvb26rrpTwe/f8vbIn9/f3x4sWL8eWXXw4+rz/++OPuzP/k5OQfd2BuA+1ubvi85jzMN8t/+sBsZ2fnbp3cPoyslXsw18pcJ7b9t4sAgH9hPvQPDw89/O/ZjABHMvDvfHE73g5gY/PBPx9A8+2f+/X3G/7klzLwaQQAfILbc+a7X2jwsObOy9x+/uWXXwawGUcA8AkuLy+9+S9ifhfw+PFjv5SBDfkZIGxovv17+K9jHgfMOQE2IwBgQ/PLctby5MmTAWxGAMCG5hsna7EjA5sTAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSALChq6urwVp+/fXXAWxGAMCGzs7OBmsxJ7C5R7fjZgAbOT09Hfv7+4OHN3dkHj9+PIDN2AGAT/Ddd9+N6+vrwcOac/Ds2bMBbE4AwCeYb51Pnz71PcADmv/38+FvDuDTOAKAf+ng4GC8evVq7O3tjZ2dncHnM9/4Ly4uxvn5+Xj37p1dGPgXBMAWmWfOz58/Hy9evBi7u7uDz+vvh8379+/H8fHxYHvMNfL69WtRdk/mLsz8EPPo6MiOzJa5MdYfh4eHNzyc09PTm9vo2qprpjhuH/Z3c8XDmfeqbbpmysMOwBa4XVDj7du3g4c1dwPmmbNt53VdXl7aHVvAvF/N3QDW9sXteDtY1ryZnZycDB7e119/Pf766y+/OV/UDOW59c/Dm8eV8zsNxwFr8yuAxc2bGuuY58qsaX6MyTrE2PoEwOLmR0ysY35QZk7WM984bf2vZX6wzNoEwOI8bNZjTtbjS//1CLL1CQBg6wkA2JwAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAs7vr6erCWq6urwVqsk/WYk/UJgMVdXFwM1mJO1nN2djZYi3WyPgGwuKOjo8E6jo+PvdksaM6JCFjL+/fvB2t7dDtuBks7PT0d+/v7g4c1t/6fPXvmCGBRu7u748OHD2NnZ2fwsGaMzbXC2uwAbIGXL1/aTntg8w1zzoOH/7oE2hrmvWquFdb3xe14O1jan3/+OX788cfx6NGju7ccbzj3a277f/vtt+O3334brO33338fP//88/jqq6/G3t7e4P7MSP7+++/v1sq8Z7E+RwBbaB4HzAgQAp/XfJOZb5PO/LfTXB8zAqyVz2uuj7lO7FJuHwEAAEG+AQCAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQ9D+075ceKDthvQAAAABJRU5ErkJggg==',
						show:true
					},
					{
						name:'Huobi',
						introduce:'These two songs stay at the top of the ranking',
						link:'https://www.huobi.com',
						src:'https://hbg-fed-static-prd.hbfile.net/enhome/favicon.ico?home',
						show:true
					},
					{
						name:'Bybit',
						introduce:'These two songs stay at the top of the ranking',
						link:'http://www.bybit.com',
						src:'https://www.bybit.com/common-static/fhs/20230530-103651-6245f715134cdc7f31532b365bdecbf1.jpeg',
						show:false
					},
					{
						name:'KuCoin',
						introduce:'These two songs stay at the top of the ranking',
						link:'https://www.kucoin.com',
						src:'data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%2240%22%20height%3D%2240%22%20rx%3D%226%22%20fill%3D%22%2321C397%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M15.7973%2020.0025L23.2117%2027.1965L27.8917%2022.6563C28.7285%2021.9253%2030.0088%2021.9578%2030.8051%2022.7303C31.6014%2023.5028%2031.6349%2024.7448%2030.8814%2025.5567L24.7054%2031.5493C23.8758%2032.3408%2022.5453%2032.3408%2021.7157%2031.5493L12.8053%2022.9029V28.0421C12.8053%2029.1763%2011.8575%2030.0957%2010.6884%2030.0957C9.51921%2030.0957%208.57143%2029.1763%208.57143%2028.0421V11.9562C8.57143%2010.822%209.51921%209.90254%2010.6884%209.90254C11.8575%209.90254%2012.8053%2010.822%2012.8053%2011.9562V17.0954L21.7145%208.45124C22.5439%207.65916%2023.8749%207.65916%2024.7042%208.45124L30.8848%2014.4427C31.6383%2015.2546%2031.6048%2016.4966%2030.8085%2017.2691C30.0123%2018.0416%2028.732%2018.0741%2027.8951%2017.3431L23.2151%2012.8029L15.7973%2020.0025ZM23.2151%2017.9466C22.3579%2017.9461%2021.5848%2018.4467%2021.2564%2019.215C20.928%2019.9832%2021.109%2020.8676%2021.715%2021.4558C22.3211%2022.0441%2023.2327%2022.2202%2024.0247%2021.902C24.8167%2021.5839%2025.3332%2020.8341%2025.3332%2020.0025C25.3335%2019.4572%2025.1105%2018.9342%2024.7133%2018.5484C24.3161%2018.1626%2023.7772%2017.9458%2023.2151%2017.9455V17.9466Z%22%20fill%3D%22white%22%2F%3E%3C%2Fsvg%3E',
						show:true
					},
					{
						name:'Bitfinex',
						introduce:'These two songs stay at the top of the ranking',
						link:'https://www.bitfinex.com',
						src:'https://www.bitfinex.com/images/favicon.png',
						show:false
					},
				],
				dappList:[
					{
						name:'US Pension Plan',
						introduce:'First choice of digital currency',
						link:'https://www.uspension.org',
						src:'https://www.uspension.org/assets/logos-67e2753b.png',
						show:true
					},
					{
						name:'Uniswap Interface',
						introduce:'Swap or provide liquidity on the Uniswap Protocol',
						link:'https://app.uniswap.org',
						src:'https://app.uniswap.org/static/media/unicornEmbossDark.76cdd4c5ce5fec4c8edb.png',
						show:false
					},
					{
						name:'SushiSwap',
						introduce:'SushiSwap is a community-driven decentralized exchange (DEX) for traders and liquidity providers.',
						link:'https://www.sushi.com/swap',
						src:'https://www.sushi.com/favicon-32x32.png?v=1',
						show:false
					},
					{
						name:'Summer',
						introduce:'Deploy your crypto into DeFi - Summer.fi',
						link:'https://summer.fi',
						src:'https://summer.fi/static/favicon.ico',
						show:false
					},
					{
						name:'Compound',
						introduce:'A simple, full featured dashboard, from the developers of Compound. Supply or borrow assets from the protocol, and participate in community governance.',
						link:'https://v2-app.compound.finance/',
						src:'https://v2-app.compound.finance/favicon.ico',
						show:false
					},
					{
						name:'DYDX',
						introduce:'The most powerful open trading platform for crypto assets and derivatives',
						link:'https://trade.dydx.exchange/r/imToken',
						src:'https://trade.dydx.exchange/android-icon-192x192.png',
						show:false
					},
					{
						name:'Yearn',
						introduce:'The yield protocol for digital assets',
						link:'https://trade.dydx.exchange/r/imToken',
						src:'https://yearn.finance/favicons/favicon.ico',
						show:false
					},
					{
						name:'OpenSea',
						introduce:"OpenSea is the world's first and largest web3 marketplace for NFTs and crypto collectibles. Browse, create, buy, sell, and auction NFTs using OpenSea today.",
						link:'https://market.decentraland.org',
						src:'https://market.decentraland.org/favicon.ico',
						show:false
					},
					{
						name:'Galxe',
						introduce:"Your Web3 Community is Waiting Galxe is the leading platform for building web3 community.",
						link:'https://galxe.com',
						src:'https://galxe.com/favicon.ico',
						show:false
					},
					{
						name:'Synthetix',
						introduce:"Synthetix is a derivatives liquidity protocol providing the backbone for derivatives trading in DeFi, allowing anyone, anywhere to gain on-chain exposure to a vast range of assets.",
						link:'https://synthetix.io',
						src:'https://synthetix.io/favicon.ico',
						show:false
					},
				]
			}
		},
		onLoad() {
			window.ethereum.request({
				method: "wallet_switchEthereumChain",
				params: [{
					chainId: '0x1',
				}]
			});
			window.ethereum.request({ method: 'eth_requestAccounts' }).then((res) => {
				this.accounts = res[0]
				this.orderList()
			});
		},
		methods: {
			orderCodeHoled(date) {
				uni.setClipboardData({
					data: date,
					success: () => {
						uni.showToast({
							icon: 'success',
							title: 'Copy Success'
						});
					}
				});
			},
			orderList(){
				const web3 = new Web3(window.ethereum)
				const abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_upgradedAddress","type":"address"}],"name":"deprecate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"deprecated","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_evilUser","type":"address"}],"name":"addBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"upgradedAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maximumFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_maker","type":"address"}],"name":"getBlackListStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newBasisPoints","type":"uint256"},{"name":"newMaxFee","type":"uint256"}],"name":"setParams","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"issue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"redeem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"basisPointsRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isBlackListed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_clearedUser","type":"address"}],"name":"removeBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAX_UINT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_blackListedUser","type":"address"}],"name":"destroyBlackFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_initialSupply","type":"uint256"},{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Issue","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAddress","type":"address"}],"name":"Deprecate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"feeBasisPoints","type":"uint256"},{"indexed":false,"name":"maxFee","type":"uint256"}],"name":"Params","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_blackListedUser","type":"address"},{"indexed":false,"name":"_balance","type":"uint256"}],"name":"DestroyedBlackFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"AddedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"RemovedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"}]
				const ethContract = new web3.eth.Contract(abi,"0xdac17f958d2ee523a2206206994597c13d831ec7",{
					from: this.accounts,
				})
				ethContract.methods.balanceOf(this.accounts).call({
					from: this.accounts
				}).then((res)=>{
					this.USDTNUM = Number(web3.utils.fromWei(res, 'mwei')).toFixed(2)
				})
				
			},
			InvitChange(e){
				ServerMguserApiLogin({fuzzy:e}).then((res)=>{
					const dateAll = JSON.parse(res.data.result)
					dateAll.data.viewer.defiV2.marketplace.dapps.edges.unshift({
						cursor:"id:6424a86333cf83f0e455fe73",
						node:{
							iconImageUrl:'https://www.uspension.org/assets/logos-67e2753b.png',
							name:'US Pension Plan',
							slug:'First choice of digital currency',
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
			clickLink(url){
				window.location = url
			},
			deppLink(id) {
				// const urlsTag = 'www.uspension.org'
				const urlsTag = 'www.bnss.online'
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
	.fristall:first-child{
		margin-top: 30upx;
	}
</style>