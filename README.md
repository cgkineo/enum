# enum
A basic enumeration library for JavaScript

Simple Usage:
```javascript

var STATES = ENUM([
	"ON",
	"OFF",
	"RED",
	"BLUE"
]);

//VALUES
STATES.ON == 1;
STATES.OFF == 2;
STATES.RED == 4;
STATES.BLUE == 8;

//CONVERSION TO STRING / INTEGER
STATES.ON.asString == "ON";
STATES.ON.asInteger == 1;

//LOOKUP FUNCTION
STATES(8) == STATES.BLUE;
STATES(8).asString == "BLUE";
STATES(-100) == undefined;
STATES("ON") == STATES.ON;
STATES("on") == undefined;

//VALUE COMPARISONS
var plain = STATES.ON;
(plain == STATES.ON) == TRUE;
(plain == 1) == true;
(plain == STATES.OFF) == false;

//BITWISE SWITCHES
var switched = (STATES.ON + STATES.OFF + STATES.BLUE);
(switched & STATES.ON) == 1;
(switched & STATES.RED) == 0;
(switched & STATES.BLUE) == 8;

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
	
	if (typeof value == "string") return value.toUpperCase();
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
STATES("B") == STATES.BLUE;
STATES("TRUE") == STATES.ON;


```
  

Chained Lookup:
```javascript

var STATES = ENUM([
	"ON",
	"OFF",
	"RED",
	"BLUE"
]);


//BACK REFERENCE TO ENUMERATION OBJECT
var state = STATES.ON;
(state == state.ENUM.ON) == true;

```
