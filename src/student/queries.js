//Student Queries
const getStudents = 'Select * from Students'
const getStudentsByID = 'select * from students where id=$1'
const checkEmailExists = 'select * from students where email = $1'
const addStudent = 'insert into students(name,email,age,dob,city) values($1,$2,$3,$4,$5) returning *'
const deleteStudent = 'delete from students where id=$1 returning *'


module.exports = {
    getStudents,
    getStudentsByID,
    checkEmailExists,
    addStudent,
    deleteStudent
}