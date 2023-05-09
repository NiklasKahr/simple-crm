export class User {
    firstName!: string;
    lastName!: string;
    address!: string;
    zipCode!: number;
    city!: string;
    birthDate!: number;

    constructor(object?: any) {
        this.firstName = object ? object.firstName : '';
        this.lastName = object ? object.lastName : '';
        this.address = object ? object.street : '';
        this.zipCode = object ? object.zipCode : '';
        this.city = object ? object.city : '';
        this.birthDate = object ? object.birthDate : '';
    }

    public toJson() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            address: this.address,
            zipCode: this.zipCode,
            city: this.city,
            birthDate: this.birthDate,
        }
    }
}