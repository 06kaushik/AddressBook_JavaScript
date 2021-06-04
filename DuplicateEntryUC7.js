class AddressBook {

        constructor(...params) {
                this.firstname = params[0];
                this.lastnamename = params[1];
                this.address = params[2];
                this.city = params[3];
                this.state = params[4];
                this.zipcode = params[5];
                this.phoneNumber = params[6];
                this.emailId = params[7];
        }

        get firstname() { return this._firstname; }
        set firstname(firstname) {
                let pattern1 = RegExp('^[A-Z]{1}[a-z]{3,}$');
                if (pattern1.test(firstname))
                        this._firstname = firstname;
                else throw 'FirstName is Incorrect!';

        }

        get lastname() { return this._lastname; }
        set lastname(lastname) {
                let pattern2 = RegExp('^[A-Z]{1}[a-z]{3,}$');
                if (pattern2.test(lastname))
                        this._lastname = lastname;
                else throw 'LastName is Incorrect!';
        }

        get address() { return this._address; }
        set address(address) {
                let pattern3 = RegExp('^[A-Z]{1}[a-z]{4,}$');
                if (pattern3.test(address))
                        this._address = address;
                else throw 'Address is Incorrect!';
        }

        get city() { return this._city; }
        set city(city) {
                let pattern4 = RegExp('^[A-Z]{1}[a-z]{4,}$');
                if (pattern4.test(city))
                        this._city = city;
                else throw 'City is Incorrect!';
        }

        get state() { return this._state; }
        set state(state) {
                let pattern5 = RegExp('^[A-Z]{1}[a-z]{4,}$');
                if (pattern5.test(state))
                        this._state = state;
                else throw 'State is Incorrect!';
        }

        get zipcode() { return this._zipcode; }
        set zipcode(zipcode) {
                let pattern6 = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
                if (pattern6.test(zipcode))
                        this._zipcode = zipcode;
                else throw 'Zipcode is Incorrect!';
        }

        get phoneNumber() { return this._phoneNumber; }
        set phoneNumber(phoneNumber) {
                let pattern7 = RegExp('^[+][0-9]{1,}\\s?[1-9]{1}[0-9]{9}$');
                if (pattern7.test(phoneNumber))
                        this._phoneNumber = phoneNumber;
                else throw 'PhoneNumber is Incorrect!';
        }

        get emailId() { return this._emailId; }
        set emailId(emailId) {
                let pattern8 = RegExp('^[A-Z a-z 0-9]+([._+-][0-9 a-z A-Z]+)*@[0-9 a-z A-Z]+.[a-z A-Z]{2,3}([.][a-z A-Z]{2})*$');
                if (pattern8.test(emailId))
                        this._emailId = emailId;
                else throw 'EmailId is Incorrect!';
        }

        toString() {
                return "firstname= " + this.firstname + ", lastname = " + this.lastname + ", address = " + this.address +
                        ", city = " + this.city + ", state = " + this.state + ", zipcode = " + this.zipcode +
                        ", phoneNumber = " + this.phoneNumber + ", emailId = " + this.emailId;
        }
}

let contactsArr = new Array();
const addressbook = new AddressBook("Arjun", "Sharma", "Narela", "Delhi", "Delhi", "110032", "9987876783", "asharma@gmail.com");
contactsArr.push(addressbook);

const addressbook2 = new AddressBook("Dia", "Mathew", "Model Town", "New York", "UK", "998079", "+02 898374783", "mathew@google.com");
contactsArr.push(addressbook2);

const addressbook3 = new AddressBook("Dia", "Tyagi", "Baga", "Andaman", "Andaman", "873848", "9801456780", "Ayaan@gmail.com");
contactsArr.push(addressbook3);

console.log("UC=3");
//UC-3 To store contacts in AddressBook Array
console.log(contactsArr.length);
for (var i = 0; i < contactsArr.length; i++) {
        console.log(contactsArr[i]);
}

console.log("UC=4");
//UC-4 To update the contact in the array
let result = contactsArr.filter((e) => e._firstname == 'Hope');
console.log(result);

if (result && result.length > 0) {
        result[0]._firstname = 'Taylor';
		result[0]._address = 'Newvilla';
}
console.log("New Array after Updation: ",contactsArr);

console.log("UC=5");
//UC-5 To Delete the contact from the array
contactsArr = contactsArr.filter((e) => e._firstname != 'Hope');
console.log("New Array After Delete: ",contactsArr);

console.log("UC=6");
//UC-6 To find the Number of contacts in the array
let numOfContacts = contactsArr.length;
console.log("Number of Contacts in the AddressBook: "+numOfContacts);

console.log("UC=7");
//UC-7 To prevent duplicate entry in the Array
const addressbook4 = new AddressBook("Riley", "Colon", "Crossway", "Havana", "Indiana", "560116", "+61 3017856780", "t.colon@gmail.com");
if(!contactsArr.some(el => el._firstname == "Riley"))
     contactsArr.push( addressbook4);
else
	console.log("Value already Exists!");

console.log("Unique Array: ",contactsArr);

console.log("UC=8");
//UC-8 To check for the Person in the Address Book 
let checkCity = contactsArr.filter((e) => e._city == 'New York');
console.log("Contact from the addressBook as per Given city: ",checkCity);

let checkState = contactsArr.filter((e) => e._state == 'UK');
console.log("Contact from the addressBook as per given state: ",checkState);	