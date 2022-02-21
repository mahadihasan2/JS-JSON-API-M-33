const student = {
    name: 'Mahadi',
    age: 24,
    id: 21,
    job: 'teacher'
}
console.log(student)
const laibery = {
    name: 'Jonota Laibery',
    addrees: 'Mirpur-10',
    monthlyincome: 50000,
    profit: 20000,
    email: 'jonota12@gmail.com'
}
const laiberyStingified = JSON.stringify(laibery)
console.log(laiberyStingified)
const technicalShop = {
    name: 'Amar technologt Shop',
    addrees: 'Narshingdi,Beside The Narsingdi govt.college',
    yearlyIncome: 700000
}
console.log(technicalShop)

const studentInfo = {
    name: 'Mahadi Hasan',
    id: 21,
    universityName: 'Institute of Science trade & Technology',
    addrees: 'Dhaka',


    subStudent: {
        name: 'Alia Bhat',
        id: 34,
        UniversityName: 'Dhaka University',
        Email: 'aliabhat2@gmail.com',
        addrees: 'India,Dheli'
    }
}
const studentInfoStringFied = JSON.stringify(studentInfo)
const unStringFied = JSON.parse(studentInfoStringFied)
console.log(unStringFied)