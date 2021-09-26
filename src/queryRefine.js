
// Query Object
// mainQuery = Query end users want to search
// searchSite = Sites end users want to see
// removeSites = Sites end users don't want to see
// fileType = Filetype end users want to find
// result = concatnated query result
function queryRefine(mainQuery="", searchSite="", removeSites="", fileType="", result=""){
    this.mainQuery = mainQuery;
    this.searchSite = searchSite;
    this.removeSites = removeSites;
    this.fileType = fileType;
    this.result = result;
}

// Build URL
queryRefine.prototype.refine = function (){
    this.result = "https://google.com/search?q=";
    if(this.mainQuery.length > 0) 
        this.result += this.mainQuery.trim().replaceAll(/\s+/ig, "+");
    if(this.removeSites.length > 0){
        this.result += "+"
        this.result += this.removeSites.trim().replaceAll(/\s+/ig, "-site:");
    }
    if(this.fileType.length > 0){
        this.result+="+filetype:";
        this.result += this.fileType.trim().replaceAll(/\s+/ig, "+OR+filetype:");
    }
    if(this.searchSite.length > 0){
        this.result+="&as_sitesearch=";
        this.result += this.searchSite.trim().replaceAll(/\s+/ig, "+");
    }

    return this.result;
}

document.getElementById('proceedSearch').onclick = () => {

    // Preprocess
    let rawQuery = new queryRefine(document.getElementById("searchString").value, 
                            document.getElementById("searchSites").value,
                            document.getElementById("removeSites").value, 
                            document.getElementById("fileType").value);

    window.open(url=rawQuery.refine());
    
    // TODO
    // Doesn't work in some conditions
    // window.location.replace(url=rawQuery.refine());
};
                        
// chrome.tabs.create(url=rawQuery.refine());
// chrome.tabs.executeScript({
//     //code: 'var userQuery = '+ JSON.stringify(rawQuery.result)
//     code: 'var userQuery = '+ JSON.stringify(rawQuery.refine())
// }, function () {
//     chrome.tabs.executeScript({file: 'src/content.js'});
// });