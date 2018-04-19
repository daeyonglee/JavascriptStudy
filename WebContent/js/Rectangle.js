function Rectangle(x, y, width, height) {
	
	Shape.call(this, x, y);
	
	this.width = width;
	this.height = height;
	
};

Rectangle.prototype = new Shape();

delete Rectangle.prototype.x;
delete Rectangle.prototype.y;

Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.getArea = function(){
	return this.width * this.height;
}