

const adminrepositoryInt = (repository) => {

    const adminExist=(email,password)=>repository.adminExist(email,password);
    const create=(company)=>repository.create(company);
    const getAllCompanies=()=>repository.getAllCompanies()
    const typewisedata=(type)=>repository.typewisedata(type);
    const singlecompany=(Id)=>repository.singlecompany(Id);
    const removcompanydatas=(Id)=>repository.removcompanydatas(Id);
    const Updatecompanydata=(Id,data)=>repository.Updatecompanydata(Id,data);

    
    return{
        adminExist,
        create,
        getAllCompanies,
        typewisedata,
        singlecompany,
        removcompanydatas,
        Updatecompanydata
       
    }
}

export default adminrepositoryInt