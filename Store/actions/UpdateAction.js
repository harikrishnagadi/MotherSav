import{UPDATE_SET_DATA,UPDATE_GET_HEALTH_DATA,UPDATE_GET_HEALTH_ANM_DATA} from './actionTypes';
import moment from 'moment';
var countofcheckups=0;

function isEmpty(obj) {
  keys=[]
    for(key in obj)
    {
      keys.push(key)
    }
    countofcheckups=keys.length+1;

}



export const update_getdata=()=>{
  return dispatch=>{

    fetch("https://plmc-c6c5c.firebaseio.com/Mothers/East Godavari/.json")
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
        dispatch(update_setdata(data,mandals));
    })

  };
}




export const update_gethealthdata=(obj)=>{
  return dispatch=>{
  console.log(obj)
    fetch("https://plmc-c6c5c.firebaseio.com/Mothers/East Godavari/"+obj[0]+"/"+obj[1]+"/"+obj[2]+"/"+obj[3]+"/"+obj[4]+".json")
    .catch(err=>{
        alert("somthing went wrong sorry")
        console.log(err)
    })
    .then(res=>res.json())
    .then(parsedRes=>{
        const data =[];
        data.push(parsedRes);
        dispatch(update_gethdata(data));
        console.log(data);
    })

  };
}


export const update_gethealthanmdata=(obj)=>{
  return dispatch=>{
  console.log(obj)
    fetch("https://plmc-c6c5c.firebaseio.com/Anms/East Godavari/"+obj[0]+"/"+obj[1]+"/"+obj[2]+"/"+obj[5]+".json")
    .catch(err=>{
        alert("somthing went wrong sorry")
        console.log(err)
    })
    .then(res=>res.json())
    .then(parsedRes=>{
        const data =[];
        data.push(parsedRes);
        console.log(data);
        dispatch(update_gethealth_anmdata(data));
    })

  };
}

export const sendcheckupdatafinal=(obj)=>{


  time =moment().format('MMMM Do YYYY, h:mm:ss a');
   var data={}
   data["weight"]=obj[5];
   data["urine"]=obj[6];
   data["TT"]=obj[7];
   data["FHS"]=obj[8];
   data["IFA"]=obj[9];
   data["CVS"]=obj[10];
   data["HB%"]=obj[11];
   data["Time stamp"]=time;


   fetch("https://plmc-c6c5c.firebaseio.com/Mothers/East Godavari/"+obj[0]+"/"+obj[1]+"/"+obj[2]+"/"+obj[3]+"/"+obj[4]+"/Checkups/checkup"+countofcheckups+".json",{
      method: "PATCH",
      body: JSON.stringify(data)
   })
   .catch(err=>console.log(err))
   .then(res=>res.json())
   .then(parsedRes=>{
     console.log(parsedRes)
     //update_gethealthdata(obj);
   })

}

export const sendcheckupdata=(obj)=>{
    return dispatch=>{

       console.log(obj)

        fetch("https://plmc-c6c5c.firebaseio.com/Mothers/East Godavari/"+obj[0]+"/"+obj[1]+"/"+obj[2]+"/"+obj[3]+"/"+obj[4]+"/Checkups.json")
        .catch(err=>{
            alert("somthing went wrong sorry")
            console.log(err)
        })
        .then(res=>res.json())
        .then(parsedRes=>{
            checkups =[];
            console.log(parsedRes)
            checkups.push(parsedRes)
            isEmpty(checkups["0"])
            console.log(countofcheckups)
            //setTimeout(sendcheckupdatafinal(obj),1000);
            sendcheckupdatafinal(obj)
        })

      }


  }







export const update_setdata=(data,mandals)=>{
      return{
         type:UPDATE_SET_DATA,
         Data:data,
         Mandals:mandals
      }
}
export const update_gethdata=(data)=>{
      return{
        type:UPDATE_GET_HEALTH_DATA,
        Healthdata:data

      }
}
export const update_gethealth_anmdata=(data)=>{

      return{
         type:UPDATE_GET_HEALTH_ANM_DATA,
         anmHealthdata: data
      }
}
