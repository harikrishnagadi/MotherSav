import {SET_ANM_DATA,SEND_ANM_DATA,
  SET_VILLAGE_DATA,
  SET_MOTHERP_DATA,
  SET_MOTHER_H_DATA,
  SET_NORMAL_HOSPITAL_DETAILS,
  SET_EMERGENCY_HOSPITAL_DETAILS,
  SET_BLOOD_BANK_DETAILS} from './actionTypes';
  import moment from 'moment';



export const submitpsdet = (state) =>{
    return{
        //type: SUBMIT_PERSONAL_DETAILS,
      //  state : state
    };
};
export const sendmotherpdata=(obj)=>{
      return{
          type:SET_MOTHERP_DATA,
          data:obj
      }
}
export const sendanmdata=(state)=>{
  return{
    type: SEND_ANM_DATA,
    state: state
  }
}
export const setmotherhdata=(obj)=>{
   //console.log(obj)
     return{
         type:SET_MOTHER_H_DATA,
         Data:obj
     }
}
export const setnormalhospitaldetails=(obj)=>{
     return{
          type:SET_NORMAL_HOSPITAL_DETAILS,
          Data:obj
     }
}
export const setemergencyhospitaldetails=(obj)=>{
     return{
          type:SET_EMERGENCY_HOSPITAL_DETAILS,
          Data:obj
     }
}
export const setbloodbankdetails=(obj)=>{
    return{
         type:SET_BLOOD_BANK_DETAILS,
         Data:obj
    }
}
export const sendfinaldb=(data)=>{
        //console.log(data);
        var route=[]; //if we get cant find
        route.push(data[0][0]);
        route.push(data[0][1]);
        route.push(data[0][2]);
        route.push(data[1][7]);
        route.push(data[5][3]);
        console.log(route);
        return dispatch=>{
              //  dispatch(setbloodbankdetails(data[5]));  //this should be the final dispatch
                dispatch(sendashadetdb(route,data));
                var anm={};
                anm["Anm ID"]=data[0][3];
                anm["Mandal"]=route[0];
                anm["PHC"]=route[1];
                anm["SC"]=route[2];
                fetch("https://plmc-c6c5c.firebaseio.com/Mothers/East Godavari/"+route[0]+"/"+route[1]+"/"+route[2]+"/"+route[3]+"/"+route[4]+"/Anm Details.json",{
                   method: "PATCH",
                   body: JSON.stringify(anm)
                })
                .catch(err=>console.log(err))
                .then(res=>res.json())
                .then(parsedRes=>{
                  console.log(parsedRes)
                })
        }
}
export const sendashadetdb=(route,data)=>{
  return dispatch=>{
               dispatch(sendMotherpersondetails(route,data));
               var asha={};
               asha["Name"]=data[0][4]["name"];
               asha["Mobile"]=data[0][4]["mobile"];
               fetch("https://plmc-c6c5c.firebaseio.com/Mothers/East Godavari/"+route[0]+"/"+route[1]+"/"+route[2]+"/"+route[3]+"/"+route[4]+"/Asha Details.json",{
                  method: "PATCH",
                  body: JSON.stringify(asha)
               })
               .catch(err=>console.log(err))
               .then(res=>res.json())
               .then(parsedRes=>{
                 console.log(parsedRes)
               })
  }

}
export const sendMotherpersondetails=(route,data)=>{
    return dispatch=>{
           dispatch(sendmotherhealthdetails(route,data));
           //d = new Date();
           time =moment().format('MMMM Do YYYY, h:mm:ss a');
           var personal={};
           personal["Name"]=data[1][0];
           personal["Age"]=data[1][1];
           personal["husband name"]=data[1][2];
           personal["Phone number"]=data[1][3];
           personal["Aadhar number"]=data[1][4];
           personal["Address1"]=data[1][5];
           personal["Address2"]=data[1][6];
           personal["village"]=data[1][7];
           personal["Mandal"]=route[0];
           personal["Time stamp"]=time;
           fetch("https://plmc-c6c5c.firebaseio.com/Mothers/East Godavari/"+route[0]+"/"+route[1]+"/"+route[2]+"/"+route[3]+"/"+route[4]+"/Personal Details.json",{
              method: "PATCH",
              body: JSON.stringify(personal)
           })
           .catch(err=>console.log(err))
           .then(res=>res.json())
           .then(parsedRes=>{
             console.log(parsedRes)
           })

    }
}
export const sendmotherhealthdetails=(route,data)=>{
      return dispatch=>{
            dispatch(sendnormalhospitaldet(route,data));
            var Health={};
            Health["LMP"]=data[2][0];
            Health["EDD"]=data[2][1];
            Health["Height"]=data[2][2];
            Health["VDRL"]=data[2][3];
            Health["HIV"]=data[2][4];
            Health["HbS Ag"]=data[2][5];
            Health["Blood group-RH"]=data[2][6];
            Health["CVS"]=data[2][7];
            Health["RS"]=data[2][8];
            Health["Pregnancy Type"]=data[2][9];
            fetch("https://plmc-c6c5c.firebaseio.com/Mothers/East Godavari/"+route[0]+"/"+route[1]+"/"+route[2]+"/"+route[3]+"/"+route[4]+"/Health Details.json",{
               method: "PATCH",
               body: JSON.stringify(Health)
            })
            .catch(err=>console.log(err))
            .then(res=>res.json())
            .then(parsedRes=>{
              console.log(parsedRes)
            })

      }
}
export const sendnormalhospitaldet=(route,data)=>{
    return dispatch=>{
           dispatch(sendemergencyhosdet(route,data));
           var Ndelivery={};
           Ndelivery["EDD"]=data[2][1];
           Ndelivery["Hospital Name"]=data[3][0];
           Ndelivery["contact"]=data[3][1];
           Ndelivery["mobile no"]=data[3][2];
           fetch("https://plmc-c6c5c.firebaseio.com/Mothers/East Godavari/"+route[0]+"/"+route[1]+"/"+route[2]+"/"+route[3]+"/"+route[4]+"/Normal Hospital Details.json",{
              method: "PATCH",
              body: JSON.stringify(Ndelivery)
           })
           .catch(err=>console.log(err))
           .then(res=>res.json())
           .then(parsedRes=>{
             console.log(parsedRes)
           })
    }
}
export const sendemergencyhosdet=(route,data)=>{
     return dispatch=>{
            dispatch(sendbloodbankdetails(route,data));
            var emergency={};
            emergency["Hospital Name"]=data[4][0];
            emergency["contact"]=data[4][1];
            emergency["mobile no"]=data[4][2];
            fetch("https://plmc-c6c5c.firebaseio.com/Mothers/East Godavari/"+route[0]+"/"+route[1]+"/"+route[2]+"/"+route[3]+"/"+route[4]+"/emergency Hospital Details.json",{
               method: "PATCH",
               body: JSON.stringify(emergency)
            })
            .catch(err=>console.log(err))
            .then(res=>res.json())
            .then(parsedRes=>{
              console.log(parsedRes)
            })
     }
}
export const sendbloodbankdetails=(route,data)=>{
      return dispatch=>{
              dispatch(setbloodbankdetails(data[5]));
              var bloodbank={};
              bloodbank["Blood bank Name"]=data[5][0];
              bloodbank["contact"]=data[5][1];
              bloodbank["mobile no"]=data[5][2];
              fetch("https://plmc-c6c5c.firebaseio.com/Mothers/East Godavari/"+route[0]+"/"+route[1]+"/"+route[2]+"/"+route[3]+"/"+route[4]+"/Blood bank Details.json",{
                 method: "PATCH",
                 body: JSON.stringify(bloodbank)
              })
              .catch(err=>console.log(err))
              .then(res=>res.json())
              .then(parsedRes=>{
                console.log(parsedRes)
              })
      }
}
export const getanmdata =()=>{
   return dispatch=>{

     fetch("https://plmc-c6c5c.firebaseio.com/Anms/East Godavari/.json")
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
         dispatch(setanmdata(data,mandals));
     })

   };
};



export const getvillagesdata =(mandal,phc,sc)=>{
   return dispatch=>{

     fetch("https://plmc-c6c5c.firebaseio.com/Data/East Godavari/.json")
     .catch(err=>{
         alert("somthing went wrong sorry")
         console.log(err)
     })
     .then(res=>res.json())
     .then(parsedRes=>{
         var data =[];
         console.log(parsedRes[mandal][phc][sc])
         for(let value in parsedRes[mandal][phc][sc]){
             var obj={label:parsedRes[mandal][phc][sc][value],value:parsedRes[mandal][phc][sc][value]}
             data.push(obj)
         }

         dispatch(setvillagesdata(data));
     })

   };
};

export const setvillagesdata=(data)=>{
     return{
           type:SET_VILLAGE_DATA,
           Data: data
     }
}


export const setanmdata =(data,mandals)=>{
      return{
         type: SET_ANM_DATA,
         Data: data,
         Mandals:mandals
      }
}
