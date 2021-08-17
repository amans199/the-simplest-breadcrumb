function getBreadCrumbItems() {
  let currentUrl = decodeURIComponent(window.location.pathname).split("/");
  let breadcrumbItems = currentUrl.map((elem, j) => ({
    index: elem.replace(/\-/g, '_').toString(),
    text: elem,
    url: "/" + currentUrl.map((url, i) => (i < j + 1 ? url : '')).filter((el) => el !== '').join("/"),
  }));
  return breadcrumbItems;
}



export default async function BreadcrumbMaster(options) {
  await

  function () {
    // 
  }

  if (!options.wrapper_id || !document.body.contains(document.getElementById(options.wrapper_id))) {
    return;
  }

  //================ INITIAL CONFIGURATION ================
  if (!options.splitter) {
    options.splitter = '/'
  }


  var breadcrumb199List = document.getElementById(options.wrapper_id);
  breadcrumb199List.textContent = ""
  breadcrumb199List.style.listStyle = "none";
  breadcrumb199List.style.display = "flex";
  //==================================================


  function structureBreadcrumb() {
    let breadcrumbItems = [...getBreadCrumbItems()];
    breadcrumbItems[0] = {
      index: "home",
      text: "Home",
      url: "/",
    }
    let currentUrl = window.location.pathname.split("/");
    if (options.customElements) {
      breadcrumbItems = [...options.customElements];
    }
    if (options.exceptions_list) {
      options.exceptions_list.map((ele, index) => ((ele.page === currentUrl[currentUrl.length - 1] && ele.customElements) ? breadcrumbItems = [...ele.customElements] : ''))
    }
    let breadcrumbStructure = breadcrumbItems.map((elem, index) => ({
      ...elem,
      pages: []
    }));
    if (options.strings) {
      if (options.strings.home) {
        breadcrumbItems[0] = {
          index: "home",
          text: options.strings.home,
          url: "/",
        }
      }
    }
    return breadcrumbStructure;
  }
  let breadcrumbItems = [...structureBreadcrumb()]




  // OPTION :  replace strings 
  if (options.strings) {
    // Get the size of an object
    Object.size = function (obj) {
      var size = 0,
        key;
      for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
      }
      return size;
    };
    var stringsToChange = options.strings;
    var size = Object.size(stringsToChange);
    if (size > 0) {
      for (const key in stringsToChange) {
        breadcrumbItems.forEach(element => {
          var index = breadcrumbItems.findIndex(p => p.text == key)
          if (typeof breadcrumbItems[index] !== 'undefined') {
            breadcrumbItems[index] = {
              index: breadcrumbItems[index].id,
              text: stringsToChange[key],
              url: breadcrumbItems[index].url,
            }
          }
        });
      }
    }
  }

  function getBaseUrl() {
    var getUrl = window.location;
    let baseUrl = ""
    getUrl.protocol ? baseUrl += getUrl.protocol + "//" : ""
    getUrl.host ? baseUrl += getUrl.host : ""
    return baseUrl
  }

  function redirection_handler(elem_url, spa) {
    //  todo : fix spa behaviour
    if (spa) {
      history.replaceState(history.state, null, elem_url);
    } else {
      window.location.href = getBaseUrl() + elem_url;
    }

  }

  for (var i = 0; i < breadcrumbItems.length; i++) {
    var breadcrumb199ListItem = document.createElement("li");
    breadcrumb199ListItem.className = "breadcrumb199__list--item";
    breadcrumb199ListItem.innerHTML = `<a role="button" class='breadcrumb_item__${breadcrumbItems[i].index} ${i ===  breadcrumbItems.length-1 ? 'active_breadcrumb_item' : ''}'>${breadcrumbItems[i].text}</a>` +
      `<div class='options-splitter splitter__${breadcrumbItems[i].index}'>${ options.splitter }</div>`;
    (function () {
      var url = breadcrumbItems[i].url;
      var spa_app = options.spa_app ? options.spa_app : false;

      breadcrumb199ListItem.addEventListener('click', function () {
        redirection_handler(url, spa_app)
      })
    }());
    breadcrumb199List.appendChild(breadcrumb199ListItem);
  }


  // configure the Styles of the breadcrumb 
  if (options.styles) {
    if (options.styles.items_gab) {
      Array.from(document.querySelectorAll(".breadcrumb199__list--item .options-splitter")).map(elem => {
        elem.style.marginRight = options.styles.items_gab;
        elem.style.marginLeft = options.styles.items_gab;
      })
    }


    // configure the color_selected of the latest breadcrumb element 
    if (options.styles.color && document.body.contains(document.querySelector('.breadcrumb199__list--item a'))) {
      Array.from(document.querySelectorAll(".breadcrumb199__list--item a")).map(elem => {
        elem.style.color = options.styles.color
      })
    }

    // configure the splitter 
    if (options.styles.splitter_color && document.body.contains(document.querySelector('.breadcrumb199__list--item .options-splitter'))) {
      Array.from(document.querySelectorAll(".breadcrumb199__list--item .options-splitter")).map(elem => {
        elem.style.color = options.styles.splitter_color
      })
    }

    // configure the color_selected of the latest breadcrumb element 
    if (options.styles.color_selected && document.body.contains(document.querySelector('.breadcrumb199__list--item a'))) {
      document.querySelector(".breadcrumb199__list--item:last-child a").setAttribute('style', 'color:' + options.styles.color_selected);
    }

  }
  // configure Alignment 
  document.querySelector(".breadcrumb199__list--item:last-child .options-splitter").remove()
  Array.from(document.querySelectorAll(".breadcrumb199__list--item")).map(elem => {
    elem.style.display = 'flex'
    elem.style.cursor = 'pointer'
  })
}