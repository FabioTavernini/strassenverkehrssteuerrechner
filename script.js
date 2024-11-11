function calculatetaxneu(leergewicht, hubraum, leistung, marktdurchdringung) {

    if(!leergewicht || !leistung){
        return "";
    }

    // Berechnungsmatrix
    const matrix = [
        { Anteil: 0, FaktorX: 0.00000, FaktorY: 0.13010, FaktorZ: 0.00000 },
        { Anteil: 3.5, FaktorX: 0.00276, FaktorY: 0.13010, FaktorZ: 0.03636 },
        { Anteil: 10, FaktorX: 0.00772, FaktorY: 0.13010, FaktorZ: 0.09898 },
        { Anteil: 20, FaktorX: 0.01515, FaktorY: 0.13010, FaktorZ: 0.18641 },
        { Anteil: 30, FaktorX: 0.02227, FaktorY: 0.13010, FaktorZ: 0.26419 },
        { Anteil: 40, FaktorX: 0.02914, FaktorY: 0.13010, FaktorZ: 0.33383 },
        { Anteil: 50, FaktorX: 0.03575, FaktorY: 0.13010, FaktorZ: 0.39411 },
        { Anteil: 60, FaktorX: 0.04212, FaktorY: 0.13010, FaktorZ: 0.45067 },
        { Anteil: 70, FaktorX: 0.04826, FaktorY: 0.13010, FaktorZ: 0.50215 },
        { Anteil: 80, FaktorX: 0.05416, FaktorY: 0.13010, FaktorZ: 0.54921 },
        { Anteil: 90, FaktorX: 0.05989, FaktorY: 0.13010, FaktorZ: 0.59238 },
        { Anteil: 100, FaktorX: 0.06541, FaktorY: 0.13010, FaktorZ: 0.63212 }
    ];

    // Eintrag finden in der Matrix mit eingegebener Marktdurchdringung
    let row = matrix.find(entry => entry.Anteil === marktdurchdringung);

    // Falls kein Wert gefunden
    if (!row) {
        return "Fehler: Invalider Eintrag";
    }

    // Faktoren auslesen 
    const { FaktorX, FaktorY, FaktorZ } = row;

    // Steuer berechnen
    const tax = (leergewicht * FaktorX) + (hubraum * FaktorY) + (leistung * FaktorZ);

    // Berechnete Steuer retournieren
    return Math.round(tax);

}

function calculatetaxbisher(leergewicht, hubraum, leistung) {

    if(!leergewicht || !leistung){
        return "";
    }

    // Alte Formel zur Steuerberechnung
    if (hubraum > 800) {
        tax = ((Math.ceil((hubraum - 800) / 100) * 12) + 120);
    } else {
        tax = 120;
    }

    // Rückgabe des Wertes alte Steuer
    return Math.round(tax);

}