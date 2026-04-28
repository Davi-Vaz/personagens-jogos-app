export interface Personagem {
  id: string;
  nome: string;
  jogo: string;
  descricaoCurta: string;
  descricaoLonga: string;
  classe: string;
  pais: string;
  imagem: string;
}

export interface FormData {
  nomePersonagem: string;
  email: string;
  comentario: string;
  linkJogo: string;
  generoJogo: string;
  plataforma: string;
  poder: number;
  anosJogo: number;
  personagemAtivo: boolean;
  recomendado: boolean;
}

export type GeneroJogo = 'RPG' | 'FPS' | 'Estratégia' | 'Ação' | 'Aventura' | 'Esportes' | 'Outro';
export type Plataforma = 'PC' | 'PS5' | 'Xbox' | 'Nintendo' | 'Mobile' | 'Outro';
