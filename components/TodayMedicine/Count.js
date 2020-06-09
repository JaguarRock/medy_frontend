import React from 'react'
import CountDown from 'react-native-countdown-component';

const Count = () => {
    return(
        <CountDown
        size={15}
        until={18000}
        onFinish={() => alert('Finished')}
        digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: 'white'}}
        digitTxtStyle={{color: '#000000', fontSize : 25}}
        timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
        separatorStyle={{color: '#FF5A5F'}}
        timeToShow={['H', 'M', 'S']}
        timeLabels={{m: null, s: null}}
        showSeparator
   />
    )
}

export default Count