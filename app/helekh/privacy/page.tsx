import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy  HELEKH",
  description: "Informativa sulla privacy dell'app HELEKH.",
  alternates: {
    canonical: "/helekh/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sectionClass = "border-t border-revealue-mineral/20 pt-10 sm:pt-12";
const headingClass =
  "text-sm font-medium uppercase tracking-[0.18em] text-revealue-copper sm:text-base";
const copyClass = "mt-5 space-y-5 text-base leading-8 text-revealue-mineral sm:text-lg";
const linkClass =
  "rounded-sm text-revealue-ivory underline decoration-revealue-copper/70 underline-offset-4 transition-colors hover:text-revealue-copper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-revealue-copper focus-visible:ring-offset-4 focus-visible:ring-offset-revealue-deep motion-reduce:transition-none";

export default function HelekhPrivacyPage() {
  return (
    <div className="bg-revealue-deep/95 text-revealue-ivory">
      <article className="mx-auto max-w-4xl px-6 pb-24 pt-36 sm:px-10 sm:pb-32 sm:pt-44 lg:px-12 lg:pb-40 lg:pt-52">
        <header className="max-w-3xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-revealue-copper">
            HELEKH
          </p>
          <h1 className="mt-7 text-[clamp(3.25rem,8vw,6.75rem)] font-light leading-[0.94] tracking-[-0.055em]">
            Privacy Policy
          </h1>

          <div className="mt-10 space-y-5 text-base leading-8 text-revealue-mineral sm:mt-12 sm:text-lg">
            <p className="text-sm font-medium text-revealue-ivory">
              Ultimo aggiornamento: 7 ottobre 2026
            </p>
            <p>
              La presente informativa descrive come l’applicazione HELEKH
              tratta i dati durante il suo utilizzo.
            </p>
            <p>
              HELEKH è un’applicazione dedicata alla pianificazione e alla
              gestione dell’esperienza di viaggio verso e da eventi.
            </p>
            <p>
              La versione dell’app a cui si riferisce questa informativa
              utilizza principalmente dati conservati localmente sul
              dispositivo e alcune funzionalità del sistema operativo e di
              servizi esterni attivate dall’utente.
            </p>
          </div>
        </header>

        <div className="mt-20 space-y-14 sm:mt-24 sm:space-y-16">
          <section className={sectionClass} aria-labelledby="titolare-contatti">
            <h2 id="titolare-contatti" className={headingClass}>
              Titolare e contatti
            </h2>
            <div className={copyClass}>
              <p>
                Per informazioni relative alla privacy o al trattamento dei
                dati nell’app HELEKH è possibile contattare:
              </p>
              <address className="not-italic text-revealue-ivory">
                <p>REVEALUE</p>
                <p>
                  Email: {" "}
                  <a className={linkClass} href="mailto:privacy@revealue.it">
                    privacy@revealue.it
                  </a>
                </p>
              </address>
            </div>
          </section>

          <section className={sectionClass} aria-labelledby="dati-trattati">
            <h2 id="dati-trattati" className={headingClass}>
              Dati trattati dall’app
            </h2>
            <div className={copyClass}>
              <p>
                A seconda delle funzionalità utilizzate, HELEKH può trattare
                sul dispositivo informazioni relative a:
              </p>
              <ul className="list-disc space-y-2 pl-6 marker:text-revealue-copper">
                <li>eventi salvati;</li>
                <li>luoghi associati agli eventi;</li>
                <li>origine e destinazione dei viaggi;</li>
                <li>piani e preferenze di viaggio;</li>
                <li>luoghi salvati, come casa o lavoro;</li>
                <li>informazioni relative all’accesso agli eventi;</li>
                <li>biglietti o documenti selezionati dall’utente;</li>
                <li>riferimenti e collegamenti salvati;</li>
                <li>promemoria;</li>
                <li>informazioni relative al parcheggio del veicolo;</li>
                <li>
                  informazioni e cronologia relative alle scelte di mobilità;
                </li>
                <li>dati necessari alla memoria dell’esperienza dell’evento.</li>
              </ul>
              <p>
                Queste informazioni sono utilizzate per fornire le
                funzionalità dell’app e sono conservate nell’area privata
                dell’applicazione sul dispositivo, salvo i casi descritti
                nelle sezioni successive.
              </p>
            </div>
          </section>

          <section className={sectionClass} aria-labelledby="localizzazione">
            <h2 id="localizzazione" className={headingClass}>
              Localizzazione
            </h2>
            <div className={copyClass}>
              <p>
                HELEKH può richiedere l’accesso alla posizione del dispositivo
                per funzionalità specifiche e attivate dall’utente.
              </p>

              <h3 className="pt-3 text-lg font-medium text-revealue-ivory sm:text-xl">
                Posizione approssimativa
              </h3>
              <p>
                L’app può utilizzare una posizione approssimativa, su richiesta
                dell’utente, per valutare la prossimità rispetto al luogo di un
                evento.
              </p>
              <p>
                La posizione viene richiesta in modo puntuale e non viene
                utilizzata per un monitoraggio continuo o in background.
              </p>
              <p>
                I dati grezzi della posizione utilizzati per questa funzione
                non vengono conservati dall’app; possono essere conservati
                valori derivati necessari alla funzionalità, come distanza,
                accuratezza e momento della rilevazione.
              </p>

              <h3 className="pt-3 text-lg font-medium text-revealue-ivory sm:text-xl">
                Posizione precisa
              </h3>
              <p>
                L’app può utilizzare la posizione precisa quando l’utente
                sceglie esplicitamente di salvare la posizione del veicolo
                parcheggiato.
              </p>
              <p>
                In questo caso le coordinate possono essere conservate
                localmente sul dispositivo per consentire all’utente di
                ritrovare il veicolo.
              </p>
              <p>
                HELEKH non utilizza la posizione per monitorare continuativamente
                gli spostamenti dell’utente e non richiede accesso alla
                posizione in background.
              </p>
              <p>
                L’accesso alla posizione utilizza i servizi di localizzazione
                disponibili sul dispositivo, inclusi i servizi Google Play sui
                dispositivi compatibili. Il trattamento effettuato da tali
                servizi è soggetto alle impostazioni del dispositivo e alle
                informative applicabili del relativo fornitore.
              </p>
            </div>
          </section>

          <section className={sectionClass} aria-labelledby="mappe">
            <h2 id="mappe" className={headingClass}>
              Google Maps e applicazioni di mappe
            </h2>
            <div className={copyClass}>
              <p>
                Alcune funzioni consentono all’utente di aprire volontariamente
                un’applicazione di mappe esterna per ottenere indicazioni
                stradali.
              </p>
              <p>
                Quando l’utente attiva una di queste funzioni, HELEKH può
                trasferire all’applicazione esterna le informazioni necessarie
                a rappresentare la destinazione, ad esempio:
              </p>
              <ul className="list-disc space-y-2 pl-6 marker:text-revealue-copper">
                <li>nome o indirizzo di un luogo;</li>
                <li>coordinate della destinazione;</li>
                <li>
                  coordinate precedentemente salvate del veicolo parcheggiato;
                </li>
                <li>modalità di viaggio richiesta.</li>
              </ul>
              <p>
                Il trasferimento avviene soltanto in seguito a un’azione
                esplicita dell’utente.
              </p>
              <p>
                Il successivo trattamento dei dati è regolato dalle condizioni
                e dall’informativa privacy del servizio di mappe utilizzato.
              </p>
            </div>
          </section>

          <section className={sectionClass} aria-labelledby="collegamenti-esterni">
            <h2 id="collegamenti-esterni" className={headingClass}>
              Collegamenti esterni
            </h2>
            <div className={copyClass}>
              <p>
                HELEKH può consentire all’utente di aprire collegamenti web
                associati a un evento o salvati nell’app.
              </p>
              <p>
                L’apertura avviene attraverso il browser o un’altra
                applicazione scelta dal dispositivo ed è avviata esplicitamente
                dall’utente.
              </p>
              <p>
                Il trattamento effettuato dal sito o servizio esterno è
                regolato dalla relativa informativa privacy.
              </p>
            </div>
          </section>

          <section className={sectionClass} aria-labelledby="health-connect">
            <h2 id="health-connect" className={headingClass}>
              Health Connect
            </h2>
            <div className={copyClass}>
              <p>
                HELEKH può utilizzare, quando l’utente concede l’autorizzazione,
                dati relativi ai passi disponibili tramite Health Connect.
              </p>
              <p>
                L’app utilizza esclusivamente dati aggregati necessari alla
                funzionalità richiesta.
              </p>
              <p>
                HELEKH non conserva nell’archivio dell’app i record sanitari
                grezzi letti tramite Health Connect e non li trasmette a server
                gestiti da REVEALUE nella versione dell’app cui si riferisce
                questa informativa.
              </p>
              <p>
                L’accesso ai dati Health Connect dipende dalle autorizzazioni
                concesse dall’utente e può essere modificato o revocato
                attraverso le impostazioni del dispositivo.
              </p>
            </div>
          </section>

          <section className={sectionClass} aria-labelledby="biglietti-documenti">
            <h2 id="biglietti-documenti" className={headingClass}>
              Biglietti e documenti
            </h2>
            <div className={copyClass}>
              <p>
                L’utente può selezionare volontariamente immagini o documenti
                relativi all’accesso a un evento tramite il selettore documenti
                del sistema operativo.
              </p>
              <p>
                I file selezionati vengono conservati nell’area privata
                dell’applicazione sul dispositivo.
              </p>
              <p>
                HELEKH non accede indiscriminatamente ai file presenti sul
                dispositivo.
              </p>
            </div>
          </section>

          <section className={sectionClass} aria-labelledby="servizi-rete">
            <h2 id="servizi-rete" className={headingClass}>
              Servizi di rete
            </h2>
            <div className={copyClass}>
              <p>
                Nella versione dell’app cui si riferisce questa informativa non
                sono configurati servizi backend HELEKH o REVEALUE destinati
                alla trasmissione dei dati dell’utente relativi agli eventi, ai
                viaggi o alle scelte di mobilità.
              </p>
              <p>
                Alcune funzionalità possono tuttavia interagire con servizi del
                sistema operativo o servizi esterni, come descritto nelle
                sezioni relative alla localizzazione, alle mappe e ai
                collegamenti esterni.
              </p>
              <p>
                Future versioni dell’app potrebbero introdurre servizi di rete
                aggiuntivi. In tal caso questa informativa sarà aggiornata prima
                dell’utilizzo di tali funzionalità.
              </p>
            </div>
          </section>

          <section className={sectionClass} aria-labelledby="account">
            <h2 id="account" className={headingClass}>
              Account
            </h2>
            <div className={copyClass}>
              <p>
                La versione dell’app cui si riferisce questa informativa non
                richiede la creazione di un account HELEKH e non utilizza
                credenziali personali per accedere alle funzionalità dell’app.
              </p>
            </div>
          </section>

          <section className={sectionClass} aria-labelledby="analytics-pubblicita">
            <h2 id="analytics-pubblicita" className={headingClass}>
              Analytics e pubblicità
            </h2>
            <div className={copyClass}>
              <p>
                HELEKH non integra nella versione dell’app cui si riferisce
                questa informativa sistemi pubblicitari.
              </p>
              <p>
                L’app non utilizza identificatori pubblicitari per profilare
                l’utente.
              </p>
            </div>
          </section>

          <section className={sectionClass} aria-labelledby="conservazione-cancellazione">
            <h2 id="conservazione-cancellazione" className={headingClass}>
              Conservazione e cancellazione
            </h2>
            <div className={copyClass}>
              <p>
                I dati memorizzati dall’app rimangono generalmente sul
                dispositivo fino a quando vengono eliminati attraverso le
                funzioni disponibili nell’app, vengono rimossi i relativi
                contenuti oppure l’applicazione o i suoi dati vengono eliminati
                dal dispositivo.
              </p>
              <p>
                Alcune informazioni possono avere regole di conservazione
                legate alla funzione che le utilizza.
              </p>
              <p>
                Non tutte le informazioni conservate localmente dispongono,
                nella versione attuale, di un comando autonomo di cancellazione
                all’interno dell’app.
              </p>
              <p>
                La disinstallazione dell’app o la cancellazione dei relativi
                dati attraverso le impostazioni del dispositivo elimina
                normalmente i dati conservati nell’area privata
                dell’applicazione.
              </p>
              <p>
                Su alcuni dispositivi e versioni di Android, meccanismi gestiti
                dal sistema operativo o dal produttore possono consentire la
                migrazione di dati tra dispositivi.
              </p>
            </div>
          </section>

          <section className={sectionClass} aria-labelledby="sicurezza">
            <h2 id="sicurezza" className={headingClass}>
              Sicurezza
            </h2>
            <div className={copyClass}>
              <p>
                HELEKH utilizza le protezioni fornite dal sistema operativo
                Android per l’area privata dell’applicazione.
              </p>
              <p>
                Le comunicazioni verso servizi esterni, quando previste,
                utilizzano i meccanismi di sicurezza messi a disposizione dalla
                piattaforma e dai servizi interessati.
              </p>
              <p>
                Nessun sistema informatico può tuttavia garantire una sicurezza
                assoluta.
              </p>
            </div>
          </section>

          <section className={sectionClass} aria-labelledby="autorizzazioni">
            <h2 id="autorizzazioni" className={headingClass}>
              Autorizzazioni
            </h2>
            <div className={copyClass}>
              <p>
                L’utente mantiene il controllo sulle autorizzazioni concesse
                all’app attraverso le impostazioni Android.
              </p>
              <p>
                La revoca di un’autorizzazione può rendere indisponibili le
                funzionalità che dipendono da essa senza impedire
                necessariamente l’utilizzo delle altre funzioni di HELEKH.
              </p>
            </div>
          </section>

          <section className={sectionClass} aria-labelledby="minori">
            <h2 id="minori" className={headingClass}>
              Minori
            </h2>
            <div className={copyClass}>
              <p>HELEKH non è progettata specificamente per bambini.</p>
              <p>
                L’utilizzo dell’app e delle funzionalità relative alla posizione
                e ai servizi esterni deve avvenire nel rispetto delle condizioni
                applicabili e delle impostazioni del dispositivo.
              </p>
            </div>
          </section>

          <section className={sectionClass} aria-labelledby="modifiche-informativa">
            <h2 id="modifiche-informativa" className={headingClass}>
              Modifiche alla presente informativa
            </h2>
            <div className={copyClass}>
              <p>
                La presente informativa può essere aggiornata quando cambiano
                le funzionalità dell’app, i servizi utilizzati o le modalità di
                trattamento dei dati.
              </p>
              <p>
                La data dell’ultimo aggiornamento riportata all’inizio della
                pagina identifica la versione corrente dell’informativa.
              </p>
            </div>
          </section>

          <section className={sectionClass} aria-labelledby="contatti">
            <h2 id="contatti" className={headingClass}>
              Contatti
            </h2>
            <div className={copyClass}>
              <p>Per richieste o chiarimenti relativi alla presente informativa:</p>
              <p>
                <a className={linkClass} href="mailto:privacy@revealue.it">
                  privacy@revealue.it
                </a>
              </p>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
