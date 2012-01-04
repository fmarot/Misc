(function (global, exports) {
    var downKeys = new Array();	// list of keys currently donw
    global.window.onkeydown = keyIsDown;
    global.window.onkeyup = keyIsUp;

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
		},
		
		/** once a key is told to be down, the lib won't tell
		 * it's down again until the given delay has elapsed.
		 * It's used in order to avoid a single Keypress to be
		 * handled as many keypress.  */
		setGlobalRepeatDelay: function(delay) {
			// TODO
		}
	};
	
	
}(this, (typeof module !== 'undefined' && module.exports ? module.exports : this)));