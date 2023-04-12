import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const assignmentsMarks = [
        {
            "id": "001" ,
            "name" : "assignment-1",
            "marks" : "56"
        },
        {
            "id": "002" ,
            "name" : "assignment-2",
            "marks" : "57"
        },
        {
            "id": "003" ,
            "name" : "assignment-3",
            "marks" : "60"
        },
        {
            "id": "004" ,
            "name" : "assignment-4",
            "marks" : "50"
        },
        {
            "id": "005" ,
            "name" : "assignment-5",
            "marks" : "50"
        },
        {
            "id": "006" ,
            "name" : "assignment-6",
            "marks" : "51"
        },
        {
            "id": "007" ,
            "name" : "assignment-7",
            "marks" : "60"
        },
        {
            "id": "008" ,
            "name" : "assignment-8",
            "marks" : "58"
        }
    ]
    return (
        <div>
            <h2 className='text-center font-bold text-4xl my-20'>Assignment-(1-8)- Marks ReChats</h2>
            <AreaChart
            width={1300}
            height={400}
            data={assignmentsMarks}
            
            >
             <Area dataKey="marks"></Area>
             <XAxis dataKey="name"></XAxis>  
             <YAxis></YAxis>
            </AreaChart>
        </div>
    );
};

export default Statistics;