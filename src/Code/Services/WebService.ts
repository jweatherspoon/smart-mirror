import BasicService from "./BasicService";

// Base service for services that utilize external web apis
export default abstract class WebService extends BasicService {
    protected apiUrl : string;
}