const app = require('./app')
const { PORT = 8080 } = process.env;

app.listen(8080, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Listening on ${PORT}...`)
    }
})
