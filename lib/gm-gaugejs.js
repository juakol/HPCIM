var okbg = '#A6E22E';
var warningbg = '#E59720';
var criticalbg = '#F9265E';
var unknownbg = '#8C81FF';
var iAnimationSpeed = 60;

$(document).ready(function(){
    
//--------------AVAILABLE NODES---------------//	
	var oCaeAdm1CheckAvailableNodesOpts = {
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
	      	labels: [0, 5, 10, 20, 40, 60],
	        fractionDigits: 0
	    },
	    limitMax: false,
	    limitMin: false,
	    colorStart:  '#6FADCF',
	    colorStop: '#8FC0DA',
	    strokeColor: '#E0E0E0',
	    generateGradient: false,
//	    staticZones: [
//	       {strokeStyle: criticalbg, min: 0, max: 5},
//	       {strokeStyle: warningbg, min: 5, max: 10},
//	       {strokeStyle: okbg, min: 10, max: 60}
//	    ],
        percentColors: [[0.082, "#ff0000" ], [0.16666, "#f9c802"], [0.16667, "#a9d70b"]],
	    highDpiSupport: true
	};
    
    oCaeAdm1CheckAvailableNodesGm = new Gauge($("#cae-adm1-check-available-nodes-canvas")[0]).setOptions(oCaeAdm1CheckAvailableNodesOpts);
	oCaeAdm1CheckAvailableNodesGm.setTextField($("#cae-adm1-check-available-nodes-div")[0]);
	oCaeAdm1CheckAvailableNodesGm.maxValue = 60;
	oCaeAdm1CheckAvailableNodesGm.minValue = 0;
	oCaeAdm1CheckAvailableNodesGm.animationSpeed = iAnimationSpeed;
	oCaeAdm1CheckAvailableNodesGm.set(40);     

//-----------HOME15 PERFORMANCE-------------
	var oCaeNas1CheckHome15UsageOpts = {
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
//	    staticZones: [
//	       {strokeStyle: okbg, min: 0, max: 99.00},
//	       {strokeStyle: "#FFDD00", min: 99.00, max: 100.00},
//	       //{strokeStyle: "#F03E3E", min: 100.00, max: 105.00}
//	    ],
        percentColors: [[0.99, "#a9d70b" ], [0.991, "#f9c802"], [1.0, "#ff0000"]],
	    limitMax: false,
	    limitMin: false,
	    highDpiSupport: true
	};

	oCaeNas1CheckHome15UsageGm = new Gauge($("#cae-nas1-check-home15-usage-canvas")[0]).setOptions(oCaeNas1CheckHome15UsageOpts);
	oCaeNas1CheckHome15UsageGm.setTextField($("#cae-nas1-check-home15-usage-div")[0]);
	oCaeNas1CheckHome15UsageGm.maxValue = 100;
	oCaeNas1CheckHome15UsageGm.minValue = 0;
	oCaeNas1CheckHome15UsageGm.animationSpeed = iAnimationSpeed;
	oCaeNas1CheckHome15UsageGm.set(50);

	var oCheckHome15AwaitingTimeOpts = {
		angle: -0.25,
	    lineWidth: 0.2,
	    pointer: {
	    	length: 0.6,
	        strokeWidth: 0.03,
	        color: '#000000'
		},
	    staticLabels: {
	    	font: "17px EADS sans",
	      	labels: [0, 6, 10],
	        fractionDigits: 0
	    },
//	    staticZones: [
//	       {strokeStyle: okbg, min: 0, max: 6},
//	       {strokeStyle: "#F03E3E", min: 6, max: 10}
//	    ],
        percentColors: [[0.0, "#a9d70b"],[0.6, "#a9d70b"], [0.61, "#ff0000"]],
        generateGradient: true,
	    limitMax: false,
	    limitMin: false,
	    highDpiSupport: true
	};

	oCaeNas1CheckHome15AwaitingTimeGm = new Gauge($("#cae-nas1-check-home15-awaiting-time-canvas")[0]).setOptions(oCheckHome15AwaitingTimeOpts);
	oCaeNas1CheckHome15AwaitingTimeGm.setTextField($("#cae-nas1-check-home15-awaiting-time-div")[0]);
	oCaeNas1CheckHome15AwaitingTimeGm.maxValue = 10;
	oCaeNas1CheckHome15AwaitingTimeGm.minValue = 0;
	oCaeNas1CheckHome15AwaitingTimeGm.animationSpeed = iAnimationSpeed;
	oCaeNas1CheckHome15AwaitingTimeGm.set(5);

});

//function setValues(_canvas, _rawData){
//    switch (_rawData){
//            
//    }
//}

//function getValues(_canvas, _serviceLogName){
//	var xhttp = new XMLHttpRequest();
//	xhttp.onreadystatechange = function() {
//		if (this.readyState == 4 && this.status == 200) {
//			return getValues(_canvas, this.responseText);
//		}
//	}
//	xhttp.open("GET", "logs/"+_serviceLogName, true);
//	xhttp.send(); 
//}



function updateGm(){
    oCaeAdm1CheckAvailableNodesGm.set(Math.floor(Math.random()*60)+1);
	oCaeNas1CheckHome15UsageGm.set(Math.floor(Math.random()*100)+1);
	oCaeNas1CheckHome15AwaitingTimeGm.set(Math.floor(Math.random()*10)+1);
//  loadData(oCaeAdm1CheckAvailableNodesGm, "cae_adm1_check_available_nodes.htm");
//  loadData(oCaeAdm1CheckUsageGm, "cae_nas1_check_home15.htm");
//  loadData(oCaeAdm1CheckAwaitingTimeGm, "cae_nas1_check_home15.htm");
//   oCaeAdm1CheckAvailableNodesGm.set(getValues("cae_adm1-check-available-nodes-canvas", "cae_adm1_check_available_nodes.htm"));
//	 oCaeNas1CheckHome15UsageGm.set(getValues("cae_nas1-check-home15-awaiting-time-canvas", "cae_nas1_check_home15.htm"));
//	 oCaeNas1CheckHome15AwaitingTimeGm.set(getValues("cae_nas1-check-home15-awaiting-time-canvas", "cae_nas1_check_home15.htm"));
}


setInterval(function(){updateGm();}, 3000);