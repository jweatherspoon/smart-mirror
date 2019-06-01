import BasicService from "./BasicService";

/**
 * Service to get the current time 
 * @class 
 * @extends BasicService
 */
class TimeService extends BasicService {
    /**
     * @var {Date} currentData The current time
     */ 
    private currentData : Date = new Date(0);
    
    /**
     * Create an instance of the time service
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Update the current time
     * @returns {Date} The current time
     */
    update() : Date {
        this.currentData = new Date();

        if (this.callback) {
            this.callback(this.currentData);
        }

        return this.currentData;
    }    
    
    /**
     * Get the current time
     */
    get data() : Date {
        return this.currentData;
    }
}

export default TimeService;