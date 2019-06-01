import BasicService from "./BasicService";

/**
 * Base services for those utilizing external web apis
 * @abstract
 * @class 
 * @extends BasicService
 */
export default abstract class WebService extends BasicService {
    /**
     * @var {string} apiUrl The url of the external web api
     */
    protected apiUrl : string = "";
}