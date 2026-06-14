const router = new VueRouter({
	mode: 'history'
})
Vue.prototype.$t = function(key) { return window.i18n ? window.i18n.t(key) : key; };
window.vm = new Vue({
	el: '#app',
	router,
	mixins: [codeDeal, qrCodeSetting],
	data() {
		return {
			typeList: [{
					title: 'Text',
					type: "text",
					code: "qrcode",
					codeType: "QRCode",
					tutorialSearch: 'Text QR Code',
					icon: "./img/code/type-icon-1.png",
					introduceList: [{
						title: 'Text QR code generator online',
						img: "./img/qrcode_text.png",
						text: [
							'Convert any text to a QR code, supporting GIF, JPG, PNG, SVG image formats',
							'Flexible and convenient QR code beautification tool, support QR code logo, frame, code point, code eye, color, text beautification',
						],
					}, ],
					tutorial: [],
				},
				{
					title: 'URL',
					type: "url",
					code: "qrcode",
					codeType: "QRCode",
					tutorialSearch: 'URL QR Code',
					icon: "./img/code/type-icon-2.png",
					children: [{
						title: 'URL static code',
						type: "url_static_code",
						tutorialSearch: 'URL static code',
						codeType: "qrcode",
						introduceList: [{
							title: 'URL QR code online generator',
							img: "./img/qrcode_url_static.png",
							text: [
								'The input URL is directly encoded into a QR code, with a high scanning recognition rate and fast and stable jumps',
								'Flexible and convenient QR code beautification tool, support QR code logo, frame, code point, code eye, color, text beautification',
							],
						}, ],
						tutorial: [],
					}, ],
				},
				// {
				//   title: "WiFi",
				//   icon: "./img/code/type-icon-3.png",
				// },
				// {
				//   title: "Business card",
				//   icon: "./img/code/type-icon-4.png",
				// },
				// {
				//   title: "File",
				//   icon: ./img/code/type-icon-5.png",
				// },
				// {
				//   title: "Image",
				//   icon: "./img/code/type-icon-6.png",
				// },
				// {
				//   title: "Audio and video",
				//   icon: "./img/code/type-icon-7.png",
				// },
			],
			qrEclevelList: [{
					value: "L",
					label: currentCodeType.low+"(7%)",
				},
				{
					value: "M",
					label: currentCodeType.medium+"(15%)",
				},
				{
					value: "Q",
					label: currentCodeType.medium_high+"(25%)",
				},
				{
					value: "H",
					label: currentCodeType.high+"(30%)",
				},
			],
			pdf417EclevelList: [{
					value: 0,
					label: "L0",
				},
				{
					value: 1,
					label: "L1",
				},
				{
					value: 2,
					label: "L2",
				},
				{
					value: 3,
					label: "L3",
				},
				{
					value: 4,
					label: "L4",
				},
				{
					value: 5,
					label: "L5",
				},
				{
					value: 6,
					label: "L6",
				},
				{
					value: 7,
					label: "L7",
				},
				{
					value: 8,
					label: "L8",
				},
			],
			codeTypeList: getCodeList(),
			currentCodeType: currentCodeType,
			textTimer: null,
			routerParmas_Data: "",
			routerParmas_textContent: "",
			scrollTop: 0
		}
	},
	created() {
		if (this.$route.query.data) {
			this.routerParmas_Data = JSON.parse(atob(this.$route.query.data));
		}
		if (this.$route.query.textContent) {
			this.routerParmas_textContent = JSON.parse(this.$route.query.textContent);
		}
		getQiniuToken();
		loadFont();
	},
	mounted() {
	    this.qrCodeParameter.codeType = ''
		this.screenWidth = document.body.clientWidth;
		window.addEventListener("resize", this.resize);
		this.$nextTick(() => {
			this.qrCodeParameter.codeType = this.currentCodeType.code;
			this.currentCodeType.eclevelList = this.qrEclevelList;
			this.qrCodeParameter.eclevel = this.currentCodeType.eclevelList[1].value;
			delete this.currentCodeType.icon;
			
			if (this.routerParmas_Data || this.routerParmas_textContent) {
				let params = JSON.parse(
					JSON.stringify(originData[this.currentCodeType.codeType])
				);
				this.qrCodeParameter = Object.assign(
					params,
					this.routerParmas_Data,
					this.routerParmas_textContent
				);
				this.qrCodeParameter.codeType = this.routerParmas_Data.codeType ? this.routerParmas_Data
					.codeType : this.currentCodeType.code;
				this.qrCodeParameter.text = this.routerParmas_textContent.text ?
					this.routerParmas_textContent.text :
					this.currentCodeType.defaultValue;
				this.$forceUpdate();
				this.getQRCode();
				return;
			}else{
				this.qrCodeParameter.codeType = currentCodeType.code
				this.qrCodeParameter.text = currentCodeType.defaultValue
				this.code_img = currentCodeType.defaultImage
			}
		});
		window.addEventListener('scroll', this.throttleHandleScroll);
	},
	methods: {
		//获取屏幕宽度
		resize() {
			this.screenWidth = document.body.clientWidth;
		},
		//监听滚动条
		throttleHandleScroll() {
			if (this.screenWidth > 992) {
				throttle(this.handleScroll(), 300)
			}
		},
		handleScroll(){
			let scrollHeight = document.body.scrollHeight
			let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
			let footer = document.getElementsByClassName('footer')[0];
			let codeMenuBox = document.getElementsByClassName('code-menu-box')[0];
			let footer_height = footer ? footer.offsetHeight : 0;
			let menu_height = codeMenuBox ? codeMenuBox.offsetHeight : 0;
			let max = scrollHeight - footer_height - menu_height - 88
			this.scrollTop = scrollTop > max ? max : scrollTop
		},
		//修改二维码类型
		changeCodeType() {
			this.qrCodeParameter.codeType = this.currentCodeType.code;
			switch (this.qrCodeParameter.codeType) {
				case "qrcode":
					this.currentCodeType.eclevelList = this.qrEclevelList;
					this.qrCodeParameter.eclevel =
						this.currentCodeType.eclevelList[1].value;
					break;
				case "pdf417":
					this.currentCodeType.eclevelList = this.pdf417EclevelList;
					this.qrCodeParameter.eclevel =
						this.currentCodeType.eclevelList[1].value;
					break;
				case "azteccode":
					this.currentCodeType.eclevelList = [];
					this.qrCodeParameter.eclevel = 23;
					break;
				default:
					this.currentCodeType.eclevelList = [];
					this.qrCodeParameter.eclevel = "";
					break;
			}
			if (this.qrCodeParameter.text) {
				this.getQRCode();
			}
		},
	
		//数据输入
		handleInputData(text) {
			this.qrCodeParameter.text = text
			const reg = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
			if (!this.qrCodeParameter.text) {
				this.textTimer = null;
				this.code_img = "";
				return;
			}
			if (this.currentCodeType.type == "url-static-code") {
				if (!reg.test(this.qrCodeParameter.text)) {
					this.$message.error('The link address must be a URL beginning with http(s)://');
					return;
				}
			}

			this.getQRCode();
		},
        //vue外面选择下拉框
		handleOutsideCodeType(val) {
			this.currentCodeType.code = val
			this.changeCodeType()
		}

	}
});