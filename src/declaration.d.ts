declare module 'encoding-down'
declare module 'leveldown'
declare module 'levelup'
declare module 'level-ws'

const db = levelup(encoding(
  leveldown("path"),
  { valueEncoding: 'json' })
)
const stream = WriteStream(db)
