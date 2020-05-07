import React, {useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import CustomCalendar from './src/components/CustomCalendar';
import TitleItems from './src/components/TitleItems';
import TimeItems from './src/components/TimeItems';
import formatedDate from './src/helpers/formatedDate';
import getRandomNumbers from './src/helpers/getRandomNumbers';

const App = () => {
    const [activeDate, setDate] = useState('');
    const [timeFromDay, setTime] = useState([]);

    const currentDate = formatedDate(new Date());
    const isCurrentDay = currentDate !== activeDate;

    const minTimeCirrentDay = (new Date().getHours() * 2) + 2;
    const countIterationArray = isCurrentDay ? minTimeCirrentDay : 0;

    const ranomNumber = getRandomNumbers(countIterationArray, 47);

    const avalibleTime = new Array(48).fill().map((e, i) => {
        const el = i + 1;
        let hour = Math.ceil((el / 2) - 1) > 9 ? `${Math.ceil((el / 2) - 1)}` : `0${Math.ceil((el / 2) - 1)}`;
        if (el % 2) {
            return `${hour}:00`;
        }
        return `${hour}:30`;
    });

    const createTimeItems = () => {
        let arr = [];
        for (i = 0; i < ranomNumber; i++) {
            const index = getRandomNumbers(countIterationArray, 47);
            if (!arr.find(e => e === index)) {
                arr.push(index);
                arr.sort((a, b) => a - b);
            }
        }
        setTime(arr.map(e => avalibleTime[e]));
    };

    const {wrapper, calendarContainer, timeItems} = appStyles;
    return (
        <View style={wrapper}>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView>
                <TitleItems/>
                <View style={calendarContainer}>
                    <CustomCalendar setDate={setDate}
                                    activeDate={activeDate}
                                    createTimeItems={createTimeItems}/>
                </View>
                {
                    timeFromDay.length !== 0 &&
                    <ScrollView>
                        <View style={timeItems}>
                            <TimeItems data={timeFromDay}/>
                        </View>
                    </ScrollView>
                }
                {
                    timeFromDay.length === 0 &&
                    <View style={appStyles.descriptionText}>
                        <Text style={{color: '#444444'}}>
                            Для записи сначала выберите желаeмую
                        </Text>
                        <Text style={{color: '#444444'}}>
                            дату, а затем и время
                        </Text>
                    </View>
                }

            </SafeAreaView>
        </View>
    );
};


export default App;

const appStyles = ScaledSheet.create({
    wrapper: {
        backgroundColor: '#e8f4ff',
        height: '100%',
    },
    calendarContainer: {
        flex: 0,
        width: '350@s',
        alignItems: 'center',
        paddingTop: '20@ms',
    },
    timeItems: {
        paddingTop: '15@ms',
        paddingHorizontal: '15@ms',
        marginBottom: '500@ms',
    },
    descriptionText: {
        paddingHorizontal: '20@ms',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '30@ms',
    },
});
