

Keyboard = function(starImg, AposX, AposY, PposX, sprites) {
	
	// From A to P = 10 letters
	var lineWidth = PposX - AposX;
	var linePosY = AposY;
	var keysArray = new Array('A','Z','E','R','T','Y','U','I','O','P');
	var widthBetweenKeys = lineWidth / (keysArray.length - 1);
	

	$.each(keysArray, function(index, currKey) { 
		var currentKey = keysArray[index];
		var initialSpritePosX = AposX + (index * widthBetweenKeys);
		var initialSpritePosY = linePosY;
		keyToPositions[currentKey] = {x: initialSpritePosX, y: initialSpritePosY};
	});
	
	return this;
};
