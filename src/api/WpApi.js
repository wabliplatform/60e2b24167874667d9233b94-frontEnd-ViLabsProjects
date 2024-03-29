/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Wp from '../model/Wp';

/**
* Wp service.
* @module api/WpApi
* @version 1.0.0
*/
export default class WpApi {

    /**
    * Constructs a new WpApi. 
    * @alias module:api/WpApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createwp operation.
     * @callback module:api/WpApi~createwpCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Wp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates the data
     * @param {module:model/Wp} wp data to be created
     * @param {module:api/WpApi~createwpCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Wp}
     */
    createwp(wp, callback) {
      let postBody = wp;
      // verify the required parameter 'wp' is set
      if (wp === undefined || wp === null) {
        throw new Error("Missing the required parameter 'wp' when calling createwp");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Wp;
      return this.apiClient.callApi(
        '/wp', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deletewp operation.
     * @callback module:api/WpApi~deletewpCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the element
     * @param {String} wpId the Id parameter
     * @param {module:api/WpApi~deletewpCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deletewp(wpId, callback) {
      let postBody = null;
      // verify the required parameter 'wpId' is set
      if (wpId === undefined || wpId === null) {
        throw new Error("Missing the required parameter 'wpId' when calling deletewp");
      }

      let pathParams = {
        'wpId': wpId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/wp/{wpId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllwp operation.
     * @callback module:api/WpApi~getAllwpCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Wp>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all the data
     * @param {module:api/WpApi~getAllwpCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Wp>}
     */
    getAllwp(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Wp];
      return this.apiClient.callApi(
        '/wp/getAll', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getwp operation.
     * @callback module:api/WpApi~getwpCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Wp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the element
     * @param {String} wpId the Id parameter
     * @param {module:api/WpApi~getwpCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Wp}
     */
    getwp(wpId, callback) {
      let postBody = null;
      // verify the required parameter 'wpId' is set
      if (wpId === undefined || wpId === null) {
        throw new Error("Missing the required parameter 'wpId' when calling getwp");
      }

      let pathParams = {
        'wpId': wpId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Wp;
      return this.apiClient.callApi(
        '/wp/{wpId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updatewp operation.
     * @callback module:api/WpApi~updatewpCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Wp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the element
     * @param {String} wpId the Id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/Wp} opts.wp data to be updated
     * @param {module:api/WpApi~updatewpCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Wp}
     */
    updatewp(wpId, opts, callback) {
      opts = opts || {};
      let postBody = opts['wp'];
      // verify the required parameter 'wpId' is set
      if (wpId === undefined || wpId === null) {
        throw new Error("Missing the required parameter 'wpId' when calling updatewp");
      }

      let pathParams = {
        'wpId': wpId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Wp;
      return this.apiClient.callApi(
        '/wp/{wpId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
