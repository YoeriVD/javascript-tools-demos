import {Contact} from '../components/contact';
export class MainController {

    public contacts: Contact[];
    public newContact : Contact;
    public form : ng.IFormController;

    /* @ngInject */
    constructor() {
        this.contacts = [
            new Contact('Yoeri', 'Van Damme', 'yoerid@infosupport.com'),
            new Contact('Sebastien', 'Dubois', 'yoeri.is.too.lazy.to.open@outlook.com'),
        ];
        
        this.newContact = new Contact();
    }
    
    saveContact() {
        this.contacts.push(this.newContact);
        this.newContact = new Contact();
        this.form.$setPristine();
    }
}
