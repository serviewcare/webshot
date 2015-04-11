# Webshot Meteor Wrapper

Meteor wrapper for [node-webshot](https://github.com/brenden/node-webshot). 
Uses PhantomJS and Webkit to capture a screenshot of a URL as an image (png, jpg, or pdf). 

## Getting started

Add the package to you your project:

```
meteor add bryanmorgan:webshot
```

## Usage
In your server code, call:

```JavaScript
webshot(url, filePath, options, callback);
```        
to capture an image of the web page from `url` with the given `options` and save the image to `filePath`.

See node-webshot's [options](https://github.com/brenden/node-webshot#options) for full configuration settings.

### Simple URL Example

```JavaScript
webshot("http://google.com", "/tmp/google.png", function (err) {
    // screenshot saved to /tmp/google.png
});
```        

### HTML to Image Example

```JavaScript
webshot('<html><body>Hello World</body></html>', 'hello_world.png', { siteType:'html' }, function(err) {
    // screenshot saved to a relative path ./hello_world.png
});
```        

### Stream Examples

```JavaScript
var fs = Npm.require('fs');

webshot('google.com', function(err, renderStream) {
  var file = fs.createWriteStream('google.png', {encoding: 'binary'});

  renderStream.on('data', function(data) {
    file.write(data.toString('binary'), 'binary');
  });
});
```
