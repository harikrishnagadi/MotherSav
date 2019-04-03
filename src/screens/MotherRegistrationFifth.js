import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  Modal,
  TouchableHighlight
} from "react-native";
import {
  Text,
  View,
  Card,
  TextInput,
  Picker,
  Colors,
  WheelPicker,
  Button,
  Toast
} from "react-native-ui-lib";
import {connect } from 'react-redux';
import { Calendar } from "react-native-calendars";
import AnimatedLinearGradient, {
  presetColors
} from "react-native-animated-linear-gradient";
import sys from "../assets/sysndia";
import _ from "lodash";
var { height, width } = Dimensions.get("window");
import {setemergencyhospitaldetails} from '../../Store/actions/index';

class FifthRegScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {

        ehospitalname:'',
        econtactname:'',
        econtactmobileno:'',
        econtactmoberror:'',
        econtactnameerror:'',
        ehospitalnameerror:''
    };
    ehospitalbuttonstate=false;
    econtactnamebuttonstate=false;
    econtactnumbuttonstate=false;


  }


  setbuttonvalue=()=>{
    value = !(ehospitalbuttonstate&&econtactnumbuttonstate&&econtactnamebuttonstate);
    if (value!=this.state.buttonstate) {

       this.setState({buttonstate:value},()=>{
        //  alert(this.state.buttonstate);
       })
    }
  }
  submithandler=()=>{
    var obj=[];
    var hname = this.state.ehospitalname;
    var contactname = this.state.econtactname;
    var contactno = this.state.econtactmobileno;
    obj.push(hname);
    obj.push(contactname);
    obj.push(contactno);
    this.props.onSubmit(obj);
    this.shownext();

  }

  shownext=()=>{
   this.props.navigator.push({

 screen: "project.Mother_Registration_sixth", // unique ID registered with Navigation.registerScreen
 // simple serializable object that will pass as props to the modal (optional)
 navigatorStyle: {
       navBarHidden: true,
       animation:true,
       animationType:'slide-up'
 }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
 animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
});
  }

  render() {
    return (
      <View style={{ flex: 1, width: width, height: height }}>
        <AnimatedLinearGradient
          customColors={presetColors.instagram}
          speed={4000}
        />
        <ScrollView showsVerticalScrollIndicator={false} paddingB-0>
        <View flex paddingB-0>
          <View
            background-black
            style={{
              width: width,
              height: height / 5,
              position: "absolute",
              marginTop: 0
            }}
          />
          <View marginT-50 paddingH-25 paddingT-0 paddingB-0>
                <View paddingB-25>
                   <Card enableShadow style={{width:width-50,height:250,marginTop:20}}>
                     <Text text60 marginT-30 center>EMERGENCY DELIVERY</Text>
                     <View marginT-30 paddingH-20>
                       <TextInput text70 placeholder="Hospital Name"  dark10
                         onChangeText={text => {
                                                 if(text=='')
                                                 {
                                                     ehospitalbuttonstate= false
                                                     this.setbuttonvalue();
                                                     this.setState({ehospitalnameerror: 'This field is required'})
                                                 }
                                                else if(text!=null)
                                                {
                                                    ehospitalbuttonstate= true
                                                    this.setbuttonvalue();
                                                  this.setState({ehospitalname: text,ehospitalnameerror: ''})
                                                }
                                              }
                                            }
                         error={this.state.ehospitalnameerror}/>
                     </View>
                     <View paddingH-20>
                       <TextInput text70 placeholder="Contact Name"  dark10
                         onChangeText={text => {
                                                 if(text=='')
                                                 {
                                                     econtactnamebuttonstate= false
                                                     this.setbuttonvalue();
                                                     this.setState({econtactnameerror: 'This field is required'})
                                                 }
                                                else if(text!=null)
                                                {
                                                    econtactnamebuttonstate= true
                                                    this.setbuttonvalue();
                                                  this.setState({econtactname: text,econtactnameerror: ''})
                                                }
                                              }
                                            }
                         error={this.state.econtactnameerror}/>
                     </View>
                     <View paddingH-20>
                       <TextInput text80 placeholder="Contact Number"  dark10
                         keyboardType = "numeric"
                         onChangeText={text => {
                                                 if(text.trim()!=null&&text.trim().length==10)
                                                   {
                                                       econtactnumbuttonstate= true
                                                       this.setbuttonvalue();
                                                     this.setState({econtactmobileno: text.trim(),econtactmoberror: ''})
                                                   }
                                                   else if(text.trim()!=null){
                                                       econtactnumbuttonstate= false;
                                                       this.setbuttonvalue();
                                                        this.setState({econtactmobileno: text.trim(),econtactmoberror: ''})
                                                   }
                                                  else if(text.trim()=='')
                                                    {
                                                     econtactnumbuttonstate= false
                                                     this.setbuttonvalue();
                                                     this.setState({econtactmoberror: 'This field is required'})
                                                   }


                                              }
                                            }
                         onEndEditing={()=>{
                           if(this.state.econtactmobileno.length!=10)
                           {
                           econtactnumbuttonstate= false
                           this.setbuttonvalue();
                           this.setState({econtactmoberror: 'Enter valid number'})
                          }
                         }
                         }
                         error={this.state.econtactmoberror}/>
                     </View>
                   </Card>
                </View>

              <View marginT-20 paddingB-30 center>
                <Button  disabled= {this.state.buttonstate} enableShadow borderRadius={5} text70 black-70 background-black
                   label="Next"
                onPress={this.submithandler}/>
              </View>

          </View>

        </View>
   </ScrollView>
      </View>
    );
  }




}


const mapStateToProps=(state)=>{
     return{

     }
}
const mapDispatchToProps=(dispatch)=>{

    return{
       onSubmit: (obj) => {dispatch(setemergencyhospitaldetails(obj))}
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(FifthRegScreen);
//export default FifthRegScreen;
