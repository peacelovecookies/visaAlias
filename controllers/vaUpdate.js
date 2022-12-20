import getCurrentDate from "../utils/getCurrentDate.js";
import requestVisa from "../utils/requestVisa.js";

// Update https://developer.visa.com/capabilities/visa_direct/reference#tag/Visa-Alias-Directory-API/operation/Update%20Alias_v1
export default async (req, res) => {
    const { body: { alias, guid } } = req;
    const updatePayload = {
        consentDateTime: getCurrentDate(), // UTC Format: YYYY-MM-DD hh:mm:ss
        aliasType: '01',
        alias,
        guid,
    };

    const { decryptedPayload: updateData, status: updateStatus } = await requestVisa('/visaaliasdirectory/v1/manage/updatealias', updatePayload);
    return res.status(updateStatus).send({ data: updateData });
};
