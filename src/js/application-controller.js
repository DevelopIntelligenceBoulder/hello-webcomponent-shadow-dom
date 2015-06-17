(function() {
    'use strict';

    // ID of the root Shadow DOM element
    var SHADOW_DOM_ELEMENT_ID = 'content-shadow-host';

    //ID of the root Light DOM element
    var LIGHT_DOM_ELEMENT_ID = 'content-light-host';

    /**
     * Initiates the Shadow DOM component interaction.
     * @param model The data to be applied to the component
     */
    var initializeHelloShadowComponent = function initializeHelloShadowComponent(model) {
        DI.App.HelloShadowComponent.render(SHADOW_DOM_ELEMENT_ID, model);
    };

    /**
     * Initiates the Light DOM component interaction.
     * @param model The data to be applied to the component
     */
    var initializeHelloLightComponent = function initializeHelloLightComponent(model) {
        DI.App.HelloLightComponent.render(LIGHT_DOM_ELEMENT_ID, model);
    };

    /**
     * "Main" functionality for the application
     * Is invoked when the DOM Ready event is fired thanks to jQuery.
     */
    $(function() {

        var shadowModel = {
            place: 'Shadow'
        };

        var lightModel = {
            place: 'Light'
        };

        initializeHelloShadowComponent(shadowModel);
        initializeHelloLightComponent(lightModel);

    });

})();