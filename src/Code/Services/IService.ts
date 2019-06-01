/**
 * Service contract
 * @interface 
 */
export default interface IService {
    /**
     * Start the service
     * @param updateRate The rate at which the service will update its data
     * @param startInstantly Set to true to immediately update the service
     */
    start(updateRate : number, startInstantly : boolean) : void;

    /**
     * Stop the service
     */
    stop() : void;

    /**
     * Update the service's current data
     * @returns {any} The current data
     */
    update() : any;
}
