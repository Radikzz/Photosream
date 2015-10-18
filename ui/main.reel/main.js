/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component,
    sharedFlickrservices = require("core/flickr-service").shared;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    }
});
