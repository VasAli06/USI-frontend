import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useArticlesStore = defineStore('articles', () => {
  let articles = [
    {
      title: "Mediální kemp1",
      date: "20.8. 2032",
      text: "23. 6. až 27. 6. jsme se jako aktivní studenti UŠI sjeli kousek od Písku do biofarmy Hůrka na kemp věnující se mediální tvorbě a médiím obecně. Bez ohledu na rozdílné úrovně v tomto tématu jsme se definitivně všichni mnohému přiučili. /r/n Prohlédli jsme si a byli jsme poučeni o fungování farmy, kam jezdí na meetingy převážně špičkoví manažeři, kteří se tam socializují venku v ohradě, kde se volně procházejí koně, s nimiž pak také pracují. Tento program jsme si také mohli vyzkoušet. /r/n Další den jsme vzdělávali o médiích, převážně fotografii a videu, jeden celý osmý stupeň základní školy Josefa Kajetána Tyla v Písku. Přičemž osmáci ke konci odpoledne udělali skutečně obrovský pokrok. /r/n A my si pak večer po tom náročném programu mohli promluvit o vlastním vyhoření s místním spolkem aktivních píseckých učitelů, ale v krásné přírodě biofarmy a ve společnosti koní, kteří se nám aktivně snažili pomoci v pojídání občerstvení, jsme se již záhy přesunuli k produktivnějším tématům, jako způsoby, jak pracovat s mobily ve školách, nebo proč je dobré tématicky propojovat předměty, a to i takové, na něž se na základkách příliš nedbá, jako výtvarka či hudebka. /r/n Den jsme jako každý večer uzavřeli u zvuků kytary a praskání ohně s žaludky plnými lahodných klobás z místního řeznictví. /r/n V závěru kempu jsme pak vytvořili reportáž a fotodokumentaci, kterou si můžete prohlédnout na následujících odkazech: /r/n Bylo to vskutku inovativní."
    },
    {
      title: "Závěrečné usnesení projektu únikové hry",
      date: "23.7. 2030",
      text: "V rámci Unie škol inovativních se na Krkonošském gymnáziu v Hostinném ve dnech 25. - 26.4.2024 konala Úniková fantasy hra. /r/n Jednoho ze dvou konkrétních projektů, vzniklých již na prvním kempu UŠI, se zúčastnili studenti ze Smíchovské střední průmyslové školy a gymnázia z Prahy. /r/n Během školení, které předcházelo samotné hře, se studenti zúčastněné školy měli možnost dozvědět spoustu zajímavých informací o únikových hrách. Čtyřčlenný tým prezentujících studentům vysvětlil principy a typy únikových her, jejich výhody a využití, kde mj. byla uvedena celá řada zajímavostí z historie. Následně se společně podívali na již zrealizované projekty a únikovou hru na téma Krvavá magie si s radostí ve skupinkách zahráli. /r/n Součástí odpoledního programu byl také krátký workshop, kde se studenti během necelé hodiny s nadšením zamysleli nad svou vlastní únikovou hrou, popřemýšleli nad tématem, motivy a také nad prostorovou distribucí únikové hry v prostorách Smíchovské střední v Praze. /r/n Studenti hodnotili celý program pozitivně, a následující den si po dobrodružném spaní ve škole měli možnost vyzkoušet, jaké to je být v roli koordinátorů. A nezklamali:) /r/n Spolupráci hodnotíme jako velmi přínosnou. "
    },


    {
      title: "Závěrečné usnesení projektu únikové hry",
      date: "23.2. 2024",
      text: "23. 6. až 27. 6. jsme se jako aktivní studenti UŠI sjeli kousek od Písku do biofarmy Hůrka na kemp věnující se mediální tvorbě a médiím obecně. Bez ohledu na rozdílné úrovně v tomto tématu jsme se definitivně všichni mnohému přiučili. /r/n Prohlédli jsme si a byli jsme poučeni o fungování farmy, kam jezdí na meetingy převážně špičkoví manažeři, kteří se tam socializují venku v ohradě, kde se volně procházejí koně, s nimiž pak také pracují. Tento program jsme si také mohli vyzkoušet. /r/n Další den jsme vzdělávali o médiích, převážně fotografii a videu, jeden celý osmý stupeň základní školy Josefa Kajetána Tyla v Písku. Přičemž osmáci ke konci odpoledne udělali skutečně obrovský pokrok. /r/n A my si pak večer po tom náročném programu mohli promluvit o vlastním vyhoření s místním spolkem aktivních píseckých učitelů, ale v krásné přírodě biofarmy a ve společnosti koní, kteří se nám aktivně snažili pomoci v pojídání občerstvení, jsme se již záhy přesunuli k produktivnějším tématům, jako způsoby, jak pracovat s mobily ve školách, nebo proč je dobré tématicky propojovat předměty, a to i takové, na něž se na základkách příliš nedbá, jako výtvarka či hudebka. /r/n Den jsme jako každý večer uzavřeli u zvuků kytary a praskání ohně s žaludky plnými lahodných klobás z místního řeznictví. /r/n V závěru kempu jsme pak vytvořili reportáž a fotodokumentaci, kterou si můžete prohlédnout na následujících odkazech: /r/n Bylo to vskutku inovativní."
    },
    {
      title: "Závěrečné usnesení projektu únikové hry",
      date: "22.2. 2029",
      text: "23. 6. až 27. 6. jsme se jako aktivní studenti UŠI sjeli kousek od Písku do biofarmy Hůrka na kemp věnující se mediální tvorbě a médiím obecně. Bez ohledu na rozdílné úrovně v tomto tématu jsme se definitivně všichni mnohému přiučili. /r/n Prohlédli jsme si a byli jsme poučeni o fungování farmy, kam jezdí na meetingy převážně špičkoví manažeři, kteří se tam socializují venku v ohradě, kde se volně procházejí koně, s nimiž pak také pracují. Tento program jsme si také mohli vyzkoušet. /r/n Další den jsme vzdělávali o médiích, převážně fotografii a videu, jeden celý osmý stupeň základní školy Josefa Kajetána Tyla v Písku. Přičemž osmáci ke konci odpoledne udělali skutečně obrovský pokrok. /r/n A my si pak večer po tom náročném programu mohli promluvit o vlastním vyhoření s místním spolkem aktivních píseckých učitelů, ale v krásné přírodě biofarmy a ve společnosti koní, kteří se nám aktivně snažili pomoci v pojídání občerstvení, jsme se již záhy přesunuli k produktivnějším tématům, jako způsoby, jak pracovat s mobily ve školách, nebo proč je dobré tématicky propojovat předměty, a to i takové, na něž se na základkách příliš nedbá, jako výtvarka či hudebka. /r/n Den jsme jako každý večer uzavřeli u zvuků kytary a praskání ohně s žaludky plnými lahodných klobás z místního řeznictví. /r/n V závěru kempu jsme pak vytvořili reportáž a fotodokumentaci, kterou si můžete prohlédnout na následujících odkazech: /r/n Bylo to vskutku inovativní."
    }, {
      title: "Závěrečné usnesení projektu únikové hry",
      date: "21.2. 2029",
      text: "23. 6. až 27. 6. jsme se jako aktivní studenti UŠI sjeli kousek od Písku do biofarmy Hůrka na kemp věnující se mediální tvorbě a médiím obecně. Bez ohledu na rozdílné úrovně v tomto tématu jsme se definitivně všichni mnohému přiučili. /r/n Prohlédli jsme si a byli jsme poučeni o fungování farmy, kam jezdí na meetingy převážně špičkoví manažeři, kteří se tam socializují venku v ohradě, kde se volně procházejí koně, s nimiž pak také pracují. Tento program jsme si také mohli vyzkoušet. /r/n Další den jsme vzdělávali o médiích, převážně fotografii a videu, jeden celý osmý stupeň základní školy Josefa Kajetána Tyla v Písku. Přičemž osmáci ke konci odpoledne udělali skutečně obrovský pokrok. /r/n A my si pak večer po tom náročném programu mohli promluvit o vlastním vyhoření s místním spolkem aktivních píseckých učitelů, ale v krásné přírodě biofarmy a ve společnosti koní, kteří se nám aktivně snažili pomoci v pojídání občerstvení, jsme se již záhy přesunuli k produktivnějším tématům, jako způsoby, jak pracovat s mobily ve školách, nebo proč je dobré tématicky propojovat předměty, a to i takové, na něž se na základkách příliš nedbá, jako výtvarka či hudebka. /r/n Den jsme jako každý večer uzavřeli u zvuků kytary a praskání ohně s žaludky plnými lahodných klobás z místního řeznictví. /r/n V závěru kempu jsme pak vytvořili reportáž a fotodokumentaci, kterou si můžete prohlédnout na následujících odkazech: /r/n Bylo to vskutku inovativní."
    },



  ]
  function parseText(text) {

    return text.split("/r/n");

  }
  return { articles, parseText }
})
