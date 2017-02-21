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
	
/*

STATES.ON == 1
STATES.OFF == 2
STATES.RED == 4
STATES.BLUE == 8

STATES.ON.asString == "ON"
STATES.ON.asInteger == 1

STATES[1] = STATES.ON
STATES[2] = STATES.OFF
STATES[4] = STATES.RED
STATES[8] = STATES.BLUE

STATES(1) == STATES.ON
STATES(-100) == undefined
STATES("ON") == STATES.ON
STATES("on") == undefined


var plain = STATES.ON
(plain == STATES.ON) == TRUE
(plain == 1) == true
(plain == STATES.OFF) == false

var switched = (STATES.ON + STATES.OFF + STATES.BLUE)
(switched & STATES.ON) == 1
(switched & STATES.RED) == 0
(switched & STATES.BLUE) == 8


*/

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
	
/*

STATES.ON == 1
STATES("ON") == 1
STATES("on") == 1

*/

```
  
  
Use multiple names per value:
```javascript

var STATES = ENUM([
	[ "ON", "TRUE" ],
	"OFF",
	"RED",
	[ "BLUE", "B" ]
]);
	
/*

STATES.B == STATES.BLUE

*/

```
  

Chained Lookup:
```javascript

var STATES = ENUM([
	[ "ON", "TRUE" ],
	"OFF",
	"RED",
	[ "BLUE", "B" ]
]);


/*

var state = STATES.ON
(state == state.ENUM.ON) == true

*/

```
