const assert = require('assert').strict;

function toHoursMinutesSeconds(value) {
    var horas, minutos, segundos;
    horas = Math.trunc(value / 3600);
    minutos = Math.trunc(value / 60 - (horas * 60));
    segundos = Math.trunc(value - (horas * 3600 + minutos * 60));
    
    return `${horas}:${minutos}:${segundos}`
}

assert.deepStrictEqual(toHoursMinutesSeconds(3600), "1:0:0")
assert.deepStrictEqual(toHoursMinutesSeconds(3720), "1:2:0")
assert.deepStrictEqual(toHoursMinutesSeconds(3725), "1:2:5")