export interface IPost {
  id: number;
  title: string;
  imageUrl: string;
  body: string;
}

export const Posts: IPost[] = [
  {
    id: 1,
    title: "Somos tão jovens",
    imageUrl: "../images/somos-tao-jovens.jpg",
    body: "Somos tão Jovens conta a emocionante e desafiadora história da transformação de Renato Manfredini Jr. no mito Renato Russo, revelando como um rapaz de Brasília, no final da ditadura, criou canções como 'Que País é Este', 'Música Urbana', 'Geração Coca-Cola', 'Eduardo e Mônica' e 'Faroeste Caboclo', verdadeiros hinos da juventude urbana dos anos 80 que continuam a ser cultuadas geração após geração por uma crescente legião de jovens fãs.",
  },
  {
    id: 2,
    title: "titulo",
    imageUrl: "../images/a-negociacao.jpg",
    body: "Um magnata está fora de si e ansioso para vender seu império antes que suas fraudes sejam reveladas, mas as coisas não saem exatamente como ele planejou e ele terá que buscar ajuda em lugares inusitados.",
  },
  {
    id: 2,
    title: "titulo",
    imageUrl: "../images/o-poder-e-o-impossível.jpg",
    body: "Eric (Josh Hartnett) é um jovem rebelde à procura de respostas. Durante um fim de semana ele resolve se hospedar em uma estação de esqui. Tudo que quer é a tranquilidade da natureza e praticar seu esporte favorito. Depois de algum tempo explorando a área ele é pego inesperadamente por uma gigantesca tempestade de neve. Perdido, e sem conseguir contato com ninguém, somente algo extraordinário poderá salva-lo. Baseado em uma história real e no livro de grande sucesso.",
  },
];
