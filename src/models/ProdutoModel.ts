// MODEL: os dados de exemplo da atividade ficam separados das telas.
export type ProdutoEstoque = {
  id: number;
  nome: string;
  quantidade: number;
};

export const produtosExemplo: ProdutoEstoque[] = [
  { id: 1, nome: 'Caderno universitário', quantidade: 18 },
  { id: 2, nome: 'Caneta azul', quantidade: 3 },
  { id: 3, nome: 'Papel A4', quantidade: 24 },
  { id: 4, nome: 'Marcador de texto', quantidade: 4 },
];
