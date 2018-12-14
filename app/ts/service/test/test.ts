import Titulo from '../model/Titulo';
import {TesouroDiretoService} from '../TesouroDiretoService';
import {expect} from 'chai'

describe('Titulo Model', () => {
    it('Função get e sell deve retornar os valores', () => {
        const titulo = new Titulo(9050, 9000);

        expect(titulo.getBuyPrice()).to.be.equal(9050);
        expect(titulo.getSellPrice()).to.be.equal(9000);
    });
});

describe('TesouroDiretoService', () => {

    it('Selic deve ter valor de compra e venda como number', done => {
        const tesouroService = new TesouroDiretoService();

        tesouroService.laodTitles().then(() => {
            console.log('oi');
            
    
            // console.log(tesouroService.getSelic() == Titulo);
            
    
            expect(tesouroService.getSelic().getBuyPrice()).to.be.an('number');
            expect(tesouroService.getSelic().getSellPrice()).to.be.an('number');

            done();

        })
        .catch(err => done(err));

    });
});