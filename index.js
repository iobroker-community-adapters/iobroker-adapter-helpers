const commonAttributes = require('./definitions/object_attributes.js').commonAttributes;
const objectTypes = require('./definitions/object_attributes.js').objectTypes ;
const states = require('./definitions/predefined_objects.js').states;
const roles = require('./definitions/roles.js').roles;
const units = require('./definitions/units.js').units;
const getExponentByUnit = require('./definitions/units.js').getExponentByUnit;

module.exports = {objAttributes: commonAttributes, objectTypes: objectTypes, roles: roles, units: units, getExponentByUnit: getExponentByUnit, states: states};
