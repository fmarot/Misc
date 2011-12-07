
Sprite = function(name, image, behaviours, initialWidth, initialHeight) {
	this.image = image;
	if (behaviours !== undefined) this.behaviours = behaviours;
	
	this.x = 0;
	this.y = 0;
	this.velocityX = 0;	// pixels/sec
	this.velocityY = 0;	// pixels/sec
	
	if (initialWidth !== undefined) {
		this.sizeX = initialWidth;
	} else {
		this.sizeX = this.image.width;
	}

	if (initialHeight !== undefined) {
		this.sizeY = initialHeight;
	} else {
		this.sizeY = this.image.height;
	}
	
	return this;
};

Sprite.prototype = {
	isVisibleInClippingRectangle: function(canvasWidth, canvasHeight) {
		var posXMin = this.x;
		var posXMax = this.x + this.sizeX;
		
		var posYMin = this.y;
		var posYMax = this.y + this.sizeY;
		
		return !((posXMin > canvasWidth || posXMax < 0)
				|| (posYMin > canvasHeight || posYMax < 0));
	},
	
	update : function() {
		for (var i = 0; i<this.behaviours.length; i++) {
			this.behaviours[i].execute(this);
		}
	}
};


goUp = {
	execute : function (sprite) {
		sprite.y -= 5;
		sprite.sizeX += 1;
		sprite.sizeY += 1;
	}	
};