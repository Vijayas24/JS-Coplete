//datatypes conversion
let age="22abc"


let ageInNumber=Number(age);
console.log(typeof ageInNumber); //All values will be converted to number but
console.log(ageInNumber); //its original value will be nan for all case and 0 for null and vice versa for boolean values.

/**************Comparisons in Js******************** */
// every comparisons are normal in js except for null
//null converts itself to '0' while comparison is made other than ==. for == it doesn't convert itself to 0.
console.log(null > 0);  //false
console.log(null == 0);  //false
console.log(null >= 0);   //false


// strict check in js '===' checks for the datatype too.
