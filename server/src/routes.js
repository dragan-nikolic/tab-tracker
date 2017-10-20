const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongController = require('./controllers/SongController')

module.exports = (app) => {
  app.post(
    '/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  )

  app.post(
    '/login',
    AuthenticationController.login
  )

  app.get(
    '/songs',
    SongController.index
  )

  app.get(
    '/songs/:songId',
    SongController.show
  )

  app.post(
    '/songs',
    SongController.post
  )

  app.put(
    '/songs/:songId',
    SongController.put
  )
}
