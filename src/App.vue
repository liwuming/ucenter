<template>
	<v-header/>

	<router-view></router-view>
  <v-footer/>
</template>

<script>
import header from '@/components/header.vue';
import footer from '@/components/footer.vue';

export default {
  name: "App",
  components:{
    'v-header':header,
    'v-footer':footer
  },
  data() {
    return {
      
    };
  },
  methods: {
  
  },
  mounted() {
    
  }
};
</script>

