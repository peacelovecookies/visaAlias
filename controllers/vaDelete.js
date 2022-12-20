import getCurrentDate from "../utils/getCurrentDate.js";
import requestVisa from "../utils/requestVisa.js";

// Delete https://developer.visa.com/capabilities/visa_direct/reference#tag/Visa-Alias-Directory-API/operation/Delete%20Alias_v1
export default async (req, res) => {
    const { body: { guid, alias } } = req;
    const deletePayload = { guid, alias };

    const { decryptedPayload: deleteData, status: deleteStatus } = await requestVisa('/visaaliasdirectory/v1/manage/deletealias', deletePayload);
    return res.status(deleteStatus).send({ data: deleteData });
};
