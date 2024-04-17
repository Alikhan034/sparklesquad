import { request, gql } from 'graphql-request'
const MASTER_URL="https://api-ap-south-1.hygraph.com/v2/cltveimf803ty07w0qjph1h79/master"
const getSlider=async()=>{
    const query= gql`
    query Sliders {
        sliders {
          id
          name
          image {
            url
          }
        }
      }
`
const result=await request(MASTER_URL, query);
return result;
}
const getCategories=async()=>{
  const query=gql`
  query GetCategory {
    categories {
      id
      name
      icon {
        url
      }
    }
  }
  `
  const result=await request(MASTER_URL, query);
return result;  

}
const getBusinessList=async()=>{
  const query=gql`
  query getBusinessList {
    businessLists {
      id
      name
      email
      contactPerson
      category {
        name
      }
      address
      about
      image {
        url
      }
    }
  }  
  `
  const result=await request(MASTER_URL, query);
return result;  

}
export default{
    getSlider,
    getCategories,
    getBusinessList,
}
