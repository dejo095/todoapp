'use strict'

const Project = use('App/Models/Project')

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

}

module.exports = ProjectController
