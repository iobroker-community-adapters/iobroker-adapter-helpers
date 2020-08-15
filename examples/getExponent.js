const getExponent = require('../index').getExponentByUnit;

async function test(){
    let exponent = await getExponent('mm');

    console.log(exponent);
}

test();
