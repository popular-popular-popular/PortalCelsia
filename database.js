// ================================================================
// 📁 database.js - BASE DE DATOS SIMULADA (FACTURACIÓN CELSIA)
// ================================================================

const FACTURAS_DB = {
    // ============================================================
    // 🟢 CLIENTES ACTIVOS (10 ejemplos)
    // ============================================================
    '1001': {
        identificacion: '1001',
        nombre: 've***a vi***l al***o',
        direccion: 'c*l 12 -** ve***a vi***l al***o',
        saldo: 55900,
        cupon: '241769303',
        referencia: '241769303-55900-202610',
        estado: 'activo'
    },
    '1002': {
        identificacion: '1002',
        nombre: 'ca***s ma***z lo***z',
        direccion: 'c*l 45 -** ba***o su***a',
        saldo: 45900,
        cupon: '100200123',
        referencia: '100200123-45900-202610',
        estado: 'activo'
    },
    '1003': {
        identificacion: '1003',
        nombre: 'ma***a ro***z di***z',
        direccion: 'av 30 -** ce***o no***e',
        saldo: 75000,
        cupon: '100300123',
        referencia: '100300123-75000-202610',
        estado: 'activo'
    },
    '1004': {
        identificacion: '1004',
        nombre: 'ju***n pe***z go***z',
        direccion: 'cr 7 -** mi***o es***e',
        saldo: 32000,
        cupon: '100400123',
        referencia: '100400123-32000-202610',
        estado: 'activo'
    },
    '1005': {
        identificacion: '1005',
        nombre: 'lu***a go***z ca***o',
        direccion: 'cl 80 -** su***a',
        saldo: 120000,
        cupon: '100500123',
        referencia: '100500123-120000-202610',
        estado: 'activo'
    },
    '1006': {
        identificacion: '1006',
        nombre: 'pe***o ru***z sa***z',
        direccion: 'kr 15 -** oc***e',
        saldo: 89000,
        cupon: '100600123',
        referencia: '100600123-89000-202610',
        estado: 'activo'
    },
    '1007': {
        identificacion: '1007',
        nombre: 'an***a lo***z me***z',
        direccion: 'av 68 -** su***a',
        saldo: 45000,
        cupon: '100700123',
        referencia: '100700123-45000-202610',
        estado: 'activo'
    },
    '1008': {
        identificacion: '1008',
        nombre: 'di***o he***z va***z',
        direccion: 'cl 100 -** no***e',
        saldo: 150000,
        cupon: '100800123',
        referencia: '100800123-150000-202610',
        estado: 'activo'
    },
    '1009': {
        identificacion: '1009',
        nombre: 'so***a ga***n lo***z',
        direccion: 'cr 50 -** ce***o',
        saldo: 60000,
        cupon: '100900123',
        referencia: '100900123-60000-202610',
        estado: 'activo'
    },
    '1010': {
        identificacion: '1010',
        nombre: 'vi***r ma***n ro***z',
        direccion: 'cl 25 -** mi***o',
        saldo: 38000,
        cupon: '101000123',
        referencia: '101000123-38000-202610',
        estado: 'activo'
    },

    // ============================================================
    // 🔴 CLIENTES SUSPENDIDOS (10 ejemplos)
    // ============================================================
    '2001': {
        identificacion: '2001',
        nombre: 'ju***n pe***z ma***a',
        direccion: 'c*l 45 -** ba***o su***a',
        saldo: 45900,
        cupon: '200100123',
        referencia: '200100123-45900-202610',
        estado: 'suspendido'
    },
    '2002': {
        identificacion: '2002',
        nombre: 'ma***a ro***z di***z',
        direccion: 'av 30 -** ce***o no***e',
        saldo: 85000,
        cupon: '200200123',
        referencia: '200200123-85000-202610',
        estado: 'suspendido'
    },
    '2003': {
        identificacion: '2003',
        nombre: 'ca***s ma***z lo***z',
        direccion: 'cr 7 -** mi***o es***e',
        saldo: 120000,
        cupon: '200300123',
        referencia: '200300123-120000-202610',
        estado: 'suspendido'
    },
    '2004': {
        identificacion: '2004',
        nombre: 'lu***a go***z ca***o',
        direccion: 'cl 80 -** su***a',
        saldo: 33000,
        cupon: '200400123',
        referencia: '200400123-33000-202610',
        estado: 'suspendido'
    },
    '2005': {
        identificacion: '2005',
        nombre: 'pe***o ru***z sa***z',
        direccion: 'kr 15 -** oc***e',
        saldo: 95000,
        cupon: '200500123',
        referencia: '200500123-95000-202610',
        estado: 'suspendido'
    },
    '2006': {
        identificacion: '2006',
        nombre: 'an***a lo***z me***z',
        direccion: 'av 68 -** su***a',
        saldo: 47000,
        cupon: '200600123',
        referencia: '200600123-47000-202610',
        estado: 'suspendido'
    },
    '2007': {
        identificacion: '2007',
        nombre: 'di***o he***z va***z',
        direccion: 'cl 100 -** no***e',
        saldo: 160000,
        cupon: '200700123',
        referencia: '200700123-160000-202610',
        estado: 'suspendido'
    },
    '2008': {
        identificacion: '2008',
        nombre: 'so***a ga***n lo***z',
        direccion: 'cr 50 -** ce***o',
        saldo: 72000,
        cupon: '200800123',
        referencia: '200800123-72000-202610',
        estado: 'suspendido'
    },
    '2009': {
        identificacion: '2009',
        nombre: 'vi***r ma***n ro***z',
        direccion: 'cl 25 -** mi***o',
        saldo: 41000,
        cupon: '200900123',
        referencia: '200900123-41000-202610',
        estado: 'suspendido'
    },
    '2010': {
        identificacion: '2010',
        nombre: 'fe***e mo***a he***z',
        direccion: 'av 12 -** sur',
        saldo: 130000,
        cupon: '201000123',
        referencia: '201000123-130000-202610',
        estado: 'suspendido'
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
