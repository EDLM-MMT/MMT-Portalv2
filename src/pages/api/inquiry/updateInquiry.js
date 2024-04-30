
export default function handler(req, res) {

    const fs = require('fs')
    fs.writeFile('C:/Users/lreyesmadrid/Documents/ELRR/elrr-jst-portal/src/data/service_member/inquiries.json', JSON.stringify(req.body), (err) => {
        if (err) console.log('Error writing file:', err);
    })
    // return res.status(200);

}
