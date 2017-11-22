# url-shortner
---------------------
Simple application used to shorten urls.

## Overview

### Backend
The application uses a Node/Express backend to handle all API request. The API gives access to an encode and decode function that are used in the shortening of the url.

### Front-end
The Front-end is built as an SPA using React. The styling uses Bootstrap
and other custom styles.

# API Guide
-----------------
Feel free to use the API provided by this application for your own projects.

## [POST] Shorten a URL
`POST http://baseurl/api/shorten`

## Parameters
| Name | Type | Description |
|------|------|-------------|
|shortUrl  |string| **required.** The url to shorten.|

## Example input
```javascript
{
  longUrl: 'https://google.com'
}
```

## Response
Returns an object containing the shortened url.

```javascript
{
  shortUrl: 'https://baseurl/3y5',
  existed: false
}
```

## [GET] Show all shorten urls in the database
`GET http://baseurl/api/showall`

## Response
Returns an array containing the all the shortened urls.

```javascript
[
  {
        "_id": "10000",
        "created_at": "2017-11-18T04:54:43.200Z",
        "long_url": "https://someurl.com",
        "__v": 0
    },
    {
        "_id": "10001",
        "created_at": "2017-11-20T20:02:23.675Z",
        "long_url": "https://anotherurl.com",
        "__v": 0
    }
]
```
