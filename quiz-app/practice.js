const students = [
    {
        name : "Maliha",
        age: 15
    },
    {
        name : "Anila",
        age : 12,
    },
    {
        name : "Hani",
        age : 20
    }
]

const filterAge = students.map((student)=> student.name)
console.log(filterAge)