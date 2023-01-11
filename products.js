const url = 'https://vue3-course-api.hexschool.io/v2/'; // 站點
const api_path = 'kc777'; // API Path
// vue
import { createApp } from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.45/vue.esm-browser.min.js";
// 1.建立元件
const app = {
  //資料
  data() {
    return {
      products: [],
      tempProduct: {}
    };
  },
  //方法集合
  methods: {
    check() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, "$1"); //取得Token`,test2要改成hexToken
      axios.defaults.headers.common['Authorization'] = token; // defaults = 每次都把token夾帶到headers裡
      axios.post(`${url}api/user/check`)
        .then((res) => {
          this.getProduct();
        })
        .catch((error) => {
          alert("您無權限進入！");
          window.location = 'login.html';
        })
    },
    getProduct() {
      axios.get(`${url}api/${api_path}/admin/products`)
        .then((res) => {
          this.products = res.data.products;
          console.log(this.products)
        })
        .catch((error) => {
          console.dir(error);
        })
    },
    openModal() {
      
    }
  },
  //生命週期
  mounted() {
    this.check();
  }
};
createApp(app) // 2.生成應用程式
  .mount("#app"); // 3.渲染到畫面上