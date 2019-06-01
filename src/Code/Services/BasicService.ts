import IService from "./IService";

// Base service for deriving non-web services from
export default abstract class BasicService implements IService {
    // Update rate
    protected updateRate: number = 1000;

    // The id of the interval
    protected interval : NodeJS.Timer;
    
    constructor() {
        console.log("BasicService created.");
    }

    // Start the service
    start(updateRate: number, startInstantly : boolean): void {
        this.updateRate = updateRate;
        if (!this.interval) {
            this.interval = setInterval(() => this.update(), this.updateRate)
        }
        
        if (startInstantly) {
            this.update();
        }
    }
    
    // Stop the service
    stop(): void {
        clearInterval(this.interval)
    }
    
    // Update the currently stored data
    abstract update() : any;
    
    // Get the most recently available data 
    abstract get data() : any;

    // callback on update
    abstract callback : any;
}