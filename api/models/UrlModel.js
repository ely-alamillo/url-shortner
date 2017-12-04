const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const sequence = 10000;

const counterSchema = Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: sequence }
});

const urlSchema = new Schema({
  _id: { type: String },
  long_url: { type: String },
  created_at: { type: Date }
});

// hook checks id url_count is initaliazed if not it intializes it
urlSchema.pre('validate', function(next) {

  Counter.findOne({ _id: 'url_count' }, function(err, counter) {
    if (err || !counter) {
      initCounter();
    }
    next();
  });
});

// increments the counter for each new entry
urlSchema.pre('save', function(next) {
  const doc = this;
  // increments the current counter +1 and sets it to be _id of new entry
  Counter.findByIdAndUpdate({ _id: 'url_count' }, { $inc: { seq: 1 } }, { new: true }, function(err, counter) {
    if (err) return next(err);
    doc.created_at = new Date();
    doc._id = counter.seq - 1;
    next();
  });
});

const initCounter = () => {
  const startCount = new Counter({ _id: 'url_count', seq: sequence });
  // eslint-disable-next-line no-console
  startCount.save(err => console.log(err));
};

const Counter = mongoose.model('counter', counterSchema);
const Url = mongoose.model('Url', urlSchema);

module.exports = Url;
