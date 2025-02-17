function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}
let student1 = new Student("Никита", "мужской", 30);
let student2 = new Student("Иван", "мужской", 29);


Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (this.marks === undefined) {
		return undefined;
	}
	this.marks.push(...marks);
}

Student.prototype.getAverage = function() {
	if (this.marks === undefined || this.marks.length === 0) {
		return 0;
	}
	let avg = this.marks.reduce((acc, marc) => acc + marc, 0) / this.marks.length;
	return avg;
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}