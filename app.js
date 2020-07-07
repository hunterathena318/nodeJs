const express = require('express');
const app = express();
// const port = process.env.PORT || port;
// const www = process.env.WWW || './';
// app.use(express.static(www));
// console.log(`serving ${www}`);
// app.get('*', (req, res) => {
//     res.sendFile(`index.html`, { root: www });
// });
console.log(' Restart server ... ')
app.get('/',( req, res) => {
    res.send('Welcome to the first project pm2 ')
    console.log("Runing .....")
})
// app.listen(port, () => console.log(`listening on http://localhost:${port}`));
app.listen(6900)
