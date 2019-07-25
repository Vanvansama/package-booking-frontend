<template>
  <div>
    <a-row>
      <a-col :span="4"><h2>菜鸟驿站</h2></a-col>
      <a-col :span="4">
        <a-button @click="filterAll">All</a-button>
      </a-col>
      <a-col :span="4">
        <a-button @click="filterBook">已预约</a-button>
      </a-col>
      <a-col :span="4">
        <a-button @click="filterPick">已取件</a-button>
      </a-col>
      <a-col :span="4">
        <a-button @click="filterUnpick">未取件</a-button>
      </a-col>
      <a-col :span="4">
        <AddPackage />
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="24">
        <a-table :columns="columns" :dataSource="data">
        <a slot="name" slot-scope="text" href="javascript:;">{{text}}</a>
        <span slot="customTitle">
          <a-icon type="smile-o" />Name
        </span>
        <span slot="tags" slot-scope="tags">
          <a-tag v-for="tag in tags" color="blue" :key="tag">{{tag}}</a-tag>
        </span>
        <span slot="action" slot-scope="text, record">
          <a-button type="dashed">确认收货</a-button>
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
    dataIndex: "appointment_time",
    key: "appointment_time"
  },
  {
    title: "操作",
    key: "action",
    scopedSlots: { customRender: "action" }
  }
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    status: ["nice", "developer"]
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    status: ["loser"]
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    status: ["cool", "teacher"]
  }
];

export default {
  data() {
    return {
      data,
      columns
    };
  },
  components: {
    AddPackage
  }
};
</script>