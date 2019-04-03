import React from 'react'
import {Animated ,Easing} from 'react-native';
import { ProgressCircle }  from 'react-native-svg-charts'

 const AnimatedCircle=Animated.createAnimatedComponent(ProgressCircle);
class ProgressCircleExample extends React.PureComponent {

constructor(props){
     super(props);
     state={
         fadeAnim : new Animated.Value(0),
     }
 }
componentDidMount() {
 Animated.timing(                  // Animate over time
   state.fadeAnim,            // The animated value to drive
   {
     toValue: 0.8,                   // Animate to opacity: 1 (opaque)
     duration: 8000
    // easing: Easing.linear()      // Make it take a while
   }
 ).start();                        // Starts the animation
 }

    render() {
         let { fadeAnim } = state;
        return (
            <AnimatedCircle
                style={ { height: 200 } }
                progress={ fadeAnim }
                strokeWidth={25}
                progressColor={'rgb(134, 65, 244)'}

            />
        )
    }

}

export default ProgressCircleExample;
