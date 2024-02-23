import companydata from "../../../entities/companydata.js";

const editcompanydata = async (Id,companyType,companyName,websiteLink,about,location,image,numberOfEmployees,year,services,email,repositories) => {
   

    try {
        const profiledetails =companydata(companyType,companyName,websiteLink,about,location,image,numberOfEmployees,year,services,email)

        console.log(profiledetails,"editing");

        const company = await repositories.Updatecompanydata(Id,profiledetails)
        console.log(company,"updation");

        return { status: true , company }

    } catch {
        return { message: 'Error updating company data', status: false };

    }






}
export default editcompanydata