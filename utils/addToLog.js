import fs from 'fs';

import getCurrentDate from './getCurrentDate.js';

export default ({ decryptedPayload, status, xci }, caseNum) => {
    const stream = fs.createWriteStream("../testResult/result.txt", { flags:'a' });
    const curDate = getCurrentDate();
    stream.write(`${curDate} ${caseNum} - ${status} ${xci} \n${decryptedPayload}\n`);
    stream.end();
};
