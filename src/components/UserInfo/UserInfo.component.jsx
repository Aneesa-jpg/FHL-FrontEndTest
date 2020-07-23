import React  from 'react'

import './UserInfo.styles.css'
import { Calendar } from '../Calendar/Calendar.component';


export const UserInfo = ({id,real_name,tz,activity_periods}) => {
   console.log(activity_periods);

   const totalItems = activity_periods.length;
	const numberOfActiveItems = activity_periods.filter(item => item.active).length;
	const progressBarWidth = totalItems > 1 ? (numberOfActiveItems - 1) / (totalItems - 1) * 100 : 0;
    return (
        <div className='user-info'>

            <div className='card'>
                <h3 className='title'>User Id : {id}</h3>
                <p>Name : {real_name}</p>
                <p>TimeZone: {tz}</p>
                {/* <button onClick={() => setHidden(!hidden)}>Show timeline</button>     */}
            </div>
            

            <div className="timeline">
            <div className="timeline-progress" style={{ width: `${progressBarWidth}%`}}></div>
			<div className="timeline-items">
				{activity_periods.map((item, i) => (
					<div key={i} className="timeline-item">
						<div className="timeline-content">
							<p>{item.start_time}</p>
                            <p>-</p>
                            <p>{item.end_time}</p>
						</div>
					</div>
				))}
			</div>
		</div> 
            <div className='calendar'>
                <Calendar activity_periods={activity_periods} />
            </div>
        </div>
        

    )
}
