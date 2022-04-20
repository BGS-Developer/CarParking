<template>
    <div class="input-search-wrapper b-card">
        <div class="icon-search-wrapper">
            <VIconSearch
                class="icon-search" />
        </div>

        <input 
            class="input-search"
            :value="value"
            :placeholder="placeholder"
            @input="emit($event.target.value)"
            @change="$emit('change', $event.target.value)">
        
        <div v-show="value" class="icon-close-wrapper">
            <VIconClose 
                class="icon-close"
                @click.native="reset" />
        </div>
    </div>
</template>

<script>
import {VIconSearch, VIconClose} from '@/components/svg-icons'
export default {
    components: {VIconSearch, VIconClose},
    props: {
        value: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: 'Search...'
        }
    },

    methods: {
        emit(value) {
            this.$emit('update:value', value);
            this.$emit('input', value)
        },
        reset() {
            this.emit('')
        }
    }
}
</script>

<style lang="scss" scoped>
.input-search {
    width: calc(100% - 36px);
    height: 100%;
    padding: 6px 32px 6px 0;
    border: none;
    outline: none;
    font-size: 14px;
    line-height: 18px;
    color: #8193AE;

    &::placeholder {
        color: #8193AE;
    }

    &-wrapper {
        position: relative;
        display: flex;
        height: 40px;
        overflow: hidden;
    }
}
.icon-search-wrapper {
    width: 36px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
}
.icon-search {
    width: 16px;
    height: 16px;
}
.icon-close {
    cursor: pointer;
    width: 32px;
    height: 24px;
    padding: 6px;
    &-wrapper {
        display: flex;
        align-items: center;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0px;
    }
}
</style>
