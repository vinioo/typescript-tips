/**
 * - ====================================== -
 * ~ Type Guards, typeof & Numeric separator 
 * - ====================================== -
 */ 

interface Car {
    name: string;
    motor: number;
}

interface Motorcycle {
    name: string;
    cilindradas: number;
}

const car: Car = { name: 'Fusca', motor: 1.0 };

const motorcycle: Motorcycle = { name: 'Titan', cilindradas: 200_000 } // ~ numeric separator






function logMotorPower(vehicle: Car | Motorcycle): void {
    if ('motor' in vehicle) { // ~ type guard
        console.log('the CAR has a power of', + vehicle.motor);
    }

    if ('cilindradas' in vehicle) {  // ~ type guard
        console.log('the MOTORCYCLE has a power of', + vehicle.cilindradas);
    }
}






function isCar(vehicle: Car | Motorcycle): vehicle is Car { // ~ return type = type predicate 
    return 'motor' in vehicle;
}

function isMotorcycle(vehicle: Car | Motorcycle): vehicle is Motorcycle {
    return 'cilindradas' in vehicle;
}






// ~ So, we can rewrite the logMotorPower function this way:

function newLogMotorPower(vehicle: Car | Motorcycle): void {
    if (isCar(vehicle)) {
        console.log('the CAR has a power of', + vehicle.motor);
    }

    if (isMotorcycle(vehicle)) {
        console.log('the MOTORCYCLE has a power of', + vehicle.cilindradas);
    }''
}




// - WHY to not use typeof? Typeof will return only primitive types of javascript, like string, object etc.

// ! More at: https://www.typescriptlang.org/pt/play/typescript/language/type-guards.ts.html