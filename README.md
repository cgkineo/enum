# enum
Simple value enumeration in javascript. Useful for bitwise switches. UMD compatible. IE8 compatible. Node Compatible.

Simple Usage:
```javascript

var STATES = ENUM([
	"ON",
	"OFF",
	"RED",
	"BLUE"
]);

//VALUES
STATES.ON === 1;
STATES.OFF === 2;
STATES.RED === 4;
STATES.BLUE === 8;

//CONVERSION TO STRING / INTEGER
STATES.ON.asString === "ON";
STATES.ON.asLowerCase === "on";
STATES.ON.asUpperCase === "ON";
STATES.ON.asNumber === 1;
STATES.ON.asInteger === 1;
STATES.ON.toString() === "ON";
STATES.ON.toLowerCase() === "on";
STATES.ON.toUpperCase() === "ON";
STATES.ON.toNumber() === 1;
STATES.ON.toInteger === 1;

//LOOKUP FUNCTION
STATES(8) === STATES.BLUE;
STATES(8).asString === "BLUE";
STATES(-100) === undefined;
STATES("ON") === STATES.ON;
STATES("on") === undefined;

//VALUE COMPARISONS
var plain = STATES.ON;
(plain === STATES.ON) === true;
(plain == 1) === true;
(plain == STATES.OFF) === false;

//BITWISE SWITCHES
var switched = (STATES.ON + STATES.OFF + STATES.BLUE);
(switched & STATES.ON) === 1;
(switched & STATES.RED) === 0;
(switched & STATES.BLUE) === 8;

//ENUMERABLE KEYS
Object.keys(STATES) == [
	"ON",
	"OFF",
	"RED",
	"BLUE"
];


```


Define a lookup value modifier:
```javascript

var STATES = ENUM([
	"ON",
	"OFF",
	"RED",
	"BLUE"
], function statesLookup(value) {

	if (typeof value === "string") return value.toUpperCase();
	return value;

});

//LOOKUP EXAMPLES
STATES.ON == 1;
STATES("ON") == 1;

//ALLOWS LOWERCASE LOOKUP
STATES("on") == 1;


```


Add a lookup alias:
```javascript

var STATES = ENUM([
	[ "ON", "TRUE" ],
	"OFF",
	"RED",
	[ "BLUE", "B" ]
]);

//ALIAS LOOKUP
STATES("B") === STATES.BLUE;
STATES("TRUE") === STATES.ON;


```


Back reference:
```javascript

var STATES = ENUM([
	"ON",
	"OFF",
	"RED",
	"BLUE"
]);


//BACK REFERENCE TO ENUMERATION OBJECT
var state = STATES.ON;
(state === state.ENUM.ON) === true;

```


Fun usage example:
```javascript

// TYPEOF with array support
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

var TYPEOF = ENUM([
    "undefined",
    "null",
    "boolean",
    "number",
    "string",
    "symbol",
    "function",
    "object",
    "array"
], function TYPEOF_LOOKUP(lookup) {

    var type = (typeof lookup);
    if (type === "object") {
        if (lookup instanceof Array) return "array";
        if (lookup === null) return "null";
    }
    return type;

});


TYPEOF([]) === TYPEOF.array;
TYPEOF(" ") === TYPEOF.string;
TYPEOF(1.23) === TYPEOF.number;

switch( TYPEOF(value) ) {
case TYPEOF.null:

case TYPEOF.undefined:

case TYPEOF.array:

case TYPEOF.object:

}


```
