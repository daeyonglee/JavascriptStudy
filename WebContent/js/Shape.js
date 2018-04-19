function Shape(x, y){
	this.x = x;
	this.y = y;
}

Shape.prototype.getArea = function(){
	return 0;
}
Shape.prototype.toString = function(){
	return "나는 Shape의 toString입니다..";
}