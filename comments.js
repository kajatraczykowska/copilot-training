// Create web server
// 1. Require express module
const express = require('express');
const app = express();
// 2. Require body-parser module
const bodyParser = require('body-parser');
// 3. Require path module
const path = require('path');
// 4. Set the view engine
app.set('view engine', 'ejs');
// 5. Set the views directory
app.set('views', path.join(__dirname, 'views'));
// 6. Set the static directory
app.use(express.static(path.join(__dirname, 'public')));
// 7. Set the body-parser
app.use(bodyParser.urlencoded({ extended: false }));
// 8. Define the comments array
const comments = [];
// 9. Define the get route
app.get('/', (req, res) => {
    res.render('comments/index', { comments });
});
// 10. Define the post route
app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment });
    res.redirect('/');
});
// 11. Listen to the port
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
// 12. Export the app
module.exports = app;