import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
  
const apiUrl="https://vue3-course-api.hexschool.io/v2";

const path="silvia-hexschool";

const token= document.cookie.replace(/(?:(?:^|.*;\s*)hexschoolToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");

axios.defaults.headers.common.Authorization = token;

// const config = {
//   headers: { Authorization: token },
// };

const app=createApp({
    data() {
        return {
            tempProduct:{},
            products:[]
        }
    },
    methods: {
        getAllProducts(){
            axios.get(`${apiUrl}/api/${path}/admin/products/all`)
            .then((res)=>{
                this.products=res.data.products;
            })
            .catch(error=>{
            
                console.log(error);
            })

        }, 
        checkAdmin(){
          axios.post(`${apiUrl}/api/user/check`)
          .then(res=>{            
                this.getAllProducts();                         
          })
          .catch(error=>{
            window.location ="login.html";
          })
        }
    },
    mounted() {
      this.checkAdmin()
    },
})

app.mount("#app");
