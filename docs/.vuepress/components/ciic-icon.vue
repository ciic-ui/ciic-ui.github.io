<template>
    <div class="ciic-icon" :class="[type]" :style="{color:color,'font-size':fontSize}" @click="onClick()"></div>
</template>

<script>
	/**
	 * 字体图标
	 * @props {String} type 图标类型
	 * @props {String} color 图标颜色
	 * @props {String,Number} size 图标大小，默认28
	 * @example <ciic-icon type="arrow-right" size="32" color="#999"></ciic-icon>
	 */	
    export default {
		name:'ciic-icon',
        props: {
            type: String,
            color: String,
			size: {
				type: [Number, String],
				default: 28
			}
        },
        computed: {
            fontSize() {
                return `${(this.size)}px`
            }
        },
        methods: {
            onClick() {
                this.$emit('click')
            }
        }
    }
</script>

<style lang="scss">
@import "./ciic-icon.scss";
</style>
