const houses = require('./db.json')
let global_id = 4

module.exports = {
    getHouses: function(req,res) {
        res.status(200).send(houses)
    },
    deleteHouse: function(req,res) {
        console.log('House was sent to the MOOOOOOOOOoooooon!')
        let index = houses.findIndex(elem => elem.id === +req.params.id)
            houses.splice(index,1)
            res.status(200).send(houses)
            return
    },
    createHouse: function(req,res) {
        let {address,price,imageURL} = req.body
        let new_house = {
            id: houses[houses.length-1].id + 1,
            address: address,
            price: +price,
            imageURL
        }
        houses.push(new_house)
        res.status(200).send(houses)

    },
    updateHouse: function(req,res) {
        let {id} = req.params
        let {type} = req.body

        let index = houses.findIndex(elem => elem.id === +id)

        if(houses[index].price <= 0 && type == 'minus') {
            res.status(400).send('What in lords name are you doing?')
        } else if(type === 'plus'){
            houses[index].price += 10000
            res.status(200).send(houses)
        } else if(type === 'minus'){
            houses[index].price -= 10000
            res.status(200).send(houses)
        } else {
            res.status(400).send('Bad')
        }
    },


}