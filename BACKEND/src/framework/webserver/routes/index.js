import admin from "./admin/admin.js"
import commonservice from "./commonservice.js"


const  routes=( app,express)=>{
   
    app.use('/api/v1/admin',admin(express))
    app.use('/api/v1/service',commonservice(express))

}
export default routes