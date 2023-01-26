setURL("https://gruppe-375.developerakademie.net/backend");

let alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let contacts = [
  {
    contact: "Anna Dobai",
    name: "Anna",
    lastName: "Dobai",
    phonenumber: "01599 12345678",
    mail: "anna_dobai@mail.de",
  },
  {
    contact: "Alina Numey",
    name: "Alina",
    lastName: "Numey",
    phonenumber: "01599 12345678",
    mail: "alina_numey@mail.de",
  },
  {
    contact: "Bernd Dobai",
    name: "Bernd",
    lastName: "Dobai",
    phonenumber: "01599 12345678",
    mail: "bernd_dobai@mail.de",
  },
  {
    contact: "Berth Numey",
    name: "Berth",
    lastName: "Numey",
    phonenumber: "01599 12345678",
    mail: "berth_numey@mail.de",
  },
  {
    contact: "Carina Dobai",
    name: "Carina",
    lastName: "Dobai",
    phonenumber: "01599 12345678",
    mail: "carina_dobai@mail.de",
  },
  {
    contact: "Cora Numey",
    name: "Cora",
    lastName: "Numey",
    phonenumber: "01599 12345678",
    mail: "cora_numey@mail.de",
  },
  {
    contact: "Daniel Dobai",
    name: "Daniel",
    lastName: "Dobai",
    phonenumber: "01599 12345678",
    mail: "daniel_dobai@mail.de",
  },
  {
    contact: "Dennis Numey",
    name: "Dennis",
    lastName: "Numey",
    phonenumber: "01599 12345678",
    mail: "dennis_numey@mail.de",
  },
  {
    contact: "Eden Dobai",
    name: "Eden",
    lastName: "Dobai",
    phonenumber: "01599 12345678",
    mail: "eden_dobai@mail.de",
  },
  {
    contact: "Enja Numey",
    name: "Enja",
    lastName: "Numey",
    phonenumber: "01599 12345678",
    mail: "enja_numey@mail.de",
  },
  {
    contact: "Felix Dobai",
    name: "Felix",
    lastName: "Dobai",
    phonenumber: "01599 12345678",
    mail: "felix_dobai@mail.de",
  },
  {
    contact: "Frederike Numey",
    name: "Frederike",
    lastName: "Numey",
    phonenumber: "01599 12345678",
    mail: "frederike_numey@mail.de",
  },
  {
    contact: "Georg Dobai",
    name: "Georg",
    lastName: "Dobai",
    phonenumber: "01599 12345678",
    mail: "georg_dobai@mail.de",
  },
  {
    contact: "Gunter Numey",
    name: "Gunter",
    lastName: "Numey",
    phonenumber: "01599 12345678",
    mail: "gunter_numey@mail.de",
  },
  {
    contact: "Hans Dobai",
    name: "Hans",
    lastName: "Dobai",
    phonenumber: "01599 12345678",
    mail: "hans_dobai@mail.de",
  },
  {
    contact: "Helena Numey",
    name: "Helena",
    lastName: "Numey",
    phonenumber: "01599 12345678",
    mail: "helena_numey@mail.de",
  },
  {
    contact: "Ina Dobai",
    name: "Ina",
    lastName: "Dobai",
    phonenumber: "01599 12345678",
    mail: "ina_dobai@mail.de",
  },
  {
    contact: "Ines Numey",
    name: "Ines",
    lastName: "Numey",
    phonenumber: "01599 12345678",
    mail: "ines_numey@mail.de",
  },
  {
    contact: "Jakob Dobai",
    name: "Jakob",
    lastName: "Dobai",
    phonenumber: "01599 12345678",
    mail: "jakob_dobai@mail.de",
  },
  {
    contact: "Jens Numey",
    name: "Jens",
    lastName: "Numey",
    phonenumber: "01599 12345678",
    mail: "jens_numey@mail.de",
  },
  {
    contact: "Karla Dobai",
    name: "Karla",
    lastName: "Dobai",
    phonenumber: "01599 12345678",
    mail: "karla_dobai@mail.de",
  },
  {
    contact: "Kerstin Numey",
    name: "Kerstin",
    lastName: "Numey",
    phonenumber: "01599 12345678",
    mail: "kerstin_numey@mail.de",
  },
  {
    contact: "Laila Dobai",
    name: "Laila",
    lastName: "Dobai",
    phonenumber: "01599 12345678",
    mail: "laila_dobai@mail.de",
  },
  {
    contact: "Lilian Numey",
    name: "Lilian",
    lastName: "Numey",
    phonenumber: "01599 12345678",
    mail: "lilian_numey@mail.de",
  },
  {
    contact: "Martha Dobai",
    name: "Martha",
    lastName: "Dobai",
    phonenumber: "01599 12345678",
    mail: "martha_dobai@mail.de",
  },
  {
    contact: "Max Numey",
    name: "Max",
    lastName: "Numey",
    phonenumber: "01599 12345678",
    mail: "max_numey@mail.de",
  },
  {
    contact: "Nadine Dobai",
    name: "Nadine",
    lastName: "Dobai",
    phonenumber: "01599 12345678",
    mail: "nadine_dobai@mail.de",
  },
  {
    contact: "Nora Numey",
    name: "Nora",
    lastName: "Numey",
    phonenumber: "01599 12345678",
    mail: "nora_numey@mail.de",
  },
  {
    contact: "Olaf Dobai",
    name: "Olaf",
    lastName: "Dobai",
    phonenumber: "01599 12345678",
    mail: "olaf_dobai@mail.de",
  },
  {
    contact: "Otto Numey",
    name: "Otto",
    lastName: "Numey",
    phonenumber: "01599 12345678",
    mail: "otto_numey@mail.de",
  },
  {
    contact: "Paula Dobai",
    name: "Paula",
    lastName: "Dobai",
    phonenumber: "01599 12345678",
    mail: "paula_dobai@mail.de",
  },
  {
    contact: "Penelope Numey",
    name: "Penelope",
    lastName: "Numey",
    phonenumber: "01599 12345678",
    mail: "penelope_numey@mail.de",
  },
  {
    contact: "Qastai Dobai",
    name: "Qastai",
    lastName: "Dobai",
    phonenumber: "01599 12345678",
    mail: "qastai_dobai@mail.de",
  },
  {
    contact: "Qumran Numey",
    name: "Qumran",
    lastName: "Numey",
    phonenumber: "01599 12345678",
    mail: "qumran_numey@mail.de",
  },
  {
    contact: "Ralf Dobai",
    name: "Ralf",
    lastName: "Dobai",
    phonenumber: "01599 12345678",
    mail: "ralf_dobai@mail.de",
  },
  {
    contact: "Ramona Numey",
    name: "Ramona",
    lastName: "Numey",
    phonenumber: "01599 12345678",
    mail: "ramona_numey@mail.de",
  },
  {
    contact: "Stefanie Dobai",
    name: "Stefanie",
    lastName: "Dobai",
    phonenumber: "01599 12345678",
    mail: "stefanie_dobai@mail.de",
  },
  {
    contact: "Susanne Numey",
    name: "Susanne",
    lastName: "Numey",
    phonenumber: "01599 12345678",
    mail: "susanne_numey@mail.de",
  },
  {
    contact: "Tabea Dobai",
    name: "Tabea",
    lastName: "Dobai",
    phonenumber: "01599 12345678",
    mail: "tabea_dobai@mail.de",
  },
  {
    contact: "Theodor Numey",
    name: "Theodor",
    lastName: "Numey",
    phonenumber: "01599 12345678",
    mail: "theodor_numey@mail.de",
  },
  {
    contact: "Ute Dobai",
    name: "Ute",
    lastName: "Dobai",
    phonenumber: "01599 12345678",
    mail: "ute_dobai@mail.de",
  },
  {
    contact: "Uwe Numey",
    name: "Uwe",
    lastName: "Numey",
    phonenumber: "01599 12345678",
    mail: "uwe_numey@mail.de",
  },
  {
    contact: "Verena Dobai",
    name: "Verena",
    lastName: "Dobai",
    phonenumber: "01599 12345678",
    mail: "verena_dobai@mail.de",
  },
  {
    contact: "Veronika Numey",
    name: "Veronika",
    lastName: "Numey",
    phonenumber: "01599 12345678",
    mail: "veronika_numey@mail.de",
  },
  {
    contact: "Walter Dobai",
    name: "Walter",
    lastName: "Dobai",
    phonenumber: "01599 12345678",
    mail: "walter_dobai@mail.de",
  },
  {
    contact: "Wera Numey",
    name: "Wera",
    lastName: "Numey",
    phonenumber: "01599 12345678",
    mail: "wera_numey@mail.de",
  },
  {
    contact: "Xenia Dobai",
    name: "Xenia",
    lastName: "Dobai",
    phonenumber: "01599 12345678",
    mail: "xenia_dobai@mail.de",
  },
  {
    contact: "Xini Numey",
    name: "Xini",
    lastName: "Numey",
    phonenumber: "01599 12345678",
    mail: "xini_numey@mail.de",
  },
  {
    contact: "Yannick Dobai",
    name: "Yannick",
    lastName: "Dobai",
    phonenumber: "01599 12345678",
    mail: "yannick_dobai@mail.de",
  },
  {
    contact: "Yasmin Numey",
    name: "Yasmin",
    lastName: "Numey",
    phonenumber: "01599 12345678",
    mail: "yasmin_numey@mail.de",
  },
  {
    contact: "Zara Dobai",
    name: "Zara",
    lastName: "Dobai",
    phonenumber: "01599 12345678",
    mail: "zara_dobai@mail.de",
  },
  {
    contact: "Zorro Numey",
    name: "Zorro",
    lastName: "Numey",
    phonenumber: "01599 12345678",
    mail: "zorro_numey@mail.de",
  },
];

