import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { CalendarView, Container } from './styles';
import { TextDarkGray, TextGray, TextGreen, TextLightGray } from '../../../components/ui/texts';
import { Calendar } from 'react-native-calendars'
import { LocaleConfig } from 'react-native-calendars';
import { primary_color } from '../../../components/colors';
import { h } from '../../../components/dimens';

const Times = () => {

  LocaleConfig.locales['pt'] = {
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan.', 'Fev.', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul.', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    today: 'Aujourd\'hui'
  };
  LocaleConfig.defaultLocale = 'pt';

  const [date, setDate] = useState(new Date())
  console.log(new Date() + "  " + date.getDate())
  return (
    <Container>
      <CalendarView>
        <Calendar
          // Initially visible month. Default = Date()
          current={date}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={date}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2021-10-30'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => { console.log('selected day', day) }}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={(day) => { console.log('selected day', day) }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'MMMM yyyy                                          '}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => { console.log('month changed', month) }}
          // Hide month navigation arrows. Default = false
          hideArrows={true}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          renderArrow={(direction) => (<TextDarkGray fontSize={57}>{direction == 'left' ? "<" : ">"}</TextDarkGray>)}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={false}
          // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={false}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
          firstDay={0}
          // Hide day names. Default = false
          hideDayNames={false}
          // Show week numbers to the left. Default = false
          showWeekNumbers={false}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={subtractMonth => subtractMonth()}
          // Handler which gets executed when press arrow icon right. It receive a callback can go next month
          onPressArrowRight={addMonth => addMonth()}
          // Disable left arrow. Default = false
          disableArrowLeft={false}
          // Disable right arrow. Default = false
          disableArrowRight={false}
          // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
          disableAllTouchEventsForDisabledDays={true}
          // Replace default month and year title with custom one. the function receive a date as parameter
          //renderHeader={(data) => (<TextDarkGray fontSize={57}>{data.getMonth()}</TextDarkGray>)}
          // Enable the option to swipe between months. Default = false
          enableSwipeMonths={true}
          // Specify theme properties to override specific styles for calendar parts. Default = {}
          //testes
          dayComponent={({ date, state }) => {
            if (state == 'disabled'){
              return <TextLightGray fontSize={30}>{date.day}</TextLightGray>
            } else {
              if (state == 'today'){
                return <View style={{borderColor: primary_color(), borderWidth: h(2), borderRadius: h(45), width: h(45), height: h(45), marginTop: h(-8), alignItems: 'center', justifyContent: 'center'}}>
                  <TextGreen fontSize={30}>{date.day}</TextGreen>
                </View>
              } else {
                return <TextDarkGray fontSize={30}>{date.day}</TextDarkGray>
              }
            }
          }}
          theme={{
            backgroundColor: '#f7f7f7',
            calendarBackground: '#f7f7f7',
            textSectionTitleColor: '#b6c1cd',
            textSectionTitleDisabledColor: '#d9e1e8',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#00adf5',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: 'orange',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: '#000',
            indicatorColor: 'blue',
            textDayFontFamily: 'monospace',
            textMonthFontFamily: 'monospace',
            textDayHeaderFontFamily: 'monospace',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 10,
            textMonthFontSize: 10,
            textDayHeaderFontSize: 10,
            'stylesheet.calendar.main': {
              dayContainer: {
                borderColor: '#D1D3D4',
                borderWidth: 1,
                flex:1,
                padding:10
              },
              emptyDayContainer: {
                borderColor: '#D1D3D4',
                borderWidth: 1,
                flex:1,
                padding:10
              },
              week: {
                marginTop: 0,
                marginBottom: 0,
                flexDirection: 'row',
                justifyContent: 'space-around'
              },
              
            }
          }}
        />
        </CalendarView>
    </Container>);
}

export default Times;