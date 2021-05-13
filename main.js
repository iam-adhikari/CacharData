window.onload = init;

function init(){

  
    const map = new ol.Map({
        view: new ol.View({
            center: [10330443.655166086,2853993.5300236423],
            zoom: 10
           
        }),
        target: 'jsMap' 
    })
    const openStreetMapsStandard= new ol.layer.Tile({
        source: new ol.source.OSM(),
        visible : false,
        title : 'StandardMap'
    })
  
    const StamenTerrain= new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg',
            attrbutions : 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
        }),
        visible: true,
        title: 'StamenTerrain'
    })
    const baseLayerGroup= new ol.layer.Group({
        layers: [
            openStreetMapsStandard, StamenTerrain
        ]
    })
    map.addLayer(baseLayerGroup)

    //layer switcher logic
    const baseLayerElements= document.querySelectorAll('.sidebar-1 > input[type=radio]');
    for(let baseLayerElement of baseLayerElements){
        baseLayerElement.addEventListener('change', function(){
            let baseLayerElementValue=this.value;
            baseLayerGroup.getLayers().forEach(function(element, index, array){
                let baseLayerTitle=element.get('title');
                element.setVisible(baseLayerTitle===baseLayerElementValue);
            })
        })
    }
    
    const CacharBoundary = new ol.layer.VectorImage({
        source: new ol.source.Vector({
            url: './data/KMLs/CacharBoundary.kml',
            format: new ol.format.KML()
        }),
        visible: true,
        title: 'CacharBoundary'
    })
    const riverGaugeStations = new ol.layer.VectorImage({
        source: new ol.source.Vector({
            url: './data/KMLs/RiverGauge.kml',
            format: new ol.format.KML()
        }),
        visible: false,
        title: 'RiverGauge'
    })

    const rainGaugeStations = new ol.layer.VectorImage({
        source: new ol.source.Vector({
            url: './data/KMLs/RainGaugeStations.kml',
            format: new ol.format.KML()
        }),
        visible: true,
        title: 'RainGauge',
        
    })
    

    const places = new ol.layer.VectorImage({
        source: new ol.source.Vector({
            url: './data/KMLs/Places.kml',
            format: new ol.format.KML()
        }),
        visible: false,
        title: 'Places'
    })
    const RoadwayLine = new ol.layer.VectorImage({
        source: new ol.source.Vector({
            url: './data/KMLs/Roadway.kml',
            format: new ol.format.KML()
        }),
        visible: false,
        title: 'Roadway'
    })
    const RailwayLine = new ol.layer.VectorImage({
        source: new ol.source.Vector({
            url: './data/KMLs/Railway.kml',
            format: new ol.format.KML()
        }),
        visible: false,
        title: 'Railway'
    })
    const BarakRiver = new ol.layer.VectorImage({
        source: new ol.source.Vector({
            url: './data/KMLs/BarakRiver.kml',
            format: new ol.format.KML()
        }),
        visible: false,
        title: 'Barak'
    })
    const BarakTributaries = new ol.layer.VectorImage({
        source: new ol.source.Vector({
            url: './data/KMLs/Barak_Tributaries.kml',
            format: new ol.format.KML()
        }),
        visible: false,
        title: 'BarakTributeries'
    })
    const TertiaryRivers = new ol.layer.VectorImage({
        source: new ol.source.Vector({
            url: './data/KMLs/Tertiary_River.kml',
            format: new ol.format.KML()
        }),
        visible: false,
        title: 'TertiaryRiver'
    })

    const gaugePointGroup= new ol.layer.Group({
        layers: [
            riverGaugeStations, rainGaugeStations, places, RoadwayLine, RailwayLine, BarakRiver, BarakTributaries, TertiaryRivers
        ]
    })
   
    map.addLayer(CacharBoundary);
    map.addLayer(gaugePointGroup);
   

    
     //Points switcher logic
     
     var checkbox1 = document.querySelector('#RainGauge');

     checkbox1.addEventListener('change', function() {
       var checked = this.checked;
       if (checked !== rainGaugeStations.getVisible()) {
         rainGaugeStations.setVisible(checked);
       }
     });
     
     rainGaugeStations.on('change:visible', function() {
       var visible = this.getVisible();
       if (visible !== checkbox1.checked) {
         checkbox1.checked = visible;
       }
     });

     var checkbox2 = document.querySelector('#RiverGauge');

     checkbox2.addEventListener('change', function() {
       var checked = this.checked;
       if (checked !== riverGaugeStations.getVisible()) {
         riverGaugeStations.setVisible(checked);
       }
     });
     
     riverGaugeStations.on('change:visible', function() {
       var visible = this.getVisible();
       if (visible !== checkbox2.checked) {
         checkbox2.checked = visible;
       }
     });

     var checkbox3 = document.querySelector('#Places');

     checkbox3.addEventListener('change', function() {
       var checked = this.checked;
       if (checked !== places.getVisible()) {
         places.setVisible(checked);
       }
     });
     
     places.on('change:visible', function() {
       var visible = this.getVisible();
       if (visible !== checkbox3.checked) {
         checkbox3.checked = visible;
       }
     });

     var checkbox4 = document.querySelector('#Roadway');

     checkbox4.addEventListener('change', function() {
       var checked = this.checked;
       if (checked !== RoadwayLine.getVisible()) {
         RoadwayLine.setVisible(checked);
       }
     });
     
     RoadwayLine.on('change:visible', function() {
       var visible = this.getVisible();
       if (visible !== checkbox4.checked) {
         checkbox4.checked = visible;
       }
     });

     var checkbox5 = document.querySelector('#Railway');

     checkbox5.addEventListener('change', function() {
       var checked = this.checked;
       if (checked !== RailwayLine.getVisible()) {
         RailwayLine.setVisible(checked);
       }
     });
     
     RailwayLine.on('change:visible', function() {
       var visible = this.getVisible();
       if (visible !== checkbox5.checked) {
         checkbox5.checked = visible;
       }
     });

     var checkbox6 = document.querySelector('#Barak');

     checkbox6.addEventListener('change', function() {
       var checked = this.checked;
       if (checked !== BarakRiver.getVisible()) {
         BarakRiver.setVisible(checked);
       }
     });
     
     BarakRiver.on('change:visible', function() {
       var visible = this.getVisible();
       if (visible !== checkbox6.checked) {
         checkbox6.checked = visible;
       }
     });

     var checkbox7 = document.querySelector('#BarakTributaries');

     checkbox7.addEventListener('change', function() {
       var checked = this.checked;
       if (checked !== BarakTributaries.getVisible()) {
         BarakTributaries.setVisible(checked);
       }
     });
     
     BarakTributaries.on('change:visible', function() {
       var visible = this.getVisible();
       if (visible !== checkbox7.checked) {
         checkbox7.checked = visible;
       }
     });

     var checkbox8 = document.querySelector('#TertiaryRiver');

     checkbox8.addEventListener('change', function() {
       var checked = this.checked;
       if (checked !== TertiaryRivers.getVisible()) {
         TertiaryRivers.setVisible(checked);
       }
     });
     
    TertiaryRivers.on('change:visible', function() {
       var visible = this.getVisible();
       if (visible !== checkbox8.checked) {
         checkbox8.checked = visible;
       }
     });    
}