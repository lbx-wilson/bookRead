module.exports = function (app) {
    //屏蔽浏览器发起的favicon.ico这个请求/^(?!\/favicon\.ico).*$/
    app.get(/^(?!\/favicon\.ico).*$/, function (req, res) {
        let url = req.originalUrl.substr(1);
        //默认登录模块
        url = url || 'login/login';
        //保存要渲染的页面地址
        res.viewMdl = url;
        //请求页面对应的后台文件
        let reqMdl = require('../server/' + url);
        let mdl = new reqMdl();
        //执行渲染页面的方法
        mdl.render(req, res);
    });
    app.post('/*', function (req, res) {
        let url = req.originalUrl;
        let parms = req.body;
        let server = require('../server' + url);
        if (server) {
            let obj = new server;
            obj[parms.func](req, res);
        }
        else {
            res.rend({ error: '1' });
        }
    });
};