     var geojsonobj = {}
     var dataLayer;
     
    const map = new ol.Map({
        view: new ol.View({
        projection: "EPSG:4326",
            center: [93,24.7],
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
    

    // Vector Layers
    const CacharBoundary = new ol.layer.VectorImage({
        source: new ol.source.Vector({
            projection :"EPSG:4326" ,
            url: './data/KMLs/CacharBoundary.kml',
            format: new ol.format.KML()
        }),
        visible: true,
        title: 'CacharBoundary'
    })
     map.addLayer(CacharBoundary);



     var Year;
     var Month;
     var Day;
     var allData;
     

     //Data Retrive
    
     function ajax_request(){
         removeAddLayer()
        Year=document.getElementById("yr").value;
        Month=document.getElementById("mon").value;
        Day=document.getElementById("date").value;
        if(Year !='' && Month !='' && Day !=''){
            $.post("Runoff.php",
            {
              userYear: Year,
              userMonth : Month,
              userDay : Day
            },
            function(data, status){
                allData=JSON.parse(data);
              creatingGeojson(allData)
            });
          
        } 
        
        
        else alert("Please Select the required data")
         }

         function removeAddLayer() {
            if (dataLayer) {
             map.removeLayer(dataLayer);
            }
         }

     //Creating GeoJSON
     function creatingGeojson(arrayofdata){  
        geojsonobj['type'] = "FeatureCollection"
        var features = []
         for(i=0;i<arrayofdata.length;i++){
            var featobj = {}
            featobj['type'] = 'Feature'
            featobj['properties'] = {'place': arrayofdata[i].place,
                                      'cumecs' : arrayofdata[i].cumecs,
                                      'WL' : arrayofdata[i].waterlevel
                                      
                                      }
            featobj['geometry'] = JSON.parse(arrayofdata[i].st_asgeojson)
            features.push(featobj)
         }
         geojsonobj['features'] = features

         //  Define source to show this data

var dataSource = new ol.source.Vector({
    features : (new ol.format.GeoJSON().readFeatures(geojsonobj)),
    projection: "EPSG:4326"
})


//Attribute based styling
  dataLayer = new ol.layer.Vector({
    source:dataSource,
    style: function(feature){
        if(feature.values_.cumecs <6){
            return new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: '#b4c7ed',
                    }),
                    radius: feature.values_.cumecs,
                    stroke : new ol.style.Stroke({
                        color : '#b4c7ed'
                    })
                }),
            })
        }
        else if(feature.values_.cumecs <12 ){
            return new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: '#5d8ef0',
                    }),
                    radius: feature.values_.cumecs,
                    stroke : new ol.style.Stroke({
                        color : '#5d8ef0'
                    })
                })
            })
        }
        else if(feature.values_.cumecs <18 ){
            return new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: '#0756f2',
                    }),
                    radius: feature.values_.cumecs,
                    stroke : new ol.style.Stroke({
                        color : '#0756f2'
                    })
                })
            })
        }
        else if(feature.values_.cumecs <24 ){
            return new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: '#011c52',
                    }),
                    radius: feature.values_.cumecs,
                    stroke : new ol.style.Stroke({
                        color : '#011c52'
                    })
                })
            })
        }
        else if(feature.values_.cumecs <30 ){
            return new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: '#f5989c',
                    }),
                    radius: feature.values_.cumecs,
                    stroke : new ol.style.Stroke({
                        color : '#f5989c'
                    })
                })
            })
        }
        else if(feature.values_.cumecs <36 ){
            return new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: '#f74048',
                    }),
                    radius: feature.values_.cumecs,
                    stroke : new ol.style.Stroke({
                        color : '#f74048'
                    })
                })
            })
        }
        else if(feature.values_.cumecs <42 ){
            return new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: '#fa020d',
                    }),
                    radius: feature.values_.cumecs,
                    stroke : new ol.style.Stroke({
                        color : '#fa020d'
                    })
                })
            })
        }
        else if(feature.values_.cumecs <48 ){
            return new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: '#7d0006',
                    }),
                    radius: feature.values_.cumecs,
                    stroke : new ol.style.Stroke({
                        color : '#7d0006'
                    })
                })
            })
        }
        else{
            return new ol.style.Style({
                image: new ol.style.Circle({
                    fill: new ol.style.Fill({
                        color: '#000000',
                    }),
                    radius: 55,
                    stroke : new ol.style.Stroke({
                        color : '#000000'
                    })
                })
            })
        }
    }
}) 
map.addLayer(dataLayer);
     }


     //vector_point_data-display
const overlayContainerElement = document.querySelector('.overlay_container');
const overlayLayer = new ol.Overlay({
    element: overlayContainerElement
})
map.addOverlay(overlayLayer);
const overlayPlace= document.getElementById('overlay_place');
const overlayCumecs= document.getElementById('overlay_cumecs');
const overlayWL= document.getElementById('overlay_WL');


map.on('click', function(e){
    overlayLayer.setPosition(undefined);
    map.forEachFeatureAtPixel(e.pixel, function(feature, layer){
        let clickerCoordinate= e.coordinate;
        let clickFeatureName= feature.get('place');
        let clickFeatureCumecs= feature.get('cumecs');
        let clickFeatureWL= feature.get('WL');
        overlayLayer.setPosition(clickerCoordinate);
        overlayPlace.innerHTML = clickFeatureName;
        overlayCumecs.innerHTML = clickFeatureCumecs;
        overlayWL.innerHTML = clickFeatureWL;
    })
})



/*


 //vector_point_data-display
 const overlaylegend = document.querySelector('.legends');
 const overlayLegend = new ol.Overlay({
     element: overlaylegend
 })
 map.addOverlay(overlayLegend);
 const overlayL1= document.getElementById('overlay1');
 const overlayL2= document.getElementById('overlay2');
 
 
 map.on('click', function(e){
     map.forEachFeatureAtPixel(e.pixel, function(feature, layer){
         let clickerCoordinate= e.coordinate;
         let clickFeatureName= feature.get('place');
         let clickFeatureVal= feature.get('val');
         overlayLegend.setPosition(clickerCoordinate);
         overlayL1.innerHTML = clickFeatureName;
         overlayL2.innerHTML = clickFeatureVal;
     })
 })

 */