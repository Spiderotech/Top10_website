import adminController from "../../../../adapters/controllers/admin/adminController.js"
import adminRepositoryImp from "../../../database/mongodb/repositories/admin/adminRepositoryImp.js"
import adminserviceInt from "../../../../application/services/admin/adminServiceInt.js"
import adminServiceImp from "../../../services/admin/adminServiceImp.js"
import adminrepositoryInt from "../../../../application/repositories/admin/adminRepositoryInt.js"




const admin = (express) => {

    const router=express.Router()

    const controller=adminController(adminrepositoryInt,adminRepositoryImp,adminserviceInt,adminServiceImp)
    router.route('/login').post(controller.adminLogin)
    router.route('/addcompanydata').post(controller.createcompanydata)
    router.route('/getallcompanydata').get(controller.getallcompanydata)
    router.route('/getcompanydata').get(controller.selectcompanydata)
    router.route('/getsinglecompanydata').get(controller.selectsinglecompanydata)
    router.route('/removecompany').post(controller.removecompany)
    router.route('/editcompanydata').post(controller.editedata)

    return router;
 


}

export default admin