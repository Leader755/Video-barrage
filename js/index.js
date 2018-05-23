$(function () {
     $(".barrage_close").click(function(){
         $(".content div").remove();
     });
    init_barrage();
});

//将弹幕内容放进数组贮存起来
var arr=[];
var h=arr.push();
// 监听发送，按enter发送
document.onkeydown=function(event){
    var e = event || window.event;
    if(e && e.keyCode==13){ 
    //    console.log(11111);
        $(".send .s_btn").click();
    }                
};
//提交评论
$(".send .s_btn").click(function () {
    var text = $(".s_text").val();
    if (text == "") {
        alert('你的内容为空，请填写评论在再发送');
        return false;
    }
    var _lable = $("<div style='right:20px;top:0px;opacity:1;color:" + getColor() + ";'class='content_text'>" + text + "</div>");
    $(".content").append(_lable.show());
    init_barrage();
    $(".s_text").val("");
});
//初始化弹幕技术
function init_barrage() {
    var _top = 0;
    $(".content div").show().each(function () {
        var _left =$(".barrage").width();//浏器览最大宽度（也是浏览器的高度），作为定位left的值
        console.log(_left);
        var _height =$(".barrage").height();//视频窗口的最大高度
        console.log(_height);
        _top += 35;
        if (_top >= (_height - 150)) {
            _top = 0;
        }
        $(this).css({ left: _left, top: _top, color: getColor() });
        //定时弹出文字
        // var time = 10000;
        // if ($(this).index() % 2 == 0) {
        //     time = 15000;
        // }
        // $(this).animate({ left: "-" + _left + "px" }, time, function () {
        //     $(this).remove();
        // });
    });
}
//获取随机颜色
function getColor() {
    return '#' + (function (h) {
        return new Array(7 - h.length).join("0") + h
    })
    ((Math.random() * 0x1000000 << 0).toString(16))
}

var video=document.getElementById("myvideo");
var mute=document.getElementById("muted");
console.log(muted);
//设置视频播放速度
// video.playbackRate = 0.5;
//视频静音
video.muted = false;

mute.onclick=function(){
    if(video.muted){
                video.muted = false;   
                mute.innerText='';
                mute.innerText = '开启静音';
                // console.log(1111)
            }else{
                video.muted = true;   
                mute.innerText='';
                mute.innerText = '关闭静音';
                // console.log(2222)
            }
}



