const { graphqlKoa, graphiqlKoa} = require('graphql-server-koa')
const { saveInfo, fetchInfo } = require('../controllers/info')
const { saveStudent, fetchStudent, fetchStudentDetail } = require('../controllers/student')
const { saveCourse, fetchCourse } = require('../controllers/course')
// 引入Schema
const schema = require('../graphql/schema').default
const router = require('koa-router')()

// 设置每一个路由对应的相对的控制器
router.post('/saveinfo', saveInfo)
.get('/info', fetchInfo)
.post('/savestudent', saveStudent)
.get('/student', fetchStudent)
.get('/studentDetail', fetchStudentDetail)
.post('/savescourse', saveCourse)
.get('/course', fetchCourse)

router.post('/graphql', async (ctx, next) => {
    await graphqlKoa({ schema: schema })(ctx, next) // 使用schema
})
.get('/graphql', async (ctx, next) => {
    await graphqlKoa({ schema: schema })(ctx, next) // 使用schema
})
.get('/graphiql', async (ctx, next) => {
    await graphiqlKoa({ endpointURL: '/graphql' })(ctx, next) // 重定向到graphiql路由
})

module.exports = router