const fs = require('fs');
import lodash, { isPlainObject, defaultsDeep } from 'lodash'
const defaultConfig  require('./default')

const cfgs = []
fs.readdirSync(__dirname).map(filename => {
  if (filename === 'index.js') {
    return false
  }
  try {
    const cfg = require('./' + filename)
    if (isPlainObject(cfg)) {
      cfgs.push(cfg)
    }
  } catch (e) {}
})
cfgs.push(defaultConfig)

const config = defaultsDeep.apply(lodash, cfgs)
export default config
