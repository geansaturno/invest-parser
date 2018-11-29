import { Titulo } from './model/Titulo';
const Crawler = require('crawler')

export class TesouroDiretoService {
    selic: Titulo;
    ipca: Titulo;
    prefix: Titulo;

    constructor() {

        const crawler = new Crawler({
            callback: (errors, res, done) => {
                if (errors) {
                    console.log(errors);
                    done(errors);
                }

                const $ = res.$;

                const trSelic = $(".tabelaPrecoseTaxas:not('.sanfonado') .camposTesouroDireto:contains('Tesouro Selic 2023')");
                // const tdArray = trSelic.find('td');
                
                const selicBuyValue = parseFloat(trSelic.children().last().text().replace(/R\$/, '').replace(/\./, '').replace(/,/, '.'));
                
                console.log(selicBuyValue);
                // const priceSelicTd = tdArray[tdArray.length - 1];


                // camposTesouro.

                // const tdSelic = 

                // console.log(trSelic.children().length);
                // console.log(priceSelicTd.text());


                done();

            }
        });

        crawler.queue('http://www.tesouro.fazenda.gov.br/tesouro-direto-precos-e-taxas-dos-titulos');
    }

    getSelic() {
        return this.selic
    }

    getIpca() {
        return this.ipca
    }

    getPrefix() {
        return this.prefix
    }
}