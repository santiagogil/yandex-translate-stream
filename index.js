var yandexTranslate = require('yandex-translate')
var mapStream = require('map-stream')

module.exports = function(apiKey) {
  var tr = yandexTranslate(apiKey)
  return mapStream(function (chunk, callback) {
    if (typeof chunk !== 'object' || !chunk.translate) return callback(null, chunk)
    var options = chunk.translate.options || {}
    var data = chunk.translate.data
    tr.translate(data, {from: options.from, to: options.to}, function (err, res) {
      if (err) callback(err)
      chunk.translate.translated = res.text
      return callback(null, chunk)
    })
})
}
