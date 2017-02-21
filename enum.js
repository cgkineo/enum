//2017-02-21 BASIC ENUMERATION SUPPORT
(function() {

    function ENUM(namesArray, lookupModifierFunction) {

        if (!(namesArray instanceof Array)) throw "First argument of ENUM must be an array";

        // Create lookup & storage function
        var ENUMERATION = function(lookupValue){

            if (lookupModifierFunction) {
                lookupValue = lookupModifierFunction(lookupValue);
            }
           
            return ENUMERATION[lookupValue];

        };

        for (var i = 0, l = namesArray.length; i < l; i++) {

            var names = namesArray[i];
            if (!(names instanceof Array)) names = [names];

            // Make each value a power of 2 to allow for bitwise switches
            var value = Math.pow(2, i);

            for (var n = 0, m = names.length; n < m; n++) {

                var name = names[n];

                // Create Number object to allow for primitive comparisons and JSON stringify
                var entry = new Number(value);

                // Assign conversion values to entry
                entry.asString = name;
                entry.asInteger = value;

                // Reference lookup & storage function from each entry
                entry.ENUM = ENUMERATION;

                // Add entry to lookup & storage function
                ENUMERATION[name] = ENUMERATION[value] = entry;

            }

        }

        // Freeze ENUM object
        Object.freeze(ENUMERATION);

        return ENUMERATION;

    };
    
    window.ENUM = ENUM;
    
})();