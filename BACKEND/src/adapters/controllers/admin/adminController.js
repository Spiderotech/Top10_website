import login from "../../../application/useCase/admin/login.js"
import addcompanydata from "../../../application/useCase/admin/Addcompanydatas.js"
import getcompanydatas from "../../../application/useCase/admin/Getcompanydata.js"
import getTypewisedata from "../../../application/useCase/admin/Getstypecompanydata.js"
import getsinglecompany from "../../../application/useCase/admin/Getsinglecompany.js"
import removecompanydata from "../../../application/useCase/admin/Removecompanydata.js"
import editcompanydata from "../../../application/useCase/admin/editcompanydatas.js"

const adminController = (adminrepositoryInt,adminRepositoryImp,adminserviceInt,adminServiceImp) => {

    const   dbrepository = adminrepositoryInt(adminRepositoryImp())
    const Service = adminserviceInt(adminServiceImp())

    const adminLogin = (req, res) => {
        const { email, password } = req.body
        console.log(email,password);
        login(email, password, dbrepository,Service).then((response) => {
            console.log(response);
            res.json(response)

        }).catch((err) => console.log(err))

    }

    const createcompanydata = (req, res) => {
        console.log(req.body);

        const{companyType,companyName,websiteLink,about,location,image,numberOfEmployees,year,services,email}=req.body

            addcompanydata(companyType,companyName,websiteLink,about,location,image,numberOfEmployees,year,services,email,dbrepository).then((response) => {

            res.json(response)

        }).catch((err) => console.log(err))

    }

    const getallcompanydata=(req,res)=>{
        getcompanydatas(dbrepository).then((response)=>{
            console.log(response);
            res.json(response)
    
        }).catch((err)=>console.log(err))
    
     }

     const selectcompanydata=(req,res)=>{
        const type= req.query.type;

        console.log(type,"LOOOOO");
       
       
        getTypewisedata(type,dbrepository).then((response)=>{
            console.log(response);
            res.json(response)
    
        }).catch((err)=>console.log(err))
    
     }
     const selectsinglecompanydata=(req,res)=>{
        const Id = req.query.id;
        console.log(Id,"auth");
       
        getsinglecompany(Id,dbrepository).then((response)=>{
            console.log(response);
            res.json(response)
    
        }).catch((err)=>console.log(err))
    
     }
     const removecompany=(req,res)=>{

        const {Id} = req.body
        console.log(Id,"ploooo");
        removecompanydata(Id,dbrepository).then((response)=>{
            res.json(response)
    
        }).catch((err)=>console.log(err))
    
    
     }

     const editedata= (req, res) => {
        console.log(req.body,"editting data" );

        const{Id,companyType,companyName,websiteLink,about,location,image,numberOfEmployees,year,services,email}=req.body

        editcompanydata(Id,companyType,companyName,websiteLink,about,location,image,numberOfEmployees,year,services,email,dbrepository).then((response) => {

            res.json(response)

        }).catch((err) => console.log(err))

    }
 
 
    return {
      
        adminLogin,
        createcompanydata,
        getallcompanydata,
        selectcompanydata,
        selectsinglecompanydata,
        removecompany,
        editedata
       
        
    }


}

export default adminController