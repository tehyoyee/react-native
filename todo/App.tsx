import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import {safeA} from 'react-native-safe-area-context';
import { practiceDayjs } from './src/practice-dayjs';
import timezone from 'dayjs/plugin/timezone';

import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc";
import ko from "dayjs/locale/ko";
import { getCalendarColumns, getDayColor, getDayText } from './src/util';
import relativeTime from "dayjs/plugin/relativeTime";
import Margin from './src/Margin';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';



export default function App() {
  

  dayjs.extend(utc);
  dayjs.extend(timezone);
  
  
  // dayjs.tz.setDefault("Asia/Seoul");
  const now = dayjs();
  console.log(now.format("YYYY-MM-DD HH:mm:ss"))
  const [selectedDate, setSelectedDate] = useState(now);
  const columnSize = 35;
  const columns = getCalendarColumns(selectedDate);
  const Column = ({
    text,
    color,
    opacity,
    disabled,
    onPress,
    isSelected,
  }:any) =>{
    return (
        <TouchableOpacity
          disabled={disabled}
          onPress={onPress}
          style={{
            width: columnSize,
            height: columnSize,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: isSelected ? "#c2c2c2" : "transparent",
            borderRadius: columnSize / 2,
          }}>
          <Text style={{ color, opacity }}>{ text }</Text>
      </TouchableOpacity>
    )
  }
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    setSelectedDate(dayjs(date))
    hideDatePicker();
  };
  const ArrowButton = ({ iconName, onPress }:any) => {
    return (
      <TouchableOpacity onPress={ onPress } style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
      <SimpleLineIcons name={iconName} size={15} color="black" />
    </TouchableOpacity>
    )
  }

  const onPressLeftArrow = () => {
    const newSelectedDate = dayjs(selectedDate).subtract(1, 'month');
    setSelectedDate(newSelectedDate);
  }
  const onPressRightArrow = () => {
    const newSelectedDate = dayjs(selectedDate).add(1, 'month');
    setSelectedDate(newSelectedDate);
  }
  // 요일 이름 띄우기
  const ListHeaderComponent = () => {
    const currentDateText = dayjs(selectedDate).format("YYYY.MM.DD.");
    return (
      <View>
        <Margin height={15}/>
        <View style={{flexDirection:"row", justifyContent: "center", alignItems: "center"}}>
          <ArrowButton iconName={"arrow-left"} onPress={ onPressLeftArrow }/>
          <TouchableOpacity onPress={ showDatePicker }>
            <Text style={{fontSize:20, color:"#404040"}}>{ currentDateText }</Text>
          </TouchableOpacity>
          <ArrowButton iconName={"arrow-right"} onPress={ onPressRightArrow }/>
        </View>
        <Margin height={15}/>
        <View style={{flexDirection:"row"}}>
          {[0, 1, 2, 3, 4, 5, 6].map((day)=>{
            const dayText = getDayText(day);
            const color = getDayColor(day);
            return (
              <Column key={`day-${day}`} text={dayText} color={color} opacity={1}/>
            )
          })}
        </View>
      </View>
    )
  }
  // 빨, 흑, 파 색깔  
  const renderItem = ({ item: date }: any) => {
    const dateText = dayjs(date).get('date');
    const day = dayjs(date).get('day');
    const color = day === 0 ? "#e67639" : day === 6 ? "#5872d1" : "#2b2b2b";
    const isCurrentMonth = dayjs(date).isSame(selectedDate, 'month');
    const onPress = () => {
      setSelectedDate(date);
    }
    const isSelected = dayjs(date).isSame(selectedDate, 'date');
    return (
      <Column 
        text={ dateText }
        color={color}
        opacity = { isCurrentMonth ? 1 : 0.3 }
        onPress={onPress}
        isSelected={isSelected}
      />
      // <View style={{width: columnSize, height: columnSize, justifyContent: 'center', alignItems: 'center'}}>
      //   <Text style={{ color, opacity: isCurrentMonth ? 1 : 0.3 }}>{ dateText }</Text>
      // </View>
    )
  }
  
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ListHeaderComponent/>
        <FlatList
          data={columns}
          numColumns={ 7 }
          keyExtractor={(_, index) => `column${index}`}
          renderItem={renderItem}
        />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
