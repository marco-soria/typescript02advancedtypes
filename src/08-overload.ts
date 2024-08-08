// Marco => [M,a, r, c, o] => string => string[]
// [M, a, r,c,o] => Marco => string[] => string


function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); // string[]
  }
}

const rtaArray = parseStr('Marco');
// rtaArray.reverse();
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('rtaArray', 'Marco =>' ,rtaArray);

const rtaStr = parseStr(['M','a','r','c','o']);
// rtaStr.toLowerCase();
if (typeof rtaStr === 'string') {
  rtaStr.toLowerCase();
}
console.log('rtaStr', "['M','a','r','c','o'] =>",rtaStr);
