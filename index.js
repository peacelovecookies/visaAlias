import requestASBT from "./controllers/requestASBT.js";
import requestVisa from "./controllers/requestVisa.js";
import getVisaCards from "./utils/getVisaCards.js";
import getCurrentDate from "./utils/getCurrentDate.js";
import { decryptPan } from "./utils/crypto.js";

const init = async (userPhone) => {
    // const { data: clientInfoData, status: clientInfoStatus} = await requestASBT('/intgr/clientph/validate-user', { username: userPhone });
    // if (clientInfoStatus !== 200 || clientInfoData.code !== 0) {
    //     // error handler
    //     return;
    // }
    // console.log('client info: ', clientInfoData);
    // const { clientId } = clientInfoData.object;
    // const { data: cardsData, status: cardsStatus } = await requestASBT('/intgr/bank/cards', { clientId });
    // if (cardsStatus !== 200 || cardsData.code !== 0) {
    //     // error handler
    //     return;
    // }

    // const { object: cardList } = cardsData;
    // const visaCards = getVisaCards(cardList);

    // Resolve V2 https://developer.visa.com/capabilities/visa_direct/reference#tag/Visa-Alias-Directory-API/operation/Resolve%20V2_v2%20-%20Latest
    // const resolvePayload = {
    //     businessApplicationId: 'PP',
    //     alias: userPhone,
    //     accountLookUp: 'Y',
    // };

    // const { decryptedPayload: resolveData, status: resolveStatus } = await requestVisa('/visaaliasdirectory/v2/resolve', resolvePayload);
    // if (resolveStatus === 200) {
    //     // error handler
    //     console.log('resolve response: ', resolveData);
    // } else if (resolveStatus === 204) {
    //     // change context:
    //     // aliasActive: false
    //     console.log('status 204: ', 'card not found');
    // } else {
    //     // error handler: see what kind of errors it may be
    //     console.log('resolve error: ', resolveStatus);
    // }

    // Create https://developer.visa.com/capabilities/visa_direct/reference#tag/Visa-Alias-Directory-API/operation/Create%20Alias_v1
    // const createPayload = {
    //     alias: userPhone,
    //     aliasType: '01',
    //     cardType: 'Visa Other', // !!! use param of selected card, this has to be changed
    //     consentDateTime: getCurrentDate(), // UTC Format: YYYY-MM-DD hh:mm:ss
    //     country: 'UZ', // !!! use param of selected card, this has to be changed
    //     guid: 'V1111111111111111', // !!! use param of selected card, this has to be changed
    //     issuerName: 'JSCMB Ipoteka-Bank', // !!! use param of selected card, this has to be changed
    //     recipientFirstName: 'Pavel', // !!! use param of selected card, this has to be changed
    //     recipientLastName: 'K.', // !!! use param of selected card, this has to be changed
    //     recipientPrimaryAccountNumber: '9242000000000000', // !!! use decrypted param of selected card, this has to be changed
    // }

    // const { decryptedPayload: createData, status: createStatus } = await requestVisa('/visaaliasdirectory/v1/manage/createalias', createPayload);
    // if (createStatus === 200) {
    //     // error handler
    //     console.log('create response: ', createData);
    // } else {
    //     // error handler: see what kind of errors it may be
    //     console.log('create error: ', createStatus, createData);
    // }

    // Update https://sandbox.api.visa.com/visaaliasdirectory/v1/manage/updatealias
    // const updatePayload = {
    //     guid: 'v924215002510935902',
    //     consentDateTime: getCurrentDate(), // UTC Format: YYYY-MM-DD hh:mm:ss
    //     alias: userPhone,
    //     aliasType: '01',
    // };

    // const { decryptedPayload: updateData, status: updateStatus } = await requestVisa('/visaaliasdirectory/v1/manage/updatealias', updatePayload);
    // if (updateStatus === 200) {
    //     // error handler
    //     console.log('update response: ', updateData);
    // } else {
    //     // error handler: see what kind of errors it may be
    //     console.log('update error: ', updateStatus, updateData);
    // }

    // Delete https://sandbox.api.visa.com/visaaliasdirectory/v1/manage/deletealias
    // const deletePayload = {
    //     guid: 'v924215002510935902', // !!! user guid from card
    //     alias: userPhone,
    //     // consentDateTime: getCurrentDate(), // UTC Format: YYYY-MM-DD hh:mm:ss
    // };

    // const { decryptedPayload: deleteData, status: deleteStatus } = await requestVisa('/visaaliasdirectory/v1/manage/deletealias', deletePayload);
    // if (deleteStatus === 200) {
    //     // error handler
    //     console.log('delete response: ', deleteData);
    // } else {
    //     // error handler: see what kind of errors it may be
    //     console.log('delete error: ', deleteStatus, deleteData);
    // }

    // Get https://sandbox.api.visa.com/visaaliasdirectory/v1/manage/getalias
    // const getPayload = {
    //     guid: 'v924215002510935902', // !!! user guid from card
    // };

    // const { decryptedPayload: getData, status: getStatus } = await requestVisa('/visaaliasdirectory/v1/manage/getalias', getPayload);
    // if (getStatus === 200) {
    //     // error handler
    //     console.log('get response: ', getData);
    // } else {
    //     // error handler: see what kind of errors it may be
    //     console.log('get error: ', getStatus, getData);
    // }

};

init('998999999999');