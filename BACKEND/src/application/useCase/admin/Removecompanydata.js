

const removecompanydata= async (Id,repositories) => {
    console.log(Id,"oododo");

    try {

        const remove =await repositories.removcompanydatas(Id)
        if(remove===true){

            return ({ status: true})

        }else{
            return({status:false})
        }
       

    } catch {
        return { message: 'Error removing company', status: false };

    }
}
export default removecompanydata