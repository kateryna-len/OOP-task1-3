
//Task 1


class Student {
  constructor(fullname, direction) {
    this._fullname = fullname
    this._direction = direction;
  }

  get direction() {
    return this._direction
  }

  set direction(value) {
    if (value.length < 2) {
      return console.log('Name is too shourt')

    }
    return this._direction = value;
  }
  static studentBuilder(fullname, direction) {
    return new Student(fullname, direction)
  }

  showFullName() {
    return this._fullname


  }
  nameIncludes(data) {
    if (this.showFullName().includes(data)) {
      return true
    } else { return false }

  }

}
const stud1 = new Student('Ivan Petrenko', 'web');
const stud2 = new Student('Sergiy Koval', 'python');

console.log(stud1.showFullName())
console.log(stud1.nameIncludes('Ivan'))
console.log(stud1.nameIncludes('Denysenko'))

const stud3 = Student.studentBuilder('Ihor Kohut', 'qc')




// Task 2


/*
class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname
  }
  showFullName() {
    return this.name + ' ' + this.surname
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year
  }
  showFullName(data) {
    return this.name + ' ' + this.surname + ' ' + data
  }
  showCourse() {
    let data = new Date().getFullYear()
    let result = data - this.year
    return result

  }
}


const stud1 = new Student("Petro", "Petrenko", 2017);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 5

*/

//Task 3
/*
class Worker {
  #setExp = 1.2
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays
  }
  showSalary() {
    let salary = this.dayRate * this.workingDays
    return salary
  }
  showSalaryWithExperience() {
    let salaryBonus = this.dayRate * this.workingDays * this.#setExp
    return salaryBonus
  }
  get experience() {
    return this.#setExp
  }
  set experience(value) {
    this.#setExp = value
  }

}

const worker1 = new Worker('John Jonhson', 20, 23);
console.log(worker1.fullName);
console.log(worker1.showSalary()); // 460
console.log("New experience: " + worker1.experience);
console.log(worker1.showSalaryWithExperience());
worker1.setExp = 1.5;
console.log("New experience: " + worker1.setExp);
console.log(worker1.showSalaryWithExperience);


const worker2 = new Worker('Tom Tomson', 48, 22);
console.log(worker2.fullName);
console.log(worker2.showSalary()); // 1056
console.log("New experience: " + worker2.experience);
console.log(worker2.showSalaryWithExperience());
worker2.setExp = 1.5;
console.log("New experience: " + worker2.setExp);
console.log(worker2.showSalaryWithExperience);


const worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
console.log(worker3.showSalary()); // 667
console.log("New experience: " + worker3.experience);
console.log(worker3.showSalaryWithExperience());
worker3.setExp = 1.5;
console.log("New experience: " + worker3.setExp);
console.log(worker3.showSalaryWithExperience);



worker1Profit = {
  fullName: worker1.fullName,
  salary: worker1.showSalaryWithExperience()
}
worker2Profit = {
  fullName: worker2.fullName,
  salary: worker2.showSalaryWithExperience()
}
worker3Profit = {
  fullName: worker3.fullName,
  salary: worker3.showSalaryWithExperience()
}


let arrProfit = []
arrProfit.push(worker1Profit, worker2Profit, worker3Profit)
arrProfit.sort(function (a, b) { return a.salary - b.salary })

let result = []
for (let i = 0; i < arrProfit.length; i++) {
  result[i] = arrProfit[i].fullName + ': ' + arrProfit[i].salary
}
console.log('Sorted salary:' + '\n' + result[0] + '\n' + result[1] + '\n' + result[2])


*/

