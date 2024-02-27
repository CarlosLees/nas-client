import React from 'react';
import { DatePicker } from 'antd';
import { Dayjs } from 'dayjs';

const Patrol: React.FC = () => {
    const dayChange = (dates: RangeValue<Dayjs>, dateStrings: [string, string]) => {
        console.log(dateStrings[0]);
        console.log(dateStrings[1]);
    };

    const { RangePicker } = DatePicker;
    return (
        <div className="absolute h-full w-full p-6 bg-amber-50">
            <RangePicker showTime onChange={dayChange} />
            <div>巡更记录</div>
        </div>
    );
};

export default Patrol;
