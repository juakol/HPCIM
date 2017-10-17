var okbg = '#A6E22E';
var warningbg = '#E59720';
var criticalbg = '#F9265E';
var unknownbg = '#8C81FF';



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
	    generateGradient: true,
	    staticZones: [
	       {strokeStyle: criticalbg, min: 0, max: 5},
	       {strokeStyle: warningbg, min: 5, max: 10},
	       {strokeStyle: okbg, min: 10, max: 60}
	    ],
	    highDpiSupport: true
	};
    
    oCaeAdm1CheckAvailableNodesGm = new Gauge($("#cae_adm1-check-available-nodes-canvas")[0]).setOptions(oCaeAdm1CheckAvailableNodesOpts);
	oCaeAdm1CheckAvailableNodesGm.setTextField($("#cae_adm1-check-available-nodes-div")[0]);
	oCaeAdm1CheckAvailableNodesGm.maxValue = 60;
	oCaeAdm1CheckAvailableNodesGm.minValue = 0;
	oCaeAdm1CheckAvailableNodesGm.animationSpeed = 32;
	oCaeAdm1CheckAvailableNodesGm.set(40);

//-----------AVAILABLE NODES COLORS-----------//    
     var oCaeAdm1CheckAvailableNodesColorOpts = {
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
	    colorStart: '#5f514f',
	    colorStop: '#5f5071',
	    strokeColor: '#d0d0d0',
	    generateGradient: true,
	    highDpiSupport: true
	};
    
	oCaeAdm1CheckAvailableNodesColorGm = new Gauge($("#cae_adm1-check-available-nodes-color-canvas")[0]).setOptions(oCaeAdm1CheckAvailableNodesOpts);
	oCaeAdm1CheckAvailableNodesColorGm.setTextField($("#cae_adm1-check-available-nodes-color-div")[0]);
	oCaeAdm1CheckAvailableNodesColorGm.maxValue = 60;
	oCaeAdm1CheckAvailableNodesColorGm.minValue = 0;
	oCaeAdm1CheckAvailableNodesColorGm.animationSpeed = 32;
	oCaeAdm1CheckAvailableNodesColorGm.set(30);
      
    
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
	    staticZones: [
	       {strokeStyle: okbg, min: 0, max: 99.00},
	       {strokeStyle: "#FFDD00", min: 99.00, max: 100.00},
	       //{strokeStyle: "#F03E3E", min: 100.00, max: 105.00}
	    ],
	    limitMax: false,
	    limitMin: false,
	    highDpiSupport: true
	};

	oCaeNas1CheckHome15UsageGm = new Gauge($("#cae_nas1-check-home15-usage-canvas")[0]).setOptions(oCaeNas1CheckHome15UsageOpts);
	oCaeNas1CheckHome15UsageGm.setTextField($("#cae_nas1-check-home15-usage-div")[0]);
	oCaeNas1CheckHome15UsageGm.maxValue = 100;
	oCaeNas1CheckHome15UsageGm.minValue = 0;
	oCaeNas1CheckHome15UsageGm.animationSpeed = 32;
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
	    staticZones: [
	       {strokeStyle: okbg, min: 0, max: 6},
	       {strokeStyle: "#F03E3E", min: 6, max: 10}
	    ],
	    limitMax: false,
	    limitMin: false,
	    highDpiSupport: true
	};

	oCaeNas1CheckHome15AwaitingTimeGm = new Gauge($("#cae_nas1-check-home15-awaiting-time-canvas")[0]).setOptions(oCheckHome15AwaitingTimeOpts);
	oCaeNas1CheckHome15AwaitingTimeGm.setTextField($("#cae_nas1-check-home15-awaiting-time-div")[0]);
	oCaeNas1CheckHome15AwaitingTimeGm.maxValue = 10;
	oCaeNas1CheckHome15AwaitingTimeGm.minValue = 0;
	oCaeNas1CheckHome15AwaitingTimeGm.animationSpeed = 32;
	oCaeNas1CheckHome15AwaitingTimeGm.set(5);

});

function updateGm(){
	oCaeAdm1CheckAvailableNodesGm.set(Math.floor(Math.random()*60)+1);
	oCaeNas1CheckHome15UsageGm.set(Math.floor(Math.random()*100)+1);
	oCaeNas1CheckHome15AwaitingTimeGm.set(Math.floor(Math.random()*10)+1);
}

setInterval(function(){updateGm();}, 3000);