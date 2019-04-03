import {SUBMIT_PERSONAL_DETAILS, SET_DATA} from '../actions/actionTypes'

const initialstate ={
  sanmname: '',
  sanmMob:'',
  sMandal:'',
  sPhc:'',
  sSubCentre:'',
  sanmID:'',
  data:[],
  mandals:[]
}




const reducer = (state = initialstate,action)=>{
  switch (action.type) {
       case SUBMIT_PERSONAL_DETAILS:
       //alert("hey bloody!");
       return{
          ...state,
          sanmname:action.state.anmname,
          sanmMob: action.state.mobileno,
          sanmID:action.state.anmid,
          sMandal: action.state.Mandal,
          sPhc: action.state.PHC,
          sSubCentre:action.state.sc

       }
       case SET_DATA:
        return{
             ...state,
             data: action.Data,
             mandals:action.Mandals
        }
       default:
          return state;

  }
}
export default reducer;
