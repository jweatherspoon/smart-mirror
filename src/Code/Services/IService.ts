// Service contract
export default interface IService {
    // Start the service
    start(updateRate : number, startInstantly : boolean) : void;

    // Stop the service
    stop() : void;

    // Manually call the service 
    update() : any;

    // Callback on update
    callback : any;
}
