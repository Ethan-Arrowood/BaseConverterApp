import { NumToChar } from './NumToFromChar';

export default function base10toB(inputNumber, outputBase) {
  let outputNumber = "";

  if ( outputBase == 10 ) return inputNumber.toString();

  const inpN = parseInt(inputNumber);

  let a = inpN;
  let d = outputBase;
  let q, r;

  do {
    q = Math.floor(a / d);
    r = a - ( d * q );
    outputNumber += NumToChar(r);
    a = q;
  } while ( q != 0 )

  return outputNumber.split('').reverse().join('');
}
