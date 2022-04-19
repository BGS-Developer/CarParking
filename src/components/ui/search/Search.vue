<template>
    <div class="flex items-center px-3 py-1">
        <VIconSearch class="w-4 h-4 mr-2 text-color-gray-light" :class="{'text-color-gray': value}" />
        <input :value="value" @input="emit($event.target.value)" :placeholder="placeholder" class="bg-color-white w-full text-sm text-color-gray focus:outline-none -mt-0.5" style="width: calc(100% - 1.5rem)">
        <VIconClose class="w-4 h-4 ml-2 text-color-gray-light" :class="{'text-color-gray': value}" @click.native="reset" />
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
