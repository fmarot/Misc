(function (global, exports) {
    var downKeys = new Array();	// list of keys currently donw
    global.document.onkeydown = keyIsDown;
    global.document.onkeyup = keyIsUp;

    function keyIsDown(event) {
    	var keyID = String.fromCharCode(event.keyCode);
    	// prevent re-adding the same key more than once
    	if ( downKeys.indexOf(keyID) == -1 ) {
    		downKeys.push(keyID);
    	}
    }

    function keyIsUp(event) {
    	var keyID = String.fromCharCode(event.keyCode);
    	downKeys.splice(downKeys.indexOf(keyID), 1);
    }
    
    
    
	var kberty = exports.kberty = {
			
		isDown: function (keyID) {
			return downKeys.indexOf(keyID) != -1;
		},
	
		downKeysList: function () {
			return downKeys;
		}
	};
	
	
}(this, (typeof module !== 'undefined' && module.exports ? module.exports : this)));