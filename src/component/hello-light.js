(function() {
    'use strict';

    /**
     * Hello Light DOM Component used to handle UI rendering.
     */
    DI.App.HelloLightComponent = (function() {

        /**
         * Handles the rendering of this Component
         * @param elementID The id of the element the component will be placed within
         * @param model The model object holding dynamic data
         */
        var render = function render(elementID, model) {

            //Grab the shadow host
            var lightHost = document.getElementById(elementID);

            //Attach template to DOM
            var templateNode = $('<h1>Hello Light ' +  model.place + '</h1>')[0];

            //Attach template content to DOM
            lightHost.appendChild(templateNode);

        };

        //API for Module Revealing Pattern
        return {
            render: render
        };

    })();

})();