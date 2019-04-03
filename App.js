import {Navigation} from 'react-native-navigation';
import Landingpage from './src/screens/LandingPage';
import ANMRegistration from './src/screens/ANMRegistration';
import MotherRegistrationFirst from './src/screens/MotherRegistrationFirst';
import MotherRegistrationSecond from './src/screens/MotherRegistrationSecond';
import MotherRegistrationThird from './src/screens/MotherRegistrationThird';
import MotherRegistrationFourth from './src/screens/MotherRegistrationFourth';
import MotherRegistrationFifth from './src/screens/MotherRegistrationFifth';
import MotherRegistrationSixth from './src/screens/MotherRegistrationSixth';
import UpdateMain from './src/screens/UpdateMain';
import UpdateProfile from './src/screens/UpdateProfile';
import SucessModal from './src/screens/Modals/Anmregsucess';
import UpdateFirst from './src/screens/UpdateFirst';
import UpdateHealth from "./src/screens/UpdateHealth";
import UpdateANM from "./src/screens/UpdateANM";
import UpdateDelivery from "./src/screens/UpdateDelivery";
import UpdateCheckupList from "./src/screens/UpdateCheckUpList";
import AddCheckupDetails from "./src/screens/AddCheckupDetails";
import Showcheckup from "./src/screens/Showcheckup";
import {Provider} from 'react-redux';
import ConfigureStore from './Store/ConfigureStore';

//create Store
const store = ConfigureStore();

//Register screens
Navigation.registerComponent("project.Landing_page",()=>Landingpage);
Navigation.registerComponent("project.ANM_Registration",()=>ANMRegistration,store,Provider)
Navigation.registerComponent("project.sucess_Modal",()=>SucessModal);
Navigation.registerComponent("project.Mother_Registration_second",()=>MotherRegistrationSecond,store,Provider);
Navigation.registerComponent("project.Mother_Registration_first",()=>MotherRegistrationFirst,store,Provider);
Navigation.registerComponent("project.Mother_Registration_third",()=>MotherRegistrationThird,store,Provider);
Navigation.registerComponent("project.Mother_Registration_fourth",()=>MotherRegistrationFourth,store,Provider);
Navigation.registerComponent("project.Mother_Registration_fifth",()=>MotherRegistrationFifth,store,Provider);
Navigation.registerComponent("project.Mother_Registration_sixth",()=>MotherRegistrationSixth,store,Provider);
Navigation.registerComponent("project.Update_First",()=>UpdateFirst,store,Provider);
Navigation.registerComponent("project.Update_Main",()=>UpdateMain,store,Provider);
Navigation.registerComponent("project.Update_Profile",()=>UpdateProfile,store,Provider);
Navigation.registerComponent("project.Update_Health",()=>UpdateHealth,store,Provider);
Navigation.registerComponent("project.Update_ANM",()=>UpdateANM,store,Provider);
Navigation.registerComponent("project.Update_Delivery",()=>UpdateDelivery,store,Provider);
Navigation.registerComponent("project.Update_Checkup_List",()=>UpdateCheckupList,store,Provider);
Navigation.registerComponent("project.Update_new_Checkup",()=>AddCheckupDetails,store,Provider);
Navigation.registerComponent("project.Update_show_checkup",()=>Showcheckup,store,Provider);
//start the app
Navigation.startSingleScreenApp({
   screen: {
      screen:"project.Landing_page",
      navigatorStyle:{
               navBarHidden: true
             }

   }
})
