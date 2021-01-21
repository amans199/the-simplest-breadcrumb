function getBreadCrumbItems() {
  let currentUrl = window.location.pathname.split("/");

  let breadcrumbItems = currentUrl.map((elem, index) => (
    {
      id:  elem.replace(/\-/g, '_').toString(),
      name: elem,
      url: "/" + currentUrl.map((url, i) => (i < index + 1 ? url : '')).filter(function (el) {
        return el !=='';
      }).join("/"),
      meta: {
        label: elem.replace(/\-/g, ' ')
      }
    }
  ));
  return breadcrumbItems;
}

module.exports = async function (options) {
  await function () {
    // 
  }

  if (options.wrapper_id) {
    // configure options.splitter if there is no splitter is passed in the options
    if (!options.splitter) {
      options.splitter = '/'
    }


    if (document.body.contains(document.getElementById(options.wrapper_id))) {
      var breadcrumb199List = document.getElementById(options.wrapper_id);
      breadcrumb199List.textContent = ""
      breadcrumb199List.style.listStyle = "none";
      breadcrumb199List.style.display = "flex";


      if (options.customElements) {

        options.customElements.map((content, i, arr) => {
          var breadcrumb199ListItem = document.createElement("li");
          breadcrumb199ListItem.className = "breadcrumb199__list--item";
          breadcrumb199ListItem.innerHTML = `<a href='${content.url}' class='breadcrumb_item__${content.i}'>${content.text}</a>` +
            "<div class='options-splitter'>" + options.splitter + "</div>";
          breadcrumb199List.appendChild(breadcrumb199ListItem);
          return breadcrumb199ListItem;
        })

      } else {
        let breadcrumbItems = [...getBreadCrumbItems()]

        if (options.strings.home) {
          breadcrumbItems[0] = {
            id: "home",
            name: options.strings.home,
            url: "/",
            meta: {
              label: options.strings.home
            }
          }
        } else {
          breadcrumbItems[0] = {
            id: "home",
            name: "Home",
            url: "/",
            meta: {
              label: "Home"
            }
          }
        }


        // start test the replace strings 

      // Get the size of an object
      Object.size = function(obj) {
          var size = 0, key;
          for (key in obj) {
              if (obj.hasOwnProperty(key)) size++;
          }
          return size;
      };
      var stringsToChange = options.strings;
      var size = Object.size(stringsToChange);
        if (size > 0) {
          for (key in stringsToChange) {
            breadcrumbItems.forEach(element=> {
              var index = breadcrumbItems.findIndex(p => p.name == key)
              if(typeof breadcrumbItems[index] !== 'undefined'){
                // console.log(breadcrumbItems[index] )
              breadcrumbItems[index] = {
                id:breadcrumbItems[index].id,
                    name:  stringsToChange[key],
                    url:breadcrumbItems[index].url,
                    meta: {
                      label:  stringsToChange[key]
                    }
                  }
                }
            });
          }
        } 


        // end test the replace strings 

// console.log(breadcrumbItems)

        for (var i = 0; i < breadcrumbItems.length; i++) {
          var breadcrumb199ListItem = document.createElement("li");
          breadcrumb199ListItem.className = "breadcrumb199__list--item";
          breadcrumb199ListItem.innerHTML = `<a href='${breadcrumbItems[i].url}' class='breadcrumb_item__${breadcrumbItems[i].id}'>${breadcrumbItems[i].meta.label}</a>` +
            "<div class='options-splitter'>" + options.splitter + "</div>";
          if(i ===  breadcrumbItems.length-1){
            breadcrumb199ListItem.innerHTML = `<a href='${breadcrumbItems[i].url}' class='breadcrumb_item__${breadcrumbItems[i].id} active_breadcrumb_item'>${breadcrumbItems[i].meta.label}</a>` +
                      "<div class='options-splitter'>" + options.splitter + "</div>";
          }

          breadcrumb199List.appendChild(breadcrumb199ListItem);
        }
      }


      // configure the items_gab of the breadcrumb elements 
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





      // configure ititial styles 
      document.querySelector(".breadcrumb199__list--item:last-child .options-splitter").remove()
      Array.from(document.querySelectorAll(".breadcrumb199__list--item")).map(elem => {
        elem.style.display = 'flex'
      })
    }
  }
}
// module.exports.breadcrumbMaster = breadcrumbMaster;