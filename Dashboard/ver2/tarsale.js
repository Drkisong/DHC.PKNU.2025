const tarsaleChart = document.getElementById('tarsale').getContext('2d');
const tarsale = new Chart(tarsaleChart,{
    type:'line',
    data:{
        labels:['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'],
        datasets:[{
            data:[70,75,65,78,75,63,65,76,46,45,76,54],
        borderColor:[
            'rgb(59,197,154)'
        ],
        borderWidth:1
        },{
            data:[60,65,70,72,80,76,54,64,46,65,76,89],
        borderColor:[
            'rgb(153,102,255)'
        ],
        borderWidth:1
        }]
        
    },
    options:{
        respnsive:true,
        plugins:{
            legend:{
                display:false
            }
        }
    }
})