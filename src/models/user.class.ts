export class User {
    firstName!: string;
    lastName!: string;
    email!: string;
    birthDate!: number;
    zipCode!: number;
    city!: string;
    address!: string;

    constructor(object?: any) {
        this.firstName = object ? object.firstName : '';
        this.lastName = object ? object.lastName : '';
        this.email = object ? object.email : '';
        this.birthDate = object ? object.birthDate : '';
        this.zipCode = object ? object.zipCode : '';
        this.city = object ? object.city : '';
        this.address = object ? object.address : '';
    }

    public toJson() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            birthDate: this.birthDate,
            zipCode: this.zipCode,
            city: this.city,
            address: this.address,
        }
    }
}