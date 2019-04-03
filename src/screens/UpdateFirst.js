import React from 'react';
import { StyleSheet,ScrollView,KeyboardAvoidingView,NativeModules,LayoutAnimation,Animated, Easing,Dimensions } from 'react-native';
import {View, Colors,Picker, TextInput,Button, Text, WheelPicker,WheelPickerItem,Card} from 'react-native-ui-lib';
import LottieView from 'lottie-react-native';
import Icon from '../assets/arrow.png';
import {connect } from 'react-redux';
import Background from '../Components/Background';
import {update_getdata,update_gethealthdata,update_gethealthanmdata} from '../../Store/actions/index';
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
       village:'',
       anmiderror:'',
       MotherID:'',
       ashaname:'',
       ashanameerror:'',
       MotherIDerror:'',
       phcs:[],
       subcentres:[],
       anmids:[],
       villages:[],
       mids:[]

     }
     mandalbuttonstate=false,
     phcbuttonstate=false,
     scbuttonstate=false,
     villagebuttonstate=false,
     anmidbuttonstate=false,
     motheridbuttonstate=false,
     buttonstate= true
     this.props.onLoadData();

   }


  componentDidMount=()=>{

  }



  submithandler = ()=>{
      var obj=[]
       mandal=this.state.Mandal["value"]
       phc=this.state.PHC["value"]
       subc=this.state.sc["value"]
       villageof=this.state.village["value"]
       motherid=this.state.MotherID
       var ANMidu=this.state.anmid
       obj.push(mandal)
       obj.push(phc)
       obj.push(subc)
       obj.push(villageof)
       obj.push(motherid)
       obj.push(ANMidu)
      this.props.ongethealthData(obj);
      this.props.ongethealthanmData(obj);
      setTimeout(this.shownext,3000);


  }



  shownext=()=>{

   this.props.navigator.push({
 screen: "project.Update_Main", // unique ID registered with Navigation.registerScreen
 passProps: {mandal:this.state.Mandal["value"],phc:this.state.PHC["value"],sc:this.state.sc["value"],anmid:this.state.anmid,motherID:this.state.MotherID}, // simple serializable object that will pass as props to the modal (optional)
 navigatorStyle: {
       navBarHidden: true,
       animation:true,
       animationType:'slide-up'
 }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
 animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
});
  }

  setbuttonvalue=()=>  {
   value = !(phcbuttonstate&&mandalbuttonstate&&motheridbuttonstate&&scbuttonstate&&anmidbuttonstate&&villagebuttonstate)
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
  setvillages=()=>{
        var villages=[]
        var mand=this.state.Mandal["value"]
        var ph=this.state.PHC["value"]
        var sc = this.state.sc["value"]
        for (let key in this.props.Data[0][mand][ph][sc]){
             var obj={label:key,value:key};
             villages.push(obj);
        }
        this.setState({villages:villages})
  }
  setmotherids=()=>{
       var mid=[]
       var mand=this.state.Mandal["value"]
       var ph=this.state.PHC["value"]
       var sc=this.state.sc["value"]
       var village=this.state.village["value"]
       for(let key in this.props.Data[0][mand][ph][sc][village]){
             mid.push(key);
       }
       this.setState({mids:mid},()=>{
            console.log(this.state.mids)
       })
  }
  setanmids=()=>{
    var ids=[]
    var mand = this.state.Mandal["value"]
    var ph = this.state.PHC["value"]
    var sc = this.state.sc["value"]
    var village=this.state.village["value"]
    var mid=this.state.MotherID;
    var key=this.props.Data[0][mand][ph][sc][village][mid]["Anm Details"]["Anm ID"]
    ids.push(key);
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
        <View style={{width:width,height:height/3,backgroundColor: 'black',position:'absolute',marginTop:0}}>
      </View>
      <Background>
      <View   paddingH-25 paddingT-0 paddingB-0>
        <View marginT-0 paddingT-70 paddingB-50 center>
        <Text white text50 > </Text>
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
                this.setState({Mandal: item,PHC:'',sc:'',village:''},()=>{
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
             this.setState({PHC: item,sc:'',village:''},()=>{
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
                           this.setState({sc: item,village:''},()=>{
                              scbuttonstate=true;
                              //this.setanmids()
                              this.setvillages()
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
           this.setmotherids();
           this.setbuttonvalue();
         })
       }
      }
       topBarProps={{title: 'villages'}}
       style={{color: Colors.dark10}}
       showSearch
       searchPlaceholder={"Search a village"}
       searchStyle={{color: Colors.blue30, placeholderTextColor: Colors.dark50}}>
       {_.map(this.state.villages, option => <Picker.Item key={option.value} value={option} disabled={option.disabled} />)}
     </Picker>
     </View>
     <View>

       <TextInput paddingB-10 text80 placeholder="Mother ID"  dark10
         onChangeText={text => {
                                       if(this.state.mids.length==0)
                                       {
                                       motheridbuttonstate= false
                                       this.setbuttonvalue();
                                       this.setState({MotherIDerror: 'Please fill above details First',MotherID:''})
                                      }
                                      else{
                                        this.setState({MotherID:text.trim(),MotherIDerror:''})
                                      }
                              }
                            }
          onEndEditing={()=>{
            if(this.state.mids.length==0)
            {
            motheridbuttonstate= false
            this.setbuttonvalue();
            this.setState({MotherIDerror: 'Please fill above details First',MotherID:''})
           }

         else if(this.state.MotherID.trim()=='')
          {
              motheridbuttonstate= false
              this.setbuttonvalue();
              this.setState({MotherIDerror: 'This field is required',MotherID:''})
          }
          else if(this.state.mids.includes(this.state.MotherID.trim()))
          {
              motheridbuttonstate= true
              this.setanmids()
              this.setbuttonvalue();
            this.setState({MotherIDerror: ''})
          }
          else if(this.state.MotherID.trim().length!==6){
            motheridbuttonstate= false
            this.setbuttonvalue();
            this.setState({MotherIDerror: 'Enter valid 6 digit Mother ID',MotherID:''})
          }
          else if(this.state.MotherID.trim().length==6){
              if(!(this.state.mids.includes(this.state.MotherID.trim()))){
                motheridbuttonstate= false
                this.setbuttonvalue();
                this.setState({MotherIDerror: 'Please check your Mother ID',MotherID:''})
              }
          }

         }
       }
        error={this.state.MotherIDerror}/>

    </View>
    <View marginT-10 marginB-20>

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
             //set anmid
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


   </View>
        </View>
       </Card>
       </View>
       <View marginT-40 center  >
         <Button  disabled= {buttonstate} enableShadow borderRadius={5} text70 black-70 background-black
            label="LOGIN"
         onPress={this.submithandler}/>
       </View>
     </Background>
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
        Data:state.updatedetails.data,
        Mandals:state.updatedetails.mandals

      } ;
};

const mapDispatchToProps=(dispatch)=>{
    return{

       onLoadData:()=> {dispatch(update_getdata())},
       ongethealthData:(obj)=>{dispatch(update_gethealthdata(obj))},
       ongethealthanmData:(obj)=>{dispatch(update_gethealthanmdata(obj))}

    };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
//export default App;
