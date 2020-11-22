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

  <h3 align="center">The simplest Breadcrumb you will ever use</h3>

  <p align="center">
    Your website is just a one line away from having an awesome breadcrumb that actually WORKS
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
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)

### Installation

```sh
npm install the-simplest-breadcrumb --save
```
```sh
import BreadcrumbMaster from 'the-simplest-breadcrumb'
```

<!-- USAGE EXAMPLES -->
## Usage
<br />

  <a href="https://github.com/amans199/the-simplest-breadcrumb">
    <img src="images/screenshot.png" alt="Logo">
  </a>


just create any html tag eg: `ul` or `div` and with an id
<br />

 `<ul id="breadcrumb199__list"></ul>`
<br />
<br />
**then** Use it as below
<br />
```
  BreadcrumbMaster({
    wrapper_id: 'breadcrumb199__list', // the id of the wrapper you want to use
    splitter: '/', // the symbol you want to use between the breadcrumb items
    styles: {
      items_gab: '5px', // margin between items
      color: '#fff', // color of all the items
      color_selected: '#000', // color of the current page/item
      splitter_color: '#fff' // the color of the splitter
    },
    customElements: [ // customElements : if you want to use custom static elements 
      { index: 1, text: 'firstElement', url: '#' }, // the custom element should be an object contains : index , text , url
      { index: 2, text: 'secondElement', url: '#' },
      { index: 3, text: 'thirdElement', url: '#' },
      { index: 4, text: 'fourthElement', url: '#' },
    ],
       strings: { // it allows you to change any string you want in the dynamic breadcrumb
        "home": 'Homee', // home : to change the text in the first item
        "user": 'fvffvfvf',
        "users-list": 'all User List', // the key is the slug , not the stripped-dashes text
        "amans199": 'Amans Account'
      },
  })
```
<br />

### Examples: 
#### using the-simplest-breadcrumb with React 
```
 render(){
    BreadcrumbMaster({
      wrapper_id: 'breadcrumb199__test2', // the id of the wrapper you want to use
      splitter: '/', // the symbol you want to use between the breadcrumb items
      styles: {
        items_gab: '5px', // margin between items
        color: '#fff', // color of all the items
        color_selected: 'red', // color of the current page/item
        splitter_color: '#fff' // the color of the splitter
      },
      strings: {
        "home": 'Homee', // home : to change the text in the first item
        "user": 'fvffvfvf',
        "users-list": 'all User List', // the key is the slug , not the stripped-dashes text
        "amans199": 'Amans Account'
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
if you are using React-router then please don't forget to add the breadcrumb component inside a Switch ..

```
      <Switch>
           <App />
      </Switch>
```

<hr />



<br />

See the [open issues](https://github.com/amans199/the-simplest-breadcrumb/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



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
