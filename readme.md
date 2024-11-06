
# Verantwortlichkeiten
[![Hauptverantwortlich](https://img.shields.io/badge/Verantwortlich-FTAVE-othercolor)](https://teams.microsoft.com/l/chat/0/0?users=fabio.tavernini@itsh.ch)
[![Stellvertreter](https://img.shields.io/badge/Stellvertreter-LUKOE-blue)](https://teams.microsoft.com/l/chat/0/0?users=lucas.koeppli@itsh.ch)


# :house: Strassenverkehrssteuer - Rechner :dollar:
Ein Web-Rechner für die Strassenverkehrssteuer im Kanton Schaffhausen

![](./docs/steuerrechner.png)

# :racing_car: Funktion
Der Steuerrechner führt alle Berechnungen zur Steuer auf Client-Seite (über Javascript) aus! - kein Backend o.ä
>[!Important]
>Serverseiteiger Code wird nicht benötigt, da die Berechnungsgrundlagen öffentlich dargelegt werden müssen.

## :globe_with_meridians: Nginx rule
>[!Note]
>Auf dem Plesk wurde für https://steuerrechner.sh.ch/grundstueckgewinn/ eine Exception eingerichtet.

## :abacus: Tarifberechnung


### :microscope: Berechnung & Ranges/Limits 



## :paintbrush: Styling
Styling wird grösstenteils mit Bootstrap geregelt.
Eingebunden sind folgende JS & Css Files:

<ul>
<li>

```HTML
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
```

</li>
<li>

```HTML
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
    crossorigin="anonymous"></script>
```
</li>
<li>

```HTML
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
```
</li>
<li>

```HTML
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
    crossorigin="anonymous"></script>
```
</li>
<li>

```HTML
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
    integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
    crossorigin="anonymous"></script>
```
</li>
<li>

```HTML
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
    integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
    crossorigin="anonymous"></script> 
```
</li>
</ul>

### :ribbon: styles.css

Einzig der overflow und wenige attribute werden manuell mit der Datei [style.css](style.css) gesteuert:

```css
#shlogo {

    position: absolute;
    right: 0px;
    height: 100px;

}

#navbar {
    
    height: 100px;
    background: rgb(2, 0, 36);
    background: linear-gradient(0deg, rgba(29,29,27,255) 33%, rgba(255,220,0,255) 20%);

}

```

## :desktop_computer: Browser Support
Mit folgenden Browsern wurde bereits getestet:

- Opera (latest version, Desktop version)

## :email: Kontakt & Support
### Strassenverkehrsamt
- [Markus Storrer](mailto:markus.storrer@sh.ch)


### Informatik Schaffhausen
- [Fabio Tavernini](mailto:Fabio.Tavernini@itsh.ch)
- [Lucas Köppli](mailto:Lucas.Koeppli@itsh.ch)
- [Marco Schirru](mailto:marco.schirru@itsh.ch)