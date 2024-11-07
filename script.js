function calculatetaxneu(leergewicht, hubraum, leistung, marktdurchdringung) {


    console.log(leergewicht, hubraum, leistung, marktdurchdringung)


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

    let row = matrix.find(entry => entry.Anteil === marktdurchdringung);

    // If no matching row found, return an error or default value
    if (!row) {
        return "Error: Invalid market penetration index";
    }

    // Extract FaktorX, FaktorY, FaktorZ from the selected row
    const { FaktorX, FaktorY, FaktorZ } = row;



    const tax = (leergewicht * FaktorX) + (hubraum * FaktorY) + (leistung * FaktorZ);


    // Calculate the emission tax using the formula

    console.log(Math.round(tax));

    // Return the calculated tax value
    return Math.round(tax);

}



function calculatetaxbisher(leergewicht, hubraum, leistung, marktdurchdringung) {


    console.log(leergewicht, hubraum, leistung, marktdurchdringung)


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

    let row = matrix.find(entry => entry.Anteil === marktdurchdringung);

    // If no matching row found, return an error or default value
    if (!row) {
        return "Error: Invalid market penetration index";
    }

    // Extract FaktorX, FaktorY, FaktorZ from the selected row
    const { FaktorX, FaktorY, FaktorZ } = row;



    if (hubraum > 800) {
        tax = ((Math.ceil((hubraum - 800) / 100) * 12) + 120);
    } else {
        console.log("Less 800")
        tax = 120;
    }



    // Calculate the emission tax using the formula
    console.log(Math.round(tax));

    // Return the calculated tax value
    return Math.round(tax);

}