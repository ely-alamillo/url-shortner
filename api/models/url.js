const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const counterSchema = Schema({
  _id: { type: String, required: true },
  seq: { type: String, default: 0 }
});

const urlSchema = new Schema({
  _id: { type: String, index: true },
  long_url: { type: String },
  created_at: { type: Date }
});

urlSchema.pre('save', function(next) {
  const doc = this;
  // increments the current counter +1 and sets it to be _id of new entry
  counter.findByIdAndUpdate({ _id: 'url_count' }, { $inc: { seq: 1 } }, function(err, counter) {
    if (err) return next(err);
    doc.created_at = new Date();
    doc._id = counter.seq;
    next();
  });
});

const counter = mongoose.model('counter', counterSchema);
const Url = mongoose.model('Url', urlSchema);

module.exports = Url;
