var makeIterator = require('../function/makeIterator_');

    /**
     * Array some
     */
    /**
     * Description
     * @method some
     * @param {} arr
     * @param {} callback
     * @param {} thisObj
     * @return result
     */
    function some(arr, callback, thisObj) {
        callback = makeIterator(callback, thisObj);
        var result = false;
        if (arr == null) {
            return result;
        }

        var i = -1, len = arr.length;
        while (++i < len) {
            // we iterate over sparse items since there is no way to make it
            // work properly on IE 7-8. see #64
            if ( callback(arr[i], i, arr) ) {
                result = true;
                break;
            }
        }

        return result;
    }

    module.exports = some;

