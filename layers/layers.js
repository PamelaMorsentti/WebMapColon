var wms_layers = [];


// Función para paginar datos
const paginateData = (data, pageSize, pageIndex) => {
    return data.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
};

// Usar Web Workers para cargar datos en segundo plano
const loadLayerDataInWorker = (data, callback) => {
    const worker = new Worker('dataLoaderWorker.js');
    worker.postMessage(data);
    worker.onmessage = (e) => {
        callback(e.data);
        worker.terminate();
    };
};

// Función para añadir capa vectorial
const addVectorLayer = (data, style, title, interactive) => {
    var format = new ol.format.GeoJSON();
    loadLayerDataInWorker(data, (features) => {
        var jsonSource = new ol.source.Vector();
        jsonSource.addFeatures(format.readFeatures(features, { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' }));
        var layer = new ol.layer.Vector({
            declutter: false,
            source: jsonSource,
            style: style,
            popuplayertitle: title,
            interactive: interactive,
            title: `<img src="styles/legend/${title}.png" /> ${title}`
        });

lyr_OSMStandard_0.setVisible(true);lyr_Parcela_1.setVisible(true);lyr_Edif_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Parcela_1,lyr_Edif_2];
lyr_Parcela_1.set('fieldAliases', {'ID': 'ID', 'NCP': 'NCP', 'SEC': 'SEC', 'GRU': 'GRU', 'NMANZ': 'NMANZ', 'LMANZ': 'LMANZ', 'NPARC': 'NPARC', 'LPARC': 'LPARC', 'OBJETO': 'OBJETO', 'NOMBRE': 'NOMBRE', 'AREA': 'AREA', });
lyr_Edif_2.set('fieldAliases', {'ID': 'ID', 'NCP': 'NCP', 'TIPO': 'TIPO', 'NIVEL': 'NIVEL', 'ORIGEN': 'ORIGEN', 'AREA': 'AREA', });
lyr_Parcela_1.set('fieldImages', {'ID': 'TextEdit', 'NCP': 'TextEdit', 'SEC': 'TextEdit', 'GRU': 'TextEdit', 'NMANZ': 'TextEdit', 'LMANZ': 'TextEdit', 'NPARC': 'TextEdit', 'LPARC': 'TextEdit', 'OBJETO': 'TextEdit', 'NOMBRE': 'Hidden', 'AREA': 'TextEdit', });
lyr_Edif_2.set('fieldImages', {'ID': 'TextEdit', 'NCP': 'TextEdit', 'TIPO': 'TextEdit', 'NIVEL': 'TextEdit', 'ORIGEN': 'TextEdit', 'AREA': 'TextEdit', });
lyr_Parcela_1.set('fieldLabels', {'ID': 'no label', 'NCP': 'no label', 'SEC': 'header label - always visible', 'GRU': 'header label - always visible', 'NMANZ': 'header label - always visible', 'LMANZ': 'no label', 'NPARC': 'header label - always visible', 'LPARC': 'no label', 'OBJETO': 'header label - always visible', 'NOMBRE': 'header label - always visible', 'AREA': 'header label - always visible', });
lyr_Edif_2.set('fieldLabels', {'ID': 'no label', 'NCP': 'header label - always visible', 'TIPO': 'header label - always visible', 'NIVEL': 'header label - always visible', 'ORIGEN': 'header label - always visible', 'AREA': 'header label - always visible', });
lyr_Edif_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
<<<<<<< HEAD
});

// Añadir capa de transporte
var lyr_Transporte = new ol.layer.Tile({
    'title': 'Transporte',
    'opacity': 1.0,
    source: new ol.source.XYZ({
        url: 'http://tile.transporte.com/{z}/{x}/{y}.png'
    })
});
layersList.push(lyr_Transporte);

// Implementar geolocalización del usuario
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        var userLocation = new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat([position.coords.longitude, position.coords.latitude]))
        });
        var userLayer = new ol.layer.Vector({
            source: new ol.source.Vector({
                features: [userLocation]
            }),
            style: new ol.style.Style({
                image: new ol.style.Icon({
                    src: 'resources/user-location.png',
                    scale: 0.1
                })
            })
        });
        layersList.push(userLayer);
    });
}

// Añadir rutas y direcciones usando servicio de terceros
const getRoute = (start, end, callback) => {
    fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?access_token=YOUR_MAPBOX_ACCESS_TOKEN`)
        .then(response => response.json())
        .then(data => {
            const route = new ol.format.GeoJSON().readFeatures(data.routes[0].geometry);
            callback(route);
        });
};

// Ejemplo de uso de la función getRoute
const start = [longitude1, latitude1];
const end = [longitude2, latitude2];
getRoute(start, end, (route) => {
    var routeLayer = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: route
        }),
        style: new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: '#ff0000',
                width: 2
            })
        })
    });
    layersList.push(routeLayer);
});
=======
});
>>>>>>> parent of 88a2807 (Update layers.js)
