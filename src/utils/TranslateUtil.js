/* eslint-disable */
export class TranslateUtil {
  constructor(el) {
    this.el = el;
    this.x = 0, 
    this.y = 0;
    this.initTranslate();
  }
  initTranslate() {
    this.el.style.transform = `translate3d(0,0,0)`;
  }
  getTranslate(key = null) {
    let translate;
    this.el.style.transform.replace(/(-?\d+(?:\.\d+)?)px\,\s(-?\d+(?:\.\d+)?)px\,\s(-?\d+(?:\.\d+)?)px/g, (...[, $1, $2]) => {
      const x = Number($1);
      const y = Number($2);
      translate = { x, y };
      this.x = x;
      this.y = y;
    })
    if (key !== 'x' && key !== 'y' && key !== null && key !== undefined) {
      throw new Error(` getTranslate() 方法传入的参数必须是'x','y', 或者不填 `)
    }
    return key ? translate[key] : translate;
  }
  setTranslate(x, y) {
    this.x = x;
    this.y = y || this.y;
    this.el.style.transform = `translate3d(${this.x}px,${this.y}px,0)`;
  }
  setTranslateX(x) {
    this.x = x;
    this.el.style.transform = `translate3d(${this.x}px,${this.y}px,0)`;
  }
  setTranslateY(y) {
    this.y = y;
    this.el.style.transform = `translate3d(${this.x}px,${this.y}px,0)`;
  }
}
