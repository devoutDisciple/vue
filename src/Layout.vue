<template>
    <div id='app'>
        <el-row :gutter="20">
            <el-col :span="16"><div class="grid-content bg-purple">123</div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple">312</div></el-col>
        </el-row>
        
        <el-row type="flex" class="row-bg">
            <el-col :span="24">
                <router-link to="/foo">Go to Foo</router-link>........
                <router-link to="/bar">Go to Bar</router-link>
            </el-col>
        </el-row>
        <router-view></router-view>
    </div>
    
</template>
<script>
export default {
    
}
</script>
