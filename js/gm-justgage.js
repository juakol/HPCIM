
var oCaeAdm1AvailableNodesGm;
var oCaeNas1UsageGm;
var oCaeNas1AwaitingTimeGm;

try{
    $(document).ready(function(){
        debugger;
        oCaeAdm1AvailableNodesGm = new JustGage({
            id: 'cae-adm1-check-available-nodes',
            value: 45,
            min: 0,
            max: 60,
            symbol: ' nodes',
            pointer: true,
            pointerOptions: {
              toplength: -15,
              bottomlength: 10,
              bottomwidth: 12,
              color: '#8e8e93',
              stroke: '#ffffff',
              stroke_width: 3,
              stroke_linecap: 'round'
            },
            gaugeWidthScale: 1,
            counter: true,
            decimals: 0,
            customSectors: [{
                color : "#ff0000",
                lo : 0,
                hi : 5
              },{
                color : "#f9c802",
                lo : 6,
                hi : 10
              },{
                color : "#a9d70b",
                lo : 11,
                hi : 60
              }]
          });

        oCaeNas1UsageGm = new JustGage({
            id: 'cae-nas1-check-home15-usage',
            value: 50,
            min: 0,
            max: 100,
            symbol: '%',
            pointer: true,
            pointerOptions: {
              toplength: -15,
              bottomlength: 10,
              bottomwidth: 12,
              color: '#8e8e93',
              stroke: '#ffffff',
              stroke_width: 3,
              stroke_linecap: 'round'
            },
            gaugeWidthScale: 1,
            counter: true,
            decimals: 2
          });

        oCaeNas1AwaitingTimeGm = new JustGage({
            id: 'cae-nas1-check-home15-awaiting-time',
            value: 3,
            min: 0,
            max: 6,
            symbol: ' ms',
            pointer: true,
            pointerOptions: {
              toplength: -15,
              bottomlength: 10,
              bottomwidth: 12,
              color: '#8e8e93',
              stroke: '#ffffff',
              stroke_width: 3,
              stroke_linecap: 'round'
            },
            gaugeWidthScale: 1,
            counter: true,
            decimals: 2
          });
        debugger;
    });
}
catch(ex){
    console.log(ex.message);
}


function updateGm(){
    oCaeAdm1AvailableNodesGm.refresh(Math.floor(Math.random()*60)+1);
    oCaeNas1UsageGm.refresh(Math.random()*100)+1;
    oCaeNas1AwaitingTimeGm.refresh(Math.random()*6)+1;
}

setInterval(function(){updateGm();}, 3000);