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
import {sendcheckupdata,update_gethealthdata,update_gethealthanmdata} from '../../Store/actions/index';

const urineresults = [
  { label: "Done", value: "Done" },
  { label: "Not done", value: "Not done" }
];

const FHS = [
  { label: "Done", value: "Done" },
  { label: "Not done", value: "Not done" }
];

const IFA = [
  { label: "Done", value: "Done" },
  { label: "Not done", value: "Not done" }
];


const TT = [
  { label: "Done", value: "Done" },
  { label: "Not Done", value: "Not Done" }
];
class AddCheckupDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {

      weight: "",
      urine: "",
      TT: "",
      FHS: "",
      ifa: "",
      cvssys: "",
      cvsdia: "",
      hb: "",
      showToast: false,
      error: "",
      buttonstate:true,
      toastcolor:"red"
    };

    weightbuttonstate = false;
    urinebuttonstate = false;
    hieghtbuttonstate = false;
    TTbuttonstate = false;
    FHSbuttonstate = false;
    IFAbuttonstate = false;
    cvssysbuttonstate = false;
    cvsdiabuttonstate = false;
    hbbuttonstate = false;
    buttonstate = true;

  }


  setbuttonvalue=()=>{
    value = !(urinebuttonstate &&weightbuttonstate&&TTbuttonstate&&FHSbuttonstate&&IFAbuttonstate&&cvssysbuttonstate&&cvsdiabuttonstate&&hbbuttonstate);
    if (value!=this.state.buttonstate) {

       this.setState({buttonstate:value},()=>{
        //  alert(this.state.buttonstate);
       })
    }
  }
  submithandler=()=>{
         var obj=[];
         var weight = this.state.weight;
         var urine = this.state.urine["value"];
         var TT = this.state.TT["value"];
         var FHS=this.state.FHS["value"];
         var ifa = this.state.ifa["value"];
         var cvs = this.state.cvssys+"/"+this.state.cvsdia;
         var hb=this.state.hb;
         mandal=this.props.Data["0"]["Anm Details"]["Mandal"];
         phc=this.props.Data["0"]["Anm Details"]["PHC"];
         sc=this.props.Data["0"]["Anm Details"]["SC"];
         Motherid=this.props.motherID;
         village=this.props.Data["0"]["Personal Details"]["village"];
         anmid=this.props.Data["0"]["Anm Details"]["Anm ID"];

         obj.push(mandal);
         obj.push(phc);
         obj.push(sc);
         obj.push(village);
         obj.push(Motherid);
         obj.push(weight);
         obj.push(urine);
         obj.push(TT);
         obj.push(FHS);
         obj.push(ifa);
         obj.push(cvs);
         obj.push(hb);
         this.props.onSubmit(obj);



         var data=[];
         data.push(mandal);
         data.push(phc);
         data.push(sc);
         data.push(village);
         data.push(Motherid);
         data.push(anmid);

         //setTimeout(this.submithandlerlast(data),10000)
         this.submithandlerlast(data);
  }

  submithandlerlast=(obj)=>{
    this.showToast();
    this.props.ongethealthData(obj);

     this.shownext(obj);
    //setTimeout(this.shownext(obj),1000);


  }
  showToast=()=>{
     this.setState({
          toastcolor:"green",
          showToast:true,
          error:"Created a checkup List Sucessfully"
     })



  }

  shownext=(obj)=>{

    this.props.navigator.push({
    screen: "project.Update_Main", // unique ID registered with Navigation.registerScreen
    passProps: {mandal:obj[0],phc:obj[1],sc:obj[2],anmid:obj[5],motherID:obj[4]}, // simple serializable object that will pass as props to the modal (optional)
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
            <ScrollView showsVerticalScrollIndicator={false} paddingB-0>
              <View marginT-50 paddingB-30>

              </View>



              <View
                background-white
                marginB-30
                style={{
                  flex: 1,
                  height: 50,
                  width: width - 50,
                  borderRadius: 5,
                  flexDirection: "row"
                }}
              >
                <View paddingB-10 marginH-10 paddingT-15>
                  <Text text60 black>
                    Weight
                  </Text>
                </View>

                <View
                  marginT-8
                  marginB-10
                  style={{
                    width: 60,
                    height: 35,
                    left: 120,
                    borderColor: "rgba(0,0,0,0.1)",
                    borderRadius: 5,
                    borderWidth: 1.5
                  }}
                >
                  <TextInput
                    hideUnderline
                    keyboardType="numeric"
                    onChangeText={text => {
                      if (text.trim() == "") {
                        this.setState(
                          {
                            showToast: true,
                            error: "Weight cannot be left blank"
                          },
                          () => {
                            wieghtbuttonstate = false;
                            this.setbuttonvalue();
                          }
                        );
                      } else {
                        this.setState({ weight: text.trim() });
                      }
                    }}
                    onEndEditing={() => {
                      if ((this.state.weight < 20 || this.state.weight > 400)) {
                        this.setState(
                          {
                            showToast: true,
                            error: "Enter Correct Weight"
                          },
                          () => {
                            weightbuttonstate = false;
                            this.setbuttonvalue();

                          }
                        );
                      } else if (20 < this.state.weight < 400) {

                        this.setState(
                          {
                            showToast: false,
                            error: ""
                          },
                          () => {

                            weightbuttonstate = true;
                            this.setbuttonvalue();


                          }
                        );
                      }
                    }}
                  />
                </View>
                <View style={{ width: 40, left: 125, top: 20 }}>
                  <Text text80 style={{ opacity: 0.9 }}>
                    kg
                  </Text>
                </View>
              </View>

              <View
                background-white
                marginB-30
                style={{
                  flex: 1,
                  height: 50,
                  width: width - 50,
                  borderRadius: 5,
                  flexDirection: "row"
                }}
              >
                <View paddingB-10 marginH-10 paddingT-15>
                  <Text text60 black>
                    urine
                  </Text>
                </View>

                <View
                  marginT-12
                  marginB-10
                  style={{
                    width: 110,
                    height: 35,
                    left: 120,
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 0
                  }}
                >
                  <Picker
                    placeholder="Pick a Result"
                    centered
                    value={this.state.urine}
                    enableModalBlur={false}
                    onChange={item => {
                      this.setState(
                        {
                          urine: item
                        },
                        () => {

                          urinebuttonstate = true;
                          this.setbuttonvalue();
                          //alert(urinebuttonstate);
                          //alert(this.state.urine);

                        }
                      );
                    }}
                    topBarProps={{ title: "Results" }}
                    style={{ color: Colors.dark10 }}
                    showSearch
                    hideUnderline
                    searchPlaceholder={"Select a result"}
                    searchStyle={{
                      color: Colors.blue30,
                      placeholderTextColor: Colors.dark50
                    }}
                  >
                    {_.map(urineresults, option => (
                      <Picker.Item
                        key={option.value}
                        value={option}
                        disabled={option.disabled}
                      />
                    ))}
                  </Picker>
                </View>
              </View>

              <View
                background-white
                marginB-30
                style={{
                  flex: 1,
                  height: 50,
                  width: width - 50,
                  borderRadius: 5,
                  flexDirection: "row"
                }}
              >
                <View paddingB-10 marginH-10 paddingT-15>
                  <Text text60 black>
                    TT
                  </Text>
                </View>

                <View
                  marginT-12
                  marginB-10
                  style={{
                    width: 110,
                    height: 35,
                    left: 135,
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 0
                  }}
                >
                  <Picker
                    placeholder="Pick a Result"
                    centered
                    value={this.state.TT}
                    enableModalBlur={false}
                    onChange={item => {
                      this.setState(
                        {
                          TT: item
                        },
                        () => {

                          TTbuttonstate = true;
                          this.setbuttonvalue();

                        }
                      );
                    }}
                    topBarProps={{ title: "Results" }}
                    style={{ color: Colors.dark10 }}
                    showSearch
                    hideUnderline
                    searchPlaceholder={"Select a result"}
                    searchStyle={{
                      color: Colors.blue30,
                      placeholderTextColor: Colors.dark50
                    }}
                  >
                    {_.map(TT, option => (
                      <Picker.Item
                        key={option.value}
                        value={option}
                        disabled={option.disabled}
                      />
                    ))}
                  </Picker>
                </View>
              </View>

              <View
                background-white
                marginB-30
                style={{
                  flex: 1,
                  height: 50,
                  width: width - 50,
                  borderRadius: 5,
                  flexDirection: "row"
                }}
              >
                <View paddingB-10 marginH-10 paddingT-15>
                  <Text text60 black>
                    FHS
                  </Text>
                </View>

                <View
                  marginT-12
                  marginB-10
                  style={{
                    width: 110,
                    height: 35,
                    left: 108,
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 0
                  }}
                >
                  <Picker
                    placeholder="Pick a Result"
                    centered
                    value={this.state.FHS}
                    enableModalBlur={false}
                    onChange={item => {
                      this.setState(
                        {
                          FHS: item
                        },
                        () => {
                          ;
                          FHSbuttonstate = true;
                          this.setbuttonvalue();

                        }
                      );
                    }}
                    topBarProps={{ title: "Results" }}
                    style={{ color: Colors.dark10 }}
                    showSearch
                    hideUnderline
                    searchPlaceholder={"Select a result"}
                    searchStyle={{
                      color: Colors.blue30,
                      placeholderTextColor: Colors.dark50
                    }}
                  >
                    {_.map(FHS, option => (
                      <Picker.Item
                        key={option.value}
                        value={option}
                        disabled={option.disabled}
                      />
                    ))}
                  </Picker>
                </View>
              </View>

              <View
                background-white
                marginB-30
                style={{
                  flex: 1,
                  height: 50,
                  width: width - 50,
                  borderRadius: 5,
                  flexDirection: "row"
                }}
              >
                <View paddingB-10 marginH-10 paddingT-15>
                  <Text text60 black>
                    IFA
                  </Text>
                </View>

                <View
                  marginT-12
                  marginB-10
                  style={{
                    width: 110,
                    height: 35,
                    left: 140,
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 0
                  }}
                >
                  <Picker
                    placeholder="Pick a Result"
                    centered
                    value={this.state.ifa}
                    enableModalBlur={false}
                    onChange={item => {
                      this.setState(
                        {
                          ifa: item
                        },
                        () => {

                          IFAbuttonstate = true;
                          this.setbuttonvalue();

                        }
                      );
                    }}
                    topBarProps={{ title: "Results" }}
                    style={{ color: Colors.dark10 }}
                    showSearch
                    hideUnderline
                    searchPlaceholder={"Select a result"}
                    searchStyle={{
                      color: Colors.blue30,
                      placeholderTextColor: Colors.dark50
                    }}
                  >
                    {_.map(IFA, option => (
                      <Picker.Item
                        key={option.value}
                        value={option}
                        disabled={option.disabled}
                      />
                    ))}
                  </Picker>
                </View>
              </View>

              <View
                background-white
                marginB-30
                style={{
                  flex: 1,
                  height: 50,
                  width: width - 50,
                  borderRadius: 5,
                  flexDirection: "row"
                }}
              >
                <View paddingB-10 marginH-10 paddingT-15>
                  <Text text60 black>
                    CVS
                  </Text>
                </View>
                <View
                  marginT-12
                  marginB-10
                  style={{ width: 50, height: 35, left: 140 }}
                >
                  <TextInput
                    hideUnderline
                    placeholder="Sys"
                    keyboardType="numeric"
                    onChangeText={text => {
                      if (text.trim() == "") {
                        this.setState(
                          {
                            showToast: true,
                            error: "This cannot be left blank"
                          },
                          () => {
                            cvssysbuttonstate = false;
                            this.setbuttonvalue();
                          }
                        );
                      } else {
                        this.setState({ cvssys: text.trim() });
                      }
                    }}
                    onEndEditing={() => {
                      if (this.state.cvssys < 70 || this.state.cvssys > 190) {
                        this.setState(
                          {
                            showToast: true,
                            error: "Enter Correct Value",
                            cvssys: ""
                          },
                          () => {
                            cvssysbuttonstate = false;
                            this.setbuttonvalue();
                          }
                        );
                      } else if (70 < this.state.cvssys < 190) {

                        this.setState(
                          {
                            showToast: false,
                            error: ""
                          },
                          () => {

                            cvssysbuttonstate = true;
                            this.setbuttonvalue;

                          }
                        );
                      }
                    }}
                  />
                </View>
                <View paddingT-12 style={{ left: 130 }}>
                  <Text text50>/</Text>
                </View>
                <View
                  marginT-12
                  marginB-10
                  style={{ width: 50, height: 35, left: 140 }}
                >
                  <TextInput
                    hideUnderline
                    placeholder="Dia"
                    keyboardType="numeric"
                    onChangeText={text => {
                      if (text.trim() == "") {
                        this.setState(
                          {
                            showToast: true,
                            error: "This cannot be left blank"
                          },
                          () => {
                            cvsdiabuttonstate = false;
                            this.setbuttonvalue();
                          }
                        );
                      } else {
                        this.setState({ cvsdia: text.trim() });
                      }
                    }}
                    onEndEditing={() => {
                      if (this.state.cvsdia < 40 || this.state.cvsdia > 100) {
                        this.setState(
                          {
                            showToast: true,
                            error: "Enter Correct value",
                            cvsdia: ""
                          },
                          () => {
                            cvsdiabuttonstate = false;
                            this.setbuttonvalue();
                          }
                        );
                      } else if (40 < this.state.cvsdia < 100) {

                        this.setState(
                          {
                            showToast: false,
                            error: ""
                          },
                          () => {

                            cvsdiabuttonstate = true;
                            this.setbuttonvalue();

                          }
                        );
                      }
                    }}
                  />
                </View>
              </View>

              <View
                background-white
                marginB-30
                style={{
                  flex: 1,
                  height: 50,
                  width: width - 50,
                  borderRadius: 5,
                  flexDirection: "row"
                }}
              >
                <View paddingB-10 marginH-10 paddingT-15>
                  <Text text60 black>
                    HB%
                  </Text>
                </View>



                <View
                  marginT-8
                  marginB-10
                  style={{
                    width: 60,
                    height: 35,
                    left: 120,
                    borderColor: "rgba(0,0,0,0.1)",
                    borderRadius: 5,
                    borderWidth: 1.5
                  }}
                >
                  <TextInput
                    hideUnderline
                    keyboardType="numeric"
                    onChangeText={text => {
                      if (text.trim() == "") {
                        this.setState(
                          {
                            showToast: true,
                            error: "hb% cannot be left blank"
                          },
                          () => {
                            hbbuttonstate = false;
                            this.setbuttonvalue();
                          }
                        );
                      } else {
                        this.setState({ hb: text.trim() });
                      }
                    }}
                    onEndEditing={() => {
                      if (this.state.hb < 0 || this.state.hb > 100) {
                        this.setState(
                          {
                            showToast: true,
                            error: "Enter Correct hb%"
                          },
                          () => {
                            hbbuttonstate = false;
                            this.setbuttonvalue();
                          }
                        );
                      } else if (0 < this.state.hb < 100) {

                        this.setState(
                          {
                            showToast: false,
                            error: ""
                          },
                          () => {

                            hbbuttonstate = true;
                            this.setbuttonvalue();

                          }
                        );
                      }
                    }}
                  />
                </View>



                <View style={{ width: 40, left: 125, top: 20 }}>
                  <Text text80 style={{ opacity: 0.9 }}>
                   %
                  </Text>
                </View>
              </View>






              <View marginT-20 paddingB-30 center>
                <Button  disabled= {this.state.buttonstate} enableShadow borderRadius={5} text70 black70 background-black
                   label="SUBMIT"
                onPress={this.submithandler}/>
              </View>
            </ScrollView>
          </View>
          <Toast
            visible={this.state.showToast}
            message={this.state.error}
            backgroundColor={this.state.toastcolor}
            onDismiss={() => this.setState({ showToast: false })}
            autoDismiss={3000}
          />
        </View>


      </View>
    );
  }


}


const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: "#eee",
    height: 350
  },
  text: {
    textAlign: "center",
    borderColor: "#bbb",
    padding: 10,
    backgroundColor: "#eee"
  },
  container: {
    flex: 1
    //backgroundColor: 'gray'
  }
});
const mapStateToProps=(state)=>{
     return{
        Data: state.updatedetails.healthdata
     }
}
const mapDispatchToProps=(dispatch)=>{

    return{
       onSubmit: (obj) => {dispatch(sendcheckupdata(obj))},
       ongethealthData:(obj)=>{dispatch(update_gethealthdata(obj))},
       ongethealthanmData:(obj)=>{dispatch(update_gethealthanmdata(obj))}
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(AddCheckupDetails);
//export default AddCheckupDetails;
