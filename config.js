javascript
const fs = require('fs')

global.owner = ['94765487074'] // Oyage number eka hari
global.ownername = 'Kaveesha'
global.botname = 'KAVEESHA MINI'
global.prefix = '.'

global.mess = {
    success: 'Wade hari! ✅',
    admin: 'Meka adminlata vitharayi bosa! 👮',
    owner: 'Meka mage owner (Kaveesha) ta vitharayi! 👑',
    group: 'Meka groups wala vitharayi weda කරන්නේ! 👥',
    wait: 'Poddak hitapan Kaveesha, wade wenawa... ⏳',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    delete require.cache[file]
    require(file)
})
```

-----
