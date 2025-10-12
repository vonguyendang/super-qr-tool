const getLanguageList = () => {
	return [{
			label: "简体中文",
			value: "cn",
			url: "https://www.cn.onlinetoolcenter.com/",
		},
		{
			label: "English",
			value: "en",
			url: "https://www.onlinetoolcenter.com/",
		},
		{
			label: "Deutsch",
			value: "de",
			url: "https://www.de.onlinetoolcenter.com/",
		},
		{
			label: "Español",
			value: "es",
			url: "https://www.es.onlinetoolcenter.com/",
		},
		{
			label: "Русский",
			value: "ru",
			url: "https://www.ru.onlinetoolcenter.com/",
		},
		{
			label: "Français",
			value: "fr",
			url: "https://www.fr.onlinetoolcenter.com/",
		},
		{
			label: "Italiano",
			value: "it",
			url: "https://www.it.onlinetoolcenter.com/",
		},
		{
			label: "हिंदी",
			value: "hi",
			url: "https://www.hi.onlinetoolcenter.com/",
		},
		{
			label: "العربية",
			value: "ar",
			url: "https://www.ar.onlinetoolcenter.com/",
		},
		{
			label: "Português",
			value: "pt",
			url: "https://www.pt.onlinetoolcenter.com/",
		},
		{
			label: "বাংলা",
			value: "bn",
			url: "https://www.bn.onlinetoolcenter.com/",
		},
		{
			label: "日本語",
			value: "jp",
			url: "https://www.jp.onlinetoolcenter.com/",
		},
		{
			label: "Filipino",
			value: "ph",
			url: "https://www.ph.onlinetoolcenter.com/",
		},
		{
			label: "Türkçe",
			value: "tr",
			url: "https://www.tr.onlinetoolcenter.com/",
		},
		{
			label: "한국어",
			value: "kr",
			url: "https://www.kr.onlinetoolcenter.com/",
		},
		{
			label: "Bahasa Melayu",
			value: "my",
			url: "https://www.my.onlinetoolcenter.com/",
		},
		{
			label: "Tiếng Việt",
			value: "vn",
			url: "https://www.vn.onlinetoolcenter.com/",
		},
		{
			label: "Bahasa Indonesia",
			value: "id",
			url: "https://www.id.onlinetoolcenter.com/",
		},
		{
			label: "Polski",
			value: "pl",
			url: "https://www.pl.onlinetoolcenter.com/",
		},
		{
			label: "Українська",
			value: "ua",
			url: "https://www.ua.onlinetoolcenter.com/",
		},
		{
			label: "မြန်မာစာ",
			value: "mm",
			url: "https://www.mm.onlinetoolcenter.com/",
		},
		{
			label: "Nederlands",
			value: "nl",
			url: "https://www.nl.onlinetoolcenter.com/",
		},
		{
			label: "Română",
			value: "ro",
			url: "https://www.ro.onlinetoolcenter.com/",
		},
		{
			label: "ไทย",
			value: "th",
			url: "https://www.th.onlinetoolcenter.com/",
		},
		{
			label: "नेपाली",
			value: "np",
			url: "https://www.np.onlinetoolcenter.com/",
		},
		{
			label: "Magyar",
			value: "hu",
			url: "https://www.hu.onlinetoolcenter.com/",
		},
		{
			label: "Ελληνικά",
			value: "gr",
			url: "https://www.gr.onlinetoolcenter.com/",
		},
		{
			label: "Српски",
			value: "rs",
			url: "https://www.rs.onlinetoolcenter.com/",
		},
		{
			label: "Svenska",
			value: "swe",
			url: "https://www.swe.onlinetoolcenter.com/",
		},
		{
			label: "Čeština",
			value: "cz",
			url: "https://www.cz.onlinetoolcenter.com/",
		},
		{
			label: "עִבְרִית",
			value: "he",
			url: "https://www.he.onlinetoolcenter.com/",
		},
		{
			label: "Shqip",
			value: "al",
			url: "https://www.al.onlinetoolcenter.com/",
		},
		{
			label: "Dansk",
			value: "dk",
			url: "https://www.dk.onlinetoolcenter.com/",
		},
		{
			label: "Hrvatski",
			value: "hr",
			url: "https://www.hr.onlinetoolcenter.com/",
		},
		{
			label: "Suomi",
			value: "fi",
			url: "https://www.fi.onlinetoolcenter.com/",
		},
		{
			label: "Norsk",
			value: "no",
			url: "https://www.no.onlinetoolcenter.com/",
		},
		{
			label: "Беларуская",
			value: "by",
			url: "https://www.by.onlinetoolcenter.com/",
		},
		{
			label: "Gaeilge",
			value: "ga",
			url: "https://www.ga.onlinetoolcenter.com/",
		},
		{
			label: "Eesti keel",
			value: "ee",
			url: "https://www.ee.onlinetoolcenter.com/",
		},
		{
			label: "繁體中文",
			value: "zh",
			url: "https://www.zh.onlinetoolcenter.com/",
		},
	]
}

// 时间戳转日期
const formatDate = (time) => {
	const d = new Date(time * 1000);

	const now = new Date();
	const diff = d.getDate() - now.getDate();

	var year = d.getFullYear();
	var month = d.getMonth() + 1;
	var date = d.getDate();
	if (month < 10) {
		month = "0" + month;
	}
	if (date < 10) {
		date = "0" + date;
	}

	return year + "-" + month + "-" + date;
};

