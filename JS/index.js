let $music = $('.music');
//音乐播放板块
~ function () {
    var index = 2;
    $music.on('click', function (e) {
        var audio = this.getElementsByTagName('audio')[0];
        if (index === 2) {
            index = 1;
            this.style.backgroundImage = 'url("./img/musicoff.png")';
            audio.pause();
        } else {
            index = 2;
            this.style.backgroundImage = "url('./img/musicon.png')";
            audio.play();
        }
    })
}();

let loadingRender = (function () {
    let $loadingBox = $('.loadingBox'),
        $current = $loadingBox.find('.current');


    let imgData = ["img/icon.png", 'img/suo.jpg', 'img/musicon.png', 'img/musicoff.png', "img/zf_concatAddress.png", "img/zf_concatInfo.png", "img/zf_concatPhone.png", "img/zf_course.png", "img/zf_course1.png", "img/zf_course2.png", "img/zf_course3.png", "img/zf_course4.png", "img/zf_course5.png", "img/zf_course6.png", "img/zf_cube1.png", "img/zf_cube2.png", "img/zf_cube3.png", "img/zf_cube4.png", "img/zf_cube5.png", "img/zf_cube6.png", "img/zf_cubeBg.jpg", "img/zf_cubeTip.png", "img/zf_emploment.png", "img/zf_messageArrow1.png", "img/zf_messageArrow2.png", "img/zf_messageChat.png", "img/zf_messageKeyboard.png", "img/zf_messageLogo.png", "img/zf_messageStudent.png", "img/zf_outline.png", "img/zf_phoneBg.jpg", "img/zf_phoneDetail.png", "img/zf_phoneListen.png", "img/zf_phoneLogo.png", "img/zf_return.png", "img/zf_style1.jpg", "img/zf_style2.jpg", "img/zf_style3.jpg", "img/zf_styleTip1.png", "img/zf_styleTip2.png", "img/zf_teacher1.png", "img/zf_teacher2.png", "img/zf_teacher3.jpg", "img/zf_teacher4.png", "img/zf_teacher5.png", "img/zf_teacher6.png", "img/zf_teacherTip.png"]

    let n = 0,
        len = imgData.length;
    let run = function run(callback) {
        imgData.forEach((item) => {
            let tempImg = new Image;
            tempImg.onload = () => {
                tempImg = null;
                $current.css('width', (++n) / len * 100 + '%');
                //加载完成，执行回调函数（这个回调函数是让loading页面消失）
                if (n === len) {
                    clearTimeout(delayTimer)
                    callback && callback()
                }
            };
            tempImg.src = item;
        })
    }
    //maxDelay设置最长等待时间 
    let delayTimer = null;
    let maxDelay = function maxDelay(callback) {
        delayTimer = setTimeout(() => {
            if (n / len >= 0.9) {
                $current.css('width', '100%')
                callback && callback()
                return
            }
            alert('非常抱歉，当前网络不佳，请稍后重试');
            //window.location.href = 'http://www.qq.com'
            //此时我们不应该继续加载图片，而是让它关闭页面或者加载其他页面
        }, 10000)
    };
    //done 完成
    let done = function done() {
        //停留一秒钟在进入下一张
        let timer = setTimeout(() => {
            $loadingBox.remove()
        }, 1000)
    }
    return {
        init: function () {
            run(done);
            maxDelay(done)
        }
    }
})();
loadingRender.init();

let $introduction = $('.introduction'),
    $phoneBox = $('.phoneBox'),
    $markMove = $phoneBox.find('.markMove'),
    $right = $introduction.find('.right'),
    $left = $introduction.find('.left');

let introductionRender = (function () {

    return {
        init: function () {
        }
    }
})()
$markMove.on('click', function () {
    $markMove[0].style.backgroundPosition = '1.54rem -0.15rem';
    setTimeout(() => {
        $phoneBox.remove();
        $introduction.show();
    }, 1000)
})