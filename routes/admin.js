const router = require('express').Router();
const db = require('../data/db');

router.get("/blog/create", async function (req, res) {
    try {

        const [categories] = await db.execute('select * from category');
        res.render("admin/blog-create", {
            title: "Add Blog",
            categories: categories

        });
    } catch (error) {
        console.log(error);
    }

});

router.post("/blog/create", async function (req, res) {
    console.log(req.body);
    const {
        title,
        description,
        img,
        category,
    } = req.body;
    const home = req.body.home == "on" ? 1 : 0;
    const postOK = req.body.postOK == "on" ? 1 : 0;

    try {
        await db.execute('INSERT INTO blog(title,description,img,anasayfa,postOK,categoryid) VALUES(?,?,?,?,?,?)',
            [title, description, img, home, postOK, category]);
        res.redirect('/');
    } catch (error) {

    }
});


router.get("/blogs/:blogid", function (req, res) {
    res.render("admin/blog-edit");
});

router.get("/blogs", function (req, res) {
    res.render("admin/blog-list")
});
module.exports = router;