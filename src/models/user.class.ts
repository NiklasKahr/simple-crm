export class User {
    firstName!: string;
    lastName!: string;
    street!: string;
    number!: number;
    city!: string;
    zipCode!: number;
    birthDate!: number;

    constructor(object?: any) {
        this.firstName = object ? object.firstName : '';
        this.lastName = object ? object.lastName : '';
        this.street = object ? object.street : '';
        this.number = object ? object.number : '';
        this.city = object ? object.city : '';
        this.zipCode = object ? object.zipCode : '';
        this.birthDate = object ? object.birthDate : '';
    }
}