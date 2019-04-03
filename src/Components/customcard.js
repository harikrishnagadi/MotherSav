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
        duration: 600,
        useNativeDriver:true,
        easing:Easing.linear()
                   // Make it take a while
      }
    ).start();
                      // Starts the animation
  }


  render() {
    let { fadeAnim,x } = this.state;
    let position = {
       transform:[
           {translateX:this.state.fadeAnim.interpolate({
               inputRange:[0,1],
               outputRange:[-40,0]
           })
         }
         ]
       }


    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          ...position,
          opacity: fadeAnim,

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
      <View flex paddingH-25 paddingT-60 >
        <FadeInView>
        <Card
          enableShadow={true}
          borderRadius={12}
          height={150}
          shadowType="dark10"
          onPress={this.props.function}>
          <View flex background-white30 paddingH-30 paddingT-40>
            <Text white30 text30>
              {this.props.text}
            </Text>

          </View>
        </Card>
      </FadeInView>
      </View>
    )
  }
}

export default customcard;
