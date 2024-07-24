var { Router } = require('express');
var router = Router();
var con = require('../controller/Controller');


router.post('/insert', con.insert_data);
router.get('/select', con.select_data);
router.get('/select/:id', con.select_data_ByID);
router.post('/update/:id', con.update_data);
router.get('/delete/:id', con.delete_data);

module.exports = router;