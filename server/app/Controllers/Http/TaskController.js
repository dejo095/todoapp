'use strict'

const Project = use('App/Models/Project')
const Task = use('App/Models/Task')
const AuthorizationService = use('App/Services/AuthorizationService')

/**
 * Resourceful controller for interacting with tasks
 */
class TaskController {

    async create ({ request, auth, params }) {

        const user = await auth.getUser()
        const { description } = request.all()
        const { id } = params
        const project = await Project.find(id)
        AuthorizationService.verifyPermission(project, user) // check if project is owned by authed user

        const task = new Task()
        // define the object to be saved
        task.fill({
            description,
        })

        // save to db
        await project.tasks().save(task)
        return task

    }


}

module.exports = TaskController
