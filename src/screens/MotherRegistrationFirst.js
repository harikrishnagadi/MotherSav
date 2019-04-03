import React from 'react';
import { StyleSheet,ScrollView,KeyboardAvoidingView,NativeModules,LayoutAnimation,Animated, Easing,Dimensions } from 'react-native';
import {View, Colors,Picker, TextInput,Button, Text, WheelPicker,WheelPickerItem,Card} from 'react-native-ui-lib';
import LottieView from 'lottie-react-native';
import Icon from '../assets/arrow.png';
import {connect } from 'react-redux';
import Background from '../Components/Background';
import {getanmdata,sendanmdata} from '../../Store/actions/index';
import AnimatedLinearGradient, {presetColors} from 'react-native-animated-linear-gradient'
import _ from 'lodash';

var {height, width} = Dimensions.get('window');
const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);
var custButton;
var seq='button';

class App extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       Mandal: '',
       PHC:'',
       sc:'',
       anmid:'',
       anmiderror:'',
       mobileno:'',
       ashaname:'',
       ashanameerror:'',
       moberror:'',
       phcs:[],
       subcentres:[],
       anmids:[],

     }
     mandalbuttonstate=false,
     phcbuttonstate=false,
     scbuttonstate=false,
     anmidbuttonstate=false,
     mobilebuttonstate=false,
     ashanamebuttonstate=false,
     buttonstate= true,
     buttonpressed=false,
     this.props.onLoadData();
     nanimate=true;

   }


  componentDidMount=()=>{

  }



  submithandler = ()=>{
       // Animate the update
          buttonpressed=true;
          var obj=[];
          var mand=this.state.Mandal["value"];
          var phc=this.state.PHC["value"];
          var sc=this.state.sc["value"];
         obj.push(mand);
         obj.push(phc);
         obj.push(sc);
         obj.push(this.state.anmid);
         var asha ={};
         asha["name"]=this.state.ashaname;
         asha["mobile"]=this.state.mobileno;

         obj.push(asha)
       this.props.onSubmit(obj);
       this.shownext()

  }
  shownext=()=>{
   this.props.navigator.push({
 screen: "project.Mother_Registration_second", // unique ID registered with Navigation.registerScreen
 passProps: {mandal:this.state.Mandal["value"],phc:this.state.PHC["value"],sc:this.state.sc["value"]}, // simple serializable object that will pass as props to the modal (optional)
 navigatorStyle: {
       navBarHidden: true,
       animation:true,
       animationType:'slide-up'
 }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
 animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
});
  }

  setbuttonvalue=()=>  {
   value = !(phcbuttonstate&&mandalbuttonstate&&ashanamebuttonstate&&mobilebuttonstate&&scbuttonstate&&anmidbuttonstate)
   if(value!=buttonstate){
     buttonstate=value;
     this.render;
   }
  }
  setphcs=()=>{
      var phc=[]
      var mand = this.state.Mandal["value"]
      for ( let key in this.props.Data[0][mand]){
         var obj = { label:key , value: key};
          phc.push(obj);
      }
      this.setState({phcs:phc})
  }
  setsubcentres=()=>{
       var sc=[]
       var mand = this.state.Mandal["value"]
       var ph = this.state.PHC["value"]
       for(let key in this.props.Data[0][mand][ph]){
             var obj={label:key,value:key};
             sc.push(obj);
       }
       this.setState({subcentres:sc})
  }
  setanmids=()=>{
    var ids=[]
    var mand = this.state.Mandal["value"]
    var ph = this.state.PHC["value"]
    var sc = this.state.sc["value"]
    for(let key in this.props.Data[0][mand][ph][sc]){

          ids.push(key);
    }
    this.setState({anmids:ids},()=>{
       console.log(this.state.anmids)
    })

  }
  render() {

    return (
      <View background-black style={{flex:1,flexDirection:'row',width:width,height:height}}>
      <AnimatedLinearGradient customColors={presetColors.instagram} speed={8000}/>
      <View flex  paddingB-0>
      <ScrollView showsVerticalScrollIndicator={false} paddingB-0>
        <View background-black  style={{width:width,height:height/3,position:'absolute',marginTop:0}}>
        </View>
      <View   paddingH-25 paddingT-0 paddingB-0>
        <View marginT-0 paddingT-70 paddingB-50 center>
        <Text white text50 >ANM Details</Text>
        </View>
        <Card background-blue30 >
         <View paddingH-25 paddingT-50 paddingB-50>
           <View paddingB-20>
           <Picker
             paddingB-150
             text20
            placeholder="Pick a Mandal"
            value={this.state.Mandal}
            enableModalBlur={false}
            onChange={item => {
                this.setState({Mandal: item,PHC:'',sc:'',anmids:[]},()=>{
                mandalbuttonstate=true;
                this.setphcs()
                this.setbuttonvalue()
              })
            }
           }
            topBarProps={{title: 'Mandals'}}
            style={{color: Colors.dark10}}
            showSearch
            searchPlaceholder={"Search a Mandal"}
            searchStyle={{color: Colors.blue30, placeholderTextColor: Colors.dark50}}>
            {_.map(this.props.Mandals, option => <Picker.Item key={option.value} value={option} disabled={option.disabled} />)}
          </Picker>
          </View>
          <View paddingB-20>
          <Picker
            paddingB-150
           placeholder="Pick a PHC"
           value={this.state.PHC}
           enableModalBlur={false}
           onChange={item => {
             this.setState({PHC: item,sc:'',anmids:[]},()=>{
             phcbuttonstate=true;
              this.setsubcentres()
              this.setbuttonvalue()})
           }
          }
           topBarProps={{title: 'PHCS'}}
           style={{color: Colors.dark10}}
           showSearch
           searchPlaceholder={"Search a PHC"}
           searchStyle={{color: Colors.blue30, placeholderTextColor: Colors.dark50}}>
           {_.map(this.state.phcs, option => <Picker.Item key={option.value} value={option} disabled={option.disabled} />)}
         </Picker>
       </View>
       <View paddingB-20>
         <Picker
           paddingB-150
          placeholder="Pick a Subcentre"
          value={this.state.sc}
          hideUnderline={false}
          enableModalBlur={false}
          onChange={item => {
                           this.setState({sc: item},()=>{
                              scbuttonstate=true;
                              this.setanmids()
                              this.setbuttonvalue()
                           })
          }}
          onPress={this.handlepicker}
          topBarProps={{title: 'Subcentres'}}
          style={{color: Colors.dark10}}
          showSearch
          searchPlaceholder={"Search a Subcentre"}
          searchStyle={{color: Colors.blue30, placeholderTextColor: Colors.dark50}}>
          {_.map(this.state.subcentres, option => <Picker.Item key={option.value} value={option}  />)}
        </Picker>
      </View>
      <TextInput paddingB-10 text80 placeholder="ANM ID"  dark10
        onChangeText={text => {
                                      if(this.state.anmids.length==0)
                                      {
                                      anmidbuttonstate= false
                                      this.setbuttonvalue();
                                      this.setState({anmiderror: 'Please fill above details First',anmid:''})
                                     }
                                     else{
                                       this.setState({anmid:text.trim(),anmiderror:''})
                                     }
                             }
                           }
         onEndEditing={()=>{
           if(this.state.anmids.length==0)
           {
           anmidbuttonstate= false
           this.setbuttonvalue();
           this.setState({anmiderror: 'Please fill above details First',anmid:''})
          }

        else if(this.state.anmid.trim()=='')
         {
             anmidbuttonstate= false
             this.setbuttonvalue();
             this.setState({anmiderror: 'This field is required',anmid:''})
         }
         else if(this.state.anmids.includes(this.state.anmid.trim()))
         {
             anmidbuttonstate= true
             this.setbuttonvalue();
           this.setState({anmiderror: ''})
         }
         else if(this.state.anmid.trim().length!==6){
           anmidbuttonstate= false
           this.setbuttonvalue();
           this.setState({anmiderror: 'Enter valid 6 digit ANMID',anmid:''})
         }
         else if(this.state.anmid.trim().length==6){
             if(!(this.state.anmids.includes(this.state.anmid.trim()))){
               anmidbuttonstate= false
               this.setbuttonvalue();
               this.setState({anmiderror: 'Please check your ANMID',anmid:''})
             }
         }

        }
      }
       error={this.state.anmiderror}/>
       <View marginT-10>
       <TextInput paddingB-10 text80 placeholder="ASHA Name"  dark10
         onChangeText={text => {
                                 if(text=='')
                                 {
                                     ashanamebuttonstate= false
                                     this.setbuttonvalue();
                                     this.setState({ashanameerror: 'This field is required'})
                                 }
                                else if(text!=null)
                                {
                                    ashanamebuttonstate= true
                                    this.setbuttonvalue();
                                  this.setState({ashaname: text,ashanameerror: ''})
                                }
                              }
                            }
         error={this.state.ashanameerror}/>
       </View>
       <View marginT-10>
       <TextInput text80 placeholder="ASHA Mobile Number"  dark10
         keyboardType = "numeric"
         onChangeText={text => {
                                 if(text.trim()!=null&&text.trim().length==10)
                                   {
                                       mobilebuttonstate= true
                                       this.setbuttonvalue();
                                     this.setState({mobileno: text.trim(),moberror: ''})
                                   }
                                   else if(text.trim()!=null){
                                       mobilebuttonstate= false;
                                       this.setbuttonvalue();
                                        this.setState({mobileno: text.trim(),moberror: ''})
                                   }
                                  else if(text.trim()=='')
                                    {
                                     mobilebuttonstate= false
                                     this.setbuttonvalue();
                                     this.setState({moberror: 'This field is required'})
                                   }


                              }
                            }
         onEndEditing={()=>{
           if(this.state.mobileno.length!=10)
           {
           mobilebuttonstate= false
           this.setbuttonvalue();
           this.setState({moberror: 'Enter valid number',mobileno:''})

          }
         }
         }
         error={this.state.moberror}/>
       </View>

        </View>
       </Card>
       </View>
       <View marginT-50 center  >
         <Button  disabled= {buttonstate} enableShadow borderRadius={5} text70 black-70 background-black
            label="Register"
         onPress={this.submithandler}/>
       </View>
     </ScrollView>
   </View>
</View>
    );
  }

}
const mapStateToProps=(state)=>{
      return{
      //  SCname:state.anmdetails.sSCname,
      //  SCid:state.anmdetails.sSCid,
      //  MotherID:state.anmdetails.sMotherid,
    //    ANMid:state.anmdetails.sANMid,
      //  ASHAid:state.anmdetails.sASHAid,
        Data:state.motherdetails.data,
        Mandals:state.motherdetails.mandals

      } ;
};

const mapDispatchToProps=(dispatch)=>{
    return{
       onSubmit: (state) => {dispatch(sendanmdata(state))},
       onLoadData:()=> {dispatch(getanmdata())}

    };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
//export default App;