var contactToEditLetter;
var contactToEditIndex;
var labelColors;
var currentLabelColor;
var last_id;
var selectedContact;

// variables to get the currend width of an element
let navigation_left;
let navigation_left_width;
let navTopBar;

let contactsListContainer;
let contactListContainerWidth;
let navTopBarHeight;

let contactsPage;

function initGlobalVariables() {
  labelColors = [
    BG_COLOR_SUPERNOVA,
    BG_COLOR_TABASCO,
    BG_COLOR_WEBORANGE,
    BG_COLOR_BLAZEORANGE,
    BG_COLOR_MALACHITE,
    BG_COLOR_APPLE,
    BG_COLOR_CYAN_AQUA,
    BG_COLOR_CERULEAN,
    BG_COLOR_BLUE_RIBBON,
    BG_COLOR_JAVA,
    BG_COLOR_PURPLE_PIZZAZZ,
    BG_COLOR_HELIOTROPE,
    BG_COLOR_ELECTRIC_VIOLET,
  ];

  currentLabelColor = 0;

  last_id = "XX";
}

function initContacts() {
  console.log("initContacts()");
  initGlobalVariables();

  navigation_left = document.getElementById("navigation-bar-left");
  navigation_left_width = navigation_left.offsetWidth;

  contactsListContainer = document.getElementById("contacts-list-container");
  contactListContainerWidth = contactsListContainer.offsetWidth;

  contactsPage = document.getElementById("contacts-id");

  // trying to fix bug after adding new contact
  document.getElementById("contact-list").innerHTML = "";

  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];
    insertContactToContactList(contact);
  }
  console.log("Contacts to add:");
  console.log(contacts);

  // save contactsToDatabase
  saveContactsToDataBase();

  // render contactInformation container according to width of nav_left and contactListContainer
  let contactInformation = document.getElementById("contact-information");
  contactInformation.style = `width: calc(100vw - ${navigation_left_width}px - ${contactListContainerWidth}px`;

  // render contact list height according to height of nav top bar
  navTopBar = document.getElementById("nav-top-bar");
  navTopBarHeight = navTopBar.offsetHeight;
}

