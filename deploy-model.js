var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

var config = {
	username: "USERNAME",
	password: "PASSWORD", // optional, prompted if none given
	host: "HOST",
	port: 21,
	localRoot: __dirname + "/_site/",
	remoteRoot: "/PATH/",
	include: [],
	exclude: ['robots.txt', '.DS_Store']
}

ftpDeploy.on('uploading', function(data) {
    data.totalFileCount;       // total file count being transferred
    data.transferredFileCount; // number of files transferred
    data.percentComplete;      // percent as a number 1 - 100
    data.filename;             // partial path with filename being uploaded
});
ftpDeploy.on('uploaded', function(data) {
	console.log(data);         // same data as uploading event
});

ftpDeploy.deploy(config, function(err) {
	if (err) console.log(err)
	else console.log('finished');
});
