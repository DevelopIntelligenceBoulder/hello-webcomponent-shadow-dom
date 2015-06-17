(function() {
    'use strict';

    /**
     * Hello Shadow DOM Component used to handle UI rendering.
     */
    DI.App.HelloShadowComponent = (function() {

        /**
         * Handles the rendering of this Component
         * @param elementID The id of the element the component will be placed within
         * @param model The model object holding dynamic data
         */
        var render = function render(elementID, model) {

            //Grab the shadow host
            var shadowHost = document.getElementById(elementID);

            //Create the shadow root
            var shadowRoot = shadowHost.createShadowRoot();

            //Attach template to DOM
            var templateNode = $('<h1>Hello ' +  model.place + '</h1>')[0];

            //Attach template content to DOM
            shadowRoot.appendChild(templateNode);

        };

        //API for Module Revealing Pattern
        return {
            render: render
        };

    })();

})();