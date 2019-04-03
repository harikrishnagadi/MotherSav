import {SUBMIT_ANM_DETAILS,SET_DATA} from './actionTypes';


export const submitpsdet = (state) =>{
    return{
        type: SUBMIT_ANM_DETAILS,
        state : state
    };
};
export const senddata =(state)=>{
   mandal=state.Mandal["value"];
   phc=state.PHC["value"];
   sc=state.sc["value"];
   anmid=state.anmid;
   name=state.anmname;
   mobile=state.mobileno;

      return dispatch=>{
           dispatch(submitpsdet(state))
            var anmdata;
           anmdata={}
           anmdata["name"]=name;
           anmdata["mobile"]=mobile;
             fetch("https://plmc-c6c5c.firebaseio.com/Anms/East Godavari/"+mandal+"/"+phc+"/"+sc+"/"+anmid+".json",{
                method: "PATCH",
                body: JSON.stringify(anmdata)
             })
             .catch(err=>console.log(err))
             .then(res=>res.json())
             .then(parsedRes=>{
               console.log(parsedRes)
             })


      }
}

export const getdata =()=>{
   return dispatch=>{

     fetch("https://plmc-c6c5c.firebaseio.com/Data/East Godavari.json")
     .catch(err=>{
         alert("somthing went wrong sorry")
         console.log(err)
     })
     .then(res=>res.json())
     .then(parsedRes=>{
         const data =[];
         const mandals=[];
         data.push(parsedRes);
        for ( let key in parsedRes){
           var obj = { label:key , value: key};
            mandals.push(obj);
        }
         console.log(mandals);
         dispatch(setdata(data,mandals));
     })

   };
};
export const setdata =(data,mandals)=>{
      return{
         type: SET_DATA,
         Data: data,
         Mandals:mandals
      }
}
