
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
router.post('/', authenticate, createTransaction);
router.put('/:id', authenticate, updateTransaction);
router.delete('/:id', authenticate, deleteTransaction);

// Protect admin routes
// router.post('/', authenticate, authorize(['user']), createTransaction);
// router.put('/:id', authenticate, authorize(['user']), updateTransaction);
// router.delete('/:id', authenticate, authorize(['user']), deleteTransaction);

module.exports = router;
