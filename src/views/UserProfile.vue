<template>
  <div id="user-profile">
    <div class="row username">
      <div class="col">Name</div>
      <div class="col">
        <span>{{userData.name}}</span>
      </div>
    </div>
    <div class="row useremail">
      <div class="col">Email</div>
      <div class="col">
        <span>{{userData.email}}</span>
      </div>
    </div>
    <div class="row userphone">
      <div class="col">Phone</div>
      <div class="col">
        <span>{{userData.phone}}</span>
      </div>
    </div>
    <div class="row usercompany">
      <div class="col">Company</div>
      <div class="col">
        <span>{{userData.company}}</span>
      </div>
    </div>
    <router-link :to="postsLink">Posts</router-link>
  </div>
</template>

<script>
export default {
  name: 'User Profile',
  data() {
    return {
      fakeAPI: 'https://jsonplaceholder.typicode.com/users/',
      userData: Object,
      profileID: Number
    }
  },
  created() {
    this.profileID = this.$route.params.id;
    fetch(this.fakeAPI + this.profileID)
      .then(res => { return res.json(); })
      .then(res => { this.userData = res; })
  },
  computed: {
    postsLink() {
      return `/users/user/${this.profileID}/posts`
    }
  }
}
</script>

<style scoped>
  #user-profile {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .row {
    width: 100%;
    background-color: white;
    margin: 0 5rem;
  }

  .row:nth-child(odd) {
    background-color: #CCC;
  }
  .col {
    height: 100%;
    margin-bottom: 1rem;
  }

</style>