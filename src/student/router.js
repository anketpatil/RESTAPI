const { Router } = require('express')
const studentController = require('./controller')
const router = Router()

router.get('/getStudents', studentController.getStudents)
router.get('/getStudentsByID/:id', studentController.getStudentsByID)
router.post('/addStudent', studentController.addStudent)
router.delete('/deleteStudent/:id', studentController.deleteStudent)

module.exports = router