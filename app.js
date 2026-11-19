(() => {
  "use strict";

  const translations = {
    en: {
      tagline: "Compare the world, layer by layer", searchPlaceholder: "Search a place or address",
      search: "Search", myLocation: "My location", language: "Language", mapA: "MAP A", mapB: "MAP B",
      chooseMapA: "Choose map A", chooseMapB: "Choose map B", measure: "Measure",
      distance: "Distance", area: "Area", syncOn: "Sync on", syncOff: "Sync off",
      mirrorOn: "Mirror points on", mirrorOff: "Mirror points off", importFile: "Import KML / GeoJSON",
      clearImports: "Clear imports", fitView: "Fit view", export: "Export GeoJSON",
      clear: "Clear measurements", mapAMeasurement: "Map A measurement", mapBMeasurement: "Map B measurement",
      difference: "Distance difference (A − B)", areaDifference: "Area difference (A − B)",
      cursor: "Cursor", coordsUnknown: "Move over a map to see coordinates",
      measureHelp: "Click to add points. Right-click a map to undo its last point.",
      areaHelp: "Click to outline an area (3 points minimum). Right-click to undo.",
      searchError: "Place not found. Try a more specific search.",
      searchFailed: "Search failed. Please try again.",
      mapTileError: "Map tiles could not load for {map}. Try another source or check your connection.",
      googleKeyRequired: "Google Maps needs a restricted API key. Add it to the ignored map-config.local.js file; see README.",
      googleLoadFailed: "Google Maps could not be loaded. Check the API key, enabled Maps JavaScript API, billing, and referrer restrictions.",
      addMap: "Add map by URL",
      customMapTitle: "Add a custom tile map",
      customMapName: "Map name",
      customMapUrl: "XYZ tile URL template",
      customMapApiKey: "API key (optional)",
      customMapAttribution: "Attribution",
      customMapAttributionRequired: "Enter the attribution required by your tile provider.",
      customMapSubdomains: "Subdomains (optional)",
      customMapHelp: "Use {z}, {x}, and {y} in the URL. Optional: {s} for subdomains and {apiKey} for your key. Keys are saved in this browser and visible to visitors; use provider-restricted keys.",
      customMapSave: "Save map",
      customMapCancel: "Cancel",
      customMapInvalid: "Enter a name and a valid HTTP(S) XYZ URL using {z}, {x}, and {y}.",
      customMapKeyRequired: "This URL uses {apiKey}; enter an API key.",
      customMapStorageError: "Could not load or save custom maps in this browser.",
      customMapAdded: "Custom map added. Choose it from either map selector.",
      locationFailed: "Could not determine location. Check browser permission and try again.",
      locationSearching: "Finding your location…", searching: "Searching…",
      importUnsupported: "Choose a .kml, .geojson, or .json file.",
      importTooLarge: "The file is too large. Maximum size is 20 MB.",
      importFailed: "Could not read this file. Check that it is valid KML or GeoJSON.",
      importDone: "Imported {count} feature(s) to both maps.",
      importEmpty: "The file contains no usable map features.",
      clearImportsDone: "Imported features cleared.",
      exportEmpty: "Add measurement points before exporting.",
      exportDone: "Measurements exported as GeoJSON.",
      maps: ["Esri Streets", "Esri Topographic", "Esri Satellite", "OpenStreetMap",
        "Google Maps · Roadmap", "Google Maps · Satellite", "Google Maps · Hybrid", "Google Maps · Terrain"],
      meters: "m", kilometers: "km", squareMeters: "m²", hectares: "ha", squareKilometers: "km²"
    },
    fr: {
      tagline: "Comparez le monde, carte par carte", searchPlaceholder: "Rechercher un lieu ou une adresse",
      search: "Rechercher", myLocation: "Ma position", language: "Langue", mapA: "CARTE A", mapB: "CARTE B",
      chooseMapA: "Choisir la carte A", chooseMapB: "Choisir la carte B", measure: "Mesurer",
      distance: "Distance", area: "Surface", syncOn: "Synchro activée", syncOff: "Synchro désactivée",
      mirrorOn: "Dupliquer les points : oui", mirrorOff: "Dupliquer les points : non", importFile: "Importer KML / GeoJSON",
      clearImports: "Effacer les imports", fitView: "Cadrer", export: "Exporter GeoJSON",
      clear: "Effacer les mesures", mapAMeasurement: "Mesure carte A", mapBMeasurement: "Mesure carte B",
      difference: "Différence de distance (A − B)", areaDifference: "Différence de surface (A − B)",
      cursor: "Curseur", coordsUnknown: "Survolez une carte pour voir les coordonnées",
      measureHelp: "Cliquez pour ajouter des points. Clic droit pour annuler le dernier point.",
      areaHelp: "Cliquez pour délimiter une surface (3 points minimum). Clic droit pour annuler.",
      searchError: "Lieu introuvable. Essayez une recherche plus précise.",
      searchFailed: "Échec de la recherche. Veuillez réessayer.",
      mapTileError: "Échec du chargement des tuiles {map}. Essayez une autre source ou vérifiez la connexion.",
      googleKeyRequired: "Google Maps nécessite une clé API restreinte. Ajoutez-la dans map-config.local.js (ignoré par Git) ; voir README.",
      googleLoadFailed: "Google Maps n'a pas pu être chargé. Vérifiez la clé, l'API JavaScript Maps, la facturation et les domaines autorisés.",
      addMap: "Ajouter une carte par URL",
      customMapTitle: "Ajouter une carte personnalisée",
      customMapName: "Nom de la carte",
      customMapUrl: "Modèle d’URL des tuiles XYZ",
      customMapApiKey: "Clé API (facultative)",
      customMapAttribution: "Attribution",
      customMapAttributionRequired: "Saisissez l’attribution exigée par votre fournisseur de tuiles.",
      customMapSubdomains: "Sous-domaines (facultatif)",
      customMapHelp: "Utilisez {z}, {x} et {y} dans l’URL. Facultatif : {s} pour les sous-domaines et {apiKey} pour votre clé. Les clés sont enregistrées dans ce navigateur et visibles par les visiteurs ; utilisez des clés restreintes par le fournisseur.",
      customMapSave: "Enregistrer la carte",
      customMapCancel: "Annuler",
      customMapInvalid: "Saisissez un nom et une URL XYZ HTTP(S) valide contenant {z}, {x} et {y}.",
      customMapKeyRequired: "Cette URL utilise {apiKey} ; saisissez une clé API.",
      customMapStorageError: "Impossible de charger ou d’enregistrer les cartes personnalisées dans ce navigateur.",
      customMapAdded: "Carte personnalisée ajoutée. Choisissez-la dans l’un des sélecteurs.",
      locationFailed: "Position indisponible. Vérifiez l’autorisation du navigateur.",
      locationSearching: "Localisation…", searching: "Recherche…",
      importUnsupported: "Choisissez un fichier .kml, .geojson ou .json.",
      importTooLarge: "Fichier trop volumineux. Taille maximale : 20 Mo.",
      importFailed: "Fichier illisible. Vérifiez le format KML ou GeoJSON.",
      importDone: "{count} élément(s) importé(s) sur les deux cartes.",
      importEmpty: "Le fichier ne contient aucun élément cartographique exploitable.",
      clearImportsDone: "Éléments importés effacés.",
      exportEmpty: "Ajoutez des points avant l’export.", exportDone: "Mesures exportées au format GeoJSON.",
      maps: ["Esri rues", "Esri topographique", "Esri satellite", "OpenStreetMap",
        "Google Maps · Plan", "Google Maps · Satellite", "Google Maps · Hybride", "Google Maps · Relief"],
      meters: "m", kilometers: "km", squareMeters: "m²", hectares: "ha", squareKilometers: "km²"
    },
    es: {
      tagline: "Compara el mundo, mapa a mapa", searchPlaceholder: "Buscar un lugar o dirección",
      search: "Buscar", myLocation: "Mi ubicación", language: "Idioma", mapA: "MAPA A", mapB: "MAPA B",
      chooseMapA: "Elegir mapa A", chooseMapB: "Elegir mapa B", measure: "Medir",
      distance: "Distancia", area: "Área", syncOn: "Sincronización activa", syncOff: "Sincronización desactivada",
      mirrorOn: "Duplicar puntos: sí", mirrorOff: "Duplicar puntos: no", importFile: "Importar KML / GeoJSON",
      clearImports: "Borrar importaciones", fitView: "Ajustar vista", export: "Exportar GeoJSON",
      clear: "Borrar mediciones", mapAMeasurement: "Medición del mapa A", mapBMeasurement: "Medición del mapa B",
      difference: "Diferencia de distancia (A − B)", areaDifference: "Diferencia de área (A − B)",
      cursor: "Cursor", coordsUnknown: "Pasa el cursor por el mapa para ver las coordenadas",
      measureHelp: "Haz clic para añadir puntos. Clic derecho para deshacer el último punto.",
      areaHelp: "Haz clic para delimitar un área (mínimo 3 puntos). Clic derecho para deshacer.",
      searchError: "Lugar no encontrado. Prueba una búsqueda más específica.",
      searchFailed: "La búsqueda falló. Inténtalo de nuevo.",
      mapTileError: "No se pudieron cargar los mosaicos de {map}. Prueba otra fuente o revisa tu conexión.",
      googleKeyRequired: "Google Maps necesita una clave API restringida. Añádela a map-config.local.js (ignorado por Git); consulta README.",
      googleLoadFailed: "No se pudo cargar Google Maps. Comprueba la clave, Maps JavaScript API, facturación y dominios autorizados.",
      addMap: "Añadir mapa por URL",
      customMapTitle: "Añadir un mapa personalizado",
      customMapName: "Nombre del mapa",
      customMapUrl: "Plantilla de URL de teselas XYZ",
      customMapApiKey: "Clave API (opcional)",
      customMapAttribution: "Atribución",
      customMapAttributionRequired: "Introduce la atribución requerida por tu proveedor de teselas.",
      customMapSubdomains: "Subdominios (opcional)",
      customMapHelp: "Usa {z}, {x} y {y} en la URL. Opcional: {s} para subdominios y {apiKey} para tu clave. Las claves se guardan en este navegador y son visibles para los visitantes; usa claves restringidas por el proveedor.",
      customMapSave: "Guardar mapa",
      customMapCancel: "Cancelar",
      customMapInvalid: "Introduce un nombre y una URL XYZ HTTP(S) válida con {z}, {x} e {y}.",
      customMapKeyRequired: "Esta URL usa {apiKey}; introduce una clave API.",
      customMapStorageError: "No se pudieron cargar o guardar mapas personalizados en este navegador.",
      customMapAdded: "Mapa personalizado añadido. Elígelo en cualquiera de los selectores.",
      locationFailed: "No se pudo determinar tu ubicación. Comprueba los permisos del navegador.",
      locationSearching: "Buscando tu ubicación…", searching: "Buscando…",
      importUnsupported: "Elige un archivo .kml, .geojson o .json.",
      importTooLarge: "El archivo es demasiado grande. Máximo: 20 MB.",
      importFailed: "No se pudo leer el archivo. Comprueba que sea KML o GeoJSON válido.",
      importDone: "Se importaron {count} elemento(s) en ambos mapas.",
      importEmpty: "El archivo no contiene elementos cartográficos válidos.",
      clearImportsDone: "Se borraron los elementos importados.",
      exportEmpty: "Añade puntos antes de exportar.", exportDone: "Mediciones exportadas como GeoJSON.",
      maps: ["Esri calles", "Esri topográfico", "Esri satélite", "OpenStreetMap",
        "Google Maps · Calles", "Google Maps · Satélite", "Google Maps · Híbrido", "Google Maps · Terreno"],
      meters: "m", kilometers: "km", squareMeters: "m²", hectares: "ha", squareKilometers: "km²"
    },
    ar: {
      tagline: "قارن الخرائط طبقةً بطبقة", searchPlaceholder: "ابحث عن مكان أو عنوان",
      search: "بحث", myLocation: "موقعي", language: "اللغة", mapA: "الخريطة أ", mapB: "الخريطة ب",
      chooseMapA: "اختر الخريطة أ", chooseMapB: "اختر الخريطة ب", measure: "القياس",
      distance: "المسافة", area: "المساحة", syncOn: "المزامنة مفعّلة", syncOff: "المزامنة متوقفة",
      mirrorOn: "تكرار النقاط: مفعّل", mirrorOff: "تكرار النقاط: متوقف", importFile: "استيراد KML / GeoJSON",
      clearImports: "مسح الملفات المستوردة", fitView: "ملاءمة العرض", export: "تصدير GeoJSON",
      clear: "مسح القياسات", mapAMeasurement: "قياس الخريطة أ", mapBMeasurement: "قياس الخريطة ب",
      difference: "فرق المسافة (أ − ب)", areaDifference: "فرق المساحة (أ − ب)",
      cursor: "المؤشر", coordsUnknown: "حرّك المؤشر فوق الخريطة لعرض الإحداثيات",
      measureHelp: "انقر لإضافة نقاط. انقر بزر الفأرة الأيمن للتراجع عن آخر نقطة.",
      areaHelp: "انقر لتحديد مساحة (٣ نقاط على الأقل). انقر بزر الفأرة الأيمن للتراجع.",
      searchError: "لم يتم العثور على المكان. جرّب بحثاً أكثر تحديداً.",
      searchFailed: "تعذّر البحث. حاول مرة أخرى.",
      mapTileError: "تعذّر تحميل خرائط {map}. جرّب مصدراً آخر أو تحقق من الاتصال.",
      googleKeyRequired: "تتطلب Google Maps مفتاح API مقيّداً. أضفه إلى map-config.local.js؛ راجع README.",
      googleLoadFailed: "تعذّر تحميل Google Maps. تحقق من المفتاح وواجهة Maps JavaScript والفوترة والنطاقات المسموحة.",
      addMap: "إضافة خريطة عبر رابط",
      customMapTitle: "إضافة خريطة مخصصة",
      customMapName: "اسم الخريطة",
      customMapUrl: "قالب رابط مربعات XYZ",
      customMapApiKey: "مفتاح API (اختياري)",
      customMapAttribution: "الإسناد",
      customMapAttributionRequired: "أدخل الإسناد المطلوب من مزوّد المربعات.",
      customMapSubdomains: "النطاقات الفرعية (اختياري)",
      customMapHelp: "استخدم {z} و{x} و{y} في الرابط. اختياري: {s} للنطاقات الفرعية و{apiKey} للمفتاح. تُحفظ المفاتيح في هذا المتصفح وتكون مرئية للزوار؛ استخدم مفاتيح مقيّدة من المزوّد.",
      customMapSave: "حفظ الخريطة",
      customMapCancel: "إلغاء",
      customMapInvalid: "أدخل اسماً ورابط XYZ صالحاً ببروتوكول HTTP(S) ويحتوي على {z} و{x} و{y}.",
      customMapKeyRequired: "يستخدم هذا الرابط {apiKey}؛ أدخل مفتاح API.",
      customMapStorageError: "تعذّر تحميل الخرائط المخصصة أو حفظها في هذا المتصفح.",
      customMapAdded: "تمت إضافة الخريطة المخصصة. اخترها من أحد محددات الخرائط.",
      locationFailed: "تعذّر تحديد موقعك. تحقق من إذن المتصفح.",
      locationSearching: "جارٍ تحديد موقعك…", searching: "جارٍ البحث…",
      importUnsupported: "اختر ملف .kml أو .geojson أو .json.",
      importTooLarge: "الملف كبير جداً. الحد الأقصى ٢٠ ميغابايت.",
      importFailed: "تعذّرت قراءة الملف. تحقق من صحة KML أو GeoJSON.",
      importDone: "تم استيراد {count} عنصر إلى كلتا الخريطتين.",
      importEmpty: "لا يحتوي الملف على عناصر خرائط صالحة.",
      clearImportsDone: "تم مسح العناصر المستوردة.",
      exportEmpty: "أضف نقاط القياس قبل التصدير.", exportDone: "تم تصدير القياسات بصيغة GeoJSON.",
      maps: ["شوارع Esri", "طبوغرافية Esri", "صور Esri الفضائية", "OpenStreetMap",
        "Google Maps · طرق", "Google Maps · فضائي", "Google Maps · هجين", "Google Maps · تضاريس"],
      meters: "م", kilometers: "كم", squareMeters: "م²", hectares: "هكتار", squareKilometers: "كم²"
    }
  };

  const builtInMapSources = [
    { id: "esri-streets", url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", attribution: "Tiles &copy; Esri — Sources: Esri, HERE, Garmin, Intermap, increment P, GEBCO, USGS, FAO, NPS, NRCAN, GeoBase, IGN, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), (c) OpenStreetMap contributors, and the GIS User Community", maxZoom: 19 },
    { id: "esri-topographic", url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}", attribution: "Tiles &copy; Esri — Sources: Esri, Garmin, USGS, NOAA, and the GIS User Community", maxZoom: 19 },
    { id: "esri-imagery", url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", attribution: "Tiles &copy; Esri, Maxar, Earthstar Geographics", maxZoom: 19 },
    { id: "osm", url: "https://tile.openstreetmap.de/{z}/{x}/{y}.png", attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors · tiles openstreetmap.de', maxZoom: 19 },
    { id: "google-roadmap", googleType: "roadmap", attribution: "Google Maps", maxZoom: 21 },
    { id: "google-satellite", googleType: "satellite", attribution: "Google Maps", maxZoom: 21 },
    { id: "google-hybrid", googleType: "hybrid", attribution: "Google Maps", maxZoom: 21 },
    { id: "google-terrain", googleType: "terrain", attribution: "Google Maps", maxZoom: 21 }
  ];
  const mapSources = [...builtInMapSources];
  const customMapStorageKey = "atlas-compare.custom-tile-maps";

  const defaultCenter = [36.591, 2.058];
  const defaultZoom = 13;
  const maps = {
    left: L.map("map-left", { zoomControl: false, preferCanvas: true }).setView(defaultCenter, defaultZoom),
    right: L.map("map-right", { zoomControl: false, preferCanvas: true }).setView(defaultCenter, defaultZoom)
  };
  Object.values(maps).forEach(map => L.control.zoom({ position: "bottomright" }).addTo(map));

  const state = {
    language: "en",
    mode: "distance",
    sync: true,
    mirror: true,
    syncing: false,
    cursor: null,
    sources: {},
    layers: {},
    imported: [],
    measurements: { left: [], right: [] }
  };
  const $ = id => document.getElementById(id);
  const statusElement = $("status");
  let googlePromise;
  let localConfigPromise;
  let customMapStorageError = false;

  function normalizeCustomMap(value) {
    if (!value || typeof value !== "object") throw new Error(translate("customMapInvalid"));
    const name = String(value.name || "").trim();
    const url = String(value.url || "").trim();
    const apiKey = String(value.apiKey || "").trim();
    const attribution = String(value.attribution || "").trim();
    if (!name || !url || !url.includes("{z}") || !url.includes("{x}") || !url.includes("{y}")) {
      throw new Error(translate("customMapInvalid"));
    }
    if (!attribution) throw new Error(translate("customMapAttributionRequired"));

    const placeholders = url.match(/\{[^}]+\}/g) || [];
    if (placeholders.some(placeholder => !["{z}", "{x}", "{y}", "{s}", "{apiKey}"].includes(placeholder))) {
      throw new Error(translate("customMapInvalid"));
    }
    if (url.includes("{apiKey}") && !apiKey) throw new Error(translate("customMapKeyRequired"));

    const testUrl = url.replace(/\{(?:z|x|y|s|apiKey)\}/g, "0");
    let parsedUrl;
    try {
      parsedUrl = new URL(testUrl);
    } catch {
      throw new Error(translate("customMapInvalid"));
    }
    if (!["http:", "https:"].includes(parsedUrl.protocol)) throw new Error(translate("customMapInvalid"));

    const subdomainsText = String(value.subdomains || "").trim();
    const subdomains = subdomainsText
      ? subdomainsText.split(/[,\s]+/).filter(Boolean)
      : (url.includes("{s}") ? ["a", "b", "c"] : []);
    const id = typeof value.id === "string" && value.id.startsWith("custom-")
      ? value.id
      : `custom-${window.crypto?.randomUUID?.() || `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}`;
    return { id, name, url, apiKey, attribution, subdomains, custom: true, maxZoom: 19 };
  }

  function loadCustomMapSources() {
    try {
      const saved = localStorage.getItem(customMapStorageKey);
      if (!saved) return [];
      const parsed = JSON.parse(saved);
      if (!Array.isArray(parsed)) throw new Error("Stored custom maps must be an array");
      return parsed.map(normalizeCustomMap);
    } catch (error) {
      console.error("Could not load custom tile maps", error);
      customMapStorageError = true;
      return [];
    }
  }

  let customMapSources = loadCustomMapSources();
  mapSources.push(...customMapSources);

  function mapSourceLabel(source) {
    return source.custom
      ? source.name
      : translate("maps")[builtInMapSources.indexOf(source)];
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, character => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[character]);
  }

  function saveCustomMap(event) {
    event.preventDefault();
    const errorElement = $("custom-map-error");
    errorElement.textContent = "";
    try {
      if (customMapStorageError) throw new Error(translate("customMapStorageError"));
      const source = normalizeCustomMap({
        name: $("custom-map-name").value,
        url: $("custom-map-url").value,
        apiKey: $("custom-map-api-key").value,
        attribution: $("custom-map-attribution").value,
        subdomains: $("custom-map-subdomains").value
      });
      const nextCustomMaps = [...customMapSources, source];
      localStorage.setItem(customMapStorageKey, JSON.stringify(nextCustomMaps));
      customMapSources = nextCustomMaps;
      mapSources.push(source);
      ["left", "right"].forEach(side => {
        const option = document.createElement("option");
        option.value = source.id;
        option.textContent = source.name;
        $("layer-" + side).append(option);
      });
      $("custom-map-dialog").close();
      $("custom-map-form").reset();
      setStatus(translate("customMapAdded"));
    } catch (error) {
      errorElement.textContent = error.message || translate("customMapStorageError");
    }
  }

  function translate(key) {
    return translations[state.language][key];
  }

  function setStatus(message, isError = false) {
    statusElement.textContent = message;
    statusElement.classList.toggle("error", isError);
    document.querySelector(".status-indicator").classList.toggle("error", isError);
  }

  function formatLength(meters) {
    const number = new Intl.NumberFormat(state.language, { maximumFractionDigits: meters >= 1000 ? 2 : 0 });
    return meters >= 1000
      ? `${number.format(meters / 1000)} ${translate("kilometers")}`
      : `${number.format(meters)} ${translate("meters")}`;
  }

  function formatArea(squareMeters) {
    if (squareMeters >= 1_000_000) {
      return `${new Intl.NumberFormat(state.language, { maximumFractionDigits: 2 }).format(squareMeters / 1_000_000)} ${translate("squareKilometers")}`;
    }
    if (squareMeters >= 10_000) {
      return `${new Intl.NumberFormat(state.language, { maximumFractionDigits: 2 }).format(squareMeters / 10_000)} ${translate("hectares")}`;
    }
    return `${new Intl.NumberFormat(state.language, { maximumFractionDigits: 0 }).format(squareMeters)} ${translate("squareMeters")}`;
  }

  function areaInSquareMeters(points) {
    if (points.length < 3) return 0;
    const earthRadius = 6378137;
    let total = 0;
    for (let i = 0; i < points.length; i++) {
      const current = points[i];
      const next = points[(i + 1) % points.length];
      total += (next.lng - current.lng) * Math.PI / 180 *
        (2 + Math.sin(current.lat * Math.PI / 180) + Math.sin(next.lat * Math.PI / 180));
    }
    return Math.abs(total * earthRadius * earthRadius / 2);
  }

  function valueFor(side) {
    const points = state.measurements[side];
    if (state.mode === "area") return areaInSquareMeters(points);
    return points.slice(1).reduce((total, point, index) => total + points[index].distanceTo(point), 0);
  }

  function refreshMeasurements() {
    const left = valueFor("left");
    const right = valueFor("right");
    $("value-left").textContent = state.mode === "area" ? formatArea(left) : formatLength(left);
    $("value-right").textContent = state.mode === "area" ? formatArea(right) : formatLength(right);
    const difference = left - right;
    $("difference-label").textContent = translate(state.mode === "area" ? "areaDifference" : "difference");
    $("value-difference").textContent =
      `${difference > 0 ? "+" : difference < 0 ? "−" : ""}${state.mode === "area" ? formatArea(Math.abs(difference)) : formatLength(Math.abs(difference))}`;
  }

  function redrawMeasurement(side) {
    const map = maps[side];
    const old = state.layers[side].measurement;
    if (old) map.removeLayer(old);
    const points = state.measurements[side];
    const group = L.layerGroup();
    const color = side === "left" ? "#3478d4" : "#c47b22";
    if (points.length > 1) {
      (state.mode === "area" && points.length >= 3
        ? L.polygon(points, { color, weight: 2, fillColor: color, fillOpacity: 0.13 })
        : L.polyline(points, { color, weight: 3.5, opacity: 0.95 })
      ).addTo(group);
    }
    points.forEach((point, index) => {
      L.circleMarker(point, { radius: 5, color, weight: 2, fillColor: "#fff", fillOpacity: 1 })
        .bindTooltip(String(index + 1), { direction: "top", offset: [0, -4] })
        .addTo(group);
    });
    group.addTo(map);
    state.layers[side].measurement = group;
    refreshMeasurements();
  }

  function addPoint(side, point) {
    const pointForMap = L.latLng(point.lat, point.lng);
    if (state.mirror) {
      state.measurements.left.push(pointForMap);
      state.measurements.right.push(pointForMap);
      redrawMeasurement("left");
      redrawMeasurement("right");
      return;
    }
    state.measurements[side].push(pointForMap);
    redrawMeasurement(side);
  }

  function undoPoint(side) {
    const left = state.measurements.left;
    const right = state.measurements.right;
    const lastLeft = left.at(-1);
    const lastRight = right.at(-1);
    const paired = state.mirror && lastLeft && lastRight &&
      lastLeft.lat === lastRight.lat && lastLeft.lng === lastRight.lng;
    if (paired) {
      left.pop();
      right.pop();
      redrawMeasurement("left");
      redrawMeasurement("right");
    } else {
      state.measurements[side].pop();
      redrawMeasurement(side);
    }
  }

  function updateMapLabel(side) {
    const source = mapSources.find(item => item.id === state.sources[side]);
    $("label-" + side).textContent = `${side === "left" ? "A" : "B"} · ${mapSourceLabel(source)}`;
  }

  function loadLocalGoogleConfig() {
    if (window.MAP_COMPAR_CONFIG) return Promise.resolve();
    if (localConfigPromise) return localConfigPromise;
    localConfigPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "./map-config.local.js";
      script.onload = resolve;
      script.onerror = () => {
        localConfigPromise = null;
        reject(new Error(translate("googleKeyRequired")));
      };
      document.head.append(script);
    });
    return localConfigPromise;
  }

  function loadGoogleMapsApi() {
    if (window.google?.maps) return Promise.resolve();
    if (googlePromise) return googlePromise;
    googlePromise = loadLocalGoogleConfig().then(() => {
      const apiKey = window.MAP_COMPAR_CONFIG?.googleMapsApiKey?.trim();
      if (!apiKey) throw new Error(translate("googleKeyRequired"));
      return new Promise((resolve, reject) => {
        const callbackName = "__atlasGoogleMapsReady";
        const script = document.createElement("script");
        window[callbackName] = () => {
          delete window[callbackName];
          resolve();
        };
        window.gm_authFailure = () => {
          setStatus(translate("googleLoadFailed"), true);
        };
        script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&callback=${callbackName}&v=weekly`;
        script.async = true;
        script.onerror = () => {
          delete window[callbackName];
          reject(new Error(translate("googleLoadFailed")));
        };
        document.head.append(script);
      });
    }).catch(error => {
      googlePromise = null;
      throw error;
    });
    return googlePromise;
  }

  async function changeMapSource(side, sourceId) {
    const source = mapSources.find(item => item.id === sourceId);
    if (!source) return;
    const oldSourceId = state.sources[side];
    const oldLayer = state.layers[side].base;
    try {
      if (source.googleType) {
        await loadGoogleMapsApi();
        if (!L.gridLayer.googleMutant) throw new Error(translate("googleLoadFailed"));
      }

      const tileUrl = source.custom
        ? source.url.replace(/\{apiKey\}/g, encodeURIComponent(source.apiKey))
        : source.url;
      const nextLayer = source.googleType
        ? L.gridLayer.googleMutant({
            type: source.googleType,
            maxZoom: source.maxZoom,
            attribution: source.attribution
          })
        : L.tileLayer(tileUrl, {
            maxZoom: source.maxZoom,
            attribution: source.custom ? escapeHtml(source.attribution) : source.attribution,
            crossOrigin: true,
            ...(source.custom && source.subdomains.length ? { subdomains: source.subdomains } : {})
          });
      nextLayer.on?.("tileerror", event => {
        console.warn("Basemap tile failed to load", source.id);
        setStatus(translate("mapTileError").replace("{map}", mapSourceLabel(source)), true);
      });
      nextLayer.addTo(maps[side]);
      if (oldLayer) maps[side].removeLayer(oldLayer);
      state.layers[side].base = nextLayer;
      state.sources[side] = source.id;
      $("layer-" + side).value = source.id;
      updateMapLabel(side);
      if (statusElement.classList.contains("error")) setStatus(translate(state.mode === "area" ? "areaHelp" : "measureHelp"));
    } catch (error) {
      console.error(error);
      $("layer-" + side).value = oldSourceId;
      setStatus(error.message || translate("googleLoadFailed"), true);
    }
  }

  function populateMapSelectors() {
    ["left", "right"].forEach(side => {
      const select = $("layer-" + side);
      mapSources.forEach(source => {
        const option = document.createElement("option");
        option.value = source.id;
        option.textContent = mapSourceLabel(source);
        select.append(option);
      });
      select.value = state.sources[side];
      select.addEventListener("change", event => changeMapSource(side, event.target.value));
    });
  }

  function updateLanguage(language) {
    state.language = translations[language] ? language : "en";
    const isArabic = state.language === "ar";
    document.documentElement.lang = state.language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach(element => {
      element.textContent = translate(element.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
      element.placeholder = translate(element.dataset.i18nPlaceholder);
    });
    $("search-input").setAttribute("aria-label", translate("searchPlaceholder"));
    ["left", "right"].forEach(side => {
      const select = $("layer-" + side);
      const selected = select.value;
      select.replaceChildren(...mapSources.map(source => {
        const option = document.createElement("option");
        option.value = source.id;
        option.textContent = mapSourceLabel(source);
        return option;
      }));
      select.value = selected;
      updateMapLabel(side);
    });
    $("sync-btn").textContent = translate(state.sync ? "syncOn" : "syncOff");
    $("mirror-btn").textContent = translate(state.mirror ? "mirrorOn" : "mirrorOff");
    $("cursor-coordinates").textContent = state.cursor
      ? formatCursor(state.cursor.side, state.cursor.point)
      : translate("coordsUnknown");
    $("status").textContent = translate(state.mode === "area" ? "areaHelp" : "measureHelp");
    refreshMeasurements();
  }

  function syncMaps(sourceMap, targetMap) {
    if (!state.sync || state.syncing) return;
    const sourceCenter = sourceMap.getCenter();
    const targetCenter = targetMap.getCenter();
    if (sourceMap.getZoom() === targetMap.getZoom() &&
      Math.abs(sourceCenter.lat - targetCenter.lat) < 1e-8 &&
      Math.abs(sourceCenter.lng - targetCenter.lng) < 1e-8) return;
    state.syncing = true;
    targetMap.setView(sourceCenter, sourceMap.getZoom(), { animate: false });
    state.syncing = false;
  }

  function createCursorMarker() {
    const icon = L.divIcon({
      className: "cursor-marker",
      html: '<span style="display:block;width:18px;height:18px;border:2px solid #fff;border-radius:50%;box-shadow:0 0 0 2px #2878df;background:#2878df44;position:relative"></span><span style="position:absolute;left:8px;top:-4px;width:2px;height:26px;background:#fff"></span><span style="position:absolute;left:-4px;top:8px;width:26px;height:2px;background:#fff"></span>',
      iconSize: [18, 18],
      iconAnchor: [9, 9]
    });
    return {
      left: L.marker(defaultCenter, { icon, interactive: false, zIndexOffset: 1200 }),
      right: L.marker(defaultCenter, { icon, interactive: false, zIndexOffset: 1200 })
    };
  }

  const cursorMarkers = createCursorMarker();

  function formatCursor(side, point) {
    const text = `${side === "left" ? "A" : "B"} · Lat ${point.lat.toFixed(6)}° · Lon ${point.lng.toFixed(6)}°`;
    return text;
  }

  function showCursor(side, point) {
    const other = side === "left" ? "right" : "left";
    state.cursor = { side, point };
    $("cursor-coordinates").textContent = formatCursor(side, point);
    cursorMarkers[other].setLatLng(point);
    if (!maps[other].hasLayer(cursorMarkers[other])) cursorMarkers[other].addTo(maps[other]);
  }

  function hideCursor(side) {
    const other = side === "left" ? "right" : "left";
    if (maps[other].hasLayer(cursorMarkers[other])) maps[other].removeLayer(cursorMarkers[other]);
    state.cursor = null;
    $("cursor-coordinates").textContent = translate("coordsUnknown");
  }

  function parseKmlCoordinates(node) {
    const coordinateNode = Array.from(node.getElementsByTagName("*"))
      .find(element => element.localName === "coordinates");
    if (!coordinateNode) return [];
    return coordinateNode.textContent.trim().split(/\s+/).filter(Boolean).map(tuple => {
      const values = tuple.split(",").map(Number);
      if (values.length < 2 || !Number.isFinite(values[0]) || !Number.isFinite(values[1])) return null;
      return [values[0], values[1]];
    }).filter(Boolean);
  }

  function kmlGeometry(node) {
    const children = Array.from(node.children || []);
    switch (node.localName) {
      case "Point": {
        const coordinates = parseKmlCoordinates(node);
        return coordinates.length ? { type: "Point", coordinates: coordinates[0] } : null;
      }
      case "LineString":
      case "LinearRing": {
        const coordinates = parseKmlCoordinates(node);
        return coordinates.length >= 2 ? { type: "LineString", coordinates } : null;
      }
      case "Polygon": {
        const rings = [];
        for (const boundary of children) {
          if (boundary.localName !== "outerBoundaryIs" && boundary.localName !== "innerBoundaryIs") continue;
          const ring = Array.from(boundary.children).find(child => child.localName === "LinearRing");
          const coordinates = ring ? parseKmlCoordinates(ring) : [];
          if (coordinates.length >= 4) rings.push(coordinates);
        }
        return rings.length ? { type: "Polygon", coordinates: rings } : null;
      }
      case "MultiGeometry": {
        const geometries = children.map(kmlGeometry).filter(Boolean);
        return geometries.length ? { type: "GeometryCollection", geometries } : null;
      }
      default:
        return null;
    }
  }

  function kmlToGeoJson(text) {
    const xml = new DOMParser().parseFromString(text, "application/xml");
    if (xml.querySelector("parsererror")) throw new Error("Invalid KML XML");
    const placemarks = Array.from(xml.getElementsByTagName("*")).filter(node => node.localName === "Placemark");
    const features = placemarks.map(placemark => {
      const geometries = Array.from(placemark.children).map(kmlGeometry).filter(Boolean);
      if (!geometries.length) return null;
      const name = Array.from(placemark.children).find(node => node.localName === "name")?.textContent?.trim() || "";
      const description = Array.from(placemark.children).find(node => node.localName === "description")?.textContent?.trim() || "";
      const geometry = geometries.length === 1
        ? geometries[0]
        : { type: "GeometryCollection", geometries };
      return { type: "Feature", properties: { name, description }, geometry };
    }).filter(Boolean);
    return { type: "FeatureCollection", features };
  }

  function normalizeGeoJson(value) {
    if (value?.type === "FeatureCollection" && Array.isArray(value.features)) return value;
    if (value?.type === "Feature") return { type: "FeatureCollection", features: [value] };
    if (value?.type && value.coordinates) {
      return { type: "FeatureCollection", features: [{ type: "Feature", properties: {}, geometry: value }] };
    }
    throw new Error("Unsupported GeoJSON");
  }

  function importedLayerOptions() {
    return {
      style: { color: "#0f9b78", weight: 3, fillColor: "#35c29c", fillOpacity: 0.18 },
      pointToLayer: (_feature, latlng) => L.circleMarker(latlng, {
        radius: 6, color: "#08785d", weight: 2, fillColor: "#55d6b0", fillOpacity: 0.9
      }),
      onEachFeature: (feature, layer) => {
        const name = feature.properties?.name || feature.properties?.Name;
        const description = feature.properties?.description;
        if (!name && !description) return;
        const popup = document.createElement("div");
        if (name) {
          const heading = document.createElement("strong");
          heading.textContent = String(name);
          popup.append(heading);
        }
        if (description) {
          const detail = document.createElement("p");
          detail.textContent = String(description).slice(0, 2000);
          popup.append(detail);
        }
        layer.bindPopup(popup);
      }
    };
  }

  function importOnBothMaps(featureCollection, fileName) {
    const validFeatures = featureCollection.features.filter(feature => feature?.type === "Feature" && feature.geometry);
    if (!validFeatures.length) throw new Error(translate("importEmpty"));
    const normalized = { type: "FeatureCollection", features: validFeatures };
    const layers = {
      left: L.geoJSON(normalized, importedLayerOptions()).addTo(maps.left),
      right: L.geoJSON(normalized, importedLayerOptions()).addTo(maps.right)
    };
    state.imported.push({ layers, name: fileName });
    const bounds = layers.left.getBounds();
    if (bounds.isValid()) {
      maps.left.fitBounds(bounds.pad(0.08), { maxZoom: 16 });
      maps.right.fitBounds(bounds.pad(0.08), { maxZoom: 16 });
    }
    setStatus(translate("importDone").replace("{count}", String(validFeatures.length)));
  }

  async function readImportFile(file) {
    if (!file) return;
    const extension = file.name.split(".").pop().toLowerCase();
    if (!["kml", "xml", "geojson", "json"].includes(extension)) {
      setStatus(translate("importUnsupported"), true);
      $("import-file").value = "";
      return;
    }
    if (file.size > 20 * 1024 * 1024) {
      setStatus(translate("importTooLarge"), true);
      $("import-file").value = "";
      return;
    }
    try {
      const text = await file.text();
      const data = extension === "kml" || extension === "xml"
        ? kmlToGeoJson(text)
        : normalizeGeoJson(JSON.parse(text));
      importOnBothMaps(data, file.name);
    } catch (error) {
      console.error("Import failed", error);
      setStatus(error.message === translate("importEmpty") ? error.message : translate("importFailed"), true);
    } finally {
      $("import-file").value = "";
    }
  }

  function clearImports() {
    state.imported.forEach(imported => {
      maps.left.removeLayer(imported.layers.left);
      maps.right.removeLayer(imported.layers.right);
    });
    state.imported = [];
    setStatus(translate("clearImportsDone"));
  }

  function fitToContent() {
    const bounds = L.latLngBounds([]);
    ["left", "right"].forEach(side => {
      state.measurements[side].forEach(point => bounds.extend(point));
    });
    state.imported.forEach(imported => {
      const importedBounds = imported.layers.left.getBounds();
      if (importedBounds.isValid()) bounds.extend(importedBounds);
    });
    if (bounds.isValid()) {
      maps.left.fitBounds(bounds.pad(0.1), { maxZoom: 16 });
      maps.right.fitBounds(bounds.pad(0.1), { maxZoom: 16 });
    } else {
      maps.left.setView(defaultCenter, defaultZoom);
      maps.right.setView(defaultCenter, defaultZoom);
    }
  }

  function exportMeasurements() {
    const features = [];
    ["left", "right"].forEach(side => {
      const points = state.measurements[side];
      if (!points.length) return;
      const coordinates = points.map(point => [point.lng, point.lat]);
      const isPolygon = state.mode === "area" && points.length >= 3;
      if (isPolygon) coordinates.push(coordinates[0]);
      features.push({
        type: "Feature",
        properties: {
          map: side === "left" ? "A" : "B",
          mode: isPolygon ? "area" : "distance",
          value: valueFor(side)
        },
        geometry: { type: isPolygon ? "Polygon" : "LineString", coordinates: isPolygon ? [coordinates] : coordinates }
      });
    });
    if (!features.length) {
      setStatus(translate("exportEmpty"), true);
      return;
    }
    const blob = new Blob([JSON.stringify({ type: "FeatureCollection", features }, null, 2)], {
      type: "application/geo+json"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "atlas-compare-measurements.geojson";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setStatus(translate("exportDone"));
  }

  function searchPlace(event) {
    event.preventDefault();
    const query = $("search-input").value.trim();
    if (!query) return;
    setStatus(translate("searching"));
    const url = new URL("https://nominatim.openstreetmap.org/search");
    url.search = new URLSearchParams({ q: query, format: "jsonv2", limit: "1" });
    fetch(url, { headers: { Accept: "application/json" } })
      .then(response => {
        if (!response.ok) throw new Error(`Geocoding request failed: ${response.status}`);
        return response.json();
      })
      .then(results => {
        if (!results.length) {
          setStatus(translate("searchError"), true);
          return;
        }
        const result = results[0];
        const center = [Number(result.lat), Number(result.lon)];
        if (!center.every(Number.isFinite)) throw new Error("Invalid geocoding coordinates");
        maps.left.setView(center, 15);
        maps.right.setView(center, 15);
        setStatus(result.display_name);
      })
      .catch(error => {
        console.error(error);
        setStatus(translate("searchFailed"), true);
      });
  }

  function locateUser() {
    if (!navigator.geolocation) {
      setStatus(translate("locationFailed"), true);
      return;
    }
    setStatus(translate("locationSearching"));
    navigator.geolocation.getCurrentPosition(position => {
      const center = [position.coords.latitude, position.coords.longitude];
      maps.left.setView(center, 15);
      maps.right.setView(center, 15);
      setStatus(`${center[0].toFixed(5)}, ${center[1].toFixed(5)}`);
    }, error => {
      console.error(error);
      setStatus(translate("locationFailed"), true);
    }, { enableHighAccuracy: true, timeout: 10000 });
  }

  function initializeMaps() {
    state.sources.left = "esri-streets";
    state.sources.right = "esri-imagery";
    state.layers.left = { base: null, measurement: null };
    state.layers.right = { base: null, measurement: null };
    populateMapSelectors();
    changeMapSource("left", state.sources.left);
    changeMapSource("right", state.sources.right);

    maps.left.on("moveend", () => syncMaps(maps.left, maps.right));
    maps.right.on("moveend", () => syncMaps(maps.right, maps.left));
    Object.entries(maps).forEach(([side, map]) => {
      map.on("click", event => {
        if (state.mirror) {
          addPoint("left", event.latlng);
          addPoint("right", event.latlng);
        } else {
          addPoint(side, event.latlng);
        }
      });
      map.on("contextmenu", event => {
        L.DomEvent.preventDefault(event);
        undoPoint(side);
      });
      map.on("mousemove", event => showCursor(side, event.latlng));
      map.on("mouseout", () => hideCursor(side));
      state.layers[side].measurement = L.layerGroup().addTo(map);
    });
    Object.values(maps).forEach(map => map.whenReady(() => map.invalidateSize()));
  }

  function initializeControls() {
    document.querySelectorAll("[data-mode]").forEach(button => {
      button.addEventListener("click", () => {
        state.mode = button.dataset.mode;
        document.querySelectorAll("[data-mode]").forEach(item => {
          const active = item === button;
          item.classList.toggle("active", active);
          item.setAttribute("aria-pressed", String(active));
        });
        setStatus(translate(state.mode === "area" ? "areaHelp" : "measureHelp"));
        ["left", "right"].forEach(redrawMeasurement);
      });
    });
    $("sync-btn").addEventListener("click", () => {
      state.sync = !state.sync;
      $("sync-btn").textContent = translate(state.sync ? "syncOn" : "syncOff");
      $("sync-btn").classList.toggle("is-active", state.sync);
      $("sync-btn").setAttribute("aria-pressed", String(state.sync));
      if (state.sync) syncMaps(maps.left, maps.right);
    });
    $("mirror-btn").addEventListener("click", () => {
      state.mirror = !state.mirror;
      $("mirror-btn").textContent = translate(state.mirror ? "mirrorOn" : "mirrorOff");
      $("mirror-btn").classList.toggle("is-active", state.mirror);
      $("mirror-btn").setAttribute("aria-pressed", String(state.mirror));
    });
    $("language-select").addEventListener("change", event => updateLanguage(event.target.value));
    $("add-custom-map-btn").addEventListener("click", () => {
      $("custom-map-error").textContent = "";
      $("custom-map-form").reset();
      $("custom-map-dialog").showModal();
    });
    $("custom-map-form").addEventListener("submit", saveCustomMap);
    $("custom-map-cancel").addEventListener("click", () => $("custom-map-dialog").close());
    $("search-form").addEventListener("submit", searchPlace);
    $("locate-btn").addEventListener("click", locateUser);
    $("import-file").addEventListener("change", event => readImportFile(event.target.files[0]));
    $("clear-import-btn").addEventListener("click", clearImports);
    $("fit-btn").addEventListener("click", fitToContent);
    $("clear-btn").addEventListener("click", () => {
      state.measurements.left = [];
      state.measurements.right = [];
      ["left", "right"].forEach(redrawMeasurement);
      setStatus(translate(state.mode === "area" ? "areaHelp" : "measureHelp"));
    });
    $("export-btn").addEventListener("click", exportMeasurements);
    window.addEventListener("gm_authFailure", () => setStatus(translate("googleLoadFailed"), true));
  }

  initializeMaps();
  initializeControls();
  updateLanguage("en");
  if (customMapStorageError) setStatus(translate("customMapStorageError"), true);
  refreshMeasurements();
})();
