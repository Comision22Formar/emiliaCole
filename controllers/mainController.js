const path = require('path')

module.exports = {
  about: (req, res) =>
    res.sendFile(path.join(__dirname, "..", "views", "about.html")),
  contact: (req, res) =>
    res.sendFile(path.join(__dirname, "..", "views", "contact.html")),
  home: (req, res) =>
    res.sendFile(path.join(__dirname, "..", "views", "home.html")),
  music: (req, res) =>
    res.sendFile(path.join(__dirname, "..", "views", "music.html")),
};
