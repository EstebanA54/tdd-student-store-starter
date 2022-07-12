const path = require("path")
const lowdb = require("lowdb")
const FileSync = require("lowdb/adapters/FileSync")

class Storage {
  constructor() {
    this.path = path.resolve(__dirname,"db.json")
    this.setup()
  }

  setup() {
    const adapter = new FileSync(this.path)
    this.db = lowdb(adapter)
    this.db.defaults({ purchases: [], products: [] }).write()
  }

  set(key, value) {
    return this.db.set(key, value)
  }

  get(key) {
    return this.db.get(key)
  }
}

module.exports = {
  storage: new Storage(),
}
