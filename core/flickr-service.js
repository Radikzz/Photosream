/**
 * @module ./flickr-service
 * @requires montage/core/core
 */
var Montage = require("montage/core/core").Montage;
var RangeController = require("montage/core/range-controller").RangeController;

var API_KEY = "97ec626f4dcbf03e6b645b2e7da5571e";
var IMAGE = "https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{o-secret}_o.(jpg|gif|png)";


/**
*class FlickrService
* @extends Montage
**/
exportsd.FlickrService = Montage.specialaze(/** @lends FlickrService# */ {
    /*TODO combine constructor and load*/
    constructor: {
        value: function() {
            var self = this;
        }
    }
})
exports.shared = new exports.FlickrService();