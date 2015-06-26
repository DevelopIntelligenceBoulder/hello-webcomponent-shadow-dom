# hello-webcomponent-shadow-dom
A simple example of Hello World written utilizing the Web Component [Shadow DOM](http://w3c.github.io/webcomponents/spec/shadow/) .

## Browser Support
Check out [Can I Use](http://caniuse.com/#feat=shadowdom) to see if/when [IE](https://status.modern.ie/shadowdomunprefixed), [Firefox](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM) and Safari will adopt the use of Web Component Shadow DOM. The Shadow DOM is fully supported in Chrome and Opera.

## What is this?
This example shows how to utilize the Shadow DOM from the Web Component specification to create a Hello World. It compares the Shadow DOM with the Light DOM (i.e. the normal DOM), that we all know and love. It also give a small example of the modularity/encapsulation the Shadow DOM brings as normal CSS does not effect the Shadow DOM elements.

### Within the js/main.js
The application namespace is created. It is a simple JavaScript namespace that the application architecture is attached too.

### Within the js/hello-light.js
A JavaScript module is created to handle Light DOM Component logic. The component exposes a render function that is invoked to merge the model properties into the DOM template. 

### Within the js/hello-shadow.js
A JavaScript module is created to handle Shadow DOM Component logic. The component exposes a render function that is invoked to merge the model properties into the DOM template. Within the render a Shadow Root is created, which allows for the utilization of the Shadow DOM.

### Within the js/application-controller.js
An initialization function is utilized to start the component rendering. This methods is invoked when the DOM is ready to be interacted with. The controller hands the component the model that is to be applied.

### Within the css/main.css
The decorating of the Light Hello World element.

### Within the index.html
Contains the references to a Shadow DOM Component and a Light DOM Component.

## Instructions
1. Install [NodeJS](https://nodejs.org/)
2. Run `npm start` to get the application running on the web server
    * Packages needed for this application will be installed (i.e. jQuery & Express)
    * The Node/Express Web Server will start
3. Go to `http://localhost:8080/src/` in your web browser
4. Try out this code in this [Plunker](http://plnkr.co/edit/ncriuw?p=preview)

##Where to go from here?
[DevelopIntelligence](http://www.developintelligence.com/) offers a variety of [classes on HTML5](http://www.developintelligence.com/catalog/web-development-training/html-html5) and [classes on JavaScript](http://www.developintelligence.com/catalog/web-development-training/core-javascript). Check out the [Introduction to JavaScript](http://www.developintelligence.com/catalog/web-development-training/core-javascript/introduction-to-javascript), the [Introduction to HTML5](http://www.developintelligence.com/catalog/web-development-training/html-html5/introduction-to-html5) or the [Mobile Web Development Bootcamp](http://www.developintelligence.com/catalog/web-development-training/mobile-web-development-boot-camp) to get your team up to speed.
