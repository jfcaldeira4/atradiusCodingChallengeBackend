const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send(`[{"id":1,"first name":"Cole","lastname":"Yusuf","username":"61JANE","gender":"male","age":13,"address":{"location":{"street number":2,"street name":"Coffin bay","city":"Amman","country":"Saint Pierre andMiquelon","company":"Home Depot"},"ip address":"110.141.71.13.74","zipcode":53891},"phone":2795307087,"email":"Gravytrainlane61JANE@hotmail.fr","website":"HomeDepot.cn","friendly":false,"hobby":["Harry Potter."]},{"id":2,"firstname":"Marcel","lastname":"Laesey","username":"Zeke59","gender":"male","age":24,"address":{"location":{"street number":3,"street name":"Van","city":"San juan","country":"Saint Pierre andMiquelon","company":"BHP Group"},"ip address":"61.104.189.169.67","zipcode":32645},"phone":3070401475,"email":"LorienavenueZeke59@gmail.com","website":"BHPGroup.co","friendly":true,"hobby":["UnderwaterPhotography","Streaking"]},{"id":3,"first name":"Jesus","lastname":"Saleh","username":"Tomas12","gender":"male","age":19,"address":{"location":{"street number":6,"street name":"Kingsroad","city":"Riga","country":"Mozambique","company":"AbbVie"},"ipaddress":"79.22.178.51.134","zipcode":57272},"phone":3108197612,"email":"CoffinbayTomas12@hotmail.es","website":"AbbVie.cf","friendly":false,"hobby":["Tether Car"]},{"id":4,"first name":"Zaid","lastname":"Saleh","username":"Bridger6","gender":"male","age":23,"address":{"location":{"street number":9,"street name":"Batman avenue","city":"Ulaanbaatar","country":"MarshallIslands","company":"Samsung Electronics"},"ip address":"59.128.27.65.108","zipcode":33374},"phone":3055396455,"email":"HillBridger6@hotmail.de","website":"SamsungElectronics.top","friendly":false,"hobby":["Scrabble.","Geocaching","Drinking."]},{"id":5,"first name":"Julia","lastname":"Herrera","username":"NannyGoatStrutAlley35","gender":"female","age":33,"address":{"location":{"street number":5,"street name":"Greenlane","city":"Sarajevo","country":"French Polynesia","company":"Goldman SachsGroup"},"ip address":"180.138.149.48.20","zipcode":68371},"phone":3350537010,"email":"NannyGoatStrutAlley35Side@me.com","website":"GoldmanSachsGroup.cf","friendly":false,"hobby":["FarmVilla."]}]`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})