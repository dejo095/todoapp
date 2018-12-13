'use strict'

const Project = use('App/Models/Project')
const Task = use('App/Models/Task')
const AuthorizationService = use('App/Services/AuthorizationService')

/**
 * Resourceful controller for interacting with tasks
 */
class TaskController {

    async index({ request, auth, params }) {

        const user = await auth.getUser()
        const { id } = params
        const project = await Project.find(id)
        AuthorizationService.verifyPermission(project, user)
        return await project.tasks().fetch()

    }

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

    async update({ request, auth, params }) {

        const user = await auth.getUser()
        const { id } = params
        const task = await Task.find(id)
        const project = await task.project().fetch()
        AuthorizationService.verifyPermission(project, user)

        task.merge(request.only([
            'description',
            'completed'
        ]))
        await task.save()
        return task

    }

    async destroy({ request, auth, params }) {

        // gets authenticated user
        const user = await auth.getUser()

        // gets param from url /:id
        const { id } = params

        // finds task of specific id
        const task = await Task.find(id)

        // check if project is owned by authed user
        const project = await task.project().fetch()
        AuthorizationService.verifyPermission(project, user)

        // delete it
        await task.delete()

        // return deleted task
        return task

    }


}

module.exports = TaskController
