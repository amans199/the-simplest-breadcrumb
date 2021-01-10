[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/amans199/the-simplest-breadcrumb">
    <img src="images/logo.png" alt="Logo" width="80" >
  </a>

  <h3 align="center">The simplest Breadcrumb you always needed</h3>

  <p align="center">
    Your website is just a one line away from having an awesome dynamic breadcrumb that actually WORKS
    <br />
    <a href="https://github.com/amans199/the-simplest-breadcrumb"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/amans199/the-simplest-breadcrumb">View Demo</a>
    ·
    <a href="https://github.com/amans199/the-simplest-breadcrumb/issues">Report Bug</a>
    ·
    <a href="https://github.com/amans199/the-simplest-breadcrumb/issues">Request Feature</a>
  </p>
</p>


<!-- TABLE OF CONTENTS -->
## Table of Contents
* [Installation and Usage](#usage)
* [Options](#options)
* [Use Cases](#use-cases)
  * [plain javascript](#options)
  * [React](#options)
  * [Vue](#options)
* [Notes](#notes)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)

## Installation and Usage
1- Installing
```sh
npm install the-simplest-breadcrumb --save
```
2- Import it 
```sh
import BreadcrumbMaster from 'the-simplest-breadcrumb'
```
3- Add any wrapper tag to html 
```sh
<ul id="breadcrumb199__list"></ul>
```
4- Add this to your script
```sh
  BreadcrumbMaster({
    wrapper_id: 'breadcrumb199__list', 
    splitter: '/', 
    strings: {
        home: "Home", 
      },
  });
```


## Options
1. wrapper_id: (*Required*) => this the id for the breadcrumb's wrapper tag in your html... just like `breadcrumb199__list` in `<ul id="breadcrumb199__list"></ul>`

2. splitter: the symbol you want to use between the breadcrumb items

3.  styles: just the basics:
    1. items_gab: margin between items
    1. color: the color of the breadcrumb's items
    1. color_selected: the color of the breadcrumb's items
    1. splitter_color: the color of of the splitter between the items

4. customElements: an array of static items, just in case you want your breadcrumb to be static.

5.strings: an object that contains any string you want to change in the breadcrumb... the first item have to be `home: "Home"` always.



## Use Cases
<br />

  <a href="https://github.com/amans199/the-simplest-breadcrumb">
    <img src="images/screenshot.png" alt="Logo">
  </a>

<br />

1. #### using the-simplest-breadcrumb in plain javascript to show a static breadcrumb

```sh
  BreadcrumbMaster({
    wrapper_id: 'breadcrumb199__list',
    splitter: '/',
    styles: {
      items_gab: '5px', 
      color: '#fff',
      color_selected: '#000', 
      splitter_color: '#fff'
    },
    customElements: [ 
      { index: 1, text: 'firstElement', url: '#' }, 
      { index: 2, text: 'secondElement', url: '#' },
      { index: 3, text: 'thirdElement', url: '#' },
      { index: 4, text: 'fourthElement', url: '#' },
    ],
  })
```
<br />

2. #### using the-simplest-breadcrumb with **React** to show a multilang dynamic breadcrumb
```sh
 render(){
    BreadcrumbMaster({
      wrapper_id: 'breadcrumb199__test2',
      splitter: '/', 
      styles: {
        items_gab: '5px', 
        color: '#fff',
        color_selected: '#000', 
        splitter_color: '#fff'
      },
      strings: {
        home: "Home", 
        user: "المستخدم",
        "users-list": "用户列表",
      },
    })
    return (
      <div className="App">
        <header className="App-header">
          <ul id="breadcrumb199__test2"></ul>
        </header>
      </div>
    );
  }

```
<br />

* if you are using React-router then please don't forget to add the breadcrumb component inside a Switch ..

```
      <Switch>
           <App />
      </Switch>
```

<hr />
----------------

3. #### using the-simplest-breadcrumb with **Vue** to show a multilang dynamic breadcrumb
```sh
data(){
  return{
    userString:"User String"
  };
},
 mounted(){
    BreadcrumbMaster({
      wrapper_id: 'breadcrumb199__test2',
      splitter: ">", 
      styles: {
        items_gab: '5px', 
        color: '#fff',
        color_selected: '#000', 
        splitter_color: '#fff'
      },
      strings: {
        home: "Home", 
        user: this.userString,
        "users-list": "用户列表",
      },
    })
  }

```
<br />

## Notes
1. all the elements of the breadcrumb are injected to DOM in a way that makes it really easy tto be styled using plain css.
2. the-simplest-breadcrumb can be used with any type of application ( SPA or not SPA), and any type of javascript framework... whenever you place it in the right lifecycle, it will get the job done perfectly.


<br />



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

See the [open issues](https://github.com/amans199/the-simplest-breadcrumb/issues) for a list of proposed features (and known issues).

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Ahmed Mansour - [@amans199](https://twitter.com/amans199) - ahmed.ouda1997@gmail.com

Project Link: [https://github.com/amans199/the-simplest-breadcrumb](https://github.com/amans199/the-simplest-breadcrumb)


<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/amans199/Best-README-Template.svg?style=flat-square
[contributors-url]: https://github.com/amans199/the-simplest-breadcrumb/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/amans199/Best-README-Template.svg?style=flat-square
[forks-url]: https://github.com/amans199/the-simplest-breadcrumb/network/members
[stars-shield]: https://img.shields.io/github/stars/amans199/Best-README-Template.svg?style=flat-square
[stars-url]: https://github.com/amans199/the-simplest-breadcrumb/stargazers
[issues-shield]: https://img.shields.io/github/issues/amans199/Best-README-Template.svg?style=flat-square
[issues-url]: https://github.com/amans199/the-simplest-breadcrumb/issues
[license-shield]: https://img.shields.io/github/license/amans199/Best-README-Template.svg?style=flat-square
[license-url]: https://github.com/amans199/the-simplest-breadcrumb/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/amans199
[product-screenshot]: images/screenshot.png
