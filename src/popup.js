function queryRefine(mainQuery="", searchSite="", removeSites="", fileType="", result=""){
    this.mainQuery = mainQuery;
    this.searchSite = searchSite;
    this.removeSites = removeSites;
    this.fileType = fileType;
    this.result = result;
}

queryRefine.prototype.refine = function (){
    this.result = this.mainQuery;
    if(this.removeSites.length > 0){
        this.result += " -site:" + this.removeSites; 
    }
    if(this.fileType.length > 0){
        this.result += " filetype:" + this.fileType;
    }
    return this.result;
}

//let rawQuery = queryRefine;

document.getElementById('proceedSearch').onclick = () => {
    let rawQuery = new queryRefine(document.getElementById("searchString").value, 
                            document.getElementById("searchSites").value,
                            document.getElementById("removeSites").value, 
                            document.getElementById("fileType").value);
    //console.log(rawQuery.refine());
    chrome.tabs.executeScript({
        //code: 'var userQuery = '+ JSON.stringify(rawQuery.result)
        code: 'var userQuery = '+ JSON.stringify(rawQuery.refine())
    }, function () {
        chrome.tabs.executeScript({file: 'src/content.js'});
    });
};