function saveContactsToDataBase() {
  console.log("saveContactsToDataBase()");
  for (let index = 0; index < contacts.length; index++) {
    const element = contacts[index];
    localStorage.setItem(
      `contacts_${contacts[index]["letter"]}_firstNames`,
      contacts[index]["names"]
    );
    localStorage.setItem(
      `contacts_${contacts[index]["letter"]}_lastNames`,
      contacts[index]["lastNames"]
    );
    localStorage.setItem(
      `contacts_${contacts[index]["letter"]}_phonenumbers`,
      contacts[index]["phonenumbers"]
    );
    localStorage.setItem(
      `contacts_${contacts[index]["letter"]}_mailaddresses`,
      contacts[index]["mail"]
    );
  }

  backend.setItem("contactsBook", contacts);
  console.log("Alright. Successfully saved contacts to backend.");
  // backend.setItem(`contacts_${contacts[index]['letter']}_firstNames`, JSON.stringify(contacts[index]['names']));
  // backend.setItem(`contacts_${contacts[index]['letter']}_lastNames`, JSON.stringify(contacts[index]['lastNames']));
  // backend.setItem(`contacts_${contacts[index]['letter']}_phonenumbers`, JSON.stringify(contacts[index]['phonenumbers']));
  // backend.setItem(`contacts_${contacts[index]['letter']}_mailaddresses`, JSON.stringify(contacts[index]['mail']));
  // }
}

