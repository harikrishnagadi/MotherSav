import React from 'react';
import { StyleSheet,ScrollView,KeyboardAvoidingView,Animated, Easing,Dimensions} from 'react-native';
import {View,Card,Text} from 'react-native-ui-lib';
import Icon from '../assets/arrow.png';
import {connect } from 'react-redux';
import {submitpsdet} from '../../Store/actions/index';
import CustomCard from '../Components/customcard';
import {Navigation} from 'react-native-navigation';
import AnimatedLinearGradient, {presetColors} from 'react-native-animated-linear-gradient'



var {height, width} = Dimensions.get('window');
class LandingPage extends React.Component {
  constructor(props) {
     super(props);

  }

  anmhandler=()=>{
  this.props.navigator.push({
       screen:'project.ANM_Registration',
       navigatorStyle:{
                navBarHidden: true,
                animation:true,
                animationType:'slide-up'
              }
    })
  }
  mothereghandler=()=>{
    this.props.navigator.push({
         screen:'project.Mother_Registration_first',
         navigatorStyle:{
                  navBarHidden: true,
                  animation:true,
                  animationType:'slide-up'
                }
      })
  }
  updatehandler=()=>{
    this.props.navigator.push({
         screen:'project.Update_First',
         navigatorStyle:{
                  navBarHidden: true,
                  animation:true,
                  animationType:'slide-up'
                }
      })
  }

   render(){
     return(


       <View style={{flex:1,flexDirection:'row',width:width,height:height}}>
         <AnimatedLinearGradient customColors={presetColors.instagram} speed={4000}/>
         <ScrollView  showsVerticalScrollIndicator={false}>
           <View paddingB-50>
          <CustomCard
            text="Heat Maps">
          </CustomCard>
          <CustomCard
            text="Mother Health Status">
          </CustomCard>
          <CustomCard
            text="Mother Health Update"
            function={this.updatehandler}>
          </CustomCard>
          <CustomCard
            text="Mother Registration"
            function={this.mothereghandler}>
          </CustomCard>
          <CustomCard
            text="ANM Registration"
            function={this.anmhandler}>
          </CustomCard>
          </View>
        </ScrollView>
      </View>

     )
   }


}
export default LandingPage;
