const Koa = require('koa');
const koaBody = require('koa-body');

const app = new Koa();

// Set up body parsing middleware
app.use(koaBody());

// Require the Router we defined in books.js
let books = require('./books.js');

// Use the Router on the sub route /books
app.use(books.routes());

app.listen(3000);
