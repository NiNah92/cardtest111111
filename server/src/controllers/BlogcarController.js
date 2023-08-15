const { Blogcar } = require('../models')

module.exports = {
   
    async index(req, res) {
        try {
            const blogcars = await Blogcar.findAll()
            res.send(blogcars)
        } catch (err) {
            res.status(500).send({
                error: 'The blogs information was incorrect'
            })
        }
    },


    async create(req, res) {
        try {
            const blogcar = await Blogcar.create(req.body)
            res.send(blogcar.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create blog incorrect'
            })
        }
    },

 
    async put(req, res) {
        try {
            await Blogcar.update(req.body, {
                where: {
                    id: req.params.blogcarId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update blog incorrect'
            })
        }
    },

   
    async remove(req, res) {
        try {
            const blogcar = await Blogcar.findOne({
                where: {
                    id: req.params.blogcarId
                }
            })

            if (!blogcar) {
                return res.status(403).send({
                    error: 'The blog information was incorrect'
                })
            }

            await blogcar.destroy()
            res.send(blogcar)
        } catch (err) {
            res.status(500).send({
                error: 'The blog information was incorrect'
            })
        }
    },

    
  async show (req, res) {
    try {
      const blogcar = await Blogcar.findByPk(req.params.blogcarId)
      res.send(blogcar)
    } 
    catch (err) {
        res.status(500).send({
            error: 'The blog information was incorrect'
        })
    }
  }
}