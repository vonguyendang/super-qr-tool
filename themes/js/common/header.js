//打开菜单
function handleOpenMenu(){
	let box = document.getElementById('menu-box')
	box.style.display = 'block'
}
//关闭菜单
function handleCloseMenu(){
	let box = document.getElementById('menu-box')
	box.style.display = 'none'
}


//打开语言下拉弹窗
function handleShowLanguage() {
	let box = document.getElementById('language-select-box')
	if(box.style.display == 'block'){
		handleCloseLang()
	}else{
		box.style.display = 'block'
		let icon_up = document.getElementsByClassName('el-icon-arrow-up')[0]
		icon_up.style.display = 'block'
		
		let icon_down = document.getElementsByClassName('el-icon-arrow-down')[0]
		icon_down.style.display = 'none'
	}
}
//打开语言居中弹窗
function handleShowDialogLanguage(){
	handleCloseMenu()
	let box = document.getElementById('language-dialog')
	box.style.display = 'block'
}

//关闭语言弹窗
function handleCloseLang(){
	let box1 = document.getElementById('language-select-box')
	box1.style.display = 'none'
	
	let box2 = document.getElementById('language-dialog')
	box2.style.display = 'none'
	
	let icon_up = document.getElementsByClassName('el-icon-arrow-up')[0]
	icon_up.style.display = 'none'
	
	let icon_down = document.getElementsByClassName('el-icon-arrow-down')[0]
	icon_down.style.display = 'block'
}

//切换语言选择弹窗
function handleChangeLangBox(){
	let box1 = document.getElementById('language-select-box')
	box1.style.display = 'none'
	
	let box2 = document.getElementById('language-dialog')
	box2.style.display = 'block'
}