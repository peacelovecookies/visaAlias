import getCurrentDate from "../utils/getCurrentDate.js";
import requestVisa from "../utils/requestVisa.js";
import { decryptPan } from "../utils/crypto.js";

// Create https://developer.visa.com/capabilities/visa_direct/reference#tag/Visa-Alias-Directory-API/operation/Create%20Alias_v1
export default async (req, res) => {
    const { body } = req;
    const recipientPrimaryAccountNumber = decryptPan(body.recipientPrimaryAccountNumber);
    // recipientPrimaryAccountNumber = ('9' + recipientPrimaryAccountNumber).slice(0, 15); // remove this sh*t in production!!!
    const createPayload = {
        consentDateTime: getCurrentDate(), // UTC Format: YYYY-MM-DD hh:mm:ss
        aliasType: '01',
        ...body,
        recipientPrimaryAccountNumber,
    }
    console.log('payload: ', createPayload);

    const { decryptedPayload: createData, status: createStatus } = await requestVisa('/visaaliasdirectory/v1/manage/createalias', createPayload);
    return res.status(createStatus).send(createData);
};
