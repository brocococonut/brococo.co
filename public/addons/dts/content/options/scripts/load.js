(() => {
    const storage = window.localStorage
    const opts = JSON.parse(storage.getItem('opts') || '{}')

    function writeExternal() {
        document.write('<link rel="icon" type="image/png" href="https://brococo.co/addons/dts/content/shared/dash48.png">')
        document.write('<link rel="stylesheet" href="https://brococo.co/addons/dts/content/options/styles/global.css">')
        document.write('<link rel="stylesheet" href="https://brococo.co/addons/dts/content/shared/oris.css">')
        document.write('<link rel="stylesheet" href="https://brococo.co/addons/dts/content/options/styles/ims.css">')
        document.write('<link rel="stylesheet" href="https://brococo.co/addons/dts/content/options/styles/resize.css">')
        document.write('<script src="https://brococo.co/addons/dts/content/options/scripts/options.js"></script>')
    }
    function writeLocal() {
        document.write('<link rel="icon" type="image/png" href="../shared/dash48.png">')
        document.write('<link rel="stylesheet" href="styles/global.css">')
        document.write('<link rel="stylesheet" href="../shared/oris.css">')
        document.write('<link rel="stylesheet" href="styles/ims.css">')
        document.write('<link rel="stylesheet" href="styles/resize.css"></link>')

        document.write('<script src="scripts/options.js"></script>')
    }

    if (opts.localOnly) {
        writeLocal()
    } else {
        writeExternal()
        setTimeout(() => {
            if (!window['~dash-options']) {
                writeLocal()
            }
        }, 1000)
    }
})()