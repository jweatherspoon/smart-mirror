import React from 'react';
import WeatherWidgetView from './WeatherWidgetView';
import ClockWidgetView from './ClockWidgetView';

import {
    Container, 
    Row, 
    Col
} from './BootstrapComponents';

/**
 * Application entry point
 */
const App = () => {
  return (
    <Container id="container" >
        <Row>
            <Col style={{float: "right"}}>
                <ClockWidgetView />
            </Col>
        </Row>
    </Container>
  );
}

export default App;
