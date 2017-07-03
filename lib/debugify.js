module.exports = function (levels, namespace) {
  var loggers = {}
  Object.keys(levels).forEach((k)=>{
    if (levels[k]) {
      loggers[k] = require('debug')(namespace)
      loggers[k].enabled = true
    } else {
      loggers[k] = ()=>{}
    }
  })
  return loggers
}
