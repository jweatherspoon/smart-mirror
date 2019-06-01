import React from 'react';
import WeatherWidgetView from './WeatherWidgetView';
import ClockWidgetView from './ClockWidgetView';

/**
 * Application entry point
 */
const App = () => {
  return (
    <div className="App">
      <ClockWidgetView />
    </div>
  );
}

export default App;
