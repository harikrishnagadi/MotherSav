import React from 'react';
import { StyleSheet,ScrollView,KeyboardAvoidingView,NativeModules,LayoutAnimation,Animated, Easing,Dimensions } from 'react-native';
import {View, Colors,Picker, TextInput,Button, Text, WheelPicker,WheelPickerItem,Card} from 'react-native-ui-lib';
import LottieView from 'lottie-react-native';
import Icon from '../assets/arrow.png';
import {connect } from 'react-redux';
import Background from '../Components/Background';
import {getdata,senddata} from '../../Store/actions/index';
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
       anmname:'',
       mobileno:'',
       anmid:'',
       anmnameerror:'',
       moberror:'',
       phcs:[],
       subcentres:[],
       w: 150,
       h: 70,
       b:80,
       progress: new Animated.Value(0),
       animate:''

     }
     mandalbuttonstate=false,
     phcbuttonstate=false,
     scbuttonstate=false,
     anmnamebuttonstate=false,
     mobilebuttonstate=false,
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
      LayoutAnimation.spring();
      this.setState({w: this.state.w-135, h: this.state.h-55})
      //generate ANMid
     var ANMid=Math.random().toString(36).substr(2, 6).toUpperCase();
     console.log(ANMid)
     this.setState({anmid: ANMid},()=>{
       this.props.onSubmit(this.state);
       this.showmodal()
     })
  }
  showmodal=()=>{
    this.props.navigator.showModal({
 screen: "project.sucess_Modal", // unique ID registered with Navigation.registerScreen
 passProps: {name:this.state.anmname,ID:this.state.anmid}, // simple serializable object that will pass as props to the modal (optional)
 navigatorStyle: {
       navBarHidden: true,
       animation:true,
       animationType:'slide-up'
 }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
 animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
});
  }

  setbuttonvalue=()=>  {
   value = !(phcbuttonstate&&mandalbuttonstate&&scbuttonstate&&anmnamebuttonstate&&mobilebuttonstate)
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
  render() {

    return (
      <View background-black  style={{flex:1,flexDirection:'row',width:width,height:height}}>
      <AnimatedLinearGradient customColors={presetColors.instagram} speed={4000}/>
      <View flex  paddingB-0>
      <ScrollView showsVerticalScrollIndicator={false} paddingB-0>
        <View background-black  style={{width:width,height:height/3,position:'absolute',marginTop:0}}>

        </View>
      <View   paddingH-25 paddingT-0 paddingB-0>

        <Card  paddingT-20 marginT-120>
              <Text center marginT-40 text50 black>ANM Registration</Text>
         <View paddingH-25 paddingT-30 paddingB-50>

           <View paddingB-20>
           <Picker
             paddingB-150
             text20
            placeholder="Pick a Mandal"
            value={this.state.Mandal}
            enableModalBlur={false}
            onChange={item => {
                this.setState({Mandal: item,PHC:'',sc:''},()=>{
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
             this.setState({PHC: item,sc:''},()=>{
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
      <TextInput  text80 placeholder="ANM Name"  dark10
        onChangeText={text => {
                                if(text=='')
                                {
                                    anmnamebuttonstate= false
                                    this.setbuttonvalue();
                                    this.setState({anmnameerror: 'This field is required'})
                                }
                               else if(text!=null)
                               {
                                   anmnamebuttonstate= true
                                   this.setbuttonvalue();
                                 this.setState({anmname: text,anmnameerror: ''})
                               }
                             }
                           }
        error={this.state.anmnameerror}/>
        <View  marginT-10 marginB-10>
        <TextInput  text80 placeholder="Mobile Number"  dark10
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
            this.setState({moberror: 'Enter valid number'})

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
        Data:state.anmdetails.data,
        Mandals:state.anmdetails.mandals

      } ;
};

const mapDispatchToProps=(dispatch)=>{
    return{
       onSubmit: (state) => {dispatch(senddata(state))},
       onLoadData:()=> {dispatch(getdata())}

    };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
//export default App;
