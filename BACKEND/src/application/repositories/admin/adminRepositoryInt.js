

const adminrepositoryInt = (repository) => {

    const adminExist=(email,password)=>repository.adminExist(email,password);
    const create=(company)=>repository.create(company);
    const getAllCompanies=()=>repository.getAllCompanies()
    const typewisedata=(type)=>repository.typewisedata(type);
    const singlecompany=(Id)=>repository.singlecompany(Id);


    return{
        adminExist,
        create,
        getAllCompanies,
        typewisedata,
        singlecompany
       
    }
}

export default adminrepositoryInt