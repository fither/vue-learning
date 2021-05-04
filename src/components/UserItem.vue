<template>
  <div class="user-item">
    <p>
      <router-link :to="profileLink">
        {{ user.name }} {{user.username}}
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'UserItem',
  props: {
    user: { type: Object, required: true }
  },
  computed: {
    profileLink() {
      return `/users/user/${this.user.id}`
    }
  }
}
</script>

<style>

</style>