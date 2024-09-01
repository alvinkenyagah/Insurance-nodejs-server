// const express = require("express");
// const router = express.Router();
// const Transaction = require("../models/transaction.model.js");
// const {
//   getTransactions,
//   getTransaction,
//   createTransaction,
//   deleteTransaction,
//   updateTransaction,
// } = require("../controllers/transaction.controller.js");

// router.get("/", getTransactions);
// router.get("/:id", getTransaction);
// router.post("/", createTransaction);
// router.delete("/:id", deleteTransaction);
// router.put("/:id", updateTransaction);

// module.exports = router;



const express = require('express');
const {
  getTransactions,
  getTransaction,
  createTransaction,
  updateTransaction,
  deleteTransaction,
} = require('../controllers/transaction.controller');
const { authenticate, authorize } = require('../middleware/auth.middleware');

const router = express.Router();

router.get('/', authenticate, getTransactions);
router.get('/:id', authenticate, getTransaction);

// Protect admin routes
router.post('/', authenticate, authorize(['admin']), createTransaction);
router.put('/:id', authenticate, authorize(['admin']), updateTransaction);
router.delete('/:id', authenticate, authorize(['admin']), deleteTransaction);

module.exports = router;
