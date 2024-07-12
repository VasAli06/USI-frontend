import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSchoolsStore = defineStore('schools', () => {

    let schools = [
        {
            name: "Gymnazium Jana Keplera",
            address: "Seydlerova 9",
            contact_person: "Mgr. Karel Žďárek, PhD.",
            website: "www.ssps.cz",
            about_school: "Je osmileté a čtyřleté pražské gymnázium, obávané pro svou prestižní pověst. Je velmi aktivní a často i úspěšné v mnoha soutěžích. Žije jak obrovským výběrem volitelných seminářů, tak bezkonkurenčními studentskými akcemi, jako simulace evropského parlamentu nebo přednáškový týden. /r/n Dvě školní budovy, jež se k sobě na první pohled moc nehodí, nabízejí sportovní halu, v níž se dají pořádat i poměrně velké akce, zkušebnu pro kapely, rozsáhlou knihovnu nebo třeba krásný rozhled do parku Marxe van der Stolea, přezdívaného Péčko, kde jsou minimálně jednou měsíčně pořádány bláznivé akce. Především se ale pod touhle střechou skrývá smečka zábavných a kreativních lidí, ať už se jedná o učitele, studenty, nebo o legendárního školníka či kuchařky."
        },
        {
            name: "Test2",
            address: "Seydlerova 9",
            contact_person: "Mgr. Karel Žďárek, PhD.",
            website: "https://www.ssps.cz",
            about_school: ""
        }, {
            name: "Gymnazium Jana Keplera",
            address: "Seydlerova 9",
            contact_person: "Mgr. Karel Žďárek, PhD.",
            website: "www.ssps.cz",
            about_school: "Je osmileté a čtyřleté pražské gymnázium, obávané pro svou prestižní pověst. Je velmi aktivní a často i úspěšné v mnoha soutěžích. Žije jak obrovským výběrem volitelných seminářů, tak bezkonkurenčními studentskými akcemi, jako simulace evropského parlamentu nebo přednáškový týden. /r/n Dvě školní budovy, jež se k sobě na první pohled moc nehodí, nabízejí sportovní halu, v níž se dají pořádat i poměrně velké akce, zkušebnu pro kapely, rozsáhlou knihovnu nebo třeba krásný rozhled do parku Marxe van der Stolea, přezdívaného Péčko, kde jsou minimálně jednou měsíčně pořádány bláznivé akce. Především se ale pod touhle střechou skrývá smečka zábavných a kreativních lidí, ať už se jedná o učitele, studenty, nebo o legendárního školníka či kuchařky."
        }, {
            name: "SSPŠ",
            address: "Seydlerova 9",
            contact_person: "Mgr. Karel Žďárek, PhD.",
            website: "www.ssps.cz",
            about_school: "Je osmileté a čtyřleté pražské gymnázium, obávané pro svou prestižní pověst. Je velmi aktivní a často i úspěšné v mnoha soutěžích. Žije jak obrovským výběrem volitelných seminářů, tak bezkonkurenčními studentskými akcemi, jako simulace evropského parlamentu nebo přednáškový týden. /r/n Dvě školní budovy, jež se k sobě na první pohled moc nehodí, nabízejí sportovní halu, v níž se dají pořádat i poměrně velké akce, zkušebnu pro kapely, rozsáhlou knihovnu nebo třeba krásný rozhled do parku Marxe van der Stolea, přezdívaného Péčko, kde jsou minimálně jednou měsíčně pořádány bláznivé akce. Především se ale pod touhle střechou skrývá smečka zábavných a kreativních lidí, ať už se jedná o učitele, studenty, nebo o legendárního školníka či kuchařky."
        }, {
            name: "Gymnazium Jana Keplera",
            address: "Seydlerova 9",
            contact_person: "Mgr. Karel Žďárek, PhD.",
            website: "www.ssps.cz",
            about_school: "Je osmileté a čtyřleté pražské gymnázium, obávané pro svou prestižní pověst. Je velmi aktivní a často i úspěšné v mnoha soutěžích. Žije jak obrovským výběrem volitelných seminářů, tak bezkonkurenčními studentskými akcemi, jako simulace evropského parlamentu nebo přednáškový týden. /r/n Dvě školní budovy, jež se k sobě na první pohled moc nehodí, nabízejí sportovní halu, v níž se dají pořádat i poměrně velké akce, zkušebnu pro kapely, rozsáhlou knihovnu nebo třeba krásný rozhled do parku Marxe van der Stolea, přezdívaného Péčko, kde jsou minimálně jednou měsíčně pořádány bláznivé akce. Především se ale pod touhle střechou skrývá smečka zábavných a kreativních lidí, ať už se jedná o učitele, studenty, nebo o legendárního školníka či kuchařky."
        }, {
            name: "Gymnazium Jana Keplera",
            address: "Seydlerova 9",
            contact_person: "Mgr. Karel Žďárek, PhD.",
            website: "www.ssps.cz",
            about_school: "Je osmileté a čtyřleté pražské gymnázium, obávané pro svou prestižní pověst. Je velmi aktivní a často i úspěšné v mnoha soutěžích. Žije jak obrovským výběrem volitelných seminářů, tak bezkonkurenčními studentskými akcemi, jako simulace evropského parlamentu nebo přednáškový týden. /r/n Dvě školní budovy, jež se k sobě na první pohled moc nehodí, nabízejí sportovní halu, v níž se dají pořádat i poměrně velké akce, zkušebnu pro kapely, rozsáhlou knihovnu nebo třeba krásný rozhled do parku Marxe van der Stolea, přezdívaného Péčko, kde jsou minimálně jednou měsíčně pořádány bláznivé akce. Především se ale pod touhle střechou skrývá smečka zábavných a kreativních lidí, ať už se jedná o učitele, studenty, nebo o legendárního školníka či kuchařky."
        },
    ]


    return { schools }
})
