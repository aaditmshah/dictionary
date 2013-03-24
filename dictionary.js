Object.prototype.define = function (properties) {
    if (Object.isExtensible(this)) {
        var keys = Object.keys(properties);
        var length = keys.length;
        var descriptors = {};

        for (var i = 0; i < length; i++) {
            var key = keys[i];

            var descriptor = Object.getOwnPropertyDescriptor(properties, key);

            if (/^_/.test(key)) {
                descriptor.enumerable = false;
                key = key.slice(1);
            }

            if (/_$/.test(key)) {
                descriptor.configurable = false;
                key = key.slice(0, -1);
            }

            if (descriptor.hasOwnProperty("value") && /^[0-9A-Z_]+$/.test(key)) {
                descriptor.writable = false;

                var words = key.toLowerCase().split("_");
                var number = words.length;

                for (var i = 1; i < number; i++) {
                    var word = words[i];
                    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
                }

                key = words.join("");
            }

            descriptors[key] = descriptor;
        }

        Object.defineProperties(this, descriptors);
    }
};
