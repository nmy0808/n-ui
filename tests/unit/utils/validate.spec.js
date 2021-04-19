/* eslint-disable */
import { validate } from '@/utils';

describe('validate', () => {
  it('required必填-空', () => {
    const date = {
      email: '',
    };
    const rules = [
      {
        name: 'email',
        required: true,
        pattern: /^.+@.+$/g,
      },
    ];
    expect(validate(date, rules).email.required).toBeTruthy();
  });
  it('required必填-有值', () => {
    const date = {
      email: '13',
    };
    const rules = [
      {
        name: 'email',
        required: true,
        // pattern: '',
      },
    ];
    expect(validate(date, rules).email).toBeUndefined();
  });
  it('当pattern是字符串', () => {
    const date = {
      email: '@d.cm',
    };
    const rules = [
      {
        name: 'email',
        required: true,
        pattern: 'email',
      },
    ];
    expect(validate(date, rules).email.pattern).toBeTruthy();
  });
  it('当pattern是正则', () => {
    const date = {
      email: '@d.cm',
    };
    const rules = [
      {
        name: 'email',
        required: true,
        pattern: /^.+@.+$/g,
      },
    ];
    expect(validate(date, rules).email.pattern).toBeTruthy();
  });
  it('minLength-最小数量', () => {
    const date = {
      email: 'd',
    };
    const rules = [
      {
        name: 'email',
        required: true,
        pattern: /^.+@.+$/g,
        minLength: 2,
      },
    ];
    expect(validate(date, rules).email.minLength).toBeTruthy();
  });
  it('测试如果不存在的检查器是否会报错', () => {
    const date = {
      email: 'd',
    };
    const rules = [
      {
        name: 'email',
        required: true,
        pattern: /^.+@.+$/g,
        minLength: 2,
        test: 111,
      },
    ];
    const fn = () => {
      validate(date, rules);
    };
    expect(fn).toThrowError();
  });
  it('用户自己添加检查器', () => {
    const date = {
      email: 'd',
    };
    const rules = [
      {
        name: 'email',
        required: true,
        pattern: /^.+@.+$/g,
        minLength: 2,
        repeat: /(\d)\1/g,
      },
    ];
    validate.repeat = function (value, repeat) {
      const regRes = repeat.test(value);
      if (!regRes) {
        return '检测到没有两个相同的字符';
      }
    };
    expect(validate(date, rules).email.repeat).toMatch('检测到没有两个相同的字符');
  });
});