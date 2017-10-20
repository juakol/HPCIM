var oAvailableNodesGm;
var oHome15UsageGm;
var oHome15AwaitingTimeGm;

$(document).ready(function(){
    oAvailableNodesGm = JustGage(
        {
            id: "available-nodes",
            min: 0,
            max: 60,
            symbol: "\nnodes",
            pointer: true,
            pointerOptions:{
                
            }
        }
    );
    
    oHome15UsageGm = JustGage(
        {
            id: 'home15-usage'
        }
    );
    
    oHome15AwaitingTimeGm = JustGage(
        {
            id: 'home15-awaiting-time'
        }
    );
})