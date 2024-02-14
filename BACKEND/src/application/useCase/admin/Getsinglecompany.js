const getsinglecompany = async (Id,repositories) => {


    console.log(Id,"usecasse");
    
    try {

        const data =await repositories.singlecompany(Id)
       

        return { status: true, data }

    } catch {
        return { message: 'Error getting user profile', status: false };

    }
}
export default getsinglecompany