function insertContactToContactList(contact) {
  console.log("insertContactToContactList");
  console.log("contacts.length: ", contacts.length);
  const name = contact["name"];
  const lastName = contact["lastName"];
  const emailAddress = contact["mail"];
  const fName = name.charAt(0);
  const lName = lastName.charAt(0);

  if (currentLabelColor >= labelColors.length) {
    currentLabelColor = 0;
  }

  const bgColor = labelColors[currentLabelColor];
  currentLabelColor++;

  document.getElementById(
    "contact-list"
  ).innerHTML += `<div id="${name}-${lastName}" class="con_contactListElement hoverEffect" onclick="contactClicked(id)">
      <span id="label-${name}-${lastName}" class="con_contactListElementLabel">${fName}${lName}</span>  
      <div>
        <span>${name} ${lastName}</span>
        <span class="con_contactListElementEmail">${emailAddress}</span>
      </div>
      
    </div>`;
  document.getElementById(`label-${name}-${lastName}`).style.backgroundColor =
    bgColor;
}

function newContact() {
  // alert("You wanna add new contact?!");
  document.getElementById("new-popup").classList.remove("d-none");
  document.getElementById("new-popup").style.visibility = "visible";
  document.getElementById("new-popup").style.display = "flex";
  document.getElementById("new-popup-form").classList.remove("d-none");
}

function cancelAddNewContact() {
  document.getElementById("new-popup").classList.add("d-none");
  document.getElementById("new-popup").style.visibility = "invisible";
  document.getElementById("new-popup").style.display = "none";
  document.getElementById("new-popup-form").classList.add("d-none");
}

function cancelEditContact() {
  console.log("cancelEditContact()");
  document.getElementById("edit-or-new-popup").classList.add("d-none");
  document.getElementById("edit-form").classList.add("d-none");
}

function addNewContact() {
  let firstName = document.getElementById("con-new-name").value.split(" ")[0];
  let lastName = document.getElementById("con-new-name").value.split(" ")[1];
  let phone = document.getElementById("con-new-phone").value;
  let mail = document.getElementById("con-new-mail").value;

  if (!firstName || !lastName || !phone || !mail) {
    alert("PLease fill in all information");
    return;
  }

  let firstCharOfName = firstName.charAt(0);
  console.log(`firstCharOfName: ${firstCharOfName}`);

  let element = [];
  for (let index = 0; index < contacts.length; index++) {
    element.push(contacts[index]["letter"]);
  }

  let contactListIndex = element.indexOf(firstCharOfName, 0);
  console.log(`contactListIndex: ${contactListIndex}`);

  document.getElementById("new-popup").style.visibility = "hidden";
  document.getElementById("new-popup").classList.add("d-none");
  document.getElementById("new-popup-form").classList.add("d-none");

  console.log(`New contact, first name: ${firstName}`);
  console.log(`New contact, last name: ${lastName}`);
  console.log(`New contact, phone: ${phone}`);
  console.log(`New contact, mail: ${mail}`);

  // reset the input fields values
  document.getElementById("con-new-name").value = "";
  document.getElementById("con-new-phone").value = "";
  document.getElementById("con-new-mail").value = "";

  contacts[contactListIndex]["names"].push(firstName);
  contacts[contactListIndex]["lastNames"].push(lastName);
  contacts[contactListIndex]["phonenumbers"].push(phone);
  contacts[contactListIndex]["mail"].push(mail);

  console.log(`Contacts after adding of ${firstName} ${lastName}`);
  console.log(contacts);

  // sort contacts after adding new contact
  sortContacts(contactListIndex);
  initContacts();
}

