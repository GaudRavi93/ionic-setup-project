// add constants and enum here
// examples

export enum RegexEnum {
	numberOnly = '^[0-9]*$',
	vatNumber = '.{0,20}',
	price = '([0-9]*[.])?[0-9]+',
	phoneNumberNineDigit = '^5[0-9]{8}',
	phoneNumberTenDigit = '^0[0-9]{9}',
	phoneNumber = '^(5[0-9]{8}$)|^(\\+9665[0-9]{8}$)|^(009665[0-9]{8}$)|^(05[0-9]{8}$)|^(9665[0-9]{8}$)',
	acceptfourNumber = '^[0-9]{4}$',
	acceptFiveNumber = '^[0-9]{5}$',
	email = '^[a-zA-Z0-9_\\+-]+(\\.[a-zA-Z0-9_\\+-]+)*@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*\\.([a-zA-Z]{1,3})$',
	password = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$*.{}?"!@#%&/,><\':;|_~`^\\]\\[\\)\\(]).{6,}',
	url = '[(http(s)?):\\/\\/(www\\.)?a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)'
}

export const PAYMENT_METHODS_TYPES = {
    CASH: 'Cash',
    CARD: 'Card',
    CREDIT: 'CreditCard',
    POST: 'Post',
    DEBIT: 'DebitCard',
    OTHER: 'Other',
};

export enum NETWORK_STATUS {
    CONNECTED = 'Connected',
    DISCONNECTED = 'Disconnected'
}