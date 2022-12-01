// const person = {
//     firstName: 'Alex',
//     lastName: 'E.',
//     birthYear: 2002,
//     job: 'web developer',
//     hasDriversLicense: true,
//     getAge: function(curYear) {
//         return curYear - this.birthYear;
//     },
//     getSummary: function() {
//         return `Name: ${this.firstName} ${this.lastName}\nAge: ${this.getAge(2002)}\nHas driver's license: ${this.hasDriversLicense}`;
//     }
// };

// console.log(person);
// console.log(person.firstName);
// console.log(person['firstName'] ,person['lastName'],person.getAge(2022));
// console.log(person.getSummary());

let mark = {
    name: 'Mark',
    massKG: 78,
    heightM: 1.69,
    BMI: null,
    getBMI: function () {
        this.BMI = this.massKG / this.heightM ** 2;
        return this.BMI;
    }
}

let john = {
    name: 'John',
    massKG: 92,
    heightM: 1.95,
    BMI: null,
    getBMI: function () {
        this.BMI = this.massKG / this.heightM ** 2;
        return this.BMI;
    }
}

let hasHigherBMI = function (mark, john) {
    if (mark.getBMI() > john.getBMI()) {
        console.log(`Mark has higher BMI: ${mark.getBMI()} vs ${john.getBMI()}`)
    } else {
        console.log(`John has higher BMI: ${john.getBMI()} vs ${mark.getBMI()}`)
    }
}

hasHigherBMI(mark,john);