import requestVisa from "../utils/requestVisa.js";

// Resolve V2 https://developer.visa.com/capabilities/visa_direct/reference#tag/Visa-Alias-Directory-API/operation/Resolve%20V2_v2%20-%20Latest
export default async (req, res) => {
    const { body: { alias } } = req;
    const resolvePayload = {
        alias,
        businessApplicationId: 'PP',
        accountLookUp: 'Y',
    };

    const { decryptedPayload: resolveData, status: resolveStatus } = await requestVisa('/visaaliasdirectory/v2/resolve', resolvePayload);
    return res.status(resolveStatus).send({ data: resolveData });
};