function sortContacts(contactListIndex) {
  console.log("sortContacts()");
  let tmp = [];
  let namesArray = [];
  let lastNamesArray = [];
  let lastNamesArrayNew = [];
  let namesArrayNew = [];
  let phonesArray = [];
  let phonesArrayNew = [];
  let mailArray = [];
  let mailArrayNew = [];

  // get the contacts' information into arrays
  namesArray = contacts[contactListIndex]["names"];
  lastNamesArray = contacts[contactListIndex]["lastNames"];
  phonesArray = contacts[contactListIndex]["phonenumbers"];
  mailArray = contacts[contactListIndex]["mail"];

  // copy the elements of namesArray to tmp
  for (let index = 0; index < namesArray.length; index++) {
    const element = namesArray[index];
    tmp.push(element);
  }

  console.log("Before sorting...");
  console.log(namesArray);
  console.log(lastNamesArray);
  console.log(phonesArray);
  console.log(mailArray);

  let oldIndices = [];
  let newIndices = [];

  // sort the array tmp and copy it
  namesArrayNew = tmp.sort();
  console.log("The sorting does...");
  console.log("namesArray:");
  console.log(namesArray);
  console.log("namesArrayNew:");
  console.log(namesArrayNew);
  console.log("tmp:");
  console.log(tmp);

  for (let i = 0; i < namesArray.length; i++) {
    let searchTag = namesArrayNew[i];
    console.log(`searchTag: ${searchTag}`);
    oldIndices.push(namesArray.indexOf(searchTag, 0));
  }

  for (let i = 0; i < namesArray.length; i++) {
    let searchTag = namesArrayNew[i];
    console.log(`searchTag: ${searchTag}`);
    newIndices.push(namesArrayNew.indexOf(searchTag, 0));
  }

  console.log(`oldIndices: ${oldIndices}`);
  console.log(`newIndices: ${newIndices}`);

  // fill arrays with dummy value
  for (let index = 0; index < namesArray.length; index++) {
    lastNamesArrayNew.push("dummy");
    phonesArrayNew.push("dummy");
    mailArrayNew.push("dummy");
  }

  for (let i = 0; i < namesArray.length; i++) {
    lastNamesArrayNew[i] = lastNamesArray[oldIndices[i]];
    phonesArrayNew[i] = phonesArray[oldIndices[i]];
    mailArrayNew[i] = mailArray[oldIndices[i]];
  }

  console.log("the new sorted contacts are:");
  console.log(namesArrayNew);
  console.log(lastNamesArrayNew);
  console.log(phonesArrayNew);
  console.log(mailArrayNew);

  contacts[contactListIndex]["names"] = namesArrayNew;
  contacts[contactListIndex]["lastNames"] = lastNamesArrayNew;
  contacts[contactListIndex]["phonenumbers"] = phonesArrayNew;
  contacts[contactListIndex]["mail"] = mailArrayNew;
}

function contactClicked(given_id) {
  console.log("contactClicked()");
  console.log(`last_id: ${last_id}`);
  console.log(`given_id: ${given_id}`);

  if (given_id != last_id) {
    document.getElementById(given_id).style.backgroundColor = "#2A3647";
    document.getElementById(given_id).style.color = "#FFFFFF";
    if (last_id != "XX") {
      document.getElementById(last_id).style.backgroundColor = "#FFFFFF";
      document.getElementById(last_id).style.color = "#000000";
    }
    last_id = given_id;
    showContactInformation(given_id);
  } else if (given_id == last_id) {
    document.getElementById(given_id).style.backgroundColor = "#FFFFFF";
    document.getElementById(given_id).style.color = "#000000";
    last_id = "XX";
    hideContactDetails();

    // trying to fix bug of missing hover effect after contact clicked
    document.getElementById(given_id).style.backgroundColor = "";
  }
}

