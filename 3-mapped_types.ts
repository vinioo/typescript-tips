/**
 * - ====================================== -
 * ~ Mapped Types, Utility Types, Generics & Keyof keyword. 
 * - ====================================== -
 */ 


interface User {
    age: number;
    name: string;
}

// ~ Keyof keyword
type Keys = keyof User; // * "age" | "name"






/**
 * - ====================================== -
 * ~ Generic types. 
 * : Create a component that can work over a variety of types rather than a single one
 * - ====================================== -
 */ 

    const printValue = <T>(arg: T): T => {
        return arg;
    }

    printValue(2).;

    printValue('text').;






    


    // ~ Class example

    class BaseClass<T> {
        async getItem(): Promise<T> {
            return;
        }

        async getAll(): Promise<T[]> {
            return;
        }
    }

    // : usage

    interface UserModel {
        id: string;
    }

    class UserRepository extends BaseClass<UserModel> {
        // content here... 
    }

    // : instance

    const userRepo = new UserRepository();

    const users = userRepo.getAll(); // : Will return a promise of type UserModel
    



/**
 * - ====================================== -
 * ~ Mapped Types, Utility Types, & Generic types. 
 * - ====================================== -
 */ 

const user: User = {
    age: 1,
    name: 'Vinicius'
}


/**
 * ~ Utility Types
 */

// ~ Partial<T> - Typescript pre-built utility type
// : Using partial, all the proerties of the object become optional

const userPartial: Partial<User> = {
    age: 1,
}

// * userPartial.

const userWithoutPartial: User = {
    age: 2,
}






// ~ Readonly<T> - Typescript pre-built utility type
// : Using readonly, all the proerties of the object become readonly

const userReadonly: Readonly<User> = {
    age: 1,
    name: 'Vinicius'
}

userReadonly.name = 'Vinicius2';








//  ~ Record<T> - Typescript pre-built utility type
// : Constructs an object type whose property keys are Keys and whose property values are Type
// : Record will add a type to a object of type T

interface Billing {
    id: string;
    paid: boolean;
}

const BillingList: Record<string, Billing> = {
    FirstUser: {
        id: "123",
        paid: false,
    },
    SecondUser: {
        id: "321",
        paid: true,
    }
}





// : Second example

interface ComponentStyle {
    color: string;
    bold: boolean;
}

type Variants = 'system' | 'danger' | 'warning';

const myComponent: Record<Variants, ComponentStyle> = {
    system: {
        color: 'blue',
        bold: false,
    },
    danger: {
        color: 'yellow',
        bold: true,
    },
    warning: {
        color: 'red',
        bold: false,
    }
}




// : Third example (produt stock)

type ProductId = string; // : type alias

interface Stock {
    quantity: number;
}

const store: Record<ProductId, Stock> = {
    "product1": {
        quantity: 2,
    },
    "product2": {
        quantity: 3,
    }
}



/**
 * - ====================================== -
 * ~ Creating Custom Mapped Types 
 * - ====================================== -
 */ 


// ~ Mapped type - Implementation of Partial<T>
type MyPartial<T> = {
    // : Foreach prop in type T, convert it to a optional property adding '?'
    [Prop in keyof T]?: T[Prop];
}

const userMyPartial: MyPartial<User> = {
    age: 1,
}

const userWithoutMyPartial : User = {
    age: 1,
}





// ~ Mapped type to change all type properties of an object to string.
type Stringify<T> = {
    // : Foreach prop in type T, convert it to a specific 'string' type.
    [Prop in keyof T]: string;
}

const userToString: Stringify<User> = {
    age: '21',
    name: 'Vinicius',
}

// * userToString.

// * user.


/**
 * ~ Record<T, K> Implementation
 * : Construct a type with a set of properties K of type T
 */
 type MyRecord<K extends keyof any, T> = {
    [Properties in K]: T;
};

/** 
 * : keyof any represents the type of any value that can be used as an index to an object. 
 * : Currently you can use string or number or symbol to index into an object.
 */


// ! More at: https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
// ! https://www.typescriptlang.org/docs/handbook/utility-types.html
