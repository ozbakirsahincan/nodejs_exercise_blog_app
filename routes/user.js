const router = require('express').Router();

const db = require('../data/db');


router.use('/blogs/category/:categoryid', async function (req, res) {
    const id = req.params.categoryid;
    try {
        const [blogs] = await db.execute('select * from blog where categoryid =?', [id]);
        const [categories] = await db.execute("select * from category");
        res.render("users/blogs", {
            title: 'Tüm Kurslarım',
            blogs: blogs,
            categories: categories,
            selectedCategory:id
        })
    } catch (error) {
        console.log(error);
    }
});

router.use("/blogs/:blogid", async function (req, res) {
    const id = req.params.blogid;
    try {
        const [blogs] = await db.execute('select * from blog where blogid =?', [id]);


        const blog = blogs[0];
        if (blog) {
            return res.render("users/blog-details", {
                title: blog.title,
                blog: blog,
                selectedCategory : null
            })
        }

        res.redirect("/");

    } catch (error) {
        console.log(error);
    }


});
router.use("/blogs", async function (req, res) {
    try {
        const [blogs] = await db.execute("select * from blog where postOK = 1");
        const [categories] = await db.execute("select * from category");
        res.render("users/blogs", {
            title: 'Tüm Kurslarım',
            blogs: blogs,
            categories: categories,
            selectedCategory : null
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
            selectedCategory : null
        })

    } catch (err) {
        console.log(err);
    }

})

module.exports = router;