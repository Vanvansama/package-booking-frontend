<template>
  <div>
    <a-row>
      <a-col :span="4"><h2>菜鸟驿站</h2></a-col>
      <a-col :span="4">
        <a-button @click="filter()">All</a-button>
      </a-col>
      <a-col :span="4">
        <a-button @click="filter(`已预约`)">已预约</a-button>
      </a-col>
      <a-col :span="4">
        <a-button @click="filter(`已取件`)">已取件</a-button>
      </a-col>
      <a-col :span="4">
        <a-button @click="filter(`未取件`)">未取件</a-button>
      </a-col>
      <a-col :span="4">
        <AddPackage />
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="24">
        <a-table :columns="columns" :dataSource="getList" :rowKey="record => record.id">
        <span slot="tags" slot-scope="tags">
          <a-tag v-for="tag in tags" color="blue" :key="tag">{{tag}}</a-tag>
        </span>
        <span slot="time" slot-scope="time">
          <span>{{time === 0 ? "" :new Date(time).toLocaleString().replace(/:\d{1,2}$/,' ')  }}</span>
        </span>
        <span slot="action" slot-scope="text, record">
          <a-button type="dashed" @click="handleReceipt(record)">确认收货</a-button>
        </span>
      </a-table>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import AddPackage from "@/components/AddPackage.vue";
const columns = [
  {
    dataIndex: "id",
    key: "id",
    title: "运单号"
  },
  {
    title: "收件人",
    dataIndex: "addressee",
    key: "addressee"
  },
  {
    title: "电话",
    dataIndex: "phone",
    key: "phone"
  },
  {
    title: "状态",
    key: "status",
    dataIndex: "status",
    scopedSlots: { customRender: "tags" }
  },
  {
    title: "预约时间",
    dataIndex: "appointmentTime",
    key: "appointmentTime",
    scopedSlots: { customRender: "time" }
  },
  {
    title: "操作",
    key: "action",
    scopedSlots: { customRender: "action" }
  }
];

import moment from "moment";
export default {
  
  data() {
    return {
      columns
    };
  },
  mounted(){
    moment,
    this.$store.dispatch('getPackage')
  },
  components: {
    AddPackage
  },
  computed: {
    getList(){
      return this.$store.getters.getAllList;
    }
  },
  methods: {
    handleReceipt(record){
      this.$store.dispatch('updatePackage',record)
    },
    filter(filter){
      this.$store.dispatch('filterPackage',{status: filter})
    }
  }
};
</script>