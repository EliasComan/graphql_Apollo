import { gql } from "apollo-server-express";

export const typeDefs = gql`

type Task {
    id:ID
    title:String
    description:String

}

type Query{
    hello:String,
    getAllTask:[Task]
    getTask(id:ID):Task
}
input taskInput {
    title:String,
    description:String
}


type Mutation {
createTask(task:taskInput):Task
deleteTask(id:ID):String
updateTask(id:ID,task:taskInput):Task
}
`