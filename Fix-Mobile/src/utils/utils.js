let utils = {
  /**
   * 拼接文件路径
   * @param {*} fileId
   * @param {*} thumb 缩略图
   */
  filePathConvert(fileId, thumbWidth, thumbHeigth) {
    let path = `/service/rest/tk.File/${fileId}/view`;
    if (thumbWidth) {
      if (thumbHeigth) {
        path = `${path}?thumb=${thumbWidth}x${thumbHeigth}`;
      } else {
        path = `${path}?thumb=${thumbWidth}x${thumbWidth}`;
      }
    }
    return path;
  },
  /**
   * 拼接文件路径，返回路径的数组
   * @param {*} fileIdArr
   * @param {*} thumb 缩略图
   */
  filePathConvertArr(fileIdArr, thumbWidth, thumbHeigth) {
    let result = [];
    for (let fileId of fileIdArr) {
      result.push(this.filePathConvert(fileId, thumbWidth, thumbHeigth));
    }
    return result;
  },
  /**
   * 把地址栏参数作为属性加入调用此方法的对象上
   */
  getUrlParams() {
    let name, value;
    let str = location.href; //取得整个地址栏
    let num = str.indexOf('?');
    str = str.substr(num + 1); //str得到?之后的字符串
    let arr = str.split('&'); //得到&分割的参数，放入数组中
    for (let i = 0; i < arr.length; i++) {
      num = arr[i].indexOf('=');
      if (num > 0) {
        name = arr[i].substring(0, num);
        value = arr[i].substr(num + 1);
        this[name] = value;
      }
    }
  },
  /**
   * 把地址栏参数解析为Map对象并返回
   * 如果没有参数，则返回 null
   */
  getUrlParamsMap() {
    let url = location.href;
    if (url.indexOf('?') === -1) return null;
    let str = url.substr(url.indexOf('?') + 1);
    let strArr = str.split('&');
    let paramsMap = new Map();
    for (let valueArr of strArr) {
      let tempArr = valueArr.split('=');
      paramsMap.set(tempArr[0], tempArr[1]);
    }
    return paramsMap;
  },
  /**
   * @param {*} arrAll 二维数组结构的数据
   * @param {*} pageSize 每页的条数
   */
  getDataPageByArray_2(arrAll, pageSize) {
    let dataAll = [];
    let a = 0;
    for (let i = 0; i < arrAll.length; i++) {
      for (let j = 0; j < arrAll[i].length; j++) {
        dataAll[a] = arrAll[i][j];
        a++;
      }
    }
    return this.getDataPageByArray_1(dataAll, pageSize);
  },
  /**
   *
   * @param {*} dataAll 一维数组结构的数据
   * @param {*} pageSize
   */
  getDataPageByArray_1(dataAll, pageSize) {
    let arrAll = [];
    let pageNumber =
      dataAll.length % pageSize === 0
        ? dataAll.length / pageSize
        : Math.floor(dataAll.length / pageSize) + 1;
    if (dataAll.length < pageSize) {
      arrAll[0] = dataAll;
    } else {
      let curNumber = 0;
      for (let i = 0; i < dataAll.length; i++) {
        if ((i + 1) % pageSize === 0) {
          arrAll[curNumber] = dataAll.slice(
            pageSize * curNumber,
            pageSize * curNumber + pageSize
          );
          curNumber++;
        } else if (curNumber + 1 === pageNumber) {
          arrAll[curNumber] = dataAll.slice(pageSize * curNumber);
        }
      }
    }
    return arrAll;
  },
  /**秒数 转 天/小时/分钟/秒 ，返回包含 天/小时/分钟/秒 值的对象*/
  convertSeconds2DateObject(time) {
    if (time < 0) throw new Error('Time error');
    time = Math.floor(time);
    let [day, hour, minutes, seconds] = [null, null, null, null];
    day = Math.floor(time / (24 * 60 * 60));
    hour = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
    minutes = Math.floor((time % (60 * 60)) / 60);
    seconds = time % 60;
    return { day, hour, minutes, seconds };
  },
  /**秒数 转 天/小时/分钟/秒 ，不带时间单位 ，返回 格式化后的，包含 天/小时/分钟/秒 值的对象*/
  convertSeconds2DateNoUnit(time) {
    let timeObj = this.convertSeconds2DateObject(time);
    return this.timeFormat_2(
      timeObj.day,
      timeObj.hour,
      timeObj.minutes,
      timeObj.seconds
    );
  },
  /**秒数 转 天/小时/分钟/秒 ，返回 HH : mm : ss 格式的数据 */
  convertSeconds2DateBySplitColon(time) {
    let timeObj = this.convertSeconds2DateObject(time);
    timeObj = this.timeFormat_1(
      timeObj.day,
      timeObj.hour,
      timeObj.minutes,
      timeObj.seconds
    );
    let keyArr = Object.keys(timeObj);
    for (let key of keyArr) {
      if (Object.is(timeObj[key], null)) {
        if (Object.is(key, 'minutes')) {
          timeObj[key] = 0;
        } else {
          delete timeObj[key];
        }
      }
    }
    return Object.values(timeObj).join(':');
  },
  /**秒数 转 天/小时/分钟/秒 ，带时间单位 ，返回 格式化后的 时间字符串*/
  convertSeconds2DateHasUnit(time) {
    let timeObj = this.convertSeconds2DateObject(time);
    if (timeObj.day === 0) timeObj.day = null;
    timeObj = this.timeFormat_2(
      timeObj.day,
      timeObj.hour,
      timeObj.minutes,
      timeObj.seconds
    );
    return this.addTimeUnit(
      timeObj.day,
      timeObj.hour,
      timeObj.minutes,
      timeObj.seconds
    );
  },
  /**秒数 转 天/小时/分钟/秒 ，带时间单位 ，返回 格式化后的 时间字符串,最高位为0的不显示*/
  convertSeconds2DateHasUnitAndHighNoZero(time) {
    let timeObj = this.convertSeconds2DateObject(time);
    if (timeObj.day === 0) timeObj.day = null;
    if (timeObj.hour === 0) timeObj.hour = null;
    if (timeObj.minutes === 0) timeObj.minutes = null;
    timeObj = this.timeFormat_2(
      timeObj.day,
      timeObj.hour,
      timeObj.minutes,
      timeObj.seconds
    );
    return this.addTimeUnit(
      timeObj.day,
      timeObj.hour,
      timeObj.minutes,
      timeObj.seconds
    );
  },
  /**格式化时间，只保留最高位不为 0 的时间 */
  timeFormat_1(day, hour, minutes, seconds) {
    if (day === 0) day = null;
    if (hour === 0) hour = null;
    if (minutes === 0) minutes = null;
    if (day !== null && hour !== null) {
      if (hour === 0) {
        hour = `00`;
      } else if (hour < 10) {
        hour = `0${hour}`;
      }
    }
    if (hour !== null && minutes !== null) {
      if (minutes === 0) {
        minutes = `00`;
      } else if (minutes < 10) {
        minutes = `0${minutes}`;
      }
    }
    if (minutes !== null && seconds !== null) {
      if (seconds === 0) {
        seconds = `00`;
      } else if (seconds < 10) {
        seconds = `0${seconds}`;
      }
    }
    return { day, hour, minutes, seconds };
  },
  /**格式化时间，保留所有有值的时间，最高位为 天 但此方法也可通过控制参数为不为null来格式化时间*/
  timeFormat_2(day, hour, minutes, seconds) {
    if (day !== null) {
      if (hour === 0) {
        hour = `00`;
      } else if (hour < 10) {
        hour = `0${hour}`;
      }
    }
    if (hour !== null) {
      if (minutes === 0) {
        minutes = `00`;
      } else if (minutes < 10) {
        minutes = `0${minutes}`;
      }
    }
    if (seconds !== null) {
      if (seconds === 0) {
        seconds = `00`;
      } else if (seconds < 10) {
        seconds = `0${seconds}`;
      }
    }
    return { day, hour, minutes, seconds };
  },
  addTimeUnit(day, hour, minutes, seconds) {
    let timeStr = null;
    if (day !== null) timeStr = `${day}天${hour}小时${minutes}分${seconds}秒`;
    else if (hour !== null) timeStr = `${hour}小时${minutes}分${seconds}秒`;
    else if (minutes !== null) timeStr = `${minutes}分${seconds}秒`;
    else if (seconds !== null) timeStr = `${seconds}秒`;

    return timeStr;
  }
};

export default utils;
