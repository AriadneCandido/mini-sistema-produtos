// CONTROLLER: regra demonstrativa de status do estoque.
import { ProdutoEstoque, produtosExemplo } from '../models/ProdutoModel';

export type ProdutoComStatus = ProdutoEstoque & {
  status: 'Em Estoque' | 'Estoque Baixo';
};

export function listarProdutosComStatus(): ProdutoComStatus[] {
  return produtosExemplo.map((produto) => ({
    ...produto,
    status: produto.quantidade <= 5 ? 'Estoque Baixo' : 'Em Estoque',
  }));
}