const throttle = (func, delay) => {
	let timerId;
	let lastExecTime = 0;

	return (...args) => {
		const currentTime = Date.now();
		if (currentTime - lastExecTime > delay) {
			func.apply(this, args);
			lastExecTime = currentTime;
		} else {
			clearTimeout(timerId);
			timerId = setTimeout(() => {
				func.apply(this, args);
				lastExecTime = Date.now();
			}, delay);
		}
	};
}

//引入字体
const loadFont = () => {
	axios({
		method: "get",
		url: "https://foreverfile.hprtcloud.com/fonts/Arvo/Arvo-Regular-5.ttf",
		responseType: "blob",
	}).then((res) => {
		if (res.status == 200) {
			var reader = new FileReader();
			reader.readAsArrayBuffer(res.data);
			reader.onload = function(e) {
				bwipjs.loadFont("Arvo", e.target.result);
			};
		}
	});
	axios({
		method: "get",
		url: "https://foreverfile.hprtcloud.com/fonts/Crimson-Text/CrimsonText-Regular-5.ttf",
		responseType: "blob",
	}).then((res) => {
		if (res.status == 200) {
			var reader = new FileReader();
			reader.readAsArrayBuffer(res.data);
			reader.onload = function(e) {
				bwipjs.loadFont("Crimson Text", e.target.result);
			};
		}
	});
	axios({
		method: "get",
		url: "https://foreverfile.hprtcloud.com/fonts/Montserrat/Montserrat-Regular-8.otf",
		responseType: "blob",
	}).then((res) => {
		if (res.status == 200) {
			var reader = new FileReader();
			reader.readAsArrayBuffer(res.data);
			reader.onload = function(e) {
				bwipjs.loadFont("Montserrat", e.target.result);
			};
		}
	});
	axios({
		method: "get",
		url: "https://foreverfile.hprtcloud.com/fonts/Roboto/Roboto-Regular-14.ttf",
		responseType: "blob",
	}).then((res) => {
		if (res.status == 200) {
			var reader = new FileReader();
			reader.readAsArrayBuffer(res.data);
			reader.onload = function(e) {
				bwipjs.loadFont("Roboto", e.target.result);
			};
		}
	});
}

// RGB转十六进制
const rgbToString = (str) => {
	let result = "";
	if (str.indexOf("#") === 0) {
		result = str;
	} else if (str.indexOf("rgb(") === 0) {
		const colors = str.replace(/rgb\(/g, "").replace(/\)/g, "").split(",");
		const r =
			parseInt(colors[0]).toString(16).length === 1 ?
			"0" + parseInt(colors[0]).toString(16) :
			parseInt(colors[0]).toString(16);
		const g =
			parseInt(colors[1]).toString(16).length === 1 ?
			"0" + parseInt(colors[1]).toString(16) :
			parseInt(colors[1]).toString(16);
		const b =
			parseInt(colors[2]).toString(16).length === 1 ?
			"0" + parseInt(colors[2]).toString(16) :
			parseInt(colors[2]).toString(16);
		result = `${r}${g}${b}`;
	}
	return result;
};

// 十六进制转RGB
const stringToRgb = (str, mode = "string") => {
	const template = str.toLowerCase();
	let result = "";
	if (template.indexOf("rgb(") === 0) {
		result = template;
	} else if (template.indexOf("rgba(") === 0) {
		const colors = template
			.replace(/rgba\(/g, "")
			.replace(/\)/g, "")
			.split(",");
		const r = colors[0];
		const g = colors[1];
		const b = colors[2];
		result = `rgb(${r},${g},${b})`;
	} else if (template.indexOf("#") === 0) {
		let colors = template.replace(/#/g, "");
		let resultArr = [];
		if (colors.length === 3) {
			colors = colors.replace(/[0-9a-f]/g, (str) => {
				return str + str;
			});
		}
		for (let i = 0; i < colors.length; i += 2) {
			resultArr.push(parseInt(colors[i] + colors[i + 1], 16));
		}
		result = `rgb(${resultArr.join(",")})`;
	}
	if (mode === "string") {
		return result;
	} else if (mode === "array") {
		return result.replace(/rgb\(/g, "").replace(/\)/g, "").split(",");
	}
};

// 十六进制转RGBA
const hexToRgba = (hex, opacity) => {
	return (
		"rgba(" +
		parseInt("0x" + hex.slice(1, 3)) +
		"," +
		parseInt("0x" + hex.slice(3, 5)) +
		"," +
		parseInt("0x" + hex.slice(5, 7)) +
		"," +
		opacity / 100 +
		")"
	);
};
//随机数生成
const randomString = (length) => {
	var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var result = "";
	for (var i = length; i > 0; --i)
		result += chars[Math.floor(Math.random() * chars.length)];
	return result;
};

//blob转base64
const blobToBase64 = (blob) => {
	return new Promise((resolve, reject) => {
		const fileReader = new FileReader();
		fileReader.onload = (e) => {
			resolve(e.target.result);
		};
		// readAsDataURL
		fileReader.readAsDataURL(blob);
		fileReader.onerror = () => {
			reject(new Error("文件流异常"));
		};
	});
};

//URL转file对象
const URLToFile = (dataurl, fileName) => {
	return new Promise((resolve) => {
		fetch(dataurl)
			.then((response) => response.blob())
			.then((blob) => {
				const file = new File([blob], fileName);
				resolve(file);
			});
	});
}

//base64转File对象
const base6ToFile = (dataurl, fileName) => {
	var arr = dataurl.split(","),
		mime = arr[0].match(/:(.*?);/)[1],
		bstr = atob(arr[1]),
		n = bstr.length,
		u8arr = new Uint8Array(n);
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n);
	}
	return new File([u8arr], fileName, {
		type: mime
	});
}

