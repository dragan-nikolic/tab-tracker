const {Song} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const songs = await Song.findAll({
        limit: 10
      })

      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'Server error trying to get songs!'
      })
    }
  },

  async show (req, res) {
    const songId = req.params.songId
    try {
      const song = await Song.findById(songId)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: `Server error trying to get song ${songId}!`
      })
    }
  },

  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: `Server error trying to create song ${req.body}!`
      })
    }
  }
}
