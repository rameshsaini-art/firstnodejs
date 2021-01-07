const contactExpress = require('express');

const contactRouter = contactExpress.Router();


contactRouter.get('/',(req, res, next) => {
   res.render('contact', { title: 'Contact Page' });
})

module.exports = contactRouter;

