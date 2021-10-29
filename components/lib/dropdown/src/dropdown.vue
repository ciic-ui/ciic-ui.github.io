<script>
  import Clickoutside from 'element-ui/src/utils/clickoutside';
  import Emitter from 'element-ui/src/mixins/emitter';
  import Migrating from 'element-ui/src/mixins/migrating';
  import CiicButton from 'element-ui/packages/button';
  import CiicButtonGroup from 'element-ui/packages/button-group';
  import { generateId } from 'element-ui/src/utils/util';

  export default {
    name: 'CiicDropdown',

    componentName: 'CiicDropdown',

    mixins: [Emitter, Migrating],

    directives: { Clickoutside },

    components: {
      CiicButton,
      CiicButtonGroup
    },

    provide() {
      return {
        dropdown: this
      };
    },

    props: {
      trigger: {
        type: String,
        default: 'hover'
      },
      type: String,
      size: {
        type: String,
        default: ''
      },
      splitButton: Boolean,
      hideOnClick: {
        type: Boolean,
        default: true
      },
      placement: {
        type: String,
        default: 'bottom-end'
      },
      visibleArrow: {
        default: true
      },
      showTimeout: {
        type: Number,
        default: 250
      },
      hideTimeout: {
        type: Number,
        default: 150
      },
      tabindex: {
        type: Number,
        default: 0
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        timeout: null,
        visible: false,
        triggerCiicm: null,
        menuItems: null,
        menuItemsArray: null,
        dropdownCiicm: null,
        focusing: false,
        listId: `dropdown-menu-${generateId()}`
      };
    },

    computed: {
      dropdownSize() {
        return this.size || (this.$ELEMENT || {}).size;
      }
    },

    mounted() {
      this.$on('menu-item-click', this.handleMenuItemClick);
    },

    watch: {
      visible(val) {
        this.broadcast('CiicDropdownMenu', 'visible', val);
        this.$emit('visible-change', val);
      },
      focusing(val) {
        const selfDefine = this.$el.querySelector('.el-dropdown-selfdefine');
        if (selfDefine) { // 自定义
          if (val) {
            selfDefine.className += ' focusing';
          } else {
            selfDefine.className = selfDefine.className.replace('focusing', '');
          }
        }
      }
    },

    methods: {
      getMigratingConfig() {
        return {
          props: {
            'menu-align': 'menu-align is renamed to placement.'
          }
        };
      },
      show() {
        if (this.disabled) return;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.visible = true;
        }, this.trigger === 'click' ? 0 : this.showTimeout);
      },
      hide() {
        if (this.disabled) return;
        this.removeTabindex();
        if (this.tabindex >= 0) {
          this.resetTabindex(this.triggerCiicm);
        }
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.visible = false;
        }, this.trigger === 'click' ? 0 : this.hideTimeout);
      },
      handleClick() {
        if (this.disabled) return;
        if (this.visible) {
          this.hide();
        } else {
          this.show();
        }
      },
      handleTriggerKeyDown(ev) {
        const keyCode = ev.keyCode;
        if ([38, 40].indexOf(keyCode) > -1) { // up/down
          this.removeTabindex();
          this.resetTabindex(this.menuItems[0]);
          this.menuItems[0].focus();
          ev.preventDefault();
          ev.stopPropagation();
        } else if (keyCode === 13) { // space enter选中
          this.handleClick();
        } else if ([9, 27].indexOf(keyCode) > -1) { // tab || esc
          this.hide();
        }
      },
      handleItemKeyDown(ev) {
        const keyCode = ev.keyCode;
        const target = ev.target;
        const currentIndex = this.menuItemsArray.indexOf(target);
        const max = this.menuItemsArray.length - 1;
        let nextIndex;
        if ([38, 40].indexOf(keyCode) > -1) { // up/down
          if (keyCode === 38) { // up
            nextIndex = currentIndex !== 0 ? currentIndex - 1 : 0;
          } else { // down
            nextIndex = currentIndex < max ? currentIndex + 1 : max;
          }
          this.removeTabindex();
          this.resetTabindex(this.menuItems[nextIndex]);
          this.menuItems[nextIndex].focus();
          ev.preventDefault();
          ev.stopPropagation();
        } else if (keyCode === 13) { // enter选中
          this.triggerCiicmFocus();
          target.click();
          if (this.hideOnClick) { // click关闭
            this.visible = false;
          }
        } else if ([9, 27].indexOf(keyCode) > -1) { // tab // esc
          this.hide();
          this.triggerCiicmFocus();
        }
      },
      resetTabindex(ele) { // 下次tab时组件聚焦元素
        this.removeTabindex();
        ele.setAttribute('tabindex', '0'); // 下次期望的聚焦元素
      },
      removeTabindex() {
        this.triggerCiicm.setAttribute('tabindex', '-1');
        this.menuItemsArray.forEach((item) => {
          item.setAttribute('tabindex', '-1');
        });
      },
      initAria() {
        this.dropdownCiicm.setAttribute('id', this.listId);
        this.triggerCiicm.setAttribute('aria-haspopup', 'list');
        this.triggerCiicm.setAttribute('aria-controls', this.listId);

        if (!this.splitButton) { // 自定义
          this.triggerCiicm.setAttribute('role', 'button');
          this.triggerCiicm.setAttribute('tabindex', this.tabindex);
          this.triggerCiicm.setAttribute('class', (this.triggerCiicm.getAttribute('class') || '') + ' el-dropdown-selfdefine'); // 控制
        }
      },
      initEvent() {
        let { trigger, show, hide, handleClick, splitButton, handleTriggerKeyDown, handleItemKeyDown } = this;
        this.triggerCiicm = splitButton
          ? this.$refs.trigger.$el
          : this.$slots.default[0].elm;

        let dropdownCiicm = this.dropdownCiicm;

        this.triggerCiicm.addEventListener('keydown', handleTriggerKeyDown); // triggerCiicm keydown
        dropdownCiicm.addEventListener('keydown', handleItemKeyDown, true); // item keydown
        // 控制自定义元素的样式
        if (!splitButton) {
          this.triggerCiicm.addEventListener('focus', () => {
            this.focusing = true;
          });
          this.triggerCiicm.addEventListener('blur', () => {
            this.focusing = false;
          });
          this.triggerCiicm.addEventListener('click', () => {
            this.focusing = false;
          });
        }
        if (trigger === 'hover') {
          this.triggerCiicm.addEventListener('mouseenter', show);
          this.triggerCiicm.addEventListener('mouseleave', hide);
          dropdownCiicm.addEventListener('mouseenter', show);
          dropdownCiicm.addEventListener('mouseleave', hide);
        } else if (trigger === 'click') {
          this.triggerCiicm.addEventListener('click', handleClick);
        }
      },
      handleMenuItemClick(command, instance) {
        if (this.hideOnClick) {
          this.visible = false;
        }
        this.$emit('command', command, instance);
      },
      triggerCiicmFocus() {
        this.triggerCiicm.focus && this.triggerCiicm.focus();
      },
      initDomOperation() {
        this.dropdownCiicm = this.popperCiicm;
        this.menuItems = this.dropdownCiicm.querySelectorAll("[tabindex='-1']");
        this.menuItemsArray = [].slice.call(this.menuItems);

        this.initEvent();
        this.initAria();
      }
    },

    render(h) {
      let { hide, splitButton, type, dropdownSize, disabled } = this;

      const handleMainButtonClick = (event) => {
        this.$emit('click', event);
        hide();
      };

      let triggerCiicm = null;
      if (splitButton) {
        triggerCiicm = <el-button-group>
          <el-button type={type} size={dropdownSize} nativeOn-click={handleMainButtonClick} disabled={disabled}>
            {this.$slots.default}
          </el-button>
          <el-button ref="trigger" type={type} size={dropdownSize} class="el-dropdown__caret-button" disabled={disabled}>
            <i class="el-dropdown__icon el-icon-arrow-down"></i>
          </el-button>
        </el-button-group>;
      } else {
        triggerCiicm = this.$slots.default;
        const vnodeData = triggerCiicm[0].data || {};
        let { attrs = {} } = vnodeData;
        if (disabled && !attrs.disabled) {
          attrs.disabled = true;
          vnodeData.attrs = attrs;
        }
      }
      const menuCiicm = disabled ? null : this.$slots.dropdown;

      return (
        <div class="el-dropdown" v-clickoutside={hide} aria-disabled={disabled}>
          {triggerCiicm}
          {menuCiicm}
        </div>
      );
    }
  };
</script>
