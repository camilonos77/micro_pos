(function(window){
    //I recommend this
    'use strict';
    function define_library(){
        var LibraryStorageJs = {};
        
        var listItemsStorage = [];
        // list array
        
        var storage = {};
        /*
            Add new item to list 
        */
        LibraryStorageJs.addItemList = function(item){

            listItemsStorage.push(item);
            
            storage.list =  listItemsStorage;

            localStorage.setItem('storage', JSON.stringify(storage));

        };


        LibraryStorageJs.clearAll = function(){

            listItemsStorage = [];
            storage.list =  listItemsStorage;
            localStorage.setItem('storage', JSON.stringify(storage));
        };


        LibraryStorageJs.removeLast = function(){

              var listTemp  =  listItemsStorage.pop();  // list temp
              storage.list =  listTemp;
              localStorage.setItem('storage', JSON.stringify(storage));
        }


        LibraryStorageJs.getStorage = function(){

              return storage;
        }

        LibraryStorageJs.printList =  function(){

            console.log(listItemsStorage);
        }


        
        return LibraryStorageJs;
    }
    //define globally if it doesn't already exist
    if(typeof(LibraryStorageJs) === 'undefined'){
        window.LibraryStorageJs = define_library();
    }
    else{
        console.log("Library already defined.");
    }
})(window);