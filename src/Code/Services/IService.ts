// -----------------------------------------------------------------------------
// Author: Jonathan Weatherspoon
// File: IService.ts
// Date: May 31, 2019
// -----------------------------------------------------------------------------

// Service contract
export default interface IService {
    // Start the service
    start(updateRate : number, startInstantly : boolean) : void;

    // Stop the service
    stop() : void;

    // Manually call the service 
    update() : any;

    // Get the most recently available api data 
    getData() : any;
}
