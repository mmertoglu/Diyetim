import React from "react";
import LottieView from 'lottie-react-native'

const FoodChoiceLottie  = () => {
    return(
        <LottieView style={{position:'absolute',bottom:-40}} source={require('../../assets/foodchoice.json')} autoPlay />
    )
}
export default FoodChoiceLottie