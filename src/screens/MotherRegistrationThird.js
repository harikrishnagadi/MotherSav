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
import {setmotherhdata} from '../../Store/actions/index';

const vrdlresults = [
  { label: "+ve", value: "postive" },
  { label: "-ve", value: "negative" }
];

const HbSAg = [
  { label: "+ve", value: "postive" },
  { label: "-ve", value: "negative" }
];

const BloodGroupRH = [
  { label: "+ve", value: "postive" },
  { label: "-ve", value: "negative" }
];
const PregType = [
  { label: "Normal", value: "Normal" },
  { label: "Risky", value: "Risky" },
  {label:"Very Risky",value:"Very Risk"}
];

const HIV = [
  { label: "Done", value: "Done" },
  { label: "Not Done", value: "Not Done" }
];
class ThirdRegScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      LMP: "YYYY-MM-DD",
      EDD: "YYYY-MM-DD",
      height: "",
      vdrl: "",
      hiv: "",
      hbsag: "",
      rh: "",
      cvssys: "",
      cvsdia: "",
      rs: "",
      PregType:"",
      showToast: false,
      error: "",
      buttonstate:true
    };
    Lmpbuttonstate = false;
    eddbuttonstate = false;
    vdrlbuttonstate = false;
    hieghtbuttonstate = false;
    hivbuttonstate = false;
    hbsagbuttonstate = false;
    rhbuttonstate = false;
    cvssysbuttonstate = false;
    cvsdiabuttonstate = false;
    rsbuttonstate = false;
    pregbuttonstate=false;
    buttonstate = true;
    this.onDayPress = this.onDayPress.bind(this);
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });

  }
  setbuttonvalue=()=>{
    value = !(Lmpbuttonstate &&eddbuttonstate &&vdrlbuttonstate &&hieghtbuttonstate&&hivbuttonstate&&hbsagbuttonstate&&rhbuttonstate&&cvssysbuttonstate&&cvsdiabuttonstate&&rsbuttonstate&&pregbuttonstate);
    if (value!=this.state.buttonstate) {

       this.setState({buttonstate:value},()=>{
        //  alert(this.state.buttonstate);
       })
    }
  }
  submithandler=()=>{
         var obj=[];
         var LMP =this.state.LMP;
         var EDD = this.state.EDD;
         var height = this.state.height;
         var vdrl = this.state.vdrl["value"];
         var hiv = this.state.hiv["value"];
         var hbsag=this.state.hbsag["value"];
         var rh = this.state.rh["value"];
         var cvs = this.state.cvssys+"/"+this.state.cvsdia;
         var rs=this.state.rs["value"];
         var preg=this.state.PregType["value"];
         obj.push(LMP);
         obj.push(EDD);
         obj.push(height);
         obj.push(vdrl);
         obj.push(hiv);
         obj.push(hbsag);
         obj.push(rh);
         obj.push(cvs);
         obj.push(rs);
         obj.push(preg);
         this.props.onSubmit(obj);
         this.shownext();
  }

  shownext=()=>{

   this.props.navigator.push({

 screen: "project.Mother_Registration_fourth", // unique ID registered with Navigation.registerScreen
 passProps:{EDD:this.state.EDD},// simple serializable object that will pass as props to the modal (optional)
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
                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(true);
                  }}
                >
                  <View
                    background-white
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
                        LMP
                      </Text>
                    </View>
                    <View
                      marginH-120
                      paddingH-15
                      paddingT-15
                      style={{ width: 150 }}
                    >
                      <Text black text70>
                        {this.state.LMP}
                      </Text>
                    </View>
                  </View>
                </TouchableHighlight>
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
                    EDD
                  </Text>
                </View>
                <View
                  marginH-120
                  paddingH-15
                  paddingT-15
                  style={{ width: 150 }}
                >
                  <Text black text70>
                    {this.state.EDD}
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
                    Height
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
                            error: "Height cannot be left blank"
                          },
                          () => {
                            hieghtbuttonstate = false;
                            this.setbuttonvalue();
                          }
                        );
                      } else {
                        this.setState({ height: text.trim() });
                      }
                    }}
                    onEndEditing={() => {
                      if (this.state.height < 100 || this.state.height > 200) {
                        this.setState(
                          {
                            showToast: true,
                            error: "Enter Correct Height"
                          },
                          () => {
                            hieghtbuttonstate = false;
                            this.setbuttonvalue();
                          }
                        );
                      } else if (100 < this.state.height < 200) {

                        this.setState(
                          {
                            showToast: false,
                            error: ""
                          },
                          () => {

                            hieghtbuttonstate = true;
                            this.setbuttonvalue();

                          }
                        );
                      }
                    }}
                  />
                </View>
                <View style={{ width: 40, left: 125, top: 20 }}>
                  <Text text80 style={{ opacity: 0.9 }}>
                    cms
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
                    VDRL
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
                    value={this.state.vdrl}
                    enableModalBlur={false}
                    onChange={item => {
                      this.setState(
                        {
                          vdrl: item
                        },
                        () => {

                          vdrlbuttonstate = true;
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
                    {_.map(vrdlresults, option => (
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
                    HIV
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
                    value={this.state.hiv}
                    enableModalBlur={false}
                    onChange={item => {
                      this.setState(
                        {
                          hiv: item
                        },
                        () => {

                          hivbuttonstate = true;
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
                    {_.map(HIV, option => (
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
                    HbSAg
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
                    value={this.state.hbsag}
                    enableModalBlur={false}
                    onChange={item => {
                      this.setState(
                        {
                          hbsag: item
                        },
                        () => {
                          ;
                          hbsagbuttonstate = true;
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
                    {_.map(HbSAg, option => (
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
                    RH
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
                    value={this.state.rh}
                    enableModalBlur={false}
                    onChange={item => {
                      this.setState(
                        {
                          rh: item
                        },
                        () => {

                          rhbuttonstate = true;
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
                    {_.map(BloodGroupRH, option => (
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
                    RS
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
                    value={this.state.rs}
                    enableModalBlur={false}
                    onChange={item => {
                      this.setState(
                        {
                          rs: item
                        },
                        () => {

                          rsbuttonstate = true;
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
                    {_.map(HIV, option => (
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
                    Pregnancy Type
                  </Text>
                </View>

                <View
                  marginT-12
                  marginB-10
                  style={{
                    width: 110,
                    height: 35,
                    left: 25,
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 0
                  }}
                >
                  <Picker
                    placeholder="Pick a Result"
                    centered
                    value={this.state.PregType}
                    enableModalBlur={false}
                    onChange={item => {
                      this.setState(
                        {
                          PregType: item
                        },
                        () => {

                          pregbuttonstate = true;
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
                    {_.map(PregType, option => (
                      <Picker.Item
                        key={option.value}
                        value={option}
                        disabled={option.disabled}
                      />
                    ))}
                  </Picker>
                </View>
              </View>


              <View marginT-20 paddingB-30 center>
                <Button  disabled= {this.state.buttonstate} enableShadow borderRadius={5} text70 black-70 background-black
                   label="Register"
                onPress={this.submithandler}/>
              </View>
            </ScrollView>
          </View>
          <Toast
            visible={this.state.showToast}
            message={this.state.error}
            backgroundColor="red"
            onDismiss={() => this.setState({ showToast: false })}
            autoDismiss={3000}
          />
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}
        >
          <View paddingT-200 paddingH-20>
            <View>
              <Calendar
                onDayPress={this.onDayPress}
                style={styles.calendar}
                hideExtraDays
                markedDates={{
                  [this.state.LMP]: {
                    selected: true,
                    disableTouchEvent: false,
                    selectedDotColor: "orange"
                  }
                }}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  onDayPress(day) {
    this.setState(
      {
        LMP: day.dateString
      },
      () => {

        Lmpbuttonstate = true;
        this.setbuttonvalue()

        this.setEDD(day);
      }
    );
  }

  setEDD = day => {
    if (day.month + 9 > 12) {
      day.month = day.month + 9 - 12;
      day.year = day.year + 1;
      if (day.day < 10) {
        this.setState(
          {
            EDD: day.year + "-0" + day.month + "-0" + day.day
          },
          () => {

            eddbuttonstate = true;
            this.setbuttonvalue();

          }
        );
      } else {
        this.setState(
          {
            EDD: day.year + "-0" + day.month + "-" + day.day
          },
          () => {

            eddbuttonstate = true;
            this.setbuttonvalue();

          }
        );
      }
    } else {
      this.setState(
        {
          EDD: day.dateString
        },
        () => {

          eddbuttonstate = true;
          this.setbuttonvalue();

        }
      );
    }
  };
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

     }
}
const mapDispatchToProps=(dispatch)=>{

    return{
       onSubmit: (obj) => {dispatch(setmotherhdata(obj))}
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(ThirdRegScreen);
//export default ThirdRegScreen;