function showContactInformation(given_id) {
  // display contact details
  selectedContact = given_id;
  document.getElementById("contacts-details").classList.remove("d-none"); // testing !!!
  document.getElementById("contact-information").style =
    "display: flex !important;";
  document.getElementById("contact-information").classList.remove("d-none");
  document.getElementById("label-big-and-name").classList.remove("d-none");
  document.getElementById("edit-container").classList.remove("d-none");
  document
    .getElementById("mail-and-phone-container")
    .classList.remove("d-none");



  console.log('675: given_id: ', given_id);

  let currentContact = Number(given_id.split("-")[1]);
  let searchLetter = given_id.replace("-"," ");

  let element = [];
  for (let index = 0; index < contacts.length; index++) {
    element.push(contacts[index]["contact"]);
  }

  console.log('element: ', element);

  let clickedIndex = element.indexOf(searchLetter, 0);
  console.log('clickedIndex: ', clickedIndex);

  let chosenContactsName = contacts[clickedIndex]["name"];
  console.log('chosenContactsName: ', chosenContactsName);
  let chosenContactsLastName =
    contacts[clickedIndex]["lastName"];
  let firstLetterFirstName = chosenContactsName.charAt(0);
  let firstLetterLastName = chosenContactsLastName.charAt(0);

  let phoneNumber = contacts[clickedIndex]["phonenumber"];
  let mailAddress = contacts[clickedIndex]["mail"];

  // console.log(`letterIndex: ${letterIndex}`);
  console.log(`contacts.length: ${contacts.length}`);
  console.log(`clickedIndex: ${clickedIndex}`);
  console.log(`currentContact: ${currentContact}`);
  console.log(
    `You selected contact ${chosenContactsName} ${chosenContactsLastName}`
  );

  document.getElementById("label-big-and-name").innerHTML = /*html*/ `
  <span id="big-label" class="con_bigLabel">${firstLetterFirstName}${firstLetterLastName}</span>
  <div id="first-name-last-name" class="con_firstNameLastName">
    <span>${chosenContactsName} ${chosenContactsLastName}</span>
    <div style="display: flex; margin-top: 16px;">
      <img src="./img/plus-8-32.png" style="height: 24px; width: 24px; object-fit: cover;">
      <span class="hoverEffect" style="color: #29ABE2; font-size: 24px">Add Task</span>
    </div>
  </div>`;

  // Get background color of label inside contact list
  let label_Id = `label-${chosenContactsName}-${chosenContactsLastName}`;
  let bgColorLabel = document.getElementById(label_Id).style.backgroundColor;

  document.getElementById("big-label").style.backgroundColor = bgColorLabel;
  document.getElementById("edit-container").innerHTML = /*html*/ `
  <span class="con_contactInformationSpan">Contact Information</span>
  <div class="hoverEffect" style="display: flex; align-items: center;" onclick="editContact(${clickedIndex})">
    <img src="./img/edit-2-32.png" style="margin-right: 6px;">
    <span>Edit Contact</span>
  </div>
  `;
  document.getElementById("mail-and-phone-container").innerHTML = /*html*/ `
  <h3>Email:</h3>
  <span>${mailAddress}</span>
  <h3>Phone:</h3>
  <span>${phoneNumber}</span>`;

  // render contactInformation container according to width of nav_left and contactListContainer
  let contactInformation = document.getElementById("contact-information");
  contactInformation.style = `width: calc(100vw - ${navigation_left_width}px - ${contactListContainerWidth}px`;
}

function hideContactDetails() {
  console.log("hideContactDetails()");
  document.getElementById("label-big-and-name").classList.add("d-none");
  document.getElementById("edit-container").classList.add("d-none");
  document.getElementById("mail-and-phone-container").classList.add("d-none");
}

function editContact(clickedIndex) {
  console.log(
    `You want to edit contact of  index ${alphabetIndex}`
  );
  document.getElementById("edit-or-new-popup").classList.remove("d-none");
  document.getElementById("edit-form").classList.remove("d-none");
  document.getElementById("edit-or-new-popup").style.visibility = "visible";
  document.getElementById("edit-or-new-popup").style.display = "flex";
  contactToEditLetter = alphabetIndex;
  contactToEditIndex = currentContact;
}

