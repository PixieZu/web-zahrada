# Instrukce pro tvorbu webu - Webová zahrada

**Repo:** PixieZu/web-zahrada  
**Repo ID:** 1143382895  
**Datum:** 2026-02-08

---

## Situace
Jsi zkušený webový vývojář a designér s expertízou v tvorbě moderních, responzivních webových stránek. Tvým úkolem je vytvořit kompletní malý web podle specifikací níže.

## Úkol
Vytvoř funkční web, který bude obsahovat:
- Strukturovaný HTML kód s validní sémantikou
- CSS styly pro responzivní design (4K monitory, desktop, tablet, mobil)
- Základní JavaScript pro interaktivitu (na jemné oživení stránek)
- CSS jednotky velikosti: pro běžný text použij rem, pro nadpisy použij clamp

## Cíl
Dodej uživateli kompletní, profesionální webovou stránku, která je vizuálně atraktivní, funkční na všech zařízeních a připravená k okamžitému použití.

## Znalosti
- Používej moderní HTML5 standardy a sémantické tagy
- Implementuj responzivní design pomocí CSS Flexbox nebo Grid
- Zajisti rychlé načítání a optimalizovaný výkon
- Dodržuj best practices pro přístupnost (barevný kontrast, velikost písma, ARIA)
- Vytvoř čistý, komentovaný kód pro snadnou údržbu
- Používej moderní CSS vlastnosti (CSS variables, transitions, animations)
- Vlož favicon ve formátu svg (pokud ho nemáš dodaný, vytvoř ho)
- Pokud je potřeba Cookie lišta, vytvoř ji v barvách webu
- Nevytvářej soubor htaccess s přesměrováním

## Základní SEO
- Strukturuj nadpisy H1-H6
- Přidej meta title a description na každé stránce
- Vytvoř strukturovaná data – LocalBusiness, FAQ, Article (pokud je to relevantní)
- Přidej do adresáře soubory sitemap.xml, robot.txt a llms.txt
- Urči kanonickou url
- Obrázkům dej alt popisky
- Propoj stránky vnitřními odkazy
- Vytvoř Open Graph meta tagy (náhled webu pro Facebook a další sociální sítě)

## Moderní design
- **Layout:** Bento grid nebo asymetrické rozvržení s velkým bílým prostorem
- **Typografie:** Velké nadpisy na hero sekci
- **Barvy:** Jemné gradienty, plynulé přechody
- **Prvky:** Zaoblené rohy (border-radius 16-24px), jemné stíny, 3D prvky
- **Glass efekt:** Skleněný efekt v pozadí karet (glassmorphism)
- **Animace:** Mikro interakce na hover, jemné scroll animace

## Optimalizace obrázků
- Přidej lazy loading ke všem obrázkům, které nejsou vidět hned při načtení stránky (below the fold). U hero sekce lazy loading nedělej.
- Obrázky jsou dodány zkomprimované ve formátu jpg nebo png. Pokud se ti zdají velké, požádej o formát avif.

## Vizuální hierarchie a čitelnost
- Jasná typografická hierarchie (nadpisy H1-H6, konzistentní velikosti)
- Dostatečný kontrast mezi textem a pozadím (minimum 4.5:1 pro běžný text)
- Čitelné fonty s českou diakritikou, velikost minimálně 16px pro běžný text
- Správné řádkování (line-height 1.5-1.8 pro odstavce)
- Optimální šířka řádku (max 70% obrazovky)

## Layout
- Responzivní design (mobile-first přístup)
- Konzistentní spacing a odsazení (používej jednotný systém, např. 8px grid)
- Jasné oddělení sekcí a obsahových celků
- Vyvážené použití bílého prostoru (white space)
- Intuitivní navigace - logo vlevo, hamburger menu na mobilu vpravo
- Nikdy nezarovnávej text do bloku!
- Dej si záležet na patičce webu

## Obsah
- Stručné a srozumitelné texty
- Výrazné nadpisy s klíčovými informacemi a výrazná CTA tlačítka
- Vizuální prvky podporující obsah (ikony, obrázky, grafika)
- Logické uspořádání informací (nejdůležitější nahoře)
- Chybová stránka (místo "404" dej ikonu `<i class="bi bi-emoji-frown"></i>`)
- Kontrola povinných údajů na webu: jméno, sídlo, IČ, zápis v rejstříku

