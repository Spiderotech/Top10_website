
import companydata from "../../../entities/companydata.js";

const addcompanydata = async (companyType,companyName,websiteLink,about,location,image,numberOfEmployees,year,services,email,repositories) => {
   

    try {
        const profiledetails = companydata(companyType,companyName,websiteLink,about,location,image,numberOfEmployees,year,services,email)


        const company = await repositories.create(profiledetails)
        console.log(company);

        return { status: true,company }

    } catch {
        return { message: 'Error adding company data', status: false };

    }






}
export default addcompanydata