const express = require('express');

const port = 3000 || process.env.PORT;
const app = express();

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');
app.set('views', 'dist');

app.use('/', express.static('dist', { index: false }));

/* Note: you can't add any backend routes here 
         if you want to host this on itch.io

         To phrase it another way - you can't make any changes to this file. There is no point.
*/
app.get('/*', (req, res) => {
   res.render('./index', {req, res});
});

app.listen(port, () => {
   console.log(`Listening on: http://localhost:${port}`);
});
