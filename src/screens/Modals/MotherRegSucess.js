import React from 'react';
import LottieView from 'lottie-react-native';
import {View, Text} from 'react-native-ui-lib';
import {BackHandler} from 'react-native';

export default class ModalSucess extends React.Component {
  componentDidMount() {
    //this.animation.play();
    // Or set a specific startFrame and endFrame with:
    this.animation.play(0, 150);
    //BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }


  componentWillUnmount() {
    //BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    this.handleBackPress()
  }

  handleBackPress = () => {
    this.props.navigator.pop({
 screen: "project.project.Landing_page", // unique ID registered with Navigation.registerScreen
 passProps: {}, // simple serializable object that will pass as props to the modal (optional)
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
      <View flex background-blue30>
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          loop={false}
          source={require('../../assets/sucess.json')}
        />
      <View >
      <View paddingH-50 paddingT-20>
      <Text  text10 black5 style={{fontWeight:'bold'}} >{this.props.name} </Text>
      <Text text70 black5 style={{fontWeight:'normal'}}>Thanks for registering with us!!</Text>
      <Text  text10 black5 style={{fontWeight:'bold'}} >{this.props.ID} </Text>
      <Text  text70 black5  style={{fontWeight:'normal'}}>is your ID Save this for futher usage!!</Text>
    </View>
    </View>
    </View>
    );
  }
}
