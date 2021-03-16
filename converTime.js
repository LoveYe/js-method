function getHms(secs, type, splitString) {
    //type 类型
    //splitString 自定义分隔符
    //secs 时间戳
    var time = new Date(secs);
    var year = addZero(time.getFullYear());
    var month = addZero(time.getMonth() + 1);
    var day = addZero(time.getDate());
    var hour = addZero(time.getHours());
    var min = addZero(time.getMinutes());
    var sec = addZero(time.getSeconds());

    if (type == undefined || splitString == undefined) {
        return year + '年' + month + '月' + day + '日' +
            hour + '时' + min + '分' + sec + '秒'
    }
    if (type == null || splitString == null) {
        return year + '年' + month + '月' + day + '日' +
            hour + '时' + min + '分' + sec + '秒'
    }
    if (splitString != '') {
        if (type == 'ym') {
            return year + splitString + month
        } else if (type == 'ymd') {
            return year + splitString + month + splitString + day
        } else if (type == 'ymdhms') {
            return year + splitString + month + splitString + day + ' ' +
                hour + ':' + min + ':' + sec
        } else if (type == 'dhms') {
            return day + ':' + hour + ':' + min + ':' + sec
        } else if (type == 'hms') {
            return hour + ':' + min + ':' + sec
        } else if (type == 'hm') {
            return hour + ':' + min
        } else {
            return year + splitString + month + splitString + day + ' ' +
                hour + ':' + min + ':' + sec
        }
    } else {
        if (type == 'ym') {
            return year + '年' + month + '月'
        } else if (type == 'ymd') {
            return year + '年' + month + '月' + day + '日'
        } else if (type == 'ymdhms') {
            return year + '年' + month + '月' + day + '日' +
                hour + '时' + min + '分' + sec + '秒'
        } else if (type == 'dhms') {
            return day + '日' + hour + '时' + min + '分' + sec + '秒'
        } else if (type == 'hms') {
            return hour + '时' + min + '分' + sec + '秒'
        } else if (type == 'hm') {
            return hour + '时' + min + '分'
        } else {
            return year + '年' + month + '月' + day + '日' +
                hour + '时' + min + '分' + sec + '秒'
        }

    }

}
function addZero(num) {
    return num >= 10 ? num : (`0${num}`);
}

export default getHms;