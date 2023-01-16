import getCurrentDate from "../utils/getCurrentDate.js";
import requestVisa from "../utils/requestVisa.js";
import addToLog from "../utils/addToLog.js";

const createUrl = '/visaaliasdirectory/v1/manage/createalias';
const resolveUrl = '/visaaliasdirectory/v2/resolve';
const updateUrl = '/visaaliasdirectory/v1/manage/updatealias';
const deleteUrl = '/visaaliasdirectory/v1/manage/deletealias';
const getUrl = '/visaaliasdirectory/v1/manage/getalias';
const email = 'pavel.kim@ipotekabank.uz';
const alias1 = '998920000000';
const alias2 = '998920000001';
const alias3 = '998920000002';
const pan1 = '9442000100001000';
const pan2 = '9442000100001100';
const pan3 = '9442000100001200';
const guid1 = "V200000000000000001";
const guid2 = "V200000000000000002";
const guid3 = "V200000000000000003";

// CREATE Positive cases

const case1_1_data = {
    "alias": alias1,
    "aliasType": "01",
    "cardType": "Visa Other",
    "country": "UZ",
    "guid": guid1,
    "issuerName": "JSCMB Ipoteka-Bank",
    "recipientFirstName": "Pavel",
    "recipientLastName": "K.",
    "recipientPrimaryAccountNumber": pan1,
    expiryDate: '2025-10',
    consentDateTime: getCurrentDate(), // UTC Format: YYYY-MM-DD hh:mm:ss
};
const res1_1 = await requestVisa(createUrl, case1_1_data);
addToLog(res1_1, 'case 1.1');

const case1_2_data = {
    "alias": alias2,
    "aliasType": "01",
    "cardType": "Visa Other",
    "country": "UZ",
    "guid": guid2,
    "issuerName": "JSCMB Ipoteka-Bank",
    "recipientFirstName": "Pavel",
    "recipientLastName": "K.",
    "recipientPrimaryAccountNumber": pan2,
    consentDateTime: getCurrentDate(), // UTC Format: YYYY-MM-DD hh:mm:ss
    accountEmail: email,
    address1: 'Tashkent city',
    address2: 'Buyuk Ipak Yoli 111, 2',
    city: 'Tashkent',
    contactEmail: email,
    contactPhoneNumber: alias2,
    expiryDate: '2025-10',
    isDefault: 'false',
    paymentType: 'PAN',
    postalCode: '100001',
    recipientMiddleNameLocal: 'Aleksandrovich',
    recipientMiddleName: 'Aleksandrovich',
    recipientLastNameLocal: 'Kim',
    recipientFirstNameLocal: 'Pavel',
};
const res1_2 = await requestVisa(createUrl, case1_2_data);
addToLog(res1_2, 'case 1.2');

const case1_3_data = { ...case1_2_data, recipientPrimaryAccountNumber: pan3, guid: guid3 };
const res1_3 = await requestVisa(createUrl, case1_3_data);
addToLog(res1_3, 'case 1.3');

const case1_4_data = { ...case1_3_data, guid: guid4 };
const res1_4 = await requestVisa(createUrl, case1_4_data);
addToLog(res1_4, 'case 1.4');

// CREATE Negative cases

const case1_5_data = {
    "alias": alias3,
    "aliasType": "01",
    "cardType": "Visa Other",
    "guid": guid3,
    "issuerName": "JSCMB Ipoteka-Bank",
    "recipientFirstName": "Pavel",
    "recipientLastName": "K.",
    "recipientPrimaryAccountNumber": pan3,
    expiryDate: '2025-10',
    consentDateTime: getCurrentDate(), // UTC Format: YYYY-MM-DD hh:mm:ss
};;
const res1_5 = await requestVisa(createUrl, case1_5_data);
addToLog(res1_5, 'case 1.5');

const case1_6_data = { ...case1_5_data, alias: '+998912033247' }
const res1_6 = await requestVisa(createUrl, case1_6_data);
addToLog(res1_6, 'case 1.6');

const res1_7 = await requestVisa(createUrl, case1_1_data);
addToLog(res1_7, 'case 1.7');

const case1_8_data = { ...case1_5_data, recipientPrimaryAccountNumber: '4445550000000000' }
const res1_8 = await requestVisa(createUrl, case1_8_data);
addToLog(res1_8, 'case 1.8');

// const case1_9_data = { ...case1_5_data, recipientPrimaryAccountNumber: '4445550000000000' }
// const res1_9 = await requestVisa(createUrl, case1_9_data);
// addToLog(res1_9, 'case 1.9');

const case1_10_data = { ...case1_5_data, recipientPrimaryAccountNumber: '44455500000000000' }
const res1_10 = await requestVisa(createUrl, case1_10_data);
addToLog(res1_10, 'case 1.10');

// UPDATE Positive cases

// UPDATE Negative cases