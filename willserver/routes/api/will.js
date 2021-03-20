const express = require('express');
const router = express.Router();
const WillTable = require('../../models/WillTable');

router.post('/', (req, res) => {
    const errors = 'hiFred';
    console.log('IamWill2',req);
    console.log('IamWill3',req.body);
    const willFields={};
    if (req.body.Karen) willFields.Karen = req.body.Karen;
    if (req.body.Myles) willFields.Myles = req.body.Myles;
    if (req.body.Matth) willFields.Matth = req.body.Matth;
    if (req.body.Eddie) willFields.Eddie = req.body.Eddie;
    if (req.body.Granite) willFields.Granite = req.body.Granite;
    if (req.body.Belmore) willFields.Belmore = req.body.Belmore;
    willFields.BelmoreSellOut=true;
    willFields.Commentary='fill this in';

    new WillTable(willFields).save().then(will => res.json(will));

});



module.exports = router;
