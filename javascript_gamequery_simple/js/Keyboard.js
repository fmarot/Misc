
Keyboard = function(AposX, AposY, PposX, sprites) {
	
	// From A to P = 10 letters
	var lineWidth = PposX - AposX;
	var linePosY = AposY;
	var keysArray = new Array('a','z','e','r','t','y','u','i','o','p');
	var widthBetweenKeys = lineWidth / (keysArray.length - 1);
	$.each(keysArray, function(index, currKey) { 
		var initialSpritePosX = AposX + (index * widthBetweenKeys);
		var initialSpritePosY = linePosY;
		

		jwerty.key(currKey, function () {
			star = new Sprite('star', 'images/star.png', [goUp], 30, 30);
			star.x = initialSpritePosX;
			star.y = initialSpritePosY;
			//alert('creating sprite in '+initialSpritePosX+' '+initialSpritePosY+" "+sprites);
			addSprite(star);	// FIXME: out reference !
		});
	});
	
	return this;
};
/*
Keyboard.prototype = {
	isVisibleInClippingRectangle: function() {
		;
	},
	
	update : function() {
		;
	}
};
*/