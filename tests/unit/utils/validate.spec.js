/* eslint-disable */
import { Validator } from '@/utils';

describe('validate', () => {
  it('required必填-空', () => {
    const validator = new Validator();
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
    expect(validator.validate(date, rules).email.required).toBeTruthy();
  });
  it('required必填-有值', () => {
    const validator = new Validator();
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
    expect(validator.validate(date, rules).email).toBeUndefined();
  });
  it('当pattern是字符串', () => {
    const validator = new Validator();
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
    expect(validator.validate(date, rules).email.pattern).toBeTruthy();
  });
  it('当pattern是正则', () => {
    const validator = new Validator();
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
    expect(validator.validate(date, rules).email.pattern).toBeTruthy();
  });
  it('minLength-最小数量', () => {
    const validator = new Validator();
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
    expect(validator.validate(date, rules).email.minLength).toBeTruthy();
  });
  it('测试如果不存在的检查器是否会报错', () => {
    const validator = new Validator();
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
      validator.validate(date, rules);
    };
    expect(fn).toThrowError();
  });
  it('用户自己添加检查器', () => {
    const validator = new Validator();
    const date = {
      email: '1a@qq.com',
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
    Validator.add('repeat', function (value, repeat) {
      const regRes = repeat.test(value);
      if (!regRes) {
        return '检测到没有两个相同的字符';
      }
    })
    expect(validator.validate(date, rules).email.repeat).toBe('检测到没有两个相同的字符');
  });
});