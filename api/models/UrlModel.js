const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let startCount = true;

const counterSchema = Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 }
});
const counter = mongoose.model('counter', counterSchema);

const urlSchema = new Schema({
  _id: { type: String, index: true },
  long_url: { type: String },
  created_at: { type: Date }
});

urlSchema.pre('save', function(next) {
  const doc = this;
  // if (startCount) {
  //   initCounter();
  //   startCount = false;
  // }
  // increments the current counter +1 and sets it to be _id of new entry
  counter.findByIdAndUpdate({ _id: 'url_count' }, { $inc: { seq: 1 } }, { new: true }, function(err, counter) {
    if (err) return next(err);
    doc.created_at = new Date();
    doc._id = counter.seq;
    next();
  });
});

const initCounter = () => {
  const startCount = new counter({ _id: 'url_count', seq: 0 });
  startCount.save(err => console.log(err));
};

initCounter();

const Url = mongoose.model('Url', urlSchema);

module.exports = Url;
