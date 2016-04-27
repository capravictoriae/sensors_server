var serialport = require('serialport');
var SerialPort = require('serialport').SerialPort;

var portName = '/dev/cu.usbmodem1411';

var sp = new SerialPort(portName, {
    baudRate: 9600,
    parser: serialport.parsers.readline("\n")
});

console.log("Start reading...");

sp.on('data', function(input) {
  console.log(input);
});



