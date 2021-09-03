import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

const LoaderHOC = ({
    children
}) => {
    const loading = useSelector(state => state.common.loading)
    return (
        <>
            {children}
            {!!loading && <View style={{ zIndex: 9999999, position: 'absolute', top: 0, bottom: 0, justifyContent: 'center', alignContent: 'center', left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.5)', }}>
                <ActivityIndicator color='white' size='large' />
            </View>}
        </>
    )
}
export default LoaderHOC;
