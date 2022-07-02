import { Component, OnInit } from '@angular/core';
import { produtos } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  ProdutoAtivo = true;

  produtos: produtos[] = [
    {
      nome: "iPhone 13 Pro",
      descricao: "Parte da frente em Ceramic Shield. Parte de trás em vidro e design em alumínio",
      preco: 13000,
      quantidade: 1,
      imagem: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1644969385433",
      disponivel: true,
    },
    {
      nome: "iPhone 13",
      descricao: "Cantos arredondados que se ajustam à sua forma retangular e design curvo e elegante.",
      preco: 11000,
      quantidade: 1,
      imagem: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1645036276543",
      disponivel: true,
    },
    {
      nome: "iPhone 12",
      descricao: "Inclui o processador A14 Bionic e um ecrã Super Retina XDR duas vezes mais luminoso e resistente",
      preco: 10000,
      quantidade: 0,
      imagem: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=90&.v=1617135051000",
      disponivel: false,
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }


  exibeProdutoSimNao() {
    this.ProdutoAtivo = !this.ProdutoAtivo;
  }

}
