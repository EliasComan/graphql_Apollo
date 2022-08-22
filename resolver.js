import { TaskModel } from "./models/tasks.js"

export const resolvers = {
    Query:{
        hello : () => 'Hello world',
        getAllTask : async () => {
            const tasks = await TaskModel.find()
            return tasks
        },
        getTask:
         async (_,{id}) => {
        const task = await TaskModel.findById(id)
        return task
        }

    },
    Mutation:{
        createTask: async (_, {task}) => {
            const {title, description} = task
            const newTask = new TaskModel({title, description})
            await newTask.save()
            return newTask
        },
        deleteTask: async (_, {id}) => {
            await TaskModel.findByIdAndDelete(id)
            return 'Done'
        },
        updateTask : async ( _, {id, task}) => {
          const newTask =  await TaskModel.findByIdAndUpdate(id,{$set:task}, {new:true})
          return newTask
        }
        
    }
}