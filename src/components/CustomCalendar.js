import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import formatedDate from '../helpers/formatedDate';
import {activeDayStyles, calendarStyle, currentDayStyles, theme} from '../styles/calendarStyles';


export default CustomCalendar = (props) => {

    // const [activeDate, setDate] = useState('');

    const {boxWithShadow, general} = calendarStyle;
    LocaleConfig.locales['ru'] = {
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Янв.', 'Фев.', 'Мар.', 'Апр.', 'Май', 'Июнь', 'Июль.', 'Авг.', 'Сен.', 'Окт.', 'Ноя.', 'Дек.'],
        dayNames: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
        dayNamesShort: ['Пн.', 'Вт.', 'Ср.', 'Чт.', 'Пт.', 'Сб.', 'Вс.'],
        today: 'Сегодня\'сег.',
    };
    LocaleConfig.defaultLocale = 'ru';
    const arrow = {padding: 20};
    //можно воспользоваться Moment JS :)
    const currentDate = formatedDate(new Date());

    return (
        <Calendar hideArrows={false}
                  minDate={currentDate}
                  onDayPress={day => {
                      props.setDate(day.dateString);
                      props.createTimeItems();
                  }}
                  disableMonthChange={false}
                  markingType={'custom'}
                  markedDates={{
                      [props.activeDate]: activeDayStyles,
                      [currentDate]: currentDayStyles,
                  }}
                  disableArrowLeft={false}
                  style={[general, boxWithShadow, arrow]}
                  theme={theme}

        />
    );
};

