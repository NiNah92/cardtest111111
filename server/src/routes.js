const UserController = require('./controllers/UserController')
const UserAuthenController = require('./controllers/UserAuthenController')
const isAuthenController = require('./authen/isAuthenController')
const BlogcarController = require('./controllers/BlogcarController')
const CarController = require('./controllers/CarController')
const blogcar = require('./models/Blogcar.js')


let multer = require("multer")


let storage = multer.diskStorage({
  destination: function (req, file, callblack) {
    callblack(null, "./public/uploads");
  },
  filename: function(req, file, callblack) {
   
    console.log(file);
    callblack(null, file.originalname);
  }
})
let upload = multer({ storage: storage }).array("userPhoto",10)





module.exports = (app) => {
  app.post('/user',UserController.create)
  app.put('/user/:userId',UserController.put)
  app.delete('/user/:userId',UserController.remove)
  app.get('/user/:userId',UserController.show)
  app.get('/users', isAuthenController, UserController.index)
  app.post('/login',UserAuthenController.login)



  
  app.post('/blogcar',BlogcarController.create)
  
  app.put('/blogcar/:blogcarId',BlogcarController.put)

  app.delete('/blogcar/:blogcarId',BlogcarController.remove)

  app.get('/blogcar/:blogcarId',BlogcarController.show)

  app.get('/blogcars',BlogcarController.index)


 
  app.post('/car', CarController.create)

  app.put('/car/:carId',CarController.put)

  app.delete('/car/:carId',CarController.remove)
  
  app.get('/car/:carId',CarController.show)
 
  app.get('/cars',CarController.index)








  app.post("/upload", function(req, res) {
  
      upload(req, res, function(err) {
        if(err){
        return res.end("Error uploading file");
        }
        res.end("File is uploaded");
      })
    })

  
  app.post('/upload/delete', async function (req, res) {
    try {
      const fs = require('fs');

      console.log(req.body.filename)
      fs.unlink(process.cwd() + '/public/uploads/' + req.body.filename,
      (err) => {
        if (err) throw err;
        res.send("Delete sucessful")
    
      });
    } catch (err) {
        res.status(500).send({
          error: 'An error has occured trying to delete file the material'
        })
    }
  })


}

