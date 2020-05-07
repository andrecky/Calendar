import {ScaledSheet} from 'react-native-size-matters';

export const theme = {
    backgroundColor: '#ffffff',
    calendarBackground: '#ffffff',
    textSectionTitleColor: '#444444',
    selectedDayBackgroundColor: '#00adf5',
    selectedDayTextColor: '#000000',
    dayTextColor: '#2d4150',
    textDisabledColor: '#838688',
    dotColor: '#00adf5',
    selectedDotColor: '#ffffff',
    arrowColor: '#000000',
    disabledArrowColor: '#d9e1e8',
    monthTextColor: '#000000',
    indicatorColor: 'green',
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16,
};
export const currentDayStyles = {
    customStyles: {
        selected: true,
        container: {
            backgroundColor: '#e6f0ff',
        },
        text: {
            color: '#000000',
        },
    },
};
export const activeDayStyles = {
    customStyles: {
        selected: true,
        container: {
            backgroundColor: '#2a6af4',
        },
        text: {
            color: '#ffffff',
        },
    },
};

export const calendarStyle = ScaledSheet.create({
    boxWithShadow: {
        shadowColor: '#6789a8',
        shadowOffset: {width: 15, height: 10},
        shadowOpacity: 0.3,
        shadowRadius: 5,
        left: 0,
        top: 0,
    },

    general: {
        borderWidth: 0,
        borderRadius: '15@ms',
        borderColor: 'gray',
        width: '310@s',
        paddingBottom: '10@ms',
    },
});

