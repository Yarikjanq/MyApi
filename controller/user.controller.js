const db = require('../db')

class UserController{
    async createUser(req, res){
   const {name, surname} = req.body
   const newPerson = await db.query('INSERT INTO person (name, surname) values ($1, $2) RETURNING *', [name, surname])

        res.json(newPerson.rows[0])
    }
    async getUsers(req, res){
        const users = await db.query('SELECT * FROM person')
        res.json(users.rows)
    }
    async getOneUser(req, res){
        const id = req.params.id
        const users = await db.query('SELECT * FROM person where id = $1', [id])
        res.json(users.rows[0])
    }
    async updateUser(req, res){
    const {name, id, surname} = req.body
    const user = await db.query('UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *', [name, surname, id])
    }
    async deleteUser(req, res){
        
    }
}

module.exports = new UserController()