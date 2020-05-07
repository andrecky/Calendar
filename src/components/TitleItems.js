import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';


export default TitleItems = () => {
    return (
        <View style={styles.titleMenu}>
            <TouchableOpacity onPress={() => alert('Cancel')}>
                <Text style={styles.cancelButton}>
                    Отмена
                </Text>
            </TouchableOpacity>
            <Text style={styles.titleDate}>
                Дата и время
            </Text>
            <TouchableOpacity onPress={() => alert('Done')}>
                <Text style={styles.doneButton}>
                    Готово
                </Text>
            </TouchableOpacity>

        </View>
    );
};
const styles = ScaledSheet.create({
    titleMenu: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '25@ms',
        paddingTop: '20@ms',
    },
    titleDate: {
        fontWeight: 'bold',
        fontSize: '18@ms0.5',
    },
    doneButton: {
        fontSize: '15@ms0.5',
        color: '#2a6af4',
        fontWeight: 'bold',

    },
    cancelButton: {
        fontWeight: 'bold',
        fontSize: '15@ms0.5',
        color: '#444444',
    },
});
