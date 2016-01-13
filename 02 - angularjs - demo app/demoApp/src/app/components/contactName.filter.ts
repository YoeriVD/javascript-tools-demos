import { Contact } from './contact';

export function contactNameFilter() {
    return (contact : Contact) => contact.firstName + ' ' + contact.lastName;
}
