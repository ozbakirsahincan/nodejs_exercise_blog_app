const router = require('express').Router();

const data = {
    title: "Herkesin Popisi Olan Kurslar",
    categories:
        ["Web Geliştirme", "Programlama", "Mobil Uygulamalar", "Veri Analizi", "Ofis Uygulamaları"],
    blogs: [
        {
            blogid: 1,
            title: "Komple Web Geliştirme",
            description: "Sıfırdan İleri Seviye Web Gelitşirme : Html , Css",
            img: "1.jpeg",
            anasayfa: true,
            postOK: true
        },
        {
            blogid: 2,
            title: "Komple Uygulamalı Piton Geliştirme",
            description: "Tıslıyoruz",
            img: "2.jpeg",
            anasayfa: true,
            postOK: false
        },
        {
            blogid: 3,
            title: "Komple Uygulamalı Javascript Geliştirme",
            description: "Sıfırdan ileri seviyeye",
            img: "3.jpeg",
            anasayfa: false,
            postOK: true
        },
        {
            blogid: 4,
            title: "Komple Uygulamalı React Geliştirme",
            description: "Sıfırdan ileri seviyeye",
            img: "4.jpeg",
            anasayfa: true,
            postOK: true
        },
    ]
};

router.use("/blogs/:blogid", function (req, res) {
    res.render("users/blog-details")
});
router.use("/blogs", function (req, res) {
    res.render("users/blogs", data);
})
router.use("/", function (req, res) {
    res.render("users/index", data);

})

module.exports = router;