# PortChecker-Webversion

```
    <tr>
      <td class="portscanner">PORTNUMMER</td>
      <td></td>
      <td> Text </td>
      <td> KommentarText </td>
    </tr>
```

Wichtig zu wissen ist die Classe "portscanner" muss dort stehen
da Die Classe im Code eine Rolle Spielt

zu Nutzung nach beliebigen PORTNUMMER in eine Zahl seiner wahl ändern
das Element `<td></td>` unter der PORTNUMMER muss dort leer bleiben

Text so wie KommentarText sind zwei Spalten

```
      <th style="padding:5px; border-right: 2px solid #000000">Spalte</th>
      <th style="padding:5px; ">Kommentar</th>
```

die im `index.html` nach wünschen geändert werden kann

bei Spalte und Kommentar für den Spaltennamen und im Element `<td> Text </td>`
für den dementsprechenden text der zu der Spalte

das ganze dann unter dem Element hinzufügen oder die vorhandenen so anpassen wie man Sie braucht

##Beispiel:
```
    <tr>
      <td class="portscanner">123</td>
      <td></td>
      <td> Text </td>
      <td> KommentarText </td>
    </tr>
    <tr>
      <td class="portscanner">8883</td>
      <td></td>
      <td> Text </td>
      <td> KommentarText </td>
    </tr>
   
    <tr>
      <td class="portscanner">666</td>
      <td></td>
      <td> Weil 666 ein Toller Port ist </td>
      <td> Die Dunkleseite der Macht hat KEKSE </td>
    </tr>

    <tr>
      <td class="portscanner">9999</td>
      <td></td>
      <td> Text </td>
      <td> KommentarText </td>
    </tr>
```

Backend INFO

im Webserver sollten die PORTS die im HTML drinne stehen 
auch ein Listen PORTNUMMER haben 
es gibt sicher eine andere Lösung 
doch dies war meine in diesem Fall

diese sollten in der config des Server erweitert und nicht genutzte Ports wieder entfernt werden

der Port 9999 sollte nie freigegeben werden um eine Fehlermeldung (CLOSED) zu haben
um zu Validieren das es auch seine Korrektheit hat