# iobroker-adapter-helpers
Some helper files 

**Usage of units and exponents:**

Every unit has a base, this base has the exponent 0. Example meter: ``{"unit": "m", "exponent": 0}``

With the exponent it is simple to convert the given unit in to a higher or lower unit.

This conversion is done with the function Math.pow(10, exponent).

```
const value = 1000          //unit mm
const baseExp = -3;         //exponent for mm
const expectedExp = -2;     //exponent for cm

console.log( ( value * Math.pow( 10, (baseExp - expectedExp) ) + ' cm' ); //output 100 cm
```
