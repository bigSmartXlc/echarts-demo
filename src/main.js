import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import { Button,DatePicker,Tree,ColorPicker,Table,TableColumn,Row,Col, Radio } from 'element-ui';
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(DatePicker)
Vue.use(Radio)
Vue.use(Tree)
Vue.use(ColorPicker)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Row)
Vue.use(Col)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
