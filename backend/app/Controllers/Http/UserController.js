"use strict"

const User = use("App/Models/User")

class UserController {
  async create ({ request }) {
    const data = request.only(["nome", "email", "password"])
    console.log(request)
    const user = await User.create(data)
    console.log("Cadastrado com sucesso")

    return user
  }
}

module.exports = UserController