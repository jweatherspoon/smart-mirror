import React, { Component } from 'react';

/**
 * weather widget property contract
 * @interface
 */
interface WeatherWidgetViewProps {

}

/**
 * Weather widget 
 * @class 
 */
export default class WeatherWidgetView extends Component<WeatherWidgetViewProps> {
    /**
     * Create a weather widget
     * @param {WeatherWidgetViewProps} props Properties
     * @constructor
     */
    constructor(props : WeatherWidgetViewProps) {
        super(props);
    }

    /**
     * Render the component
     */
    render() {
        return (
            <div></div>
        )
    }
}