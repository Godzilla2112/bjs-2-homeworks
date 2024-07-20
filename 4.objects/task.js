function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
    this.subject = null;
    this.excluded = false;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
  if (!this.excluded) {
    if (this.marks) {
      this.marks.push(...marksToAdd);
    } else {
      this.marks = marksToAdd;
    }
  } else {
    console.log("Student is excluded and cannot add marks.");
  }
}

Student.prototype.getAverage = function () {
if (!this.marks || this.marks.length === 0) {
    return 0;
  }
  return this.marks.reduce((sum, mark) => sum + mark, 0) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
delete this.subject;
delete this.marks;
this.excluded = reason;
}
