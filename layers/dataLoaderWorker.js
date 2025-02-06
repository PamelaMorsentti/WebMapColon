// dataLoaderWorker.js
self.onmessage = function(event) {
    const data = event.data;
    // Procesar los datos aquí si es necesario
    self.postMessage(data);
};
