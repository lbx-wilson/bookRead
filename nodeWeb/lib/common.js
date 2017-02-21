function common() {
    //公用渲染页面方法
    global.renderView = function (res, parms, fn) {
        res.render(res.viewMdl, parms, function (err, view) {
            if (err) {
                res.send('404');
            }
            else {
                if (fn) {
                    fn(view);
                    return;
                }
                res.send(view);
            }

        });
    }
}
module.exports = common;