var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Parcela_1 = new ol.format.GeoJSON();
var features_Parcela_1 = format_Parcela_1.readFeatures(json_Parcela_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcela_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcela_1.addFeatures(features_Parcela_1);
var lyr_Parcela_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcela_1, 
                style: style_Parcela_1,
                popuplayertitle: "Parcela",
                interactive: true,
                title: '<img src="styles/legend/Parcela_1.png" /> Parcela'
            });
var format_Edif_2 = new ol.format.GeoJSON();
var features_Edif_2 = format_Edif_2.readFeatures(json_Edif_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Edif_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Edif_2.addFeatures(features_Edif_2);
var lyr_Edif_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Edif_2, 
                style: style_Edif_2,
                popuplayertitle: "Edif",
                interactive: false,
    title: 'Edif<br />\
    <img src="styles/legend/Edif_2_0.png" /> M<br />\
    <img src="styles/legend/Edif_2_1.png" /> P<br />\
    <img src="styles/legend/Edif_2_2.png" /> R<br />\
    <img src="styles/legend/Edif_2_3.png" /> <br />'
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
});