const pool = require('../../db')
const studentQueries = require('./queries')

const getStudents = (req, res) => {
    pool.query(studentQueries.getStudents, (error, results) => {
        if(error) throw error
        res.status(200).json(results.rows)
    })
}
const getStudentsByID = (req,res) => {
    const id = parseInt(req.params.id)
    pool.query(studentQueries.getStudentsByID, [id], (error,results) => {
        if(error) throw error
        res.status(200).json(results.rows)
    })
}
const addStudent = (req,res) => {
    const {name,email,age,dob,city} = req.body
    //console.log(email)
    //check if email already exists
    pool.query(studentQueries.checkEmailExists, [email], (error,results) => {
        if(error) throw error
        if(results.rows.length) {
            res.json('Email already exists')
        }
        pool.query(studentQueries.addStudent, [name,email,age,dob,city], (error,results) => {
            if(error) throw error
            res.status(201).json(results.rows)
        })
    })
    
}
const deleteStudent = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(studentQueries.getStudentsByID, [id], (error,results) => {
        if(error) throw error
        if(!results.rows.length) {
            res.send('Student does not exist !')
        }
        pool.query(studentQueries.deleteStudent, [id], (error,results) => {
            if(error) throw error
            res.status(200).json(results.rows)
        })
    })
}


module.exports = {
    getStudents,
    getStudentsByID,
    addStudent,
    deleteStudent
}