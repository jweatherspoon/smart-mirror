import IService from "./IService";

// Base service for deriving non-web services from
export default abstract class BasicService implements IService {
    // Update rate
    private updateRate: number = 1000;

    /**
     * The interval for the service
     */
    private interval : NodeJS.Timer;

    /**
     * Start the service
     * @param updateRate The rate at which the service will update its data
     * @param startInstantly Set to true to immediately update the service
     */
    start(updateRate: number, startInstantly : boolean): void {
        this.updateRate = updateRate;
        if (!this.interval) {
            this.interval = setInterval(() => this.update(), this.updateRate)
        }
        
        if (startInstantly) {
            this.update();
        }
    }
    
    /**
     * Stop the service
     */
    stop(): void {
        clearInterval(this.interval)
    }

    /**
     * @var {Function} callback A callback on update that is passed the current time
     */
    protected callback: any = null;

    /**
     * Update the service's current data
     * @returns {any} The current data
     */
    abstract update() : any;
    
    /**
     * Get the most recent api data
     */
    abstract get data() : any;
}