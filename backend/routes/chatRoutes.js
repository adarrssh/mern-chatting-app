const express = require('express');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

// router.route('/').post(protect,accesChats);
// router.route('/').get(protect,fetchChats);
// router.route('/group').post(protect,createGroupChat);
// router.route('/groupremove').put(protect,removeFromGroup);
// router.route('/groupadd').put(protect,addToGroup);

module.exports = router