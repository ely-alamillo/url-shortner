# url-shortner
---------------------
Simple application used to shorten urls.
## Backend
The application uses a Node/Express backend to handle all api request. The api gives access to an encode and decode function that are used in the shortening of the url.

##Front-end
The Front-end for the application is built using React and Bootstrap for styling.

# API Guide
-----------------
## [POST] Shorten a URL
`POST http://baseurl/api/shorten`

## Parameters
| Name | Type | Description |
|------|------|-------------|
|shortUrl  |string| **required.** The url to shorten.|

## Example input
```javascript
{
  shortUrl: 'https://google.com'
}
```

## Response
Returns an object containing the shortened url.

```javascript
{
  shortUrl: 'https://baseurl/3y5',
  existed: false
}
