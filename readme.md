
NAMASTE WEBSHOP.
Webbshop byggt på React/TS, Node.js/Express och Stripe.

----------------------------------------------
Beskrivning:
En webbshop byggt med React/typescript på klienten och Node.js/Express på servern. Stripe är använt för att registrera kunder, produkter och för att genomföra en checkout. 

Webbsidan består av en startsida där du kan logga in, eller skapa en användare. När du skapar en användare så sparas du också som en kund i stripe dashboard, samt i en Json-fil på servern. Ditt lösenord är krypterat i json-filen. Du behöver logga in för att kunna se dina tidigare ordrar, samt för att kunna genomföra en checkout. ÄR du inte inloggad, går det inte att genomföra en order eller komma åt "mina sidor". Produkterna är listade på startsidan och hämtade från stripe. Du kan lägga till produkter i en kundvagn som du ser på högersida, genom att trycka på en knapp. Du kan sedan lägg en order som inloggad genom knappen längst ner på sidan. Det som finns i din kundvagn, hamnar då i en checkout. 

I checkouten, som är kopplad till stripe, kan du välja att lägga till en rabattkod.

"halloween10"

När du väl lagt en order kommer du att kunna se den, när du är inloggad genom att trycka på knappen längst upp på startsidan. Inne på "mina sidor" finns alla dina ordrar, med titel, antal och ursprungspris per produkt. Din order är också sparad i en JSON-fil, där samtliga användarnas ordrar är sparade, men det är enbart dina ordrar du kommer åt genom ditt inlogg. 

Du kan heller inte få en sparad order om inte din betalning gått igenom.


----------------------------------------------


KRAV som uppfylls: 

Krav för godkänt: (Samtliga Check)
1.Uppgiften lämnas in i tid.

2.Produkter ska listas på en sida.

3.Produkter som visas och köps skall hämtas ifrån Stripe.

4.Det ska gå att lägga till produkter i en kundvagn.

5.Baserad på kundvagnen skall det gå att lägga en order genom Stripe.

6.Man skall kunna registrera sig som en användare i webbshoppen. Detta skall resultera i att en ”Customer” skapas i Stripe och användaren sparar i en JSON-fil. (samtliga lösenord skall sparas hashade).

7.Man skall kunna logga in som kund. Den inloggade kunden (som även är sparad i Stripe) skall användas vid placering av order.

8.Man skall inte kunna placera en order om man inte är inloggad.



Krav för väl godkänt: (Samtliga Check)
1.Alla punkter för godkänt är uppfyllda

2.Det skall gå att ange en rabattkod för att få rabatt på sitt köp (Detta görs genom Stripe)

3.Man skall som inloggad kunna se sina lagda ordrar.

4.Samtliga placerade ordrar skall sparas till en lista i en JSON-fil.

5.Ordern får inte under några omständigheter läggas utan genomförd betalning! (dvs. Spara aldrig ett orderobjekt såvida ni inte fått bekräftelse tillbaka ifrån stripe att betalningen gått igenom)2

----------------------------------------------

ÖVRIG INFORMATION:

Du kan välja att skapa en egen användare, genom "registrera fälten", eller använda den användaren som redan finns sparad på servern.

Du kan logga in med användaren: 
Mejl: freddans@mejl.se
Lösenord: 12345

Rabattkod vid utcheckning:
HALLOWEEN10

Befintliga användare att testa (Där jag lagt ordrar sedan tidigare):
Mejl: m@m.se
Lösenord: 123

Mejl: lis@lotte.se 
Lösenord: 123

Jag har använt Git och GitHub för projektet.
Github repo: https://github.com/Goodvibesmila/namaste 


--------------------------------------------

För att köra projektet:

1. Gå in i terminalen, skriv: cd server, enter, npm install. Du skriver sedan: npm run dev, för att köra servern.

2. Gå sedan ur servern, cd .. eller öppna en ny terminal och skriv istället cd client, enter, npm install, skriv sedan: npm run dev där du kan öppna webbläsaren från terminalen.


