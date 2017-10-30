const {Bookmark} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const {songId, userId} = req.query
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })

      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'Server error trying to get bookmark!'
      })
    }
  },

  async post (req, res) {
    try {
      const {songId, userId} = req.body.params
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      console.log('------------------------------------')
      console.log(`songId:${songId}, userId:${userId}`)
      console.log('------------------------------------')
      if (bookmark) {
        return res.status(400).send({
          error: 'You already have this set as a bookmark!'
        })
      }

      const newBookmark = await Bookmark.create(req.body)
      console.log('------------------------------------')
      console.log(newBookmark)
      console.log('------------------------------------')
      res.send(newBookmark)
    } catch (err) {
      res.status(500).send({
        error: 'Server error trying to create bookmark!'
      })
    }
  },

  async delete (req, res) {
    try {
      const {bookmarkId} = req.params
      const bookmark = await Bookmark.findById(bookmarkId)
      await bookmark.destroy()
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'Server error trying to delete bookmark!'
      })
    }
  }
}
