const router = require('express').Router();

const db = require('../data/db');


router.use("/blogs/:blogid", function (req, res) {
    res.render("users/blog-details")
});
router.use("/blogs", async function (req, res) {
    try {
        const [blogs] = await db.execute("select * from blog where postOK = 1");
        const [categories] = await db.execute("select * from category");
        res.render("users/blogs", {
            title: 'Tüm Kurslarım',
            blogs: blogs,
            categories: categories
        })
    } catch (err) {
        console.log(err);
    }

})
router.use("/", async function (req, res) {
    try {
        const [blogs,] = await db.execute("select * from blog where anasayfa = 1 and postOK = 1");
        const [categories,] = await db.execute("select * from category");
        res.render("users/index", {
            title: "Popüler Kurslarım",
            blogs: blogs,
            categories: categories,
        })

    } catch (err) {
        console.log(err);
    }

})

module.exports = router;