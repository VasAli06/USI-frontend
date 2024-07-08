import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useArticlesStore = defineStore('articles', () => {
  let articles = [
    {
      title: "Mediální kemp1",
      date: "1.1. 2024",
      text: "23. 6. až 27. 6. jsme se jako aktivní studenti UŠI sjeli kousek od Písku do biofarmy Hůrka na kemp věnující se mediální tvorbě a médiím obecně. Bez ohledu na rozdílné úrovně v tomto tématu jsme se definitivně všichni mnohému přiučili. /r/n Prohlédli jsme si a byli jsme poučeni o fungování farmy, kam jezdí na meetingy převážně špičkoví manažeři, kteří se tam socializují venku v ohradě, kde se volně procházejí koně, s nimiž pak také pracují. Tento program jsme si také mohli vyzkoušet. /r/n Další den jsme vzdělávali o médiích, převážně fotografii a videu, jeden celý osmý stupeň základní školy Josefa Kajetána Tyla v Písku. Přičemž osmáci ke konci odpoledne udělali skutečně obrovský pokrok. /r/n A my si pak večer po tom náročném programu mohli promluvit o vlastním vyhoření s místním spolkem aktivních píseckých učitelů, ale v krásné přírodě biofarmy a ve společnosti koní, kteří se nám aktivně snažili pomoci v pojídání občerstvení, jsme se již záhy přesunuli k produktivnějším tématům, jako způsoby, jak pracovat s mobily ve školách, nebo proč je dobré tématicky propojovat předměty, a to i takové, na něž se na základkách příliš nedbá, jako výtvarka či hudebka. /r/n Den jsme jako každý večer uzavřeli u zvuků kytary a praskání ohně s žaludky plnými lahodných klobás z místního řeznictví. /r/n V závěru kempu jsme pak vytvořili reportáž a fotodokumentaci, kterou si můžete prohlédnout na následujících odkazech: /r/n Bylo to vskutku inovativní."
    },
    {
      title: "Mediální kemp2",
      date: "1.1. 2024",
      text: "23. 6. až 27. 6. jsme se jako aktivní studenti UŠI sjeli kousek od Písku do biofarmy Hůrka na kemp věnující se mediální tvorbě a médiím obecně. Bez ohledu na rozdílné úrovně v tomto tématu jsme se definitivně všichni mnohému přiučili. /r/n Prohlédli jsme si a byli jsme poučeni o fungování farmy, kam jezdí na meetingy převážně špičkoví manažeři, kteří se tam socializují venku v ohradě, kde se volně procházejí koně, s nimiž pak také pracují. Tento program jsme si také mohli vyzkoušet. /r/n Další den jsme vzdělávali o médiích, převážně fotografii a videu, jeden celý osmý stupeň základní školy Josefa Kajetána Tyla v Písku. Přičemž osmáci ke konci odpoledne udělali skutečně obrovský pokrok. /r/n A my si pak večer po tom náročném programu mohli promluvit o vlastním vyhoření s místním spolkem aktivních píseckých učitelů, ale v krásné přírodě biofarmy a ve společnosti koní, kteří se nám aktivně snažili pomoci v pojídání občerstvení, jsme se již záhy přesunuli k produktivnějším tématům, jako způsoby, jak pracovat s mobily ve školách, nebo proč je dobré tématicky propojovat předměty, a to i takové, na něž se na základkách příliš nedbá, jako výtvarka či hudebka. /r/n Den jsme jako každý večer uzavřeli u zvuků kytary a praskání ohně s žaludky plnými lahodných klobás z místního řeznictví. /r/n V závěru kempu jsme pak vytvořili reportáž a fotodokumentaci, kterou si můžete prohlédnout na následujících odkazech: /r/n Bylo to vskutku inovativní."
    },
    {
      title: "Mediální kemp3",
      date: "1.1. 2024",
      text: "23. 6. až 27. 6. jsme se jako aktivní studenti UŠI sjeli kousek od Písku do biofarmy Hůrka na kemp věnující se mediální tvorbě a médiím obecně. Bez ohledu na rozdílné úrovně v tomto tématu jsme se definitivně všichni mnohému přiučili. /r/n Prohlédli jsme si a byli jsme poučeni o fungování farmy, kam jezdí na meetingy převážně špičkoví manažeři, kteří se tam socializují venku v ohradě, kde se volně procházejí koně, s nimiž pak také pracují. Tento program jsme si také mohli vyzkoušet. /r/n Další den jsme vzdělávali o médiích, převážně fotografii a videu, jeden celý osmý stupeň základní školy Josefa Kajetána Tyla v Písku. Přičemž osmáci ke konci odpoledne udělali skutečně obrovský pokrok. /r/n A my si pak večer po tom náročném programu mohli promluvit o vlastním vyhoření s místním spolkem aktivních píseckých učitelů, ale v krásné přírodě biofarmy a ve společnosti koní, kteří se nám aktivně snažili pomoci v pojídání občerstvení, jsme se již záhy přesunuli k produktivnějším tématům, jako způsoby, jak pracovat s mobily ve školách, nebo proč je dobré tématicky propojovat předměty, a to i takové, na něž se na základkách příliš nedbá, jako výtvarka či hudebka. /r/n Den jsme jako každý večer uzavřeli u zvuků kytary a praskání ohně s žaludky plnými lahodných klobás z místního řeznictví. /r/n V závěru kempu jsme pak vytvořili reportáž a fotodokumentaci, kterou si můžete prohlédnout na následujících odkazech: /r/n Bylo to vskutku inovativní."
    },
  

  ]
  function parseText(text) {

    return text.split("/r/n");

  }
  return { articles, parseText }
})
