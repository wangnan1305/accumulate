var list = document.getElementsByTagName("li");
	var arrayList = Array.prototype.slice.call(list);

	var myObj = {
 
	    specialFunction: function () {
	 		console.log('2')
	    },
	 
	    anotherSpecialFunction: function () {
	 		console.log('1')
	    },
	 
	    getAsyncData: function (cb) {
	        cb()
	    },
	 
	    render: function () {
	        
	        this.getAsyncData(function () {
	            this.specialFunction();
	            this.anotherSpecialFunction();
	        }.bind(this))
	    }
	};
 
	myObj.render();

	function dll() {}
	dll.dllf = function dllf() {
		console.log('dllf');
	}
	dll.prototype = {
		fun1:function () {
			console.log('fun1')
		},
		fun2:function () {
			console.log('fun2')
		}
	}

	var obj = new dll;
	console.log(obj instanceof dll)
	// console.dir(dll)
	// console.dir(dll.prototype)


	// console.dir(Array)
	// console.dir(Array.prototype)