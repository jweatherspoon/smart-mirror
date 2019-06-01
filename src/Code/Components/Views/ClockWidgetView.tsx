import React, { Component } from 'react';
import TimeService from '../../Services/TimeService';

// view property interface
interface ClockWidgetViewProps {

}

// view state contract
interface ClockWidgetViewState {
    service: TimeService,
    data: Date
}

// Widget for displaying the current time
export default class ClockWidgetView extends Component<ClockWidgetViewProps, ClockWidgetViewState> {
    // Create a clock widget
    constructor(props : ClockWidgetViewProps) {
        super(props);
        this.state = {
            service: new TimeService(),
            data: new Date()
        }

        this.state.service.callback = (data : Date) => this.setState({
            data
        });

        this.state.service.start(1000, false);
    }

    // Render the widget
    render() {
        return (
            <div>
                <span>{this.state.data.getHours()}:{this.state.data.getMinutes()}:{this.state.data.getSeconds()}</span>
            </div>
        );
    }
}