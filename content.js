const defaultContent = {
  tasks: [
    {
      description:
        "Kod är som en uppsättning instruktioner som vi ger till datorn. Det skrivs med hjälp av speciella symboler och språk som datorn förstår. När koden körs, följer datorn instruktionerna steg för steg i ordning och utför olika uppgifter som att rita bilder, spela ljud eller visa text. Det är som att ge datorn en lista med saker att göra!<br><br>Det första vi ska lära oss är att be datorn skriva ut en text. Nere till vänster finns det fem olika kategorier av block. Tryck på ‘Text’, och hitta det blocket som heter ‘skriv. Dra ut det blocket till arbetsytan till höger, och ändra där det står ‘abc’ till vad du vill att datorn ska skriva ut. När du vill testa din kod, tryck på “Kör Kod” längst ner till höger. Resultatet av din kod skrivs ut precis ovanför knapparna.",
      task: 'Få datorn att skriva ut "Hello World!"',
      hint: "Om du behöver ta bort ett block, dra blocket till papperskorgen nere till höger!",
      answer: "Hello World!",
      facitcheck: true,
      complete: false,
    },
    {
      description:
        "Snyggt jobbat, du klarade första uppgiften! Genom att koda kan vi också be datorn att räkna ut mattetal, precis som en miniräknare.<br><br>För att be datorn räkna ut ett mattetal, dra ut blocket med två tal och ett tecken i mitten. Som standard använder blocket addition (plus) som räknesätt, men om du vill ändra räknesätt kan du klicka i mitten av blocket. Testa att koppla ihop två block för att klara uppgiften!",
      task: "Be datorn räkna ut 520+380 och skriva ut resultatet",
      hint: "Tänk på att du kan koppla ihop olika typer av block för att få ut svaret!",
      answer: "900",
      facitcheck: true,
      complete: false,
    },
    {
      description:
        "Ibland behöver man spara ett nummer eller ett ord för att skriva ut det senare i koden eller kunna göra uträkningar med det sparade talet. Då kan man använda Variabler! En variabel är som en behållare eller en låda där man kan spara olika värden. Man kan ge variabeln ett namn, ex ‘kattens namn’ eller ‘ålder’, och ge variablen ett värde, till exempel ‘Kalle’ eller ‘10’. Man kan ändra värdet senare. <br> För att skapa en variabel klickar du på Variablerpanelen till höger, och sedan ‘Skapa Variabel’. Efter vi har skapat variablen kan vi dra ut ‘ange variablel till’ blocket. Det blocket kan du koppla ihop andra block för att ge variablen ett värde. <br> psst… på vissa uppgifter kommer alla som gör uppgiften ha olika lösningar, och därför går det inte att kolla om du har gjort rätt. Så när du känner dig klar, gå vidare till nästa uppgift.",
      task: "Skapa en variabel som heter “namn” som har ditt namn som värde. Be datorn skriva ut “Hej *ditt namn*!”",
      hint: "För att kunna skriva ut både text och värdet på variablen i samma skrivblock behöver du använda blocket “skapa text med” efter “skriv”!",
      facitcheck: false,
      complete: false,
    },
    {
      description:
        "Variabler är smart att använda när du vill kunna ändra koden efter att du skapat programmet. I förra uppgiften skrev du in ditt egna namn direkt i koden, men om någon annan person som heter något annat än du vill testa programmet blir det ju fel!<br><br>För att fråga användaren av programmet vad de vill ha in för något värde i programmet kan du använda blocket ‘Fråga efter text/ett tal med meddelande’. Då kommer programmet öppna en ruta där det du skriver i slutet av blocket står, och där kan användaren skriva in sitt svar.",
      task: "Be datorn fråga dig efter ett nummer. Spara svaret i en variabel och skriv ut det dubbla värdet av numret.",
      hint: "För att spara siffran som användaren skriver in, koppla ihop “sätt variabel” blocket med “fråga efter” blocket!",
      facitcheck: false,
      complete: false,
    },
    {
      description:
        "Det är ofta när man kodar som man vill göra samma sak i koden flera gånger. Visst, det går att skriva ut samma kodblock gång på gång, men det tar både lång tid och gör koden svårare att förstå. Istället kan man använda loop-block!<br><br>När man använder loopblock görs det som står innanför blocket om och om igen, eller tills ett krav uppfylls som du sätter i början av din loop. Det kravet kan vara exempelvis så länge en variabel är satt till sant, eller exakt 7 gånger. Var bara försiktig så att du inte skapar en oändlig loop som inte går att stoppa!",
      task: "Skriv ut 'Hej Hej!' 10 gånger",
      hint: "Allt som du vill ska göras flera gånger måste vara inom klammern för loopblocket!",
      answer:
        "Hej Hej! Hej Hej! Hej Hej! Hej Hej! Hej Hej! Hej Hej! Hej Hej! Hej Hej! Hej Hej! Hej Hej!",
      facitcheck: false,
      complete: false,
    },
    {
      description:
        "Det är ofta när man använder loopar som man vill göra små förändringar för varje gång man går igenom loopen. Det gör man enklast genom att använda variabler. Skapa variabeln innan loopen, och ändra värdet för den variabeln inom klamrarna för loopen.",
      task: "Skriv ut alla siffror mellan 1-10 genom att använda en loop",
      hint: "Tänk på att deklarera variablen innan loopen!",
      answer: "900",
      facitcheck: false,
      complete: false,
    },
    {
      description:
        "Nu ska vi göra ännu mer förändringar inne i loopen! Men först måste vi hitta en lösning på uppgiften. Hittar du mönstret som nummerserien har? När du har hittat mönstret, försök komma på en lösning om hur du kan skriva ut hela serien själv!",
      task: "Skriv ut nummerserien 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048 genom att använda en loop",
      hint: "Hittar du mönstret i nummerserien? Testa med multiplikation!",
      answer: "hello world!",
      facitcheck: false,
      complete: false,
    },
    {
      description:
        "Nu börjar uppgifterna bli lite svårare med flera olika moment. I denna uppgift behöver du flera olika variabler. Ett tips är att tänka ut hur du ska lösa uppgiften innan du börjar koda. Det kan vara bra att alltid ha papper och penna vid sig för att testa sig fram!",
      task: "Skriv ut den multiplikationstabell (input * 1 (upp till 10) = resultat) baserat på vilken tabell användaren vill ha",
      hint: "Det behövs upp till tre olika variabler! Tänk ut vilka det skulle kunna vara och deklarera alla innan loopen.",
      answer: "900",
      facitcheck: false,
      complete: false,
    },
    {
      description:
        "Villkorssatser, även kallade ‘om-satser’ eller ‘if-satser’, är en viktig del av programmering. De låter oss göra beslut baserade på olika förutsättningar. Tänk dig att du har en variabel som representerar temperaturen. Med en villkorssats kan du säga ‘om temperaturen är över 25 grader, sätt på fläkten, annars stäng av den’. På så sätt kan du lära datorn att agera olika beroende på situationen. Villkorssatser hjälper oss att skapa smarta program som anpassar sig efter olika förhållanden.",
      task: "Skriv ett hemligt meddelande som användaren bara får se om den skriver in rätt lösenord.",
      hint: "Tänk på hur du ska jämföra det inskrivna lösenordet med det korrekta lösenordet, använd två variabler och jämför i if-satsen.",
      answer: "hello world!",
      facitcheck: false,
      complete: false,
    },
    {
      description:
        "Det finns många olika sätt att jämföra i en om-sats. Oftast jämför man om värdet på variabeln stämmer exakt med det man vill, men man kan också jämföra om en siffras värde är mellan ex 1-100, eller om siffran helt enkelt inte är den man vill åt.",
      task: "Be användaren skriva in en siffra. Om siffran är jämn, skriv ut ett meddelande. Om siffran är ojämn, skriv ut ett annat meddelande.",
      hint: "Använd blocket “resten av” för att testa om siffran är jämn eller inte!",
      answer: "900",
      facitcheck: false,
      complete: false,
    },
    {
      description:
        "När man använder om-satser kan man vilja testa värdet på sin variablel mot många olika värden för att se om värdet stämmer med något villkor. Det går att använda flera separata om-satser direkt efter varandra, men enklast är att bara använda en om-sats som man har byggt vidare på. På om-blocket finns ett kugghjul. Om du klickar på kugghjulet kan du bygga vidare och jämföra något nytt om värdet inte stämde med ditt första villkor.",
      task: "Dela upp alla åldrar mellan 0-100 i olika grupper (ex 13-19 = tonåringar). Fråga sedan avändaren om dens ålder, och skriv ut användarens åldersgrupp.",
      hint: "Det kan behövas en stor om-sats! Tryck på kugghjulet på blocket för att lägga till flera delar av om-satsen.",
      answer: "hello world!",
      facitcheck: false,
      complete: false,
    },
    {
      description:
        "Det är ofta när man använder om-satser som ordningen på vad man testar kan vara väldigt svårt att reda ut. Därför är det viktigt att man tänker först, och kodar sen. Med denna uppgift så krävs det mycket logiskt tänkande för att få fram en bra om-sats.",
      task: "Be användaren skriva in tre siffror. Jämför siffrorna och skriv ut i vilken som är störst.",
      hint: "Testa att jämföra två siffor i taget, och glöm inte att ändra if-blocket så du kan jämföra flera gånger!",
      answer: "900",
      facitcheck: false,
      complete: false,
    },
    {
      description:
        "En av de roligaste sakerna med kodning är att du i praktiken kan skapa vad du vill. I de sista fyra övningarna kommer du att få göra dina egna spel! Det första spelet vi ska koda är Sten, Sax, Påse där du spelar mot datorn. Nu när koden kan bli rätt lång är det bra att först skriva upp en lösning på papper vid sidan av, för att sedan göra om det till kod i datorn.",
      task: "Koda så att du kan spela Sten, Sax, Påse mot datorn.",
      hint: "Innan du sätter upp alla om-satser för att jämföra resultatet, skriv ner alla möjliga kombinationer av resultat.",
      answer: "hello world!",
      facitcheck: false,
      complete: false,
    },
    {
      description:
        "Nästa spel som vi ska göra kallas för ‘Galna Historier’! Det går ut på att fråga användaren efter olika ord, såsom en frukt, en kändis, eller ett verb (något du kan göra). Dessa ord läggs in i en förskriven historia som kan bli väldigt galen och roligt! Om du vill utvecka din kod, kan du programmera in flera olika förskrivna historier, så användaren får se nya historier varje gång.",
      task: "Koda din egen Galen Historia där användaren får fylla i ord till en förskriven historia.",
      hint: "Tänk ut hur du ska spara alla ord som kommer in, och hur du ska skriva ut den färdiga historian med ett enda 'skriv'-block",
      answer: "900",
      facitcheck: false,
      complete: false,
    },
    {
      description:
        "Nästa spel är en lek som du förmodligen har lekt någon gång. Datorn kommer att tänka på en siffra mellan 1-100, och det är användarens uppgift att gissa vilket nummer som datorn tänker på. Efter varje gissning säger datorn om du har gissat för högt eller för lågt. Om du kommer på något sätt som du kan utveckla spelet för att göra det ännu lite svårare, testa att koda upp det!",
      task: "Gör ett spel som går ut på att gissa vilket nummer mellan 1-100 som datorn tänker på.",
      hint: "Tänk på i vilken ordning ditt if-block ska vara uppbyggt, och var du ska be användaren skriva in en ny siffra.",
      answer: "hello world!",
      facitcheck: false,
      complete: false,
    },
    {
      description:
        "Det sista spelet som vi ska koda är ett eget ‘Välj din egen historia’-spel! Användaren kommer bli presenterad med ett scenario, där den måste välja hur den ska gå vidare i historien. Ett exempel är: “Du kommer till ett vägskäl, där du kan gå vänster genom skogen, eller till höger ner i grottan. Vilken väg går du? (Vänster/Höger)”. Din historia kan handla om vad som helst, en annorlunda och spännande dag i skolan eller om en prinsessa som jagar en drake! Du får välja hur långt spelet är, hur många val som ska göras, och hur många slut som finns. Kanske kommer det första valet i spelet spela en stor roll i slutet?",
      task: "Skapa ett äventyrsspel där användaren gör egna val för att gå vidare i spelet.",
      hint: "Detta kommer förmodligen bli en lång kod. Gör ditt bästa för att hålla reda på alla variabler, loopar och om-satser.",
      answer: "900",
      facitcheck: false,
      complete: false,
    },
  ],
};

// const tasksobjectString = JSON.stringify(tasksobject);
// localStorage.setItem("content", tasksobjectString);
// console.log(localStorage);
