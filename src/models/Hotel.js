const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: Array, required: true},
    description: {type: String, required: true},
    status: {type: Boolean, required: true},
});

const Hotel = mongoose.model('hotel', hotelSchema);

// const hotel = new Hotel({
//     name: 'Cozrum Homes - Sonata Residence',
//     address: '41 Nguyễn Thị Thập, Phường Tân Phú, Quận 7, District 7, Ho Chi Minh City, Vietnam',
//     price: 1000,
//     image: [
//         'https://pix8.agoda.net/hotelImages/38358514/0/a0536d9e6ca23ec600851ccdca57a567.jpg?ce=0&s=1024x768',
//         'https://pix8.agoda.net/hotelImages/38358514/633655352/b627e4af4c5c3492dd627fd9a4236241.jpg?ce=0&s=1024x768',
//         'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/442864513.jpg?k=65b6eb6e18eac8cc1c646f92987e2f82dc3a7a6f0cd3ffccb1da82dd76374864&o=',
//         'https://pix8.agoda.net/hotelImages/38358514/0/040d4eb2724a7b7a28a3a0690f68122e.jpg?ce=0&s=1024x768',
//         'https://pix8.agoda.net/hotelImages/38358514/0/54f581ecb4eb429b2a27847e61325fc7.jpg?ce=0&s=1024x768'
//     ],
//     description: 'Get your trip off to a great start with a stay at this property, which offers free Wi-Fi in all rooms. Conveniently situated in the District 7 part of Ho Chi Minh City, this property puts you close to attractions and interesting dining options. Don\'t leave before paying a visit to the famous War Remnants Museum. Rated with 4 stars, this high-quality property provides guests with access to spa and outdoor pool on-site.',
//     status: true,
// });
// hotel.save();
module.exports = Hotel;
