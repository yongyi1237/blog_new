// author by removef
// https://removeif.github.io/
$(function () { //获取处理友链数据

    // $.getJSON("../json_data/friend.json", function (data) {
        $.getJSON("https://adminyongyi.yongyi1239.top/pub/friends", function ({data: data}) {
         console.log(data);
         
         
        // var data0 = data[0];
        $('.links-content').html("");

        // 随机排序过滤失效的
        let notValid = data.filter((item, a, b) => item.valid == 0);
        data = data.filter((item, a, b) => item.valid != 0).sort(function (a, b) {
            return Math.random() > .5 ? -1 : 1;
        });
        $('.links-content').append("<div class='friend-title-item'><br>大佬们<br><br><hr></div>");
        $.each(data, function (i, e) {
            var html = "<div class=\"friend-card-item\">";
            if (e.image == undefined) {
                html += "    <img class=\"ava\" src=\"/img/links/nopic.jpg\" title=\"图片链接不可用，使用的默认图片\">";
            } else {
                html += "    <img class=\"ava\" src=\"" + e.image + "\">";
            }
            html +=
                "<div class='text-desc' title=\""+e.description+"\">    网址：<a href=\"" + e.url + "\" target=\"_blank\">" + e.name + "</a>" +
                "    <br>时间：" + formatBeijingTime(e.time) +
                "<br>简介：" + e.description + "</div>" +
                "    </div>";

            $('.links-content').append(html);
        });

        // 过期的
        if (notValid.length > 0) {
            $('.links-content').append("<div class='friend-title-item'><br>异常的大佬们<br><br><hr></div></div>");
            $.each(notValid, function (i, e) {
                var html = "<div class=\"friend-card-item\">";
                html += "    <img class=\"ava\" src=\"/img/links/nopic.jpg\" title=\"图片链接不可用，使用的默认图片\">";
                html +=
                    "<div class='text-desc' title=\""+e.desc+"\">    网址：<a href=\"" + e.url + "\" target=\"_blank\">" + e.name + "</a>" +
                    "    <br>访问时间：" + e.stopTime +
                    "<br>简介：" + e.desc + "</div>" +
                    "    </div>";

                $('.links-content').append(html);
            })
        }

        $('.links-content').append("</div>");
    })
});

// 转时间
function formatBeijingTime(timestamp) {
    // 创建 Date 对象（时间戳需转为毫秒）
    const date = new Date(timestamp * 1000);
    
    // 手动调整时区为 UTC+8（北京时间）
    // date.setTime(date.getTime() + 8 * 60 * 60 * 1000);
  
    // 提取日期时间组件
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 月份从 0 开始，需 +1
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
  
    // 拼接为指定格式（无前导零）
    return `${year}年${month}月${day}日`;
  }