function submitEdit(contactToEditLetter, contactToEditIndex) {
  document.getElementById("edit-or-new-popup").classList.add("d-none");
  document.getElementById("edit-form").classList.add("d-none");
  let firstNameNew = document
    .getElementById("con-edit-name")
    .value.split(" ")[0];
  let lastNameNew = document
    .getElementById("con-edit-name")
    .value.split(" ")[1];
  let phoneNew = document.getElementById("con-edit-phone").value;
  let mailNew = document.getElementById("con-edit-mail").value;
  console.log(`New contact details of contact: \nFirst name:${firstNameNew}\n
  Last name:${lastNameNew}\nPhone number:${phoneNew}\nE-Mail:${mailNew}\n`);
  changeContact(
    contactToEditLetter,
    contactToEditIndex,
    firstNameNew,
    lastNameNew,
    phoneNew,
    mailNew
  );

  // changeContact(contactToEditLetter, contactToEditIndex);
}

function changeContact(
  contactToEditLetter,
  contactToEditIndex,
  firstNameNew,
  lastNameNew,
  phoneNew,
  mailNew
) {
  console.log("changeContact()");
  console.log(`contactToEditLetter: ${contactToEditLetter}`);
  console.log(`contactToEditIndex: ${contactToEditIndex}`);
  const element = firstNameNew;
  const element2 = lastNameNew;
  const element3 = mailNew;
  const fName = firstNameNew.charAt(0);
  const lName = lastNameNew.charAt(0);
  console.log(`element: ${element}`);
  console.log(`element2: ${element2}`);
  console.log(`element3: ${element3}`);
  console.log(`fName: ${fName}`);
  let editID = `label-${contacts[contactToEditLetter]["letter"]}-${contactToEditIndex}`;
  let bgColorLabel = document.getElementById(editID).style.backgroundColor;

  document.getElementById(
    `${contacts[contactToEditLetter]["letter"]}-${contactToEditIndex}`
  ).innerHTML = /*html*/ `
  <span id="label-${contacts[contactToEditLetter]["letter"]}-${contactToEditIndex}" class="con_contactListElementLabel">${fName}${lName}</span>  
      <div>
        <span>${element} ${element2}</span>
        <span class="con_contactListElementEmail">${element3}</span>
      </div>
  `;
  document.getElementById(editID).style.backgroundColor = bgColorLabel;
  document.getElementById("edit-or-new-popup").style.visibility = "hidden";
  document.getElementById("edit-or-new-popup").classList.add("d-none");
  document.getElementById("con-edit-name").classList.add("d-none");

  // reset input fields
  document.getElementById("con-edit-name").value = "";
  document.getElementById("con-edit-phone").value = "";
  document.getElementById("con-edit-mail").value = "";

  // push new contact information to JSON
  contacts[contactToEditLetter]["names"][contactToEditIndex] = firstNameNew;
  contacts[contactToEditLetter]["lastNames"][contactToEditIndex] = lastNameNew;
  contacts[contactToEditLetter]["mail"][contactToEditIndex] = mailNew;
  contacts[contactToEditLetter]["phonenumbers"][contactToEditIndex] = phoneNew;
  console.log(contacts);

  let new_given_id = `${fName}-${contactToEditIndex}`;

  showContactInformation(new_given_id);
}

function closeContactInformationContainer() {
  console.log(`You decided to close contact details of ${selectedContact}`);
  document.getElementById("contact-information").classList.add("d-none");
  document.getElementById("contact-information").style =
    "display: none !important;";

  if (selectedContact != last_id) {
    document.getElementById(selectedContact).style.backgroundColor = "#2A3647";
    document.getElementById(selectedContact).style.color = "#FFFFFF";
    if (last_id != "XX") {
      document.getElementById(last_id).style.backgroundColor = "#FFFFFF";
      document.getElementById(last_id).style.color = "#000000";
    }
    last_id = selectedContact;
    showContactInformation(selectedContact);
  } else if (selectedContact == last_id) {
    document.getElementById(selectedContact).style.backgroundColor = "#FFFFFF";
    document.getElementById(selectedContact).style.color = "#000000";
    last_id = "XX";
  }

  // document.getElementById(selectedContact).style.backgroundColor = "#FFFFFF";
  // document.getElementById(selectedContact).style.color = "#000000";
  // trying to fix bug of missing hover effect after contact clicked
  document.getElementById(selectedContact).style.backgroundColor = "";
}
