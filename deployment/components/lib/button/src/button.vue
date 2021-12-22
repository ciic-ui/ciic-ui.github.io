<template>
  <div>
    <popconfirm
      :confirm-button-text="confirmButtonText"
      :cancel-button-text="cancelButtonText"
      icon="el-icon-info"
      icon-color="red"
      v-if="type == 'danger'"
      :title="confirmTitle"
      v-bind="$attrs"
      v-on="$listeners"
    >
    ddd
      <button
        slot="reference"
        class="el-button"
        @click="handleClick"
        :disabled="buttonDisabled || loading"
        :autofocus="autofocus"
        :type="nativeType"
        :class="[
          type ? 'el-button--' + type : '',
          buttonSize ? 'el-button--' + buttonSize : '',
          {
            'is-disabled': buttonDisabled,
            'is-loading': loading,
            'is-plain': plain,
            'is-round': round,
            'is-circle': circle,
          },
        ]"
      >
        <i class="el-icon-loading" v-if="loading"></i>
        <i :class="icon" v-if="icon && !loading"></i>
        <span v-if="$slots.default"><slot></slot></span>
      </button>
    </popconfirm>
    <button
      v-else
      class="el-button"
      @click="handleClick"
      :disabled="buttonDisabled || loading"
      :autofocus="autofocus"
      :type="nativeType"
      :class="[
        type ? 'el-button--' + type : '',
        buttonSize ? 'el-button--' + buttonSize : '',
        {
          'is-disabled': buttonDisabled,
          'is-loading': loading,
          'is-plain': plain,
          'is-round': round,
          'is-circle': circle,
        },
      ]"
    >
      <i class="el-icon-loading" v-if="loading"></i>
      <i :class="icon" v-if="icon && !loading"></i>
      <span v-if="$slots.default"><slot></slot></span>
    </button>
  </div>
</template>
<script>
import popconfirm from "@ciic-ui/lib/popconfirm";
export default {
  name: "ElButton",
  components: {
    popconfirm,
  },
  inject: {
    elForm: {
      default: "",
    },
    elFormItem: {
      default: "",
    },
  },

  props: {
    /**
     * 新增删除类型 全局添加提示
     */
    type: {
      type: String,
      default: "default",
    },
    confirmButtonText: {
      type: String,
      default: "确认",
    },
    cancelButtonText: {
      type: String,
      default: "取消",
    },
    confirmTitle: {
      type: String,
      default: "确实要删除当前数据吗？",
    },
    size: String,
    icon: {
      type: String,
      default: "",
    },
    nativeType: {
      type: String,
      default: "button",
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
  },

  computed: {
    _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    buttonSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
    buttonDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    },
  },

  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    },
  },
};
</script>
