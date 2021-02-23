const Contact = require('../models/contactModels');

const contactCtrl = {
    getContact: async (req, res) => {
        try {
            
            const contact = await Contact.find()

            res.json({ contact })

        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    createContact: async (req, res) => {
        try {
            
            const { name, email, message } = req.body;

            const newContact = new Contact({
                name, email, message
            })

            await newContact.save()

            res.json({ msg: 'Created' })

        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    }
}

module.exports = contactCtrl