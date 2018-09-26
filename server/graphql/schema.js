const {
    GraphQLSchema,
    GraphQLObjectType,
} = require('graphql')

const info = require('./info').info
const infos = require('./info').infos
const { student } = require('./student')
const { course } = require('./course')

// 导出GraphQLSchema模块
exports.default = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Queries',
        fields: {
            infos,
            info,
            student,
            course
        }
    })
})