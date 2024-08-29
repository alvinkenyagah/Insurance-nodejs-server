const express = require("express");
const router = express.Router();
const Transaction = require("../models/transaction.model.js");
const {
  getTransactions,
  getTransaction,
  createTransaction,
  deleteTransaction,
  updateTransaction,
} = require("../controllers/transaction.controller.js");

router.get("/", getTransactions);
router.get("/:id", getTransaction);
router.post("/", createTransaction);
router.delete("/:id", deleteTransaction);
router.put("/:id", updateTransaction);

module.exports = router;
