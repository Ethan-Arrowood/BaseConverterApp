import { NumFromChar } from './NumToFromChar';

export default function baseBto10(inputNumber, inputBase) {

  if ( inputBase == 10) return parseInt(inputNumber);

  let inpA = inputNumber.split('');

  let result = 0;
  for (let v in inpA) {
    c = inpA[inpA.length - 1 - v];
    c = c < 10 ? c : NumFromChar(c);
    result += Math.pow(inputBase, v) * c;
  }

  return result;
}
