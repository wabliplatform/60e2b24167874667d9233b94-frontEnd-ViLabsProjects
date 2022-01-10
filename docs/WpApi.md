# TempApi.WpApi

All URIs are relative to *http://83.212.100.226:3001/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createwp**](WpApi.md#createwp) | **POST** /wp | Creates the data
[**deletewp**](WpApi.md#deletewp) | **DELETE** /wp/{wpId} | Delete the element
[**getAllwp**](WpApi.md#getAllwp) | **GET** /wp/getAll | Get all the data
[**getwp**](WpApi.md#getwp) | **GET** /wp/{wpId} | Get the element
[**updatewp**](WpApi.md#updatewp) | **PUT** /wp/{wpId} | Updates the element



## createwp

> Wp createwp(wp)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.WpApi();
let wp = new TempApi.Wp(); // Wp | data to be created
apiInstance.createwp(wp, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wp** | [**Wp**](Wp.md)| data to be created | 

### Return type

[**Wp**](Wp.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletewp

> deletewp(wpId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.WpApi();
let wpId = "wpId_example"; // String | the Id parameter
apiInstance.deletewp(wpId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wpId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllwp

> [Wp] getAllwp()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.WpApi();
apiInstance.getAllwp((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Wp]**](Wp.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getwp

> Wp getwp(wpId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.WpApi();
let wpId = "wpId_example"; // String | the Id parameter
apiInstance.getwp(wpId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wpId** | **String**| the Id parameter | 

### Return type

[**Wp**](Wp.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatewp

> Wp updatewp(wpId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.WpApi();
let wpId = "wpId_example"; // String | the Id parameter
let opts = {
  'wp': new TempApi.Wp() // Wp | data to be updated
};
apiInstance.updatewp(wpId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wpId** | **String**| the Id parameter | 
 **wp** | [**Wp**](Wp.md)| data to be updated | [optional] 

### Return type

[**Wp**](Wp.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

