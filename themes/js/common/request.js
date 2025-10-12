let language = 'en';
language = typeof(lang)=='undefined'?'en':lang;

const BASE_URL = language== 'zh' ? 'https://businessapi.hprtupgrade.com' : 'https://business.hprtdata.com' //正式环境
// const BASE_URL = 'http://122.9.89.208:8006' //测试环境
// const BASE_URL = 'http://10.0.10.250:8081' //本地环境

const BASE_CODE_URL = 'https://hmtranfer.hprtcloud.com' //正式环境
// const BASE_CODE_URL = 'http://hmtranfertest.hprtcloud.com:8081' //测试环境
// const BASE_CODE_URL = 'http://10.0.10.28:8899' //本地环境


const qiuniu = {
	base64: "https://up-na0.qiniup.com/putb64/-1",
	upload: "https://up-na0.qiniup.com/",
};

//axios封装
axios.defaults.withCredentials = false;
const service = axios.create({
	timeout: 20000,
});

service.interceptors.request.use(
	(config) => {
		config.headers["Content-Type"] = "application/json";
		config.headers["language"] = language
		return config;
	},
	(error) => {
		console.log(error);
		return Promise.reject(error);
	}
);

service.interceptors.response.use(
	(response) => {
		const res = response.data;
		
		if (response.config.url == qiuniu.upload || response.config.url == qiuniu.base64) {
			return Promise.resolve(res);
		}
		
		const code = res.code;
		//res is my own data
		if (code === 200) {
			return Promise.resolve(res.data);
		} else {
			ELEMENT.Message({
				message: res.msg,
				type: "error",
			});
			return Promise.reject(res.msg);
		}
	},
	(error) => {
		console.log("err" + error); // for debug
		ELEMENT.Message({
			message: 'Network error',
			type: "error",
			duration: 2.5 * 1000,
		});
		return Promise.reject(error);
	}
);

const dataSignature = (time_stamp) => {
	let appid = "764e02x4-d252-11eb-af05-6cdc5827";
	let appkey = "764e02x4-d252-11eb-af05-2f4a1694";

	var signature = sha1(hexMD5(appid + time_stamp + appkey));

	return signature;
}

const axiosData = (url, data, method = "post") => {
	let time_stamp = Date.parse(new Date());
	let obj = {
		appid: "764e02x4-d252-11eb-af05-6cdc5827",
		time_stamp,
		signature: dataSignature(time_stamp),
	};
	let newParmas;
	if (data) {
		newParmas = Object.assign(data, obj);
	} else {
		newParmas = obj;
	}
	return service({
		method,
		url: `${BASE_URL}${url}`,
		data: newParmas
	})
}

const axiosCode = (url, data, method = "post") => {
	return service({
		method,
		url: `${BASE_CODE_URL}${url}`,
		data
	})
}

const axiosQiniuyun = (data, method = "post") => {
	return service({
		url: qiuniu.upload,
		method,
		data,
	});
}