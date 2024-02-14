const getTypewisedata = async (type,repositories) => {
    
    try {

        const data =await repositories.typewisedata(type)
       

        return { status: true, data }

    } catch {
        return { message: 'Error getting data', status: false };

    }
}
export default getTypewisedata