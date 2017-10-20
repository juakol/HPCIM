var okbg = '#A6E22E';
var warningbg = '#E59720';
var criticalbg = '#F9265E';
var unknownbg = '#8C81FF';

var oCheckAvailableNodesGm;
var oCheckHome15UsageGm;
var oCheckHome15AwaitingTimeGm;

var oCheckAvailableNodesProp = {
	angle: -0.25,
    lineWidth: 0.2,
    radiusScale: 1,
    pointer: {
    	length: 0.6,
        strokeWidth: 0.03,
        color: '#000000'
	},
    staticLabels: {
    	font: "17px EADS sans",
      	labels: [0, 5, 10, 20, 40, 60.0],
        fractionDigits: 0
    },
    limitMax: false,
    limitMin: false,
    colorStart:  '#6FADCF',
    colorStop: '#8FC0DA',
    strokeColor: '#E0E0E0',
    generateGradient: true,
    staticZones: [
       {strokeStyle: criticalbg, min: 0, max: 5},
       {strokeStyle: warningbg, min: 5, max: 10},
       {strokeStyle: okbg, min: 10, max: 60}
    ],
    highDpiSupport: true
};

var oCheckHome15UsageProp = {
	angle: -0.25,
    lineWidth: 0.2,
    pointer: {
    	length: 0.6,
        strokeWidth: 0.03,
        color: '#000000'
	},
    staticLabels: {
    	font: "17px EADS sans",
      	labels: [0, 100],
        fractionDigits: 0
    },
    staticZones: [
       {strokeStyle: "#30B32D", min: 0, max: 99.00},
       {strokeStyle: "#FFDD00", min: 99.00, max: 100.00},
       {strokeStyle: "#F03E3E", min: 100.00, max: 105.00}
    ],
    limitMax: false,
    limitMin: false,
    highDpiSupport: true
};

var oCheckHome15AwaitingTimeProp = {
	angle: -0.25,
    lineWidth: 0.2,
    pointer: {
    	length: 0.6,
        strokeWidth: 0.03,
        color: '#000000'
	},
    staticLabels: {
    	font: "17px EADS sans",
      	labels: [0, 6, 10.0],
        fractionDigits: 0
    },
    staticZones: [
       {strokeStyle: "#30B32D", min: 0, max: 6},
       {strokeStyle: "#F03E3E", min: 6, max: 10}
    ],
    limitMax: false,
    limitMin: false,
    highDpiSupport: true
};

// function getValues(_checkInfo){
// 	var _status = _checkInfo.match(/OK|WARNING|CRITICAL/i);
// 	var _lastCheck = _checkInfo.match(/[0-9]{2}:[0-9]{2}:[0-9]{2}/);
// 	var _statusInformation = _checkInfo.substr(0, _checkInfo.search(/\|/));
// 	console.log("getValues"+"\n"+_status+"\n"+_lastCheck+"\n"+_statusInformation+"\n");
// 	return [_status, _lastCheck, _statusInformation];
// }		

// function updateValues(_host, _serviceLogName, updatedValues){
// 	var _status = updatedValues[0];
// 	var _lastCheck = updatedValues[1];
// 	var _statusInformation = updatedValues[2];
// 	var _statusBackgroundColor;
// 	var iValue;
// 	var _id=_host+"_"+_serviceLogName;

// 	switch(String(_host+'_'+_serviceLogName)){
// 		case "cae_adm1_check_available_nodes":
// 			iValue = _statusInformation.match(/[0-9]+/);
// 		break;

// 		case "cae_nas1_check_home15":
// 		//iValue = _statusInformation.match(/[0-9]+\.[0-9]{2}/g);
// 		break;
// 	}

// 	var _class = _host + '_' + _serviceLogName;
// 	//debugger;
// 	Gauge($('#'+_id)).set = iValue;

// 	console.log("updateValues"+"\n"+iValue+"\n"+_status+"\n"+_lastCheck+"\n"+_statusInformation+"\n");
// }

function loadData(_host, _serviceLogName){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var _checkInfo = this.responseText;
			updateValues(_host, _serviceLogName, getValues(_checkInfo));
		}
	}
	xhttp.open("GET", "http://localhost/logs/"+_host+"_"+_serviceLogName+".txt", true);
	xhttp.send();
}

// function updateGm(){
//		loadData("cae_nas1", "check_home15");
// 		loadData("cae_adm1", "check_available_nodes");
// }

function createGm(_canvasId, _divId, oGm, oOps, iMaxValue, iMinValue, iAnimationSpeed, iInitialValue){
	oGm = new Gauge(document.getElementById(_canvasId)).setOptions(oOps);
	oGm.setTextField(document.getElementById(_divId));
	oGm.maxValue = iMaxValue;
	oGm.minValue = iMinValue;
	oGm.animationSpeed = iAnimationSpeed;
	oGm.percentColors = [[20.0, "#F9265E"], [30.0, "#E59720"]];
	oGm.set(iInitialValue);
}

function start(){
	createGm("check-available-nodes-canvas", "check-available-nodes-div", oCheckAvailableNodesGm, oCheckAvailableNodesProp, 60, 0 , 32, 25);
	createGm("check-home15-usage-canvas", "check-home15-usage-div", oCheckHome15UsageGm, oCheckHome15UsageProp, 105, 0, 32, 50);
	createGm("check-home15-awaiting-time-canvas", "check-home15-awaiting-time-div", oCheckHome15AwaitingTimeGm, oCheckHome15AwaitingTimeProp, 10, 0, 32, 5.75);
	//updateGm();
}

//setInterval(function(){updateGm();}, 5000);