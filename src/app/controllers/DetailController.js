const Hotel = require('../../models/Hotel');
class DetailController {
    async slug (req, res, next) {
        const hotelsFromDB = await Hotel.find();
        const hotels = hotelsFromDB.map(hotel => hotel.toObject());
        await Hotel.findOne({name: req.params.slug})
            .then((hotel) => {
                res.render('hotel-detail', {hotel: hotel.toObject(), title: hotel.name, hotels: hotels});
                // console.log(images);
            })
            .catch(next);
    }
    index(req, res) {
        res.send('DetailController index');
    }
}

module.exports = new DetailController();
