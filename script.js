// пространство имен для рабты элементов страниц
var UI = window.UI || {};

// пространство имен для функций, которые будут вызваны при загрузке DOM
UI.startFuncs = UI.startFuncs || {};


// события при загрузке DOM
document.addEventListener('DOMContentLoaded', function () {

	// перебираем все функции из объекта startFuncs и вызываем их
	var funcs = UI.startFuncs;
	for (var func in funcs) {
		if(funcs.hasOwnProperty(func) && typeof funcs[func] === 'function') {
			funcs[func]();
		}
	};

});