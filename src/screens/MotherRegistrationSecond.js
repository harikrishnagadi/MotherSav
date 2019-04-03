import React from 'react';
import { StyleSheet,ScrollView,KeyboardAvoidingView,NativeModules,LayoutAnimation,Animated, Easing,Dimensions } from 'react-native';
import {View, Colors,Picker, TextInput,Button, Text,Card} from 'react-native-ui-lib';
import LottieView from 'lottie-react-native';
import Icon from '../assets/arrow.png';
import {connect } from 'react-redux';
import Background from '../Components/Background';
import {getvillagesdata,sendmotherpdata} from '../../Store/actions/index';
import AnimatedLinearGradient, {presetColors} from 'react-native-animated-linear-gradient';
import ages from '../assets/age'
import _ from 'lodash';

var {height, width} = Dimensions.get('window');



class App extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       village: '',
       mother:'',
       age:'',
       mobileno:'',
       husbandname:'',
       aadhar:'',
       Address1:'',
       Address2:'',
       add1error:'',
       add2error:'',
       aadharerror:'',
       ageerror:'',
       anmiderror:'',
       moberror:'',
       mothernameerror:'',
       villages:[],

     }
     villagebuttonstate=false,
     agebuttonstate=false,
     add1buttonstate=false,
     add2buttonstate=false,
     mobilebuttonstate=false,
     aadharbuttonstate=false,
     motherbuttonstate=false,
     buttonstate= true,  //change this to setState
     buttonpressed=false

   }


  componentDidMount=()=>{
  //  console.log(this.props.mandal);
    var mand = this.props.mandal
    var  phc = this.props.phc
    var sc = this.props.sc
   this.props.onLoadData(mand,phc,sc);
  }



  submithandler = ()=>{
    var obj=[];
    var mothername=this.state.mother;
    var age = this.state.age["value"];
    var husname=this.state.husbandname;
    var mobile=this.state.mobileno;
    var aadhar=this.state.aadhar;
    var add1=this.state.Address1;
    var add2=this.state.Address2;
    var village=this.state.village["value"];
    obj.push(mothername);
    obj.push(age);
    obj.push(husname);
    obj.push(mobile);
    obj.push(aadhar);
    obj.push(add1);
    obj.push(add2);
    obj.push(village);
    this.props.onSubmit(obj);
    this.shownext();

  }
  shownext=()=>{
   this.props.navigator.push({

 screen: "project.Mother_Registration_third", // unique ID registered with Navigation.registerScreen
 // simple serializable object that will pass as props to the modal (optional)
 navigatorStyle: {
       navBarHidden: true,
       animation:true,
       animationType:'slide-up'
 }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
 animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
});
  }

  setbuttonvalue=()=>  {
   value = !(motherbuttonstate&&agebuttonstate&&add1buttonstate&&add2buttonstate&&villagebuttonstate&&aadharbuttonstate&&mobilebuttonstate)
   if(value!=buttonstate){
     buttonstate=value;
     this.render;
   }
  }



  render() {
    //alert(ages);
    return (
      <View background-black style={{flex:1,flexDirection:'row',width:width,height:height}}>
      <AnimatedLinearGradient customColors={presetColors.instagram} speed={8000}/>
      <View flex  paddingB-0>
      <ScrollView showsVerticalScrollIndicator={false} paddingB-0>
        <View background-black  style={{width:width,height:height/3,position:'absolute',marginTop:0}}>
        </View>
      <View   paddingH-25 paddingT-0 paddingB-0>
        <View marginT-0 paddingT-20 paddingB-50 center>
        <Text black10 text30 >Mother Registration</Text>
        <Text blue70 text50 >Mother Details</Text>
        </View>
        <Card background-blue30 >
         <View paddingH-25 paddingT-50 paddingB-50>
           <View paddingB-10>
           <Picker
             paddingB-150
             text20
            placeholder="Pick a Village"
            value={this.state.village}
            enableModalBlur={false}
            onChange={item => {
                this.setState({village: item},()=>{
                villagebuttonstate=true;
              })
            }
           }
            topBarProps={{title: 'villages'}}
            style={{color: Colors.dark10}}
            showSearch
            searchPlaceholder={"Search a village"}
            searchStyle={{color: Colors.blue30, placeholderTextColor: Colors.dark50}}>
            {_.map(this.props.Data, option => <Picker.Item key={option.value} value={option} disabled={option.disabled} />)}
          </Picker>
          </View>

          <TextInput text80 placeholder="Mother Name"  dark10
            onChangeText={text => {
                                    if(text=='')
                                    {
                                        motherbuttonstate= false
                                        this.setbuttonvalue();
                                        this.setState({mothernameerror: 'This field is required'})
                                    }
                                   else if(text!=null)
                                   {
                                       motherbuttonstate= true
                                       this.setbuttonvalue();
                                     this.setState({mother: text,mothernameerror: ''})
                                   }
                                 }
                               }
            error={this.state.mothernameerror}/>
              <View paddingB-10>
              <Picker
                paddingB-150
                text20
               placeholder="Pick Age"
               value={this.state.age}
               enableModalBlur={false}
               onChange={item => {
                   this.setState({age: item},()=>{
                   agebuttonstate=true;
                 })
               }
              }
               topBarProps={{title: 'Age'}}
               style={{color: Colors.dark10}}
               showSearch
               searchPlaceholder={"pick age"}
               searchStyle={{color: Colors.blue30, placeholderTextColor: Colors.dark50}}>
               {_.map(ages, option => <Picker.Item key={option.value} value={option} disabled={option.disabled} />)}
             </Picker>
             </View>
             <TextInput text80 placeholder="Husband's Name"  dark10
               onChangeText={text => {
                                       if(text.trim()=='')
                                       {

                                           this.setState({husbandname:null})
                                       }
                                      else if(text.trim()!=null)
                                      {

                                        this.setState({husbandname:text.trim()})
                                      }
                                    }
                                  }
            />
            <TextInput text80 placeholder="Mobile Number"  dark10
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
             <TextInput text80 placeholder="Aadhar ID" dark10
               keyboardType="numeric"
               onChangeText={text=>{
                         if(text.trim()!=null&&text.trim().length==12)
                           {
                               aadharbuttonstate= true
                               this.setbuttonvalue();
                             this.setState({aadhar: text.trim(),aadharerror: ''})
                           }
                           else if(text.trim()!=null){
                               aadharbuttonstate= false;
                               this.setbuttonvalue();
                                this.setState({aadhar: text.trim(),aadharerror: ''})
                           }
                          else if(text.trim()=='')
                            {
                             aadharbuttonstate= false
                             this.setbuttonvalue();
                             this.setState({aadharerror: 'This field is required'})
                           }
               }}
               onEndEditing={()=>{
                 if(this.state.aadhar.length!=12)
                 {
                 aadharbuttonstate= false
                 this.setbuttonvalue();
                 this.setState({aadharerror: 'Enter valid number',aadhar:''})
                }
               }
               }
             error={this.state.aadharerror}/>
             <TextInput text80 placeholder="D.NO & street"  dark10
               onChangeText={text => {
                                       if(text=='')
                                       {
                                           add1buttonstate= false
                                           this.setbuttonvalue();
                                           this.setState({add1error: 'This field is required'})
                                       }
                                      else if(text!=null)
                                      {
                                          add1buttonstate= true
                                          this.setbuttonvalue();
                                        this.setState({Address1: text,add1error: ''})
                                      }
                                    }
                                  }
               error={this.state.add1error}/>
               <TextInput text80 placeholder="village/City/Mandal"  dark10
                 onChangeText={text => {
                                         if(text=='')
                                         {
                                             add2buttonstate= false
                                             this.setbuttonvalue();
                                             this.setState({add2error: 'This field is required'})
                                         }
                                        else if(text!=null)
                                        {
                                            add2buttonstate= true
                                            this.setbuttonvalue();
                                          this.setState({Address2: text,add2error: ''})
                                        }
                                      }
                                    }
                 error={this.state.add2error}/>


        </View>
       </Card>
       </View>
       <View marginT-25 center  >
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
      //  motherid:state.anmdetails.smotherid,
        Data:state.motherdetails.villagedata,


      } ;
};

const mapDispatchToProps=(dispatch)=>{

    return{
       onSubmit: (obj) => {dispatch(sendmotherpdata(obj))},
       onLoadData:(mand,phc,sc)=> {dispatch(getvillagesdata(mand,phc,sc))}

    };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
//export default App;
