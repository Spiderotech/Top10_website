const getcompanydatas = async (repositories) => {
  
    try {

        const data=await repositories.getAllCompanies()
       
   

        return { status: true,data }

    } catch {
        return { message: 'Error getting company data', status: false };

    }
}
export default getcompanydatas