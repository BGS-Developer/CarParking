<template>
    <div @keyup.esc="close" ref="button" :class="['dropdown', {'opened': open}]">
        <div class="dropdown__button" @click="toggle()">
            <slot name="button"></slot>
        </div>

        <transition name="fade-fast">
            <div v-show="open" ref="content"
                class="dropdown__content"
                :class="[placement, placementY, fixed ? 'fixed' : 'absolute', contentClasses, `w-${widthContent}`, `min-w-${minWidthContent}`]"
                :style="style">

                <slot name="content"></slot>
            </div>
        </transition>
    </div>
</template>

<script>
    import eventBus from "@/components/ui/_eventBus"
    export default {
        props: {
            placement: {
                type: String,
                default: 'right'
            },
            placementY: {
                type: String,
                default: ''
            },
            contentClasses: {
                type: String
            },
            widthContent: {
                type: [String, Number],
                default: 'full'
            },
            minWidthContent: {
                type: [String, Number],
                default: '32'
            },
            disabled: Boolean,
            openContent: Boolean,
            fixed: Boolean,
        },

        data: () => ({
            open: false,
            pos: {
                y: 0,
                x: 0
            }
        }),

        methods: {
            setPositions() {
                const btnPos = this.$refs.button.getBoundingClientRect()
                this.pos.x = btnPos.left
            },
            toggle() {
                if(this.disabled) {
                    this.close()
                }
                else {
                    this.setPositions()
                    eventBus.$emit('close-all-dropdowns', this._uid)
                    this.open = !this.open
                    this.$emit('toggle', this.open)
                }
            },
            close() {
                this.open = false
                this.$emit('toggle', false)
            }
        },

        mounted() {
            eventBus.$on('close-all-dropdowns', (id) => {
                if (this._uid !== id) {
                    this.close()
                }
            })
            document.addEventListener('click', evt => {
                evt.stopPropagation();
                if (!this.$el.contains(evt.target)) {
                    this.open = false;
                    this.$emit('toggle', false)
                }
            });
        },

        computed: {
            style() {
                let styles = ''

                if (this.fixed) {
                    styles += ` left: ${this.pos.x}px;`
                }

                if (!this.widthContent) {
                    styles += ' width: inherit;'
                }

                return styles
            }
        },

        watch: {
            openContent() {
                this.open = this.openContent
            }
        }
    }
</script>

<style lang="scss" scoped>
.dropdown {
    position: relative;
    &__button {
        cursor: pointer;
    }
    &__content {
        margin-top: 10px;
        box-shadow: 0px 2px 4px rgba(5, 28, 63, 0.1);
        background-color: #fff;
        border-radius: 5px;
        z-index: 10;
        &.fixed {
            position: fixed;
        }
        &.absolute {
            position: absolute;
        }
        &.left {
            left: 0
        }
        &.right {
            right: 0
        }
        &.bottom {
            bottom: 30px;
        }
    }
}
</style>