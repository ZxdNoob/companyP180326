//用对象字面量方式存储获取元素的方法
var $ = {
    name: "获取元素",
    byClassName: function(className) {
        return document.getElementsByClassName(className);
    }
};


//封装显示与隐藏方法
var isShow = function(btn, showContainer, openMouseEvent, openHidden, bgColor1, bgColor2) {
    //遍历元素
    for (var i = 0, len = btn.length; i < len; i++) {
        btn[i].index = i; //设置索引值

        if (!openHidden) { //没有开启显示与隐藏切换时
            btn[i].onclick = function() {
                showContainer[this.index].style.display = "block"; //展开
            }
        } else {
            btn[i].onclick = function() {
                var ClassName = this
                if (this.innerHTML === "收起&gt;") {
                    this.innerHTML = "详细&gt;";
                    this.style.backgroundColor = bgColor1;
                    showContainer[this.index].style.display = "none"; //隐藏
                } else {
                    this.className = "dis-inb fr show";
                    this.innerHTML = "收起&gt;";
                    this.style.backgroundColor = bgColor2;
                    showContainer[this.index].style.display = "block"; //显示
                }
            }
        }

        //鼠标移入和鼠标移开事件处理
        if (openMouseEvent) {

            //当鼠标移入容器内时，容器保持显示状态
            showContainer[i].onmouseover = function() {
                this.style.display = "block";
            }

            //当鼠标移出容器内时，容器隐藏
            showContainer[i].onmouseout = function() {
                this.style.display = "none";
            }
        }
    }

};

//封装视情况改变“收起/详细”按钮的高度，让它的背景与展示内容容器的背景相连的方法
var changeTargetAHeight = function(targetH) {
    //遍历展示内容的标题标签
    for (var i = 0, hLen = targetH.length; i < hLen; i++) {
        //找出长度大于19的标题
        if (targetH[i].innerText.length > 19) {
            var hHeight = targetH[i].offsetHeight; //获取标题高度
            var targetA = tenetH[i].nextElementSibling || tenetH[i].nextSibling;
            targetA.style.height = hHeight + "px"; //目标a标签的高设置为标题的高，达到预期目的
        }
    }
};


//点击“查看案例”按钮展示案例详情

var showCaseBtn = $.byClassName("open_case_btn"); //获取"查看案例"按钮
var aCase = $.byClassName("explan_details"); //获取案例容器
isShow(showCaseBtn, aCase, true, false);

//数据安全十大原则“收起”和“详细”的切换

var showTenetBtn = $.byClassName("show"); //获取"收起"或“详细”按钮
var aTenet = $.byClassName("tenet_det"); //获取十大原则各条内容容器
isShow(showTenetBtn, aTenet, false, true, "white", "#f1fcff");

//数据安全十大原则“收起”和“详细”高度控制
var tenetH = $.byClassName("xk-tenet-tit"); //获取数据安全各大原则展示内容的标题标签
changeTargetAHeight(tenetH);