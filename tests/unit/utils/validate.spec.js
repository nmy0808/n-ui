import { validate } from '@/utils';

describe('validate', () => {
  it('required必填-空', () => {
    const date = {
      email: '',
    };
    const rules = [
      {
        key: 'email',
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
        key: 'email',
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
        key: 'email',
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
        key: 'email',
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
        key: 'email',
        required: true,
        pattern: /^.+@.+$/g,
        minLength: 2,
      },
    ];
    expect(validate(date, rules).email.minLength).toBeTruthy();
  });
});