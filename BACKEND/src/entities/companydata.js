
const companydata=(companyType,companyName,websiteLink,about,location,image,numberOfEmployees,year,services,email)=>{
   
    return{
      
        getcompanytype:()=>companyType,
        getcompanyname:()=>companyName,
        getwebsite:()=>websiteLink,
        getabout:()=>about,
        getlocation:()=>location,
        getimage:()=>image,
        getnumberOfEmployees:()=>numberOfEmployees,
        getyear:()=>year,
        getservice:()=>services,
        getemail:()=>email,
        
    }


}

export default companydata