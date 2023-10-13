class GalleryController {

    hcm(req, res) {
        res.render('gallery/ho-chi-minh');
    }

    hn(req, res) {
        res.render('gallery/ha-noi');
    }

    dalat(req, res) {
        res.render('gallery/da-lat');
    }

    halong(req, res) {
        res.render('gallery/ha-long-bay');
    }

    hoian(req, res) {
        res.render('gallery/hoi-an');
    }

    all(req, res) {
        res.render('gallery/all');
    }

    index(req, res) {
        res.render('gallery/all');
    }
}

module.exports = new GalleryController();
