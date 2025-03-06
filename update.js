let updateButton = document.getElementById("updateManga");
let mangaFolder = "26";

updateButton.addEventListener("click", async () => {
    // Delete bookmarks
    browser.bookmarks.getChildren(mangaFolder, function(bms) { 
        for (var x=0; x<bms.length; x++) {
            browser.bookmarks.remove(bms[x].id);
        }
    });

    
    // Add bookmarks
    browser.tabs.query({currentWindow: true}, function(tabs, folder) {
        for (var i=0; i<tabs.length; i++) {
            browser.bookmarks.create({
                'parentId': mangaFolder,
                'title': tabs[i].title,
                'url': tabs[i].url
            })
        }
    })
});
