const chokidar = require('chokidar')
const { exec } = require('child_process')

const RESOURCE_CODE = `src`
const TSC_AND_BUILD = `yarn build`
const DEBOUNCE_INTERVAL = 2000

function compile() {
  console.log(`${Date()}: compiling...`)
  exec(TSC_AND_BUILD, err => {
    console.log(`${Date()}: complete.`)
    if (err) {
      console.error(`${Date()}: err: `, err)
      process.exit()
    }
  })
}

function compile_debounced() {
  console.log(`${Date()}: Starting watch directory: ${RESOURCE_CODE}`)
  let timer
  return () => {
    clearTimeout(timer)
    timer = setTimeout(compile, DEBOUNCE_INTERVAL)
  }
}

chokidar
  .watch(RESOURCE_CODE)
  .on('all', compile_debounced())