/// <reference path="../../lib/mui/js/mui.min.js" />
/// <reference path="../../lib/jquery/jquery.min.js" />
mui('#search-btn')[0].addEventListener('tap', searchBtnClick);

function searchBtnClick() {
    location.href = '../searchpage/searchpage.html';
}