<template>
  <RouterLink :to="url" :class="['list-item', {'active': isActive}, { 'has-notifications': notifications }]">
    <div class="list-item__inner">
      <component :is="`v-icon-${iconName}`" class="icon" />
      
      <div class="text truncate" >
        {{ name }}
      </div>

      <div class="number-notifications-wrapper" v-show="isActive">
        <VNumberNotifications 
          v-if="notifications"
          :value="notifications" />
      </div>
    </div>
  </RouterLink>
</template>

<script>
import VNumberNotifications from "@/components/ui/number-notification"
export default {
  components: {
    VNumberNotifications,
    ...require('@/components/svg-icons')
  },

  props: {
    url: {
      type: String,
      default: ''
    },
    iconName: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    notifications: {
      type: Number,
      default: 0
    },
    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.list-item {
  display: block;
  cursor: pointer;
  text-decoration: none;
  padding: 4px 14px;

  &:not(.active) {
    .list-item__inner {
      transition: width 0.5s;
      position: relative;
      border-radius: 4px;
      height: 36px;
      width: 36px;
      padding: 8px;
      overflow: hidden;
      /* display: flex;
      justify-content: center;
      align-items: center; */
      &:before {
        content: '';
        position: absolute;
        top: 4px;
        right: 4px;
        display: none;
        width: 8px;
        height: 8px;
        background: var(--error);
        border: 2px solid var(--primary);
        border-radius: 50%;
      }
      .icon {
        color: var(--border-color);
      }
    }

    &.has-notifications {
      .list-item__inner:before {
        display: block;
      }
    }

    &:hover, &.router-link-active {
      .list-item__inner {
        background: #182d4e;
        &:before {
          border: 2px solid #182d4e;
        }
      }
      .icon {
        color: var(--highlight-dm);
      }
    }
  }

  &.active {
    padding: 8px 24px 8px 33px;
  }

  &:hover, &.router-link-active {
    &.active {
      background: #182d4e;
    }
    .text {
      color: var(--highlight-dm);
    }
    .icon {
      color: var(--highlight-dm);
    }
  }
}

.list-item__inner {
  display: flex;
  transition: width 0.5s;
  width: 100%;
}

.icon {
  color: var(--sec-text);
  min-width: 20px;
}

.text {
  padding: 0 6px 0 17px;
  font-size: 16px;
  letter-spacing: 0.25px;
  line-height: 20px;
  color: var(--white-bg);
  font-style: normal;
  font-weight: 400;
  white-space: nowrap;
  width: calc(100% - 34px);
  text-align: left;
}

.number-notifications-wrapper {
  width: 20px;
}
</style>