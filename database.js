// ================================================================
// 📁 database.js - BASE DE DATOS SIMULADA (FACTURACIÓN CELSIA)
// ================================================================

const FACTURAS_DB = {
    // ============================================================
    // FACTURA 1: Cliente Activo (el de tu diseño)
    // ============================================================
    '2417693': {
        identificacion: '2417693',
        nombre: 've***a vi***l al***o',
        direccion: 'c*l 12 -** ve***a vi***l al***o',
        saldo: 55900,
        cupon: '241769303',
        referencia: '241769303-55900-202610',
        estado: 'activo'
    },
    '32703085': {
        identificacion: '32703085',
        nombre: 've***a vi***l al***o',
        direccion: 'c*l 12 -** ve***a vi***l al***o',
        saldo: 55900,
        cupon: '241769303',
        referencia: '241769303-55900-202610',
        estado: 'activo'
    },

    // ============================================================
    // FACTURA 2: Cliente Suspendido (para probar el cambio de color)
    // ============================================================
    '12345678': {
        identificacion: '12345678',
        nombre: 'ju***n pe***z ma***a',
        direccion: 'c*l 45 -** ba***o su***a',
        saldo: 45900,
        cupon: '123456781',
        referencia: '123456781-45900-202610',
        estado: 'suspendido'
    },

    // ============================================================
    // FACTURA 3: Cliente con Saldo en Cero (Paz y Salvo)
    // ============================================================
    '98765432': {
        identificacion: '98765432',
        nombre: 'ca***s go***z ru***z',
        direccion: 'av 30 -** ce***o no***e',
        saldo: 0,
        cupon: '987654321',
        referencia: '987654321-00000-202610',
        estado: 'activo'
    }
};

/**
 * Busca una factura por número de cuenta o documento
 * @param {string} id - Identificación a buscar
 * @returns {object} - Resultado de la búsqueda
 */
function buscarFactura(id) {
    const idLimpio = id.trim();
    const factura = FACTURAS_DB[idLimpio];
    
    if (factura) {
        return {
            success: true,
            data: factura
        };
    } else {
        return {
            success: false,
            error: 'Cuenta o documento no encontrado.'
        };
    }
}
