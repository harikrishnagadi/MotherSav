import React from 'react';
import { Card, View, Text} from 'react-native-ui-lib';
import {Animated,Easing} from 'react-native';


class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),
  }



  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 1000,
        useNativeDriver:true,
        easing:Easing.elastic()
                   // Make it take a while
      }
    ).start();
                      // Starts the animation
  }

  render() {
    let { fadeAnim,x } = this.state;
    let position = {
       transform:[
           {translateY:this.state.fadeAnim.interpolate({
               inputRange:[0,1],
               outputRange:[-100,0]
           })
         }
         ]
       }


    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          ...position
          //opacity: fadeAnim

          // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}



class customcard extends React.Component{
  construct(props){
    Super(props);

  }


  render(){
    return(
      <View flex  >
        <FadeInView>
         {this.props.children}
      </FadeInView>
      </View>
    )
  }
}

export default customcard;
