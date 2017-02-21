function error() {
    //每个模块都必须存在一个通用名字的渲染页面方法
    this.render = function (req, res) {
        // res.redirect('../../404/404.html');
        renderView(res, { msg: '404找不到页面了' });
    }
}
module.exports = error;