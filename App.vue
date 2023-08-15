<script>
	export default {
		onLaunch: function() {
			// if(window.imToken){
			// 	window.imToken.callAPI('user.showAccountSwitch',{chainType:'TRON'},(err, address)=>{
			// 		// if(err) {
			// 		//     console.log(11111)
			// 		//   } else {
			// 		// 	  this.address = address
			// 		//   }
			// 		//   this.address = address
			// 	})
			// }
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/styles/index.scss';
	/*每个页面公共css */
	// @import '@/uni_modules/uni-scss/index.scss';
	// /* #ifndef APP-NVUE */
	// @import '@/static/customicons.css';
</style>
<style>
	@import '@/styles/font/iconfont.css';
	
	.uni-mask {
		background-color: rgba(0, 0, 0, 0.4) !important
	}
</style>
