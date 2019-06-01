import React, { Component } from 'react';
import TimeService from '../../Services/TimeService';

/**
 * Clock widget property contract 
 * @interface
 */
interface ClockWidgetViewProps {

}

/**
 * Clock widget state contract 
 * @interface 
 */
interface ClockWidgetViewState {
    /**
     * @var {TimeService} service The service used to get the current time
     */
    service: TimeService;

    /**
     * @var {Date} data The data returned by the api 
     */
    data: Date;
}

/**
 * Clock widget 
 * @class
 * @extends Component 
 */
export default class ClockWidgetView extends Component<ClockWidgetViewProps, ClockWidgetViewState> {
    /**
     * Create a clock widget
     * @param {ClockWidgetViewProps} props Properties
     * @constructor
     */
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

    /**
     * Render the component
     */
    render() {
        return (
            <div>
                <span>{this.state.data.getHours()}:{this.state.data.getMinutes()}:{this.state.data.getSeconds()}</span>
            </div>
        );
    }
}