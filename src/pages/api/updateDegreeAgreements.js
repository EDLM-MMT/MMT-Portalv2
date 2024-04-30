
export default function handler(req, res) {

    const fs = require('fs')
    fs.writeFile('C:/Users/schittlur/Documents/GitHub/elrr-jst-portal/src/data/service_member/degreeAgreements.json', JSON.stringify(req.body), (err) => {
        if (err) console.log('Error writing file:', err);
    })
    // return res.status(200);

}
