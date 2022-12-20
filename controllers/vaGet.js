import requestVisa from "../utils/requestVisa.js";

// Get https://developer.visa.com/capabilities/visa_direct/reference#tag/Visa-Alias-Directory-API/operation/Get%20Alias_v1
export default async (req, res) => {
    const { body: { guid } } = req;

    const getPayload = { guid };

    const { decryptedPayload: getData, status: getStatus } = await requestVisa('/visaaliasdirectory/v1/manage/getalias', getPayload);
    return res.status(getStatus).send({ data: getData });
};
