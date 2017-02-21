function login() {
    //每个模块都必须存在一个通用名字的渲染页面方法
    this.render = function (req, res) {
        renderView(res, { name: '传递名字' });
    }
    this.send = function (req, res) {
        res.send({ name: 'wilson' });
    }
}
module.exports = login;