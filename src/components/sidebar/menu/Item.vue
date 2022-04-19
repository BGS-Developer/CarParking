<template>
  <RouterLink :to="url" :class="['list-item', {'active': isActive}, { 'has-notifications': notifications }]">
    <div class="list-item__inner">
      <component :is="`v-icon-${iconName}`" class="icon" />
      
      <div class="text truncate" v-show="isActive">
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
      position: relative;
      border-radius: 4px;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      &:before {
        content: '';
        position: absolute;
        top: 4px;
        right: 4px;
        display: none;
        width: 8px;
        height: 8px;
        background: #EC424C;
        border: 2px solid #051c3f;
        border-radius: 50%;
      }
      .icon {
        color: #B5C0D0;
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
        color: #72A2F8;
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
      color: #72A2F8;
    }
    .icon {
      color: #72A2F8;
    }
  }
}

.list-item__inner {
  display: flex;
}

.icon {
  color: #52647E;
  min-width: 20px;
}

.text {
  padding: 0 6px 0 17px;
  font-size: 16px;
  letter-spacing: 0.25px;
  line-height: 20px;
  color: #fff;
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