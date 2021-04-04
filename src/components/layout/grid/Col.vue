<template>
  <div class="col-container" :class="className" :style="styleObj">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    span: {
      type: [String, Number],
    },
    offset: {
      type: [String, Number],
    },
    xs: {
      type: [String, Number, Object],
    },
    sm: {
      type: [String, Number, Object],
    },
    md: {
      type: [String, Number, Object],
    },
    lg: {
      type: [String, Number, Object],
    },
    xl: {
      type: [String, Number, Object],
    },
    xxl: {
      type: [String, Number, Object],
    },
  },
  data() {
    return {
      gutter: 0,
    };
  },
  computed: {
    className() {
      const res = [];
      if (this.span) {
        res.push(`col-${this.span}`);
      }
      if (this.offset) {
        res.push(`offset-${this.offset}`);
      }
      res.push(
        ...this.parseClass('xs'),
        ...this.parseClass('sm'),
        ...this.parseClass('md'),
        ...this.parseClass('lg'),
        ...this.parseClass('xl'),
      );
      return res;
    },
    styleObj() {
      const res = {};
      if (this.gutter) {
        const size = this.gutter / 2;
        res.paddingLeft = `${size}px`;
        res.paddingRight = `${size}px`;
      }
      return res;
    },
  },
  methods: {
    parseClass(className) {
      const res = [];
      if (!this[className]) {
        return res;
      }
      let params = this[className];
      // 传过来的props的值可能不是Object, 所以先统一成Object格式
      if (typeof params === 'string' || typeof params === 'number') {
        params = { span: params };
      }
      // 处理obj即可
      const keys = Object.keys(params);
      keys.forEach((it) => {
        res.push(
          `${it === 'span' ? 'col' : 'offset'}-${className}-${params[it]}`,
        );
      });
      return res;
    },
  },
};
</script>

<style lang='scss' scoped>
.col-container {
  flex-shrink: 0;
  flex: 1;
  /*生成 col-1 至 col-24 */
  $prefix: col-;
  @for $n from 1 through 24 {
    &.#{$prefix}#{$n} {
      flex: 0;
      flex-basis: ($n / 24) * 100%;
    }
  }
  /**/
  $prefix: offset-;
  @for $n from 0 through 24 {
    &.#{$prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
  /*生成 xs */
  @media (min-width: 0px) {
    $prefix: col-xs-;
    @for $n from 1 through 24 {
      &.#{$prefix}#{$n} {
        flex: 0;
        flex-basis: ($n / 24) * 100%;
      }
    }
    $prefix: offset-xs-;
    @for $n from 0 through 24 {
      &.#{$prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  /*生成 sm */
  @media (min-width: 576px) {
    $prefix: col-sm-;
    @for $n from 1 through 24 {
      &.#{$prefix}#{$n} {
        flex: 0;
        flex-basis: ($n / 24) * 100%;
      }
    }
    $prefix: offset-sm-;
    @for $n from 0 through 24 {
      &.#{$prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  /*生成 md */
  @media (min-width: 768px) {
    $prefix: col-md-;
    @for $n from 1 through 24 {
      &.#{$prefix}#{$n} {
        flex: 0;
        flex-basis: ($n / 24) * 100%;
      }
    }
    $prefix: offset-md-;
    @for $n from 0 through 24 {
      &.#{$prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  /*生成 lg */
  @media (min-width: 992px) {
    $prefix: col-lg-;
    @for $n from 1 through 24 {
      &.#{$prefix}#{$n} {
        flex: 0;
        flex-basis: ($n / 24) * 100%;
      }
    }
    $prefix: offset-lg-;
    @for $n from 1 through 24 {
      &.#{$prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  /*生成 xl */
  @media (min-width: 1200px) {
    $prefix: col-xl-;
    @for $n from 1 through 24 {
      &.#{$prefix}#{$n} {
        flex: 0;
        flex-basis: ($n / 24) * 100%;
      }
    }
    $prefix: offset-xl-;
    @for $n from 1 through 24 {
      &.#{$prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
}
</style>
