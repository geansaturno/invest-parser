import Titulo from './model/Titulo';
const Crawler = require('crawler')

export class TesouroDiretoService {
    selic: Titulo;
    ipca: Titulo;
    prefix: Titulo;

    loaded: boolean = false;

    async laodTitles() {
        const crawler = new Crawler({
            callback: (errors: string, res) => {
                if (errors) {
                    throw new Error(errors);
                }
                const $ = res.$;

                const trSelic = $(".tabelaPrecoseTaxas:not('.sanfonado') .camposTesouroDireto:contains('Tesouro Selic 2023')");
                const selicBuyValue = this.moneyToNumberParser(this.nationalToInternationalStringNumber(trSelic.children().last().text()));

                const trSellSelic = $(".tabelaPrecoseTaxas.sanfonado .camposTesouroDireto:contains('Tesouro Selic 2023')");
                const selicSellValue = this.moneyToNumberParser(this.nationalToInternationalStringNumber(trSellSelic.children().last().text()));

                console.log(selicBuyValue, selicSellValue);
                

                this.selic = new Titulo(selicBuyValue, selicSellValue);

                return true;
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

    nationalToInternationalStringNumber(num: string) {
        return num.replace(/\./, '').replace(/,/, '.');
    }

    moneyToNumberParser(price: string) {
        return parseFloat(price.replace(/R\$/, ''));
    }
}