import React from 'react';
import { Animated, Text, View ,Easing} from 'react-native';
import { ProgressCircle }  from 'react-native-svg-charts';

const AnimatedCircle = Animated.createAnimatedComponent(ProgressCircle);
class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 70,                   // Animate to opacity: 1 (opaque)
        duration: 3000,
        //easing: Easing.linear(),
      //  useNativeDriver: true,          // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <AnimatedCircle        // Special animatable View
      style={ { height: 200 } }
             progress={ 0.7 }
             progressColor={'rgb(134, 65, 244)'}>
      </AnimatedCircle>
    );
  }
}

// You can then use your `FadeInView` in place of a `View` in your components:
export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
         <FadeInView></FadeInView>

      </View>

    )
  }
}
