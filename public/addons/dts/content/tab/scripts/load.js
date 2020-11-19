(() => {
  const storage = window.localStorage
  const opts = JSON.parse(storage.getItem('opts') || '{}')

  function writeExternal () {
    document.write(
      '<link rel="icon" type="image/png" href="https://brococo.co/addons/dts/content/shared/dash48.png">'
    )
    document.write(
      '<link rel="stylesheet" href="https://brococo.co/addons/dts/content/tab/styles/global.css">'
    )
    document.write(
      '<link rel="stylesheet" href="https://brococo.co/addons/dts/content/shared/oris.css">'
    )
    document.write(
      '<link rel="stylesheet" href="https://brococo.co/addons/dts/content/tab/styles/ims.css">'
    )
    document.write(
      '<link rel="stylesheet" href="https://brococo.co/addons/dts/content/tab/styles/resize.css">'
    )
    document.write(
      '<script defer src="https://brococo.co/addons/dts/content/tab/scripts/dash.js"></script>'
    )
  }
  function writeLocal () {
    document.write(
      '<link rel="icon" type="image/png" href="../shared/dash48.png">'
    )
    document.write('<link rel="stylesheet" href="styles/global.css">')
    document.write('<link rel="stylesheet" href="../shared/oris.css">')
    document.write('<link rel="stylesheet" href="styles/ims.css">')
    document.write('<link rel="stylesheet" href="styles/resize.css"></link>')

    document.write('<script defer src="scripts/dash.js"></script>')
  }

  if (opts.localOnly) {
    writeLocal()
  } else {
    writeExternal()
    setTimeout(() => {
      if (!window['~dash-main']) {
        writeLocal()
      }
    }, 1000)
  }
})()
