<template>
  <VDropdown class="profile">
    <template v-slot:button>
      <div class="profile__button">
        <VAvatar :src="user.avatar" :size="'small'" />
        <VIconArrowDown class="icon-arrow" />
      </div>
    </template>

    <template v-slot:content>
      <div class="profile__content">
        <div class="avatar">
          <VAvatar :src="user.avatar" :size="'base'" />
        </div>
        

        <div class="name truncate">
          {{ user.name }}
        </div>

        <div class="email truncate">
          {{ user.email }}
        </div>

        <div class="button-wrapper">
          <VButtonPrimary :text="'Logout'" />
        </div>
      </div>
    </template>
  </VDropdown>
</template>

<script>
import { mapGetters } from 'vuex'
import VDropdown from "@/components/ui/dropdown"
import VAvatar from "@/components/ui/avatar"
import { VIconArrowDown } from "@/components/svg-icons"
import { VButtonPrimary } from "@/components/ui/buttons"
export default {
  components: {
    VDropdown,
    VAvatar,
    VIconArrowDown,
    VButtonPrimary
  },

  computed: {
    ...mapGetters({
      user: 'User/convertedUser'
    })
  }
}
</script>

<style lang="scss" scoped>
.profile {
  &__button {
    display: flex;
    align-items: center;

    .icon-arrow {
      margin-left: 6px;
      color: var(--primary);
    }
  }
  &__content {
    width: auto;
    padding: 14px;
    max-width: 230px;

    .avatar {
      display: flex;
      justify-content: center;
      margin-bottom: 6px;
    }

    .name {
      font-size: 16px;
      font-weight: bold;
      color: var(--primary);
      text-align: center;
    }

    .email {
      color: var(--sec-text);
      margin-bottom: 10px;
      text-align: center;
    }

    .button-wrapper {
      display: flex;
      justify-content: center;
      .button {
        max-width: 170px;
      }
    }
  }
}
</style>