const commonAttributes = require('./definitions/object_attributes.js').commonAttributes;
const objectTypes = require('./definitions/object_attributes.js').objectTypes ;
const roles = require('./definitions/roles.js').roles;
const units = require('./definitions/units.js').units;
const getExponentByUnit = require('./definitions/units.js').getExponentByUnit;

module.exports = {objAttributes: commonAttributes, roles: roles, units: units, getExponentByUnit: getExponentByUnit};
