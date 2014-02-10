var page = require("webpage").create();
page.open("https://github.com/spektraldevelopment", function() {
    page.render("renders/github.png");
    phantom.exit();
});

