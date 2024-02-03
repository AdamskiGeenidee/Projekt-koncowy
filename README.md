# Kalkulator Wydatków: Twój Osobisty Menedżer Finansów



![Firebase Console](https://github.com/AdamskiGeenidee/Projekt-koncowy/assets/127992622/b09169d6-571b-49d1-b202-eb8024c56cd6)



_**Pomysł:
Marzysz o prostym i skutecznym narzędziu, które pomoże Ci w śledzeniu i zrozumieniu, jak zarządzasz swoimi codziennymi wydatkami? Oto Kalkulator Wydatków, stworzony z myślą o Tobie!**_

**_Rozwiązanie:
Zapomnij o skomplikowanych arkuszach kalkulacyjnych czy programach, które bardziej przytłaczają niż pomagają. Moja aplikacja eliminuje trudności związane z monitorowaniem budżetu osobistego, umożliwiając Ci szybkie śledzenie wydatków i skuteczne planowanie finansów._**


1. Must have !! :

Dodawanie nowych wydatków.
Kategorie wydatków.
Generowanie raportów.


2. Should have ! :

Edycja i usuwanie wpisów.
Przypisywanie tagów do wydatków.


3. Could have ?? :

System powiadomień.
Cele oszczędnościowe.


~~4. Won't have:~~

~~Integracja z zewnętrznymi serwisami finansowymi.~~


## A. Funkcje:

#### Dodawanie Wydatków: Wprowadzaj swoje wydatki z łatwością, bo życie to już wystarczające komplikacje.

#### Łączna Suma: Monitoruj ogólną sumę wydatków, bo jak wiadomo, kontrola to podstawa, nawet w finansach.

#### Kategorie: Przypisuj wydatkom kategorie, od jedzenia po zakupy online - bo w końcu każdy wydatek zasługuje na własną etykietę.

#### Wykresy i Statystyki: Generuj wykresy i statystyki, aby zobaczyć, czy budżet przypomina raczej leciwe drewno, czy świeżą strzałę w tarczę.


## B. Historia Transakcji:

#### Historia Transakcji: Śledź swoje wydatki w czasie, bo każda transakcja to jak rozdział w życiowej historii Twojego budżetu.


## C. Waluty i Kursy Walutowe:

#### Wybór Waluty: Dostosuj walutę do swoich potrzeb, a jeśli podróżujesz – nie martw się o kursy walutowe.


## D. Wersja mobilna:

#### Responsywność: Niezależnie od tego, czy korzystasz z komputera, czy smartfona, interfejs jest dostosowany do Twoich potrzeb.


## E. Testowanie:

#### Testowanie Jednostkowe: Regularne testy, aby nowe funkcje były bezpieczne dla istniejących elementów aplikacji.

#### Testy Użytkownika: Twoje zdanie ma znaczenie! Organizuję testy użytkownika, aby doskonalić użyteczność i eliminować błędy.


### Rozwój Projektu:

Projekt będzie rozwijał się dynamicznie, zawsze gotowy na nowe pomysły.


## Pytania do Mentora:

1. Czy moje założenia co do funkcjonalności są atrakcyjne i odpowiednie dla projektu tego typu?

2. Czy są jeszcze inne kluczowe elementy, które mogą uczynić tę aplikację jeszcze bardziej przyjazną dla użytkownika?

3. Jakie technologie mogą nadać aplikacji odpowiednią dynamikę i efektywność?

4. Czy planowany interfejs użytkownika przyciągnie uwagę i będzie intuicyjny dla potencjalnych użytkowników?



### Aplikacja Expenses Calculator jest napisana w języku JavaScript z użyciem biblioteki React do budowy interfejsu użytkownika. Poniżej opis technologii, funkcjonalności i przejście przez implementowane elementy:

#### Technologie:

###### JavaScript: Język programowania użyty do napisania logiki aplikacji.

###### React: Biblioteka JavaScript do budowy interfejsu użytkownika.

###### uuid: Biblioteka służąca do generowania unikalnych identyfikatorów UUID.

###### (API) Interfejs programistyczny : (API) kursów walut Narodowego Banku Polskiego (NBP), aby dynamicznie przeliczać kwoty wydatków z  polskich złotych na euro.

###### Firebase Data Base: Firebase Database to usługa bazodanowa w chmurze, która umożliwia przechowywanie i synchronizację danych w czasie rzeczywistym między różnymi urządzeniami.

###### jsPDF: To biblioteka JavaScript służąca do generowania plików PDF w przeglądarkach internetowych.

##### Funkcjonalności:

1. Dodawanie, Edytowanie i Usuwanie Wydatków:
   Użytkownik może dodawać nowe wydatki, podając datę, nazwę i kwotę.
   Istnieje możliwość edycji istniejących wydatków.
   Użytkownik może usuwać wydatki.

2. Budżet:
   Użytkownik może określić swój budżet.
   Aplikacja sumuje wszystkie wydatki, informując o łącznej kwocie wydanej.

3. Alerty:
   Aplikacja wykorzystuje alerty do informowania użytkownika o różnych zdarzeniach, takich jak dodanie wydatku czy jego edycja.

4. Wyszukiwanie Oszczędności:
   Aplikacja oblicza oszczędności użytkownika na podstawie podanego budżetu i sumy wydatków.

5. Przewalutowywanie zlotówek na euro:
   Aplikacja korzysta z interfejsu programistycznego (API) kursów walut Narodowego Banku Polskiego (NBP), aby dynamicznie przeliczać kwoty wydatków z polskich złotych na euro. Dzięki temu użytkownicy mogą śledzić aktualne kursy walutowe i dokonywać precyzyjnych przeliczeń w czasie rzeczywistym.

6. Zapisywanie danych w bazie danych Firebase:
   Dane o wydatkach są zapisywane w bazie danych Firebase, dzięki czemu są przechowywane nawet po odświeżeniu strony.

   ![Realtime Database - Firebase console klein](https://github.com/AdamskiGeenidee/Projekt-koncowy/assets/127992622/a421561c-6bb1-4aae-87e3-d892a7d160f3)

   
8. Generowanie plików PDF w przeglądarkach internetowych.
   
   ![PDF Report](https://github.com/AdamskiGeenidee/Projekt-koncowy/assets/127992622/b359a886-830a-4ea9-b22c-b9c2ea148a1c)




#### Przejście przez Implementowane Funkcjonalności:

##### Wprowadzenie:

###### Strona powitalna z tytułem "Expenses Calculator".

###### Ustawienie budżetu.

##### Dodawanie Wydatków:

###### Formularz do dodawania nowych wydatków.

###### Alerty informujące o dodaniu/edycji wydatku.

##### Edycja i Usuwanie:

###### Możliwość edycji i usuwania istniejących wydatków.

##### Podsumowanie:

###### Wyświetlanie łącznej kwoty wydanej.

###### Obliczanie i wyświetlanie oszczędności.

##### Zarządzanie:

###### Przycisk do usuwania wszystkich wydatków z potwierdzeniem.

##### Zapisywanie lokalne:

###### Zapisywanie danych w bazie danych Firebase dla trwałości.

#### Aplikacja jest zaprojektowana do obsługi codziennego zarządzania wydatkami, umożliwiając użytkownikowi kontrolę nad budżetem i monitorowanie wydatków w prosty sposób.
