const urls=[
    "https://swapi.dev/api/people/"
    
]
const baseUrl="https://swapi.dev/api/people/"
export const fetchData=async ()=>{
    /*try {
        const response=await Promise.all(

            urls.map(url=>fetch(url).then(res=>res.json()))
        );
        console.log(response);
        return response;
    }
    catch (error){
        console.log("Error",error);
    }*/
    var peoples=await Promise.all(urls.map(url=>fetch(url).then(res=>res.json())))
   var cnt= (peoples[0].count)
   var pu=[]
   for(var i=1;i<=cnt;++i)
        pu.push(baseUrl+i)
        //alert(pu.length)
        const response=await Promise.all(

            pu.map(url=>fetch(url).then(res=>res.json()))
        );
        //console.log(response);
        return response;
};