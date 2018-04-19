// 일상생활의 객체(학생)을 표현하기 위한 생성자(객체)
function Student(ssn, name, korean, math, english, science) {
	this.ssn = ssn;
	this.name = name;
	this.korean = korean;
	this.math = math;
	this.english = english;
	this.science = science;
}

// 프로토타입에 메소드 추가
Student.prototype.getSum = function(){
	return this.korean + this.math + this.english + this.science;
};

Student.prototype.getAverage = function(){
	return this.getSum()/4;
};


Student.prototype.toString = function(){
	return "ssn: " + this.ssn + "\t" + "name: " + this.name + "\t" + "Sum: " + this.getSum() + "\t" + "Average: " + this.getAverage() + "\n";
};


// 공유속성
Student.schoolName = 'KOSTA대학';