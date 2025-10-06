const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const path = require('path');                       // 🟡 تمت إضافته
const livereload = require('livereload');           // 🟡 تمت إضافته
const connectLivereload = require("connect-livereload");

app.use(express.urlencoded({ extended: true }));
const Mydata = require("./model/myschema");
app.set('view engine', 'ejs');

// 🟡 إعداد live reload
const liveReloadServer = livereload.createServer(
  { exts: ["html", "css", "js", "ejs"] }  // مراقبة هذه الامتدادات فقط
);
liveReloadServer.watch(path.join(__dirname, "public"));
liveReloadServer.watch(path.join(__dirname, "views"));

// 🟡 middleware (يجب أن يكون قبل static)
app.use(connectLivereload());

// 🟡 ملفات static
app.use(express.static(path.join(__dirname, "public")));

// 🟡 التحديث التلقائي للمتصفح
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 2500);
});

// 🟢 الراوت الرئيسي
app.get('/', (req, res) => {
  Mydata.find()
    .then((result) => {
      res.render("home", { mytitle: "home page", arr: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

// 🟢 راوت تجريبي
app.get('/index.html', (req, res) => {
  res.send(`<h1>hello</h1>`);
});

// 🟢 الاتصال بقاعدة البيانات وتشغيل السيرفر
mongoose
  .connect('mongodb+srv://data_db:1234567890qwertyuiopasdfghjklzxcvbnmoaz@cluster0.xerkgy6.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    app.listen(port, () => {
      console.log(`🚀 Server running on http://localhost:${port}/`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// 🟢 استقبال POST
app.post('/', (req, res) => {
  console.log(req.body);

  const mydata = new Mydata(req.body);
  mydata.save()
    .then(() => {
      res.redirect('/index.html');
    })
    .catch((err) => {
      console.log(err);
    });
});
