import { config } from 'dotenv';

import getTypeByBin from '../utils/getTypeByBin.js';
import { encryptPan } from '../utils/crypto.js';
import requestASBT from '../utils/requestASBT.js';

config();
const { OUR_BANK_BINS } = process.env;

const filter = (cards) =>  {
    const bins = OUR_BANK_BINS.split(',');
    const result = []
    for (const bin of bins) {
        const newCards = cards
                            .filter(({ cardNumber }) => cardNumber.startsWith(bin))
                            .map(({ cardHolderName, cardNumber, rbsNumber: guid }) => {
                                const [lastName, recipientFirstName] = cardHolderName.split(' ');
                                const recipientLastName = `${lastName[0]}.`; // first letter of last name
                                const typeNum = parseInt(cardNumber[8]); // 9th number of pan
                                const cardType = getTypeByBin(bin, typeNum);
                                const recipientPrimaryAccountNumber = encryptPan(cardNumber);
                                return {
                                    country: 'UZ',
                                    issuerName: 'JSCMB Ipoteka-Bank',
                                    guid,
                                    recipientFirstName,
                                    recipientLastName,
                                    cardType,
                                    recipientPrimaryAccountNumber, // !!! this pan is encrypted !!!
                                };
                            });
        result.push(...newCards);
    }

    return result;
};

export default async (req, res) => {
    const { body: { userPhone } } = req;
    const { data: clientInfoData, status: clientInfoStatus} = await requestASBT('/intgr/clientph/validate-user', { username: userPhone });
    if (clientInfoStatus !== 200 || clientInfoData.code !== 0) {
        return res.status(clientInfoStatus).send({ data: clientInfoData });
    }
    const { clientId } = clientInfoData.object;
    const { data: cardsData, status: cardsStatus } = await requestASBT('/intgr/bank/cards', { clientId });
    if (cardsStatus !== 200 || cardsData.code !== 0) {
        return res.status(cardsStatus).send({ data: cardsData });
    }

    const { object: cardList } = cardsData;
    const visaCards = filter(cardList);
    
    if (visaCards.length === 0) return res.status(204);

    return res.status(200).send(visaCards);
};
