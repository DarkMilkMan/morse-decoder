const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let arr2 = [];
    let result = '';
    arr.push(expr.match(/.{1,10}/g))
    arr[0].forEach(el => {
        let morseStr = '';
        for (let i=0;i<10;i+=2){
            if(el[i]+el[i+1] == '10'){
                morseStr += '.'
            } else if (el[i]+el[i+1] == '11'){
                morseStr += '-'
            } else if (el[i] == '*'){
                arr2.push(' ');
                i += 9;
            }
        }
        arr2.push(morseStr);
    })
    arr2.forEach(el => {
        if (el == ' '){
            result += el;
        }
        for (key in MORSE_TABLE) {
            if (el == key){
                result += MORSE_TABLE[key];
            }
        }
    })
    return result;
}

module.exports = {
    decode
}