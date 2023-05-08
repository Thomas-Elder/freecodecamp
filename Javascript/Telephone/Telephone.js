
export { TelephoneCheck };

function TelephoneCheck(str) {

  // Check for illegal characters
  if (str.search(/[.*+?!^${}|]/g) > 0) return false;

  // If it is a negative number
  if (/^-/.test(str)) return false;

  // Remove whitespace
  str = str.replace(/\s/g, '');

  // If there are any parentheses
  if (/\(/.test(str) || /\)/.test(str)){

    // Check parentheses are valid
    let parenthesesCount = 0;

    [...str].forEach(character => {
      if (character == '(') parenthesesCount++;

      if (character == ')') parenthesesCount--;
    });

    if (parenthesesCount != 0) return false;

    // Check the spacing between parentheses is valid
    if (!/\(\d{3}\)/.test(str)) return false;
  }

  // Remove parentheses
  str = str.replace(/\(/g, '');
  str = str.replace(/\)/g, '');

  // Check spacing on dashes
  if (!/\d{3,4}-?\d{3}-?\d{4}/.test(str)) return false;

  // String non-numeric data
  str = str.replace(/\D/g, '');

  // Validate area code and length
  // An optional 1 to start, followed by 10 digits
  // If this isn't matched, return false
  if (!/^1?\d{10}$/.test(str)) {
    return false;
  } 

  return true;
}