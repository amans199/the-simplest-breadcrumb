function getBreadCrumbItems() {
  var pathArray = window.location.pathname.split("/");
  pathArray.shift();
  pathArray.pop();
  let allItemsBC = [],
    pathLastIndex = location.pathname.substring(
      location.pathname.lastIndexOf("/") + 1
    ),
    breadcrumbItems = [];
  if (pathArray[0] != "") {
    for (let ii = 0; ii <= pathArray.length; ii++) {
      let pageName = pathArray[ii - 1],
        prevPageName = pathArray[ii - 2],
        AddToUrl;
      if (
        pageName != "" &&
        pageName != undefined &&
        prevPageName == undefined
      ) {
        AddToUrl = pageName + "/";
      } else if (prevPageName != "" && prevPageName != undefined) {
        AddToUrl = prevPageName + "/" + pageName + "/";
      } else {
        AddToUrl = "";
      }
      var itemsBC = {
        name: pathArray[ii],
        url:
          "http://" +
          window.location.hostname +
          "/" +
          AddToUrl +
          pathArray[ii],
        meta: {
          label: pathArray[ii]
        }
      };
      allItemsBC.unshift(itemsBC);
    }
    allItemsBC.shift();
    allItemsBC.reverse();
    breadcrumbItems = [...allItemsBC];
  }
  if (pathLastIndex != "") {
    breadcrumbItems[breadcrumbItems.length] = {
      name: pathLastIndex,
      active: true
    };
  }
  return breadcrumbItems;
}

function breadcrumbMaster() {
  var breadcrumb199List = document.getElementById('breadcrumb199__list');
  var splitterData = breadcrumb199List.dataset.splitter,
    marginItems = breadcrumb199List.dataset.marginItems,
    selectedColor = breadcrumb199List.dataset.selectedColor;
  breadcrumb199List.style.listStyle = "none";
  breadcrumb199List.style.display = "flex";
  for (var i = 0; i < getBreadCrumbItems().length; i++) {
    var breadcrumb199ListItem = document.createElement("li");
    breadcrumb199ListItem.className = "breadcrumb199__list--item";
    var breadcrumb199ListItemHref = document.createElement("a");
    breadcrumb199ListItem.appendChild(breadcrumb199ListItemHref);
    breadcrumb199ListItemHref.href = getBreadCrumbItems()[i].url;
    breadcrumb199ListItemHref.appendChild(document.createTextNode(getBreadCrumbItems()[i].name + splitterData));
    breadcrumb199List.appendChild(breadcrumb199ListItem);
  }
  document.querySelectorAll('.breadcrumb199__list--item').forEach(function (breadcrumb199ListItem) {
    breadcrumb199ListItem.style.margin = marginItems;
  });
  document.querySelector(".breadcrumb199__list--item:last-child a").setAttribute('style', 'color:' + selectedColor + ' !important');
}
// window.onload = breadcrumbMaster();

module.exports.breadcrumbMaster = breadcrumbMaster;