const selectFile = function() {
	
	let regex = /[^\\]+$/
	
	this.choose,
	this.selected
	
	this.msg = str => {
		let prefix = '[selectFile.js]\n\nError: '
		return alert(prefix+str)
	}
		
	this.check = () => {
		if (this.choose && this.selected != null) {
			let choose = document.getElementById(this.choose),
				selected = document.getElementById(this.selected)
			choose.addEventListener('change',() => {
				if (choose.value != '') { 
					selected.innerHTML = choose.value.match(regex)
				}
			})
		} else {
			this.msg('Targets not set.')
		}
	}
	
	selectFile.prototype.targets = (trigger, filetext) => {
		this.choose = trigger
		this.selected = filetext
	}
	
	selectFile.prototype.simulate = () => {
		if (this.choose != null) {
			let choose = document.getElementById(this.choose)
			if (typeof choose != 'undefined') {
				choose.click()
				this.check()
			} else {
				this.msg('Could not find element '+this.choose)
			}
		} else {
			this.msg('Targets not set.')
		}
	}	
	
};

var getFile = new selectFile;
getFile.targets('choose','selected');

$(document).ready(function () {
    $(document).on('click', '#btn_attach1', function (e) {
        getFile.simulate()
    });
    
});
