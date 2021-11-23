<template>
  <div>
    <el-form :inline="true" :model="formInline" size="mini">
      <el-form-item label="名称">
        <el-input v-model="formInline.user" placeholder="Approved by"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="formInline.region" placeholder="Activity zone">
          <el-option label="Zone one" value="shanghai"></el-option>
          <el-option label="Zone two" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">搜索</el-button>
      </el-form-item>
    </el-form>
    <div class="actions">
      <el-button type="primary" size="mini">导出</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180" />
      <el-table-column prop="name" label="姓名" width="180" />
      <el-table-column prop="address" label="地址" />
    </el-table>
    <el-pagination
      style="margin-top:15px;text-align: right;"
      v-model:currentPage="currentPage"
      :page-sizes="[10, 20, 30]"
      :page-size="limit"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const pageOptions = reactive({
      currentPage: 1,
      limit: 10,
    })
    const tableData = reactive([
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ])
    const formInline = reactive({
      user: '',
      region: '',
    })
    const onSubmit = () => {
      console.log('submit!')
    }
    const handleSizeChange = (val: number) => {
      console.log(val);

    }
    const handleCurrentChange = (val: number) => {
      console.log(val);
    }
    return {
      formInline,
      onSubmit,
      ...toRefs(pageOptions),
      tableData,
      handleSizeChange,
      handleCurrentChange
    }
  },
})
</script>
<style scoped>
.actions {
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
}
.el-table /deep/ th.el-table__cell {
  background-color: #f5f7fa;
}
</style>