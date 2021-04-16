/**
 * - ====================================== -
 * ~ Indexed Accessed Types (Lookup Types)
 * - ====================================== -
 */ 

interface AppUser {
    id: string;
    name: string;
    address: {
        street: string;
        city: string;
        country: string;
    }
}

type UserAddress = AppUser['address'];

type UserCity = AppUser['address']['city'];