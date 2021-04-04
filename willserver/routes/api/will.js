const express = require('express');
const router = express.Router();
const WillTable = require('../../models/WillTable');

router.post('/', (req, res) => {
    const errors = 'hiFredyu';
    console.log('IamWill2',req);
    console.log('IamWill3',req.body);
    const willFields={};
    if (req.body.Karen) willFields.Karen = req.body.Karen;
    if (req.body.Myles) willFields.Myles = req.body.Myles;
    if (req.body.Matth) willFields.Matth = req.body.Matth;
    if (req.body.Eddie) willFields.Eddie = req.body.Eddie;
    if (req.body.Granite) willFields.Granite = req.body.Granite;
    if (req.body.Belmore) willFields.Belmore = req.body.Belmore;
    if (req.body.comment) willFields.Commentary = req.body.comment;
    willFields.BelmoreSellOut=true;
   // willFields.Commentary='fill this in';

    new WillTable(willFields).save().then(will => res.json(will));

});

// @route   GET api/profile/all
// @desc    Get all profiles
// @access  Public
router.get('/all', (req, res) => {
    const errors = {};
    WillTable.find()
        .sort({ date: -1 })
        .then(wills => res.json(wills))
        .catch(err => res.status(404).json({ nopostsfound: 'No posts found' }));


});
//http://localhost:3001/api/will/hello
router.get('/hello', (req, res) => {
    res.send('Hello World!')
});






module.exports = router;
