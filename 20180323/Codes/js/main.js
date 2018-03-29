//用对象字面量方式存储获取元素的方法
var $ = {
    name: "获取元素",
    byClassName: function(className) {
        return document.getElementsByClassName(className);
    }
};


//封装显示与隐藏方法
var isShow = function(btn, showContainer, openMouseEvent, openHidden, bgColor1, bgColor2, isOne) {
    //遍历元素
    for (var i = 0, len = btn.length; i < len; i++) {
        btn[i].index = i; //设置索引值

        if (!openHidden) { //没有开启显示与隐藏切换时
            btn[i].onclick = function() {
                showContainer[this.index].style.display = "block"; //展开
            }
        } else {
            btn[i].onclick = function() {
                if (this.innerHTML === "收起&gt;") {
                    this.innerHTML = "详细&gt;";
                    this.style.backgroundColor = bgColor1;
                    showContainer[this.index].style.display = "none"; //隐藏
                    if (isOne) {
                        boxHeightChange(tntList, tntListHeight, tipThemeTwoH, tipThemeTwoH);
                    } else {
                        boxHeightChange(attList, attListHeight, tipThemeThree, tipThemeTH);
                    }
                } else {
                    this.className = "dis-inb fr show";
                    this.innerHTML = "收起&gt;";
                    this.style.backgroundColor = bgColor2;
                    showContainer[this.index].style.display = "block"; //显示
                    if (isOne) {
                        boxHeightChange(tntList, tntListHeight, tipThemeTwoH, tipThemeTwoH);
                    } else {
                        boxHeightChange(attList, attListHeight, tipThemeThree, tipThemeTH);
                    }
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


//封装给当前状态添加相应类名的方法
var setActive = function(obj, add) {
    var initClass = initClass;
    var nullStr = " ";
    obj.className = obj.className + nullStr + add;
    var aClass = obj.className.split(" "); //将类名放入数组中

    //数组去重

    var newClass = []; //一个新的临时数组
    //遍历当前数组 
    for (var i = 0; i < aClass.length; i++) {
        //如果当前数组的第i已经保存进了临时数组，那么跳过， 
        //否则把当前项push到临时数组里面 
        if (newClass.indexOf(aClass[i]) == -1) {
            newClass.push(aClass[i]);
        }
    }
    theClass = newClass.join(" ") + " ";
    obj.className = theClass;
};

//封装视情况改变“收起/详细”按钮的高度，让它的背景与展示内容容器的背景相连的方法
var changeTargetAHeight = function(targetH, theSize) {
    //遍历展示内容的标题标签
    for (var i = 0, hLen = targetH.length; i < hLen; i++) {
        //找出长度大于预设长度的标题
        if (targetH[i].innerText.length > theSize) {
            var hHeight = targetH[i].offsetHeight; //获取标题高度
            var targetA = targetH[i].nextElementSibling || tenetH[i].nextSibling;
            targetA.style.height = hHeight + "px"; //目标a标签的高设置为标题的高，达到预期目的
        }
    }
};

//父容器随子容器高度变化而变化的方法
var boxHeightChange = function(childBox, childMaxHeight, parentBox, parentMaxHeight) {
    var cMH = childMaxHeight; //获取子容器高度最大值
    var pMH = parentMaxHeight; //获取父容器高度最大值
    var newHeight = childBox.offsetHeight; //获取子容器新高度
    var defrenceVal = childMaxHeight - newHeight; //高度差值
    parentBox.style.height = (pMH - defrenceVal) + "px"; //父容器新高度等于父容器最大高度减去子容器高度差值
};

//声明回到顶部函数
var backTop = function() {
    var top = document.body.scrollTop || document.documentElement.scrollTop; //获取滚动条距离,后者是为了兼容IE
    scrollBy(0, -top); //让滚动条距离为0，实现回到顶部
};

//点击“查看案例”按钮展示案例详情

var showCaseBtn = $.byClassName("open_case_btn"); //获取"查看案例"按钮
var aCase = $.byClassName("explan_details"); //获取案例容器
isShow(showCaseBtn, aCase, true, false, false);

//数据安全十大原则“收起”和“详细”的切换

var showTenetBtn = $.byClassName("show"); //获取"收起"或“详细”按钮
var aTenet = $.byClassName("tenet_det"); //获取十大原则各条内容容器
isShow(showTenetBtn, aTenet, false, true, "rgba(1,1,1,0)", "#f1fcff", true);

//特别提醒“收起”和“详细”的切换

var showAttBtn = $.byClassName("att_show"); //获取"收起"或“详细”按钮
var aAtt = $.byClassName("att_det"); //获取特别提醒各条内容容器
isShow(showAttBtn, aAtt, false, true, "rgba(1,1,1,0)", "#fff", false);

//数据安全十大原则“收起”和“详细”高度控制
var tenetH = $.byClassName("xk-tenet-tit"); //获取数据安全各大原则展示内容的标题标签
changeTargetAHeight(tenetH, 19, false);

//特别提醒“收起”和“详细”高度控制
var attH = $.byClassName("xk-att-tit"); //获取特别提醒展示内容的标题标签
changeTargetAHeight(attH, 36, true);

//回到顶部
var backTopBtn = $.byClassName("back_top")[0];
backTopBtn.onclick = backTop;

// //给当前点击过的侧边导航条添加当前状态的样式
// var aNavBtn = $.byClassName("xk_nav_link");
// for (var i = 0, bLen = aNavBtn.length; i < bLen; i++) {
//     aNavBtn[i].onclick = function() {
//         setActive(this, "active");
//     };
// }
var tntList = $.byClassName("xk-tenet-list")[0];
var tntListHeight = tntList.offsetHeight;
var tipThemeTwo = $.byClassName("tip_theme_2")[0];
var tipThemeTwoH = tipThemeTwo.offsetHeight;

var attList = $.byClassName("att_list")[0];
var attListHeight = attList.offsetHeight;
var tipThemeThree = $.byClassName("tip_theme_3")[0];
var tipThemeTH = tipThemeThree.offsetHeight;