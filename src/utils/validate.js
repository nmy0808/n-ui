/**
 * 表单验证
 * @param {*} dates 数据
 * @param {*} rules 规则
 * @returns
 */
export function validate(dates, rules) {
  const error = {};
  const dateObj = dates;
  const ruleArr = rules;
  ruleArr.forEach((rule) => {
    const { key } = rule;
    const date = dateObj[key];
    const { pattern } = rule;
    const minLength = rule.minLength || 0;
    // 验证必填 (优先级最高)
    if (rule.required) {
      if (!date && date !== 0) {
        error[key] = { required: true };
        return;
      }
    }
    // 验证pattern
    if (typeof pattern === 'string') {
      if (pattern === 'email') {
        const reg = /.+@.+/g;
        const regRes = reg.test(date);
        if (!regRes) {
          ensureObject(error, key);
          error[key].pattern = '邮箱不合法';
        }
      }
    } else if (pattern && pattern.constructor.name === 'RegExp') {
      const regRes = pattern.test(date);
      if (!regRes) {
        ensureObject(error, key);
        error[key].pattern = '邮箱不合法';
      }
    }
    // 验证最小值
    if (minLength > 0) {
      if (date.length < minLength) {
        ensureObject(error, minLength);
        error[key].minLength = '该字符串长度不合法';
      }
    }
  });
  console.log(error);
  return error;
}
function ensureObject(obj, key) {
  const objCopy = obj;
  const keyCopy = key;
  if (!objCopy[keyCopy]) {
    objCopy[keyCopy] = {};
  }
}