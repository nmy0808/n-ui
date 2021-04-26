/* eslint-disable */
export const timeUtil = {
  getFirstDayMonth(data) {
    const { year, month } = getYearMonthDate(data);
    return new Date(year, month, 1);
  },
  // 获取这个月最后一天的时间对象
  getLastDayMonth(data) {
    const { year, month } = getYearMonthDate(data);
    return new Date(year, month + 1, 0);
  },
  // 日期时间的格式化
  dateFormat(fmt, date) {
    let ret;
    const opt = {
      'Y+': date.getFullYear().toString(), // 年
      'm+': (date.getMonth() + 1).toString(), // 月
      'd+': date.getDate().toString(), // 日
      'H+': date.getHours().toString(), // 时
      'M+': date.getMinutes().toString(), // 分
      'S+': date.getSeconds().toString(), // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (const k in opt) {
      ret = new RegExp(`(${k})`).exec(fmt);
      if (ret) {
        fmt = fmt.replace(
          ret[1],
          ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, '0'),
        );
      }
    }
    return fmt;
  },
  // 获取年月日
  getYearMonthDate,
};
function getYearMonthDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return { year, month, day };
}
