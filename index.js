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

module.exports.getBreadCrumbItems = getBreadCrumbItems;