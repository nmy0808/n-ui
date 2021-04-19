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
    const value = dateObj[key];
    let { pattern } = rule;
    const minLength = rule.minLength || 0;
    // 验证必填 (优先级最高)
    if (rule.required) {
      if (!value && value !== 0) {
        error[key] = { required: '必填' };
        return;
      }
    }
    // 验证pattern
    if (pattern) {
      if (pattern === 'email') {
        pattern = /.+@.+/g;
      }
      const regRes = pattern.test(value);
      if (!regRes) {
        ensureObject(error, key);
        error[key].pattern = '不符合规则';
      }
    }

    // 验证最小值
    if (minLength > 0) {
      if (value.length < minLength) {
        ensureObject(error, minLength);
        error[key].minLength = '该字符串长度不合法';
      }
    }
  });
  return error;
}
function ensureObject(obj, key) {
  const objCopy = obj;
  const keyCopy = key;
  if (!objCopy[keyCopy]) {
    objCopy[keyCopy] = {};
  }
}