"use strict";

app.factory("Route", function () {

    /*
    minuten: verfügbare ms für die Planung der Route (sind KEINE minuten sondern ms)
    tage: verfügbare Tage (als Anzahl z.B. 4) für die Planung der route
    adressenArray: ein Array mit Adressen laut der adresse-Factory
    start: Objekt vom Typ Adresse, das angibt, wo die Route beginnt
    end: Objekt vom Typ Adresse, dass angibt, wo die Route endet
    waypoints: Array mit Einträgen vom Typ Adresse, dass alle Besichtigungspunkte enthält
    uhrzeit: Uhrzeit zu der jeden Tag gestartet wird
     */
    function Route(id, minuten, tage, uhrzeit, startDatum) {
        this.id = id;
        this.minuten = minuten;
        this.tage = tage;
        this.uhrzeit = uhrzeit;
        this.startDatum = startDatum;
        this.start = "";
        this.end = "";
        this.waypoints = [];
    }

    return Route;
});
