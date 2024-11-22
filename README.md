# Pitsa tellimise veebileht

Tegemist on pitsa tellimise veebilehega, kus saab valida endale sobiva toidu ja lisada selle ostukorvi. Ostukorvis saab klient sisestada enda andmed ja edastada tellimuse. Kliendi andmeid ei saadeta kuhugi ja need ei salvestu.

## Paigaldamine

1. **Kopeeri repositoorium oma arvutisse**  
   Terminalis liigu kataloogi, kuhu soovid projekti kloonida, ja klooni projekt järgmiselt:
    ```bash
    git clone https://github.com/krosta12/stravy.git
    ```  

2. **Mine projekti kausta**  
   Kui kloonimine on lõpetatud, liigu projekti kausta:
   ```bash
   cd stravy
   ```
   
3. **Veebilehe avamine brauseris**  
   Projekti vaatamiseks ava kaust, kuhu sa kloonisid projekti, ja ava fail nimega index.html. Projekti korrektseks vaatamiseks soovitame kasutada kohalikku serverit:
      *Kui kasutad VS Code'i, installi laiendus Live Server ja käivita see, paremklõpsates index.html ja valides Open with Live Server.
      *Alternatiivselt, kui sul on Python, saad käivitada lihtsa kohaliku serveri järgmise käsuga:
   ```bash
      python -m http.server
   ```
   Seejärel ava oma brauseris http://localhost:8000.

## Kasutamine
Veebileht sisaldab järgmisi kaustu:

- **CSS** - 
      Selles kaustas on kõik CSS failid, mis kujundavad veebilehe välimust. Iga fail on selgelt nimega, mis viitab selle kasutusalale.
   
- **pages** - 
      Selles kaustas on veebilehe HTML-lehed. Failide nimed viitavad sellele, millist lehte nad esindavad (nt menüü, ostukorv).
   
- **src** - 
      Selles kaustas on veebilehe erinevad ressursid, nagu JavaScripti failid ja pildid.
  
## Autorid
- [krosta 12](https://github.com/krosta12)
- [TristanSaraskin](https://github.com/TristanSaraskin)
- [henrilipping](https://github.com/henrilipping)
