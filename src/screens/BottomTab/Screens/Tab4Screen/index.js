import React from 'react';
import { Text, UIManager, View } from 'react-native';
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
const Tab4 = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text> Tab 4</Text>
        </View>
    );
}

export default Tab4;