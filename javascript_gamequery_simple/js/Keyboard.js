

Keyboard = function(aPosX, aPosY, pPosX, qPosX, qPosY, mPosX, wPosX, wPosY, nPosX, sprites) {
	
	var keysArrayAP = new Array('A','Z','E','R','T','Y','U','I','O','P');
	var keysArrayQM = new Array('Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M');
	var keysArrayWN = new Array('W', 'X', 'C', 'V', 'B', 'N');
	
	fillInKeyPositions(keysArrayAP, aPosX, aPosY, pPosX);
	fillInKeyPositions(keysArrayQM, qPosX, qPosY, mPosX);
	fillInKeyPositions(keysArrayWN, wPosX, wPosY, nPosX);
	
	return this;
};


function fillInKeyPositions(keysArray, firstKeyX, firstKeyY, lastKeyX) {
	var lineWidth = lastKeyX - firstKeyX;
	var linePosY = firstKeyY;
	var widthBetweenKeys = lineWidth / (keysArray.length - 1);
	$.each(keysArray, function(index, currKey) { 
		var currentKey = keysArray[index];
		var initialSpritePosX = firstKeyX + (index * widthBetweenKeys);
		var initialSpritePosY = linePosY;
		keyToPositions[currentKey] = {x: initialSpritePosX, y: initialSpritePosY};
	});
};