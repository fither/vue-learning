<template>
  <div id="users">
    <template v-for="(user, index) in users" :key="index">
      <UserItem :user="user" />
    </template>
  </div>
</template>

<script>
import UserItem from '@/components/UserItem';

export default {
  name: 'Users',
  components: {
    UserItem
  },
  data() {
    return {
      fakeAPI: 'https://jsonplaceholder.typicode.com/',
      users: []
    }
  },
  created() {
    fetch(this.fakeAPI + 'users')
      .then(res => { return res.json(); })
      .then(res => this.users = res )
  }

}
</script>

<style>

</style>