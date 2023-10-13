const mongoose = require('mongoose')

const dbConnect = () => {
    mongoose.connect('mongodb://0.0.0.0:27017/reactNote', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log('DB connected'))
        .catch(err => console.log(err))
}

module.exports = dbConnect