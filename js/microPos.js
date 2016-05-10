var localStorageJs =  LibraryStorageJs;

/// constants

var TIME_OUT_CLEAR = 2000;



	


function loadItem(element){

	 console.log(element.value);

	 localStorageJs.addItemList({  'item': element.value });
	 var user = JSON.parse(localStorage.getItem('storage')); 
	 console.log(user);
	 localStorageJs.printList();

	// clear bar
	setTimeout(clearBar, TIME_OUT_CLEAR)

	return false;
}


function clearBar(){

	$("#codigo").val("");
}


function finalizarVenta(){

    var user = JSON.parse(localStorageJs.getStorage()); 
    console.log(user);
    console.log("finalizar venta");
    return false;
};