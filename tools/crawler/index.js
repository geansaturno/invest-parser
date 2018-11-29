const Crawler = require('crawler');

const crawler = new Crawler({
    callback: (errors, res, done) => {
        if(errors) {
            console.log(errors);
            done(errors);
        }

        const $ = res.$;

        const trSelic = $(".tabelaPrecoseTaxas:not('.sanfonado') .camposTesouroDireto:contains('Tesouro Selic 2023')");
        const tdArray = trSelic.find('td');
        console.log(trSelic.children().last().text());
        
        const priceSelicTd = tdArray[tdArray.length - 1];


        // camposTesouro.

        // const tdSelic = 

        // console.log(trSelic.children().length);
        // console.log(priceSelicTd.text());
        
        
        done();
        
    }
});


crawler.queue('http://www.tesouro.fazenda.gov.br/tesouro-direto-precos-e-taxas-dos-titulos');
