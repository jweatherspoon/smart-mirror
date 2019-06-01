import BasicService from "./BasicService";

// Service for returning the current time
class TimeService extends BasicService {
    // The stored api data 
    currentData : Date = new Date(0);
    
    // Update the current time
    update() : Date {
        this.currentData = new Date();
        return this.currentData;
    }    
    
    // Get the current time
    getData() : Date {
        return this.currentData;
    }
}

export default TimeService;