/**
 * - ====================================== -
 * ~ Nullish coalescing & optional chaning
 * - ====================================== -
 */ 

 /**
  * ~ Nullish coalescing
  * : Sometimes we need to diferenciate nullish values of falsey values
  * : It will only give the result as the RIGHT operand only if the LEFT operand is either null or undefined
 */

  let y
 
  // falsy values on left side will return the left side
  y = false ?? 'default'       // y = false
  y = NaN ?? 'default'         // y = NaN
  y = '' ?? 'default'          // y = ''
  y = 0 ?? 'default'          // y = 0

  // null or undefined values on the left side will return right side
  y = null ?? 'default'     // y = 'default'
  y = undefined ?? 'default' // y = 'default'

   /**
  * ~ OR operator
  * : the OR (||) operator will give result as right operand if the LEFT has falsy values.
 */
    let z
    
    // will return the right side
    z = false || 'default'       // z = 'default'
    z = NaN || 'default'         // z = 'default'
    z = '' || 'default'          // z = 'default'
    z = 0 ?? 'default'          // z = 'default'
    z = null || 'default'     // z = 'default'
    z = undefined || 'default' // z = 'default'

    // will return the left side
    z = 'value' || 'default' // z = 'value'

/**
  * ~ Optional Chaining
  * : Is a binary operator that returns undefined if its left operand is undefined or null, else returns the value of its right operand.
 */
interface User {
   address: string | null;
   city?: string | null;
   phone?: {
      country?: string | null;
      number: string | null;
   }
}

let user: User = {
   address: '1st street',
   phone: {
      number: '4002-8922'
   }
}

// : Old method
if (user.phone.country) {
   let country = user.phone.country;
}

// : New method
let country = user?.phone?.country;
console.log(country); // undefined

let phoneNumber = user?.phone?.number;
console.log(phoneNumber); // 4002-8922
