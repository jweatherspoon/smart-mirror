import IService from "./IService";

// Base service for deriving non-web services from
export default abstract class BasicService implements IService {
    // Update rate
    protected updateRate: number = 1000;

    // The id of the interval
    protected interval : number = 0;

    // update delegate
    private handler : TimerHandler = this.update;
    
    // Start the service
    start(updateRate: number, startInstantly : boolean): void {
        this.updateRate = updateRate;
        if (!this.interval) {
            this.interval = setInterval(this.handler, this.interval)
        }
        
        if (startInstantly) {
            this.update();
        }
    }
    
    // Stop the service
    stop(): void {
        if (this.interval) {
            clearInterval(this.interval)
            this.interval = 0;
        }
    }
    
    // Update the currently stored data
    abstract update() : any;
    
    // Get the most recently available data 
    abstract getData() : any;
}