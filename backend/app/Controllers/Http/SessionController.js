'use strict'

class SessionController {

    async create ({ request, auth }) { 
        const { email, password } = request.all()
    
        const token = await auth.attempt(email, password)
        console.log(token)
        return token
      }
}

module.exports = SessionController
