<template>
  <div class="card p-3">
    <div class="text-center">
      <img class="img-fluid" :src="item.logo" width="100" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{ item.name  }} </h5>
      </div>
      <div>
        <span v-for="(group, index) in item.stack" :key="index" :class="`badge badge-${tags[group]}`">{{ group }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // list of tags to giving each stack a different color
      tags: {
        tag4: 'info',
        tag3: 'warning',
        tag1_Unpackaged: 'success',
        tag2_ZeroWaste: 'secondary',
      }
    };
  },
  props: {
    // this component expects a prop of type object
    item: {
      type: Object,
      required: true
    }
  }
};
</script>
