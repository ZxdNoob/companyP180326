//用对象字面量方式存储获取元素的方法
var $ = {
    name: "获取元素",
    byClassName: function(className) {
        return document.getElementsByClassName(className);
    }
};

//点击“查看案例”按钮展示案例详情

var showCaseBtn = $.byClassName("open_case_btn"); //获取"查看案例"按钮
var aCase = $.byClassName("explan_details"); //获取案例容器

//遍历元素
for (var i = 0, len = showCaseBtn.length; i < len; i++) {
    showCaseBtn[i].index = i; //设置索引值
    showCaseBtn[i].onclick = function() {
        aCase[this.index].style.display = "block"; //相应的案例容器显示出来
    };

    //当鼠标移入案例容器内时，案例容器保持显示状态
    aCase[i].onmouseover = function() {
        this.style.display = "block";
    };

    //当鼠标移出案例容器内时，案例容器隐藏
    aCase[i].onmouseout = function() {
        this.style.display = "none";
    };
}