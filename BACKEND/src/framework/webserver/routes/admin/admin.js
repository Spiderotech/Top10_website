import adminController from "../../../../adapters/controllers/admin/adminController.js"
import adminRepositoryImp from "../../../database/mongodb/repositories/admin/adminRepositoryImp.js"
import adminrepositoryInt from "../../../../application/repositories/admin/adminrepositoryInt.js"
import AuthServiceInt from "../../../../application/services/admin/adminserviceInt.js"
import adminServiceImp from "../../../services/admin/adminServiceImp.js"




const admin = (express) => {

    const router=express.Router()

    const controller=adminController(adminrepositoryInt,adminRepositoryImp,AuthServiceInt,adminServiceImp)
    router.route('/login').post(controller.adminLogin)
    router.route('/addcompanydata').post(controller.createcompanydata)
    router.route('/getallcompanydata').get(controller.getallcompanydata)
    router.route('/getcompanydata').get(controller.selectcompanydata)
    router.route('/getsinglecompanydata').get(controller.selectsinglecompanydata)

    return router;
 


}

export default admin