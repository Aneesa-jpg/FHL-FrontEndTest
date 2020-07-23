import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'


export const Calendar = ({activity_periods}) => {
    
    var i;
for(i = 0; i < activity_periods.length; i++){
    activity_periods[i].date = activity_periods[i]['start_time'];
    delete activity_periods[i].start_time;
}
for(i = 0; i < activity_periods.length; i++){
    activity_periods[i].date = activity_periods[i]['end_time'];
    delete activity_periods[i].start_time;
}

activity_periods.forEach((e) => {
    delete e.end_time;
});


for(i = 0; i < activity_periods.length; i++){

    var parts = activity_periods[i].date.split(" ");
    var months = {Jan: "01",Feb: "02",Mar: "03",Apr: "04",May: "05",Jun: "06",Jul: "07",Aug: "08",Sep: "09",Oct: "10",Nov: "11",Dec: "12"};
    activity_periods[i].date = parts[2]+"-"+months[parts[0]]+"-"+parts[1];
}


console.log(activity_periods);

    return (
        
        <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={activity_periods}
      />
        
    )
}
