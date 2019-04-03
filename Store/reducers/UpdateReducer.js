import {UPDATE_SET_DATA,UPDATE_GET_HEALTH_DATA,UPDATE_GET_HEALTH_ANM_DATA} from '../actions/actionTypes';

const initialstate={
   data:[],
   mandals:[],
   healthdata:[],
   anmdata:[]
}

const reducer=(state=initialstate,action)=>{

   switch(action.type){



     case UPDATE_SET_DATA:
     return{
         ...state,
         data:action.Data,
         mandals:action.Mandals,
     }
      break;

     case UPDATE_GET_HEALTH_DATA:
       return{
         ...state,
        healthdata:action.Healthdata,
      }
       break;

       case UPDATE_GET_HEALTH_ANM_DATA:
         return{
           ...state,
          anmdata:action.anmHealthdata,
        }
         break;

     default:
       return state;
   }

}

export default reducer;
