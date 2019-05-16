<template>
  <div class="home">
    <div class="section group" v-if="getAllStandings.standings.length">
      <div class="col span_1_of_4" v-for="(table, i) in getAllStandings.tables" :key="`table${i}`">
        <Group :tables="table"></Group >
      </div>
    </div>
  </div>
</template>

<script>
import Group from '@/components/Group.vue'
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';


export default {
  name: 'Home',
  created() {
    this.getStandings()
  },
  watch: {
    '$route': 'getStandings'
  },
  computed: {
    ...mapGetters('standings',[
      'getAllStandings'
    ])
  },
  methods: {
    ...mapActions('standings',[
      'getStandings'
    ])
  },
  components: {
    Group
  }
}
</script>

<style>
/*  SECTIONS  */
.section {
	clear: both;
	padding: 30px;
	margin: 0px;
}

/*  COLUMN SETUP  */
.col {
	display: block;
	float:left;
  margin: 10px 5px
}


/*  GROUPING  */
.group:before,
.group:after { content:""; display:table; }
.group:after { clear:both;}
.group { zoom:1; /* For IE 6/7 */ }

.span_1_of_4 {
	width: 23.8%;
}

/*  GO FULL WIDTH BELOW 480 PIXELS */
@media only screen and (max-width: 480px) {
	.col {  margin: 1% 0 1% 0%; }
	.span_1_of_4, .span_2_of_4, .span_3_of_4, .span_4_of_4 { width: 100%; }
}
</style>
