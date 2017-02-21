var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer');

// 设定views变量，意为视图存放的目录
app.set('views', path.join(__dirname, 'views'));

// 设定view engine变量，意为网页模板引擎
//app.set('view engine', 'ejs');
app.set('view engine', 'html');
app.engine('.html', require('ejs').__express);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());

// 设定静态文件目录，比如本地文件
app.use(express.static(path.join(__dirname, 'public')));
//中间件(各个路由之前执行，如果不执行next就不执行路由了)
app.use('/', function (req, res, next) {
    next();
}); 
//路由处理
require('./routes/routes')(app);
//加载项目公用文件
let _commonMdl = require('./lib/common');
var common = _commonMdl();
app.listen(2000, function () {
    console.log('程序启动成功！');
});
