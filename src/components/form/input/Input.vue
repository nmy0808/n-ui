<template>
  <div
    class="input-container"
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
import NIcon from '@/components/basic/icon/Icon.vue';

export default {
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
$input-height: 32px;
$font-size: 14px;
$border-radius: 4px;
$border-color: #d9d9d9;
$color: #333;
$error: #f22735;
$success: #44b275;
.input-container {
  font-size: 14px;
  width: 100%;
  min-height: 4em;
  position: relative;
  color: $color;
  .icon-box {
    position: absolute;
    left: 0;
    top: 0px;
    width: 28px;
    height: $input-height;
    font-size: 1.3em;
    margin-left: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
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
    border: 1px solid $border-color;
    border-radius: $border-radius;
    min-height: $input-height;
    font-size: inherit;
    font-weight: normal;
    font-family: '微软雅黑';
    padding-left: 0.5em;
    &:focus,
    &:hover {
      outline: none;
      border-color: #2f80ff;
    }
    &[disabled] {
      cursor: not-allowed;
      background: #f4f6f9;
      border-color: $border-color;
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
    color: $error;
    input,
    textarea {
      border-color: $error;
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
