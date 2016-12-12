import { NumFromChar } from './NumToFromChar';


export default function validate(input, ib) {
  if (input.length === 0) return false;
  
  const inputList = input.split('');

  let isValid = false;
  let i = 0;

  do {
    v = inputList[i];
    c = parseInt(v);
    if (isNaN(c)) c = NumFromChar(v);
    if ( c >= ib ) {
      isValid = false;
    } else {
      isValid = true;
      i++;
    }
  } while (i < inputList.length && isValid);

  return isValid;
}
