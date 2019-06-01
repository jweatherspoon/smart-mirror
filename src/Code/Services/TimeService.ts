import BasicService from "./BasicService";

// Service for returning the current time
class TimeService extends BasicService {
    // The stored api data 
    currentData : Date = new Date(0);
    
    // callback on update 
    callback : any = null;

    constructor() {
        super();
        console.log("TimeService created.");
    }

    // Update the current time
    update() : Date {
        console.log("time service update");
        this.currentData = new Date();

        if (this.callback) {
            this.callback(this.currentData);
        }

        return this.currentData;
    }    
    
    // Get the current time
    get data() : Date {
        return this.currentData;
    }
}

export default TimeService;