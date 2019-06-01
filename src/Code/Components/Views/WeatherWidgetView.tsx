import React, { Component } from 'react';

// weather widget property contract
interface WeatherWidgetViewProps {

}

// Widget for displaying weather data
export default class WeatherWidgetView extends Component<WeatherWidgetViewProps> {
    constructor(props : WeatherWidgetViewProps) {
        super(props);
    }

    render() {
        return (
            <div></div>
        )
    }
}