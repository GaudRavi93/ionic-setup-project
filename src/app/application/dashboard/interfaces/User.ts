export class User {
    public id: string;
    public name: string;
    public username: string;
    public email: string;
    public phone: string;
    public website: string;
    public company: {
        name: string
    };
    public address: {
        street: string,
        city: string,
        pinCode: string,
    };
}