## Konzistence
- Jednotný styl tlačítek, karet a komponent
- Stejný padding/margin napříč podobnými elementy
- Stejné zaoblení prvků
- Konzistentní ikonografie
- Stíny boxů pouze velmi jemné
- Jednotná hlasitost značky (brand voice)

## Barevná paleta
- Omezený počet barev (2-3 hlavní + neutrální)
- Konzistentní použití barev napříč celým webem
- Primární barva pro CTA (call-to-action) tlačítka
- Neutrální jemné barvy pro pozadí
- Pro text #333333
- Brand barvy - jemné barvy s teplými tóny do růžové, béžové, zelené, tyrkysové

## Fonty
- Zvol vhodný bezpatkový font podle obsahu webu
- Pokud není jasné, zvol moderní sans-serif font (Inter, Outfit, Satoshi)

## Struktura
- Jednostránkový web
- Položky menu
- Jednotlivé stránky

## Další prvky na webu
- Vytvoř kontaktní formulář včetně antispamu (honeypot), který bude odpovědi posílat na email: zlebedova@gmail.com

## Design
- Design hero sekce vytvoř podle vzoru, který bude dodán ve formátu jpg (fullscreencapture)

## Obrázky
- Na webu použij fotky ze složky "Obrazky"
- Součástí obrázků je i moodboard s barvami a obrázky, které znázorňují pohodu, čistotu, klid
- Můžeš použít i obrázky z moodboardu

## Texty
- Vyjdi z dodaných textů
- Když budeš potřebovat, můžeš je mírně změnit nebo doplnit
- Zachovej vždy smysl a podstatu obsahu stránky

---

# Menu
- Domů
- Služby
- Jak to funguje
- Moje práce
- Blog
- O mně
- Kontakt

---

# Obsah webových stránek

## Hlavní strana – Hero sekce
**Nadpis:** Webová zahrada  
**Podnadpis:** Vytvořte web, který poroste s vaším podnikáním.  
**Text:** Pomáhám podnikatelům navrhnout a vytvořit jednoduchý web, který dává smysl jim i jejich klientům – bez stresu a zbytečné techniky.  
**CTA tlačítko:** Domluvit konzultaci

---

## Jak Webová zahrada funguje

### Příprava půdy – strategie
Společně si ujasníme, proč web vzniká, koho má oslovit a co má návštěvník ideálně udělat.

### Zasazení semínek – struktura
Navrhneme přehlednou strukturu webu a hlavních stránek, která podporuje vaše cíle.

### Péče o růst – obsah a design
Vytvoříme texty, vybereme barvy a vizuální styl a vše převedeme do funkční podoby.

### Sklizeň – výsledky
Web postupně vylepšujeme, sledujeme výsledky a podporujeme jeho další růst.

---

## Pro koho je Webová zahrada
Webová zahrada je pro podnikatele a malé firmy, kteří chtějí funkční a přehledný web bez technického stresu.

**Ideální pro:**
- kouče, terapeuty a konzultanty
- řemeslníky a poskytovatele služeb
- podnikatele, kteří chtějí web, který jim přivádí klienty

**Není vhodná pro:**
- velké korporace
- technicky složité projekty

---

## Služby

### E-book: Webová strategie pro jednoduchý web
Pomůže vám ujasnit si cíl webu, strukturu a obsah dříve, než se pustíte do samotné tvorby.

### Konzultace
Individuální podpora při plánování nebo úpravě vašeho webu.

### Šablony pro Divi
Přehledné a upravitelné šablony, které zvládnete používat sami.

---

## O mně
Ahoj, jsem Zuzka.

Věřím, že web má být oporou podnikání, ne zdrojem stresu. Vytvořila jsem systém, který staví nejdřív na strategii, potom na struktuře a teprve nakonec na designu.

Dnes pomáhám podnikatelům vytvářet weby, které s nimi rostou a přinášejí nové klienty.

---

## Kontakt
Pojďme společně pěstovat váš web.

**Kontaktní formulář** (s honeypot antispamem, odpovědi na: zlebedova@gmail.com)

**E-mail:** zuzka@webovazahrada.cz  
**Telefon:** [tvé číslo]

**Sledujte mě také na:**
- Instagram: @webovazahrada
- Facebook: Webová zahrada

---

## Patička na každé stránce
© 2026 Webová zahrada | Všechna práva vyhrazena  
E-mail: zuzka@webovazahrada.cz  
Ochrana osobních údajů | Podmínky používání