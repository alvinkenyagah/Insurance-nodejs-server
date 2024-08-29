const mongoose = require("mongoose");

const TransactionSchema = mongoose.Schema(
  {
  id: {
      type: Number,
      required: true,
  },
  client: {
      type: String,
      required: true,
  },
  policyno: {
      type: String,
      required: true,
  },
  registration: {
      type: String,
      required: true,
  },
  classification: {
      type: String,
      required: true,
  },
  start: {
      type: Date,
      required: true,
  },
  expire: {
      type: Date,
      required: true,
  },
  },
  {
    timestamps: true,
  }
);


const Transaction = mongoose.model("Product", TransactionSchema)

module.exports = Transaction


