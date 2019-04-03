import {SUBMIT_PERSONAL_DETAILS,
  SEND_ANM_DATA,
  SET_MOTHERP_DATA,
  SET_VILLAGE_DATA,
  SET_ANM_DATA,
  SET_MOTHER_H_DATA,
  SET_NORMAL_HOSPITAL_DETAILS,
  SET_BLOOD_BANK_DETAILS,
  SET_EMERGENCY_HOSPITAL_DETAILS} from '../actions/actionTypes'

const initialstate ={
  ANM_details:{},
  data:[],
  mandals:[],
  villagedata:[],
  Mother_p_details:{},
  Mother_h_details:{},
  Normal_hospital_details:{},
  Emergency_hospital_details:{},
  Blood_bank_details:{},
}




const reducer = (state = initialstate,action)=>{
  switch (action.type) {
    /*   case SUBMIT_PERSONAL_DETAILS:
       //alert("hey bloody!");
       return{
          ...state,
          sanmname:action.state.anmname,
          sanmMob: action.state.mobileno,
          sanmID:action.state.anmid,
          sMandal: action.state.Mandal,
          sPhc: action.state.PHC,
          sSubCentre:action.state.sc

       }*/
       case SEND_ANM_DATA:
       return{
            ...state,
            ANM_details:action.state

       }
       case SET_VILLAGE_DATA:
           return{
               ...state,
               villagedata:action.Data
           }
       case SET_ANM_DATA:
        return{
             ...state,
             data: action.Data,
             mandals:action.Mandals
        }
        case SET_MOTHERP_DATA:
        return{
           ...state,
           Mother_p_details:action.data
        }
        case  SET_MOTHER_H_DATA:
             //console.log(action.Data);
             return{
                 ...state,
             Mother_h_details:action.Data,
             }
        case SET_NORMAL_HOSPITAL_DETAILS:
             return{
                 ...state,
                Normal_hospital_details:action.Data,
             }
        case SET_EMERGENCY_HOSPITAL_DETAILS:
             return{
                 ...state,
                 Emergency_hospital_details:action.Data,
             }
        case SET_BLOOD_BANK_DETAILS:
           return{
               ...state,
               Blood_bank_details:action.Data
           }
       default:
          return state;

  }
}
export default reducer;
