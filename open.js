let openButton = document.getElementById("openManga");



// When the button is clicked, inject setPageBackgroundColor into current page
openButton.addEventListener("click", async () => {
    browser.bookmarks.getTree().then((y) => console.log(y[0].children[1]), () => console.log("die"));
    
    browser.bookmarks.getChildren(mangaFolder, function(bms) { 
        for (var x=0; x<bms.length; x++) {
            browser.tabs.create({ url: bms[x].url });
        }
    });
});
