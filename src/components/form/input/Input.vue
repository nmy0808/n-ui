<template>
  <div
    class="n-input"
    :class="{ error, success, prefix: prefix && type !== 'textarea' }"
  >
    <input
      v-if="type !== 'textarea'"
      data-test="input"
      :type="type"
      :value="value"
      :disabled="disabled"
      :placeholder="placeholder"
      @change="handleValueChange"
      @input="handleValueInput"
      @keyup.enter="handleValueEnter"
      @focus="handleValueFocus"
      @blur="handleValueBlur"
    />
    <textarea
      v-if="type == 'textarea'"
      data-test="input"
      :type="type"
      :value="value"
      :disabled="disabled"
      :placeholder="placeholder"
      @change="handleValueChange"
      @input="handleValueInput"
      @keyup.enter="handleValueEnter"
      @focus="handleValueFocus"
      @blur="handleValueBlur"
    >
    </textarea>
    <div class="icon-box" data-test="icon" v-if="prefix && type !== 'textarea'">
      <NIcon :icon="prefix" />
    </div>
    <div class="words" v-if="error || success">
      <NIcon :icon="iconClass" />
      <span data-test="span">{{ error || success }}</span>
    </div>
  </div>
</template>

<script>
import NIcon from '../../basic/icon/Icon.vue';

export default {
  name: 'NInput',
  components: { NIcon },
  props: {
    value: {
      type: String,
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
    },
    prefix: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: [Boolean, String],
      default: false,
    },
    success: {
      type: [Boolean, String],
      default: false,
    },
  },
  computed: {
    iconClass() {
      let res = false;
      if (this.error) {
        res = 'i-error';
      } else if (this.success) {
        res = 'i-success';
      }
      return res;
    },
    prefixRes() {
      return this.prefix;
    },
  },
  methods: {
    handleValueChange(e) {
      this.$emit('change', e.target.value);
    },
    handleValueInput(e) {
      this.$emit('input', e.target.value);
    },
    handleValueEnter(e) {
      this.$emit('enter', e.target.value);
    },
    handleValueFocus(e) {
      this.$emit('focus', e);
    },
    handleValueBlur(e) {
      this.$emit('blur', e);
    },
  },
};
</script>

<style lang='scss' scoped>
@import '../../../styles/var.scss';
$input-height: 32px;
.n-input {
  font-size: 14px;
  width: 100%;
  min-height: 4em;
  position: relative;
  color: $words;
  .icon-box {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 28px;
    height: $input-height + 2px;
    font-size: 1.3em;
    margin-left: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
    .n-icon{
      transform: translateY(0.15em);
    }
  }
  textarea {
    padding: 0.5em 0.5em;
    resize: none;
    height: 5em;
    color: inherit;
    font-size: inherit;
  }
  input,
  textarea {
    width: 100%;
    margin-bottom: 0.3em;
    border: 1px solid $gray;
    border-radius: $base-radius;
    min-height: $input-height;
    font-size: inherit;
    font-weight: normal;
    font-family: '微软雅黑';
    padding-left: 0.5em;
    &:focus,
    &:hover {
      outline: none;
      border-color: $primary;
    }
    &[disabled] {
      cursor: not-allowed;
      background: #f4f6f9;
      border-color: $gray;
      &::placeholder {
        color: rgb(206, 206, 206);
      }
    }
  }
  .words {
    display: block;
    align-items: center;
    font-size: 12px;
    .n-icon {
      margin-right: 0.2em;
      position: relative;
      top: -0.1em;
    }
  }
  &.prefix {
    input,
    textarea {
      text-indent: 28px;
    }
  }
  &.error {
    color: $danger;
    input,
    textarea {
      border-color: $danger;
    }
  }
  &.success {
    color: $success;
    input,
    textarea {
      border-color: $success;
    }
  }
}
</style>
