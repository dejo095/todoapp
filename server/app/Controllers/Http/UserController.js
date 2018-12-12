'use strict'

const User = use('App/Models/User')

class UserController {

    async login({ request, auth }) {

        // get from post request body
        const { email, password } = request.all()

        // try to authenticate
        const token = await auth.attempt(email, password)
        return token

    }

    async register({ request }) {

        // get from post request body
        const { email, password } = request.all()

        // create user in db
        await User.create({
            email,
            password,
            username: email
        })

        // this will register user and do login right after
        return this.login(...arguments)
    }

}

module.exports = UserController
