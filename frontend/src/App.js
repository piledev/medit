import React from 'react';
import ReactTooltip from 'react-tooltip';
import CalendarHeatmap from 'react-calendar-heatmap';

import './App.css';

const today = new Date();

function App() {
  const randomValues = getRange(365).map(index => {
    return {
      date: shiftDate(today, -index),
      count: getRandomInt(1,3),
    };
  });

  return (
    <div>
      <h1>demo</h1>
      <CalendarHeatmap
        startDate={shiftDate(today, -365)}
        endDate={today}
        values={randomValues}
        classForValue={value => {
          if (!value) {
            return 'color-empty'
          }
          return `color-github-${value.count}`;
        }}
        tooltipDataAttrs={value => {
          return {
            'data-tip': `${value.date.toISOString().slice(0,10)} has count: ${
              value.count
            }`,
          };
        }}
        showWeekdayLabels={false}
        onClick={value => alert(`Clicked on value with count: ${value.count}`)}
      />
      <ReactTooltip />
    </div>
  );
}

function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

function getRange(count) {
  return Array.from({length: count}, (_,i) => i);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min +1)) + min;
}

export default App;
