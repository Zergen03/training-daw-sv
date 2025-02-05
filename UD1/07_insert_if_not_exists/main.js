const assert = require('assert').strict

function insertIfNotExists(array, item, position) {
    var existe = false;
    for(i = 0; i < array.length && existe == false; i++){
        if(array[i] == item){
            existe = true;
        }
    }

    if(!existe){
        if(position){
            array.unshift(item)
        }else{
            array.push(item)
        }
    }
    return array
}


let array = ['pera', 'manzana']

let result = insertIfNotExists(array, 'pera', false)
var comparacion = assert.deepStrictEqual(result, ['pera', 'manzana'])

result = insertIfNotExists(array, 'melón', false)
assert.deepStrictEqual(result, ['pera', 'manzana', 'melón'])

result = insertIfNotExists(array, 'melocotón', true)
assert.deepStrictEqual(result, ['melocotón', 'pera', 'manzana', 'melón'])

