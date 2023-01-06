
import { defineComponent } from 'vue'

export default defineComponent({ // 传入组件配置
  // components: {
  //   ElButton,
  //   ElTag
  // },
  setup () {
    const render = () => {
      return <>
        <el-tag>登录页</el-tag>
        <div style="color: #8df;">登录页</div>
      </>
    }
    return render
  }
})