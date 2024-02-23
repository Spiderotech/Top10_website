import admindata from "../../models/AdminModels.js";
import companydata from "../../models/CompanyModels.js";

const adminRepositoryImp = () => {

    const adminExist = async (email,password) => {
        console.log(email, "email");
       
        try {
          return await  admindata.findOne({email:email});
    
         
        } catch (error) {
          console.error("Error while finding the admin:", error);
          throw new Error("An error occurred while finding the admin.");
        }
      };


      const create = (data) => {


        const newcompanydata = new companydata({
          companyType:data?.getcompanytype(),
          companyName:data?.getcompanyname(),
          websiteLink:data?.getwebsite(),
          about:data?.getabout(),
          location:data?.getlocation(),
          image:data?.getimage(),
          numberOfEmployees:data?.getnumberOfEmployees(),
          year:data?.getyear(),
          services:data?.getservice(),
          email:data?.getemail(),
          
  
    
        })
        return newcompanydata.save()
      }

      const getAllCompanies = async () => {

        try {
          return await companydata.find();
      } catch (error) {
          console.error("Error while fetching all companies:", error);
          throw new Error("An error occurred while fetching all companies.");
      }
    

      }

      const typewisedata = async (type) => {

        try {
          const companydatas= await companydata.find({ companyType: type })
          
          return companydatas;
        } catch (error) {
          console.error('Error retrieving  company:', error);
          throw error;
        }
    
      }

      const singlecompany = async (Id) => {

        try {
          const company = await companydata.find({ _id: Id })
          console.log(company, "single");
          return company;
        } catch (error) {
          console.error('Error retrieving  company data:', error);
          throw error;
        }
    
      }
      const removcompanydatas = async (Id) => {
        console.log(Id, "loppp");
        try {
          console.log(Id, "Deleting property...");
          const deletedProperty = await companydata.deleteOne({ _id:Id });
    
          if (deletedProperty.deletedCount > 0) {
            console.log("deleted successfully!");
            return true;
          } else {
            console.log(`No data found with postId ${Id}.`);
            return false;
          }
        } catch (error) {
          console.error("Error deleting data:", error.message);
          return false;
        }
      };


      const Updatecompanydata = async (Id,data) => {
        console.log(data,"pooo");
        const profile = await companydata.findOneAndUpdate(
          { _id: Id },
          {
            companyType:data?.getcompanytype(),
            companyName:data?.getcompanyname(),
            websiteLink:data?.getwebsite(),
            about:data?.getabout(),
            location:data?.getlocation(),
            image:data?.getimage(),
            numberOfEmployees:data?.getnumberOfEmployees(),
            year:data?.getyear(),
            services:data?.getservice(),
            email:data?.getemail(),
          
           
          },
          { new: true }
        );
    
        console.log(profile, "updation");
        return profile;
      };
    
      return {
        adminExist,
        create,
        getAllCompanies,
        typewisedata,
        singlecompany,
        removcompanydatas,
        Updatecompanydata
      };



}

export default adminRepositoryImp