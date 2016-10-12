var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Robot = new Schema ({
  title: String,
  description: String,
  updated_at: Date
});

mongoose.model('Robot', Robot);
mongoose.connect('mongodb://localhost/robots');
