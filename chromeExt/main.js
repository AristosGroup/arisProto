localStorage["api_url"] ="http://pm.proaristos.ru";
localStorage["api_key"] ="1ba9eddec017876adbb2156aafccdc027791bda0";



var menu = chrome.contextMenus.create({"title": "Test parent item", id: 'addissue', "onclick": genericOnClick,contexts: ['all']});



function genericOnClick(info, tab) {
    console.log("item " + info.menuItemId + " was clicked");
    console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab));
    alert("item " + info.menuItemId + " was clicked");
}