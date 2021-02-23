const router = require('express').Router();
const contactCtrl = require('../controllers/contactCtrl');

router.get('/', contactCtrl.getContact);

router.post('/create', contactCtrl.createContact)

module.exports = router