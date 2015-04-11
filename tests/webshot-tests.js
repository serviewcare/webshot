var fs = Npm.require('fs');

Tinytest.addAsync('Save HTML to image', function (test, done) {
    var filename = 'hello_world.png';

    // Save HTML to an image
    webshot('<html><body>Hello World</body></html>', filename, { siteType: 'html' }, function (err) {

        test.isNull(err, "Could not save HTML to image");

        var checkIfFileExists = Meteor.wrapAsync(fs.stat);
        checkIfFileExists(filename, function (err, stats) {
            test.isNull(err, filename + " stat failed: " + err);
            test.isTrue(stats != null && stats.isFile(), filename + " does not exist after saving");
            done();
        });
    });
});
