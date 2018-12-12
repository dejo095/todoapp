'use strict'

const Project = use('App/Models/Project')
const AuthorizationService = use('App/Services/AuthorizationService')

class ProjectController {

    async index({ auth }) {

        // gets authenticated user
        const user = await auth.getUser()

        // gets all projects of a user
        return await user.projects().fetch()
    }

    async create({ request, auth }) {

        // gets authenticated user
        const user = await auth.getUser()

        const { title } = request.all()

        const project = new Project()

        // define the object to be saved
        project.fill({
            title,
        })

        // save to db
        await user.projects().save(project)
        return project

    }

    async destroy({ request, response, auth, params }) {

        const { id } = params
        // gets authenticated user
        const user = await auth.getUser()

        // gets param from url /:id

        // finds projects of specific id
        const project = await Project.find(id)

        // check if project is owned by authed user
        AuthorizationService.verifyPermission(project, user)

        // delete it
        await project.delete()

        // return deleted project
        return project

    }

}

module.exports = ProjectController
