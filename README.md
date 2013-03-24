# dictionary #

Defining properties on objects in JavaScript seems like a very simple task. Just write `object.property = value` and you're done. However sometimes you may wish to have a more fine-grained control on how your properties are defined. This includes:

1. Defining getter and setter properties.
2. Defining non-enumerable properties.
3. Defining non-deletable properties.
4. Defining constant properties.

You can define such properties on objects using the native `Object.defineProperty` or `Object.defineProperties` functions. However these functions force you to write a custom property descriptor for each property, which is unnecessarily verbose and error prone.

Using dictionary you can easily define custom properties on objects in JavaScript. Let's learn by example.

## Defining Getters and Setters ##

You can define getters and setters on objects in JavaScript using the `__defineGetter__` and `__defineSetter__` methods. However dictionary provides a more succinct and powerful way to define getters and setters:

```javascript
var x = 0;
var o = {};

o.define({
    get x() {
        return x;
    },
    set x(y) {
        x = y;
    }
});

console.log(x);
o.x = 0xFFFFFF;
console.log(x);
```

## Defining Non-Enumerable Properties ##

You can make a property non-enumerable by adding an underscore to the beginning of the property name. The underscore will be removed before actually defining the property:

```javascript
var o = {};

o.define({
    _x: 0
});

for (var p in o) if (o.hasOwnProprty(p)) console.log(p);

console.log(o.x);
```

## Defining Non-Deletable Properties ##

You can make a property non-deletable by adding an underscore to the end of the property name. The underscore will be removed before actually defining the property:

```javascript
var o = {};

o.define({
    x_: 0
});

console.log(delete o.x);
```

## Defining Constant Properties ##

Constant property names may only consist of numbers (0 to 9), upper case alphabets (A to Z) and the underscore. They may not be getters or setters. The property name is converted to camelCase before defining the property:

```javascript
var o = {};

o.define({
    CONST_NUM: 0
});

o.constNum = 0xFFFFFFFF;
console.log(o.constNum);
```

## That's All Folks ##

If you wish to contribute to this library then fork it on [GitHub](https://github.com/javascript/dictionary) and send me a pull request. If you wish to suggest a feature then send me an [email](mailto:aaditmshah@myopera.com).
