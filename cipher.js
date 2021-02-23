const cipher = {
  /* ----- CIFRAR ----- */
  encode: (offset, string) => {
    let encodeString = '';

    if (typeof offset !== 'number' || typeof string !== 'string'){
      throw new TypeError();
    }

    for (let i=0; i < string.length; i++) {
      if (string[i].match(/[a-z]/i)){
        let upperString = string.toUpperCase(); //Pq Unicode 65 es A (mayúscula)
        let encodeCharacter = ((upperString.charCodeAt(i) - 65 + offset) % 26 + 65);
        encodeString += String.fromCharCode(encodeCharacter);
      } else {
        encodeString += string[i];
      }
    }

    return encodeString;
  },

  /* ----- DESCIFRAR ----- */
  decode: (offset, string) => {
    let decodeString = '';

    if (typeof offset !== 'number' || typeof string !== 'string'){
      throw new TypeError();
    }

    for (let i=0; i < string.length; i++) {
      if (string[i].match(/[a-z]/i)){
        let upperString = string.toUpperCase();
        let decodeCharacter = ((upperString.charCodeAt(i) + 65 - offset) % 26 + 65);
        decodeString += String.fromCharCode(decodeCharacter);
      } else {
        decodeString += string[i];
      }
    }

    return decodeString;
  }
};

export default cipher;

/* ----- FÓRMULA CIFRADO & UNICODE ----- */

/*
  (x[número fijo (ascii con charCodeAt)] - 65 + offset) % 26 + 65
    1. x - 65 = obtenemos posición alfabeto conocido
    2. + offset = Adicionar posiciones para cifrar
    3. 26 = Ahorrar el hecho de dar vueltas por alfabeto
    4. 26 + 65 = volverlo ascii de nuevo
*/

  // 'string'.charCodeAt(#índice) = Devuelve Unicode del carácter en índice especificado en un string.
  // String.fromCharCode(#Unicode) = Convierte valores Unicode en carácteres.

  // unicode 65 = A (upperCase)
  // unicode 97 = a (lowerCase)
