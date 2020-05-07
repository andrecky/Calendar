import React, {useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

export default TimeItems = (props) => {
    const {data} = props;
    const {container, boxWithShadow, timeText, item, active, activeTimeText} = styles;
    const [time, setTime] = useState('');
    return (
        <View style={container}>
            {data.map((el, i) => {
                const isActiveTime = time === el;
                const key = i;
                return (
                    <TouchableOpacity style={{}}
                                      onPress={() => setTime(el)}
                    >
                        <View style={[item, boxWithShadow, isActiveTime && active]}>
                            <Text style={isActiveTime ? activeTimeText : timeText}>
                                {el}
                            </Text>
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = ScaledSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '320@s',
    },
    active: {
        backgroundColor: '#2a6af4',
    },
    activeTimeText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: '16@ms0.5',
    },
    item: {
        marginHorizontal: '5@ms',
        marginBottom: '15@ms',
        borderRadius: '5@ms',
        width: '70@s',
        height: '35@s',
        backgroundColor: '#ffffff',

        justifyContent: 'center',
        alignItems: 'center',
    },
    timeText: {
        fontSize: '16@ms0.5',
        fontWeight: 'bold',
        color: '#148cfa',
    },
    boxWithShadow: {
        shadowColor: '#0a55f7',
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 0.3,
        shadowRadius: 10,
        left: 0,
        top: 0,
    },
});
