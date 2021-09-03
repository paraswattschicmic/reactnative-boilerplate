import React from 'react';
import { Text, UIManager, View } from 'react-native';
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
const Tab3 = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text> Tab 3</Text>
        </View>
    );
}

export default Tab3;