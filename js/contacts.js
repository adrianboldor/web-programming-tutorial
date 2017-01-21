


function getContactHTML(contact) {
    return contact ='<tr>'+
        '<td>'+contact.firstName+'</td>'+
        '<td>'+contact.lastName+'</td>'+
        '<td>'+contact.phone+'</td>'+
        '</tr>';
}

var contacts = [
    {firstName: "SDASDda", lastName: "afegfaef", phone: "1424124"},
    {firstName: "Swefefd", lastName: "afedasgfaef", phone:"43224124"},
    {firstName: "erwfefa", lastName: "afegfadsaef", phone: "6464363"}
];



function showContacts(contacts) {
    var contactsHTML = '';
    for (var i=0; i< contacts.length; i++) {
        console.info(contacts[i]);
        contactsHTML += getContactHTML(contacts[i]);
    }

    $('#table_agenda tbody').html(contactsHTML);
}

showContacts(contacts);