// Pasta dentro de /public onde ficam as fotos (public/banco-de-fotos/)
export const pastaFotos = "banco-de-fotos";

export interface Foto {
  arquivo: string; // nome exato do arquivo .jpg
  legenda: string; // texto que aparece no card
  codigo: string; // código do arquivo de origem
  categoria: string; // id de uma das categorias abaixo
  destaque?: boolean; // true = aparece grande dentro da categoria
}

// Categorias, na ordem em que aparecem na página
export const categorias = [
  { id: "pioneiros", nome: "Pioneiros e famílias", descricao: "As pessoas, as famílias e os lugares de quem construiu a cidade." },
  { id: "educacao", nome: "Educação", descricao: "Escolas e grupos escolares que marcaram a história do ensino." },
  { id: "igreja", nome: "Igreja e fé", descricao: "Igrejas, a casa paroquial e a vida religiosa da comunidade." },
  { id: "cidade", nome: "Vistas da cidade", descricao: "Como Sertanópolis foi crescendo, vista de perto e do alto." },
  { id: "comercio", nome: "Comércio e serviços", descricao: "Lojas, farmácia e empresas que movimentaram a cidade." },
  { id: "trabalho", nome: "Campo e trabalho", descricao: "O café, o trigo, as serrarias e o trabalho no campo." },
  { id: "obras", nome: "Rio, obras e transporte", descricao: "O Rio Tibagi, pontes, redes de energia e esgoto e o transporte." },
  { id: "eventos", nome: "Festas e eventos", descricao: "Inaugurações e celebrações da cidade." },
];

// Foto grande no topo da galeria (fica fora das categorias)
export const fotoPrincipal = {
  arquivo: "ar-212-olindo-totti-entre-amigos.jpg",
  rotulo: "Em destaque · Pioneiros",
  titulo: "Olindo Totti entre amigos",
  texto: "Uma grande figura entre os pioneiros da cidade.",
  codigo: "AR 212 · A3.3-A",
};

// Para adicionar uma foto nova, copie o arquivo para a pasta e inclua mais uma linha aqui.
// Use destaque: true nas poucas fotos que merecem aparecer grandes.
export const fotos: Foto[] = [
  { arquivo: "ar-472-casa-da-familia-almeida-agua-do-cerne.jpg", legenda: "Casa da família Almeida, Água do Cerne", codigo: "AR 472 · A3.3-B", categoria: "pioneiros" },
  { arquivo: "ar-319-sitio-de-antonio-pescador-1948.jpg", legenda: "Sítio de Antonio Pescador, 1948", codigo: "AR 319 · A7.2-B", categoria: "pioneiros" },
  { arquivo: "ar-10-grupo-escolar-de-primeiro-de-maio.jpg", legenda: "Grupo Escolar de Primeiro de Maio", codigo: "AR 10 · A9.1-B", categoria: "educacao" },
  { arquivo: "ar-17-escola-rural-municipal-manoel-ribas.jpg", legenda: "Escola Rural Municipal Manoel Ribas", codigo: "AR 17 · A9.1-B", categoria: "educacao" },
  { arquivo: "ar-23-escola-municipal-princesa-isabel.jpg", legenda: "Escola Municipal Princesa Isabel", codigo: "AR 23 · A9.1-B", categoria: "educacao" },
  { arquivo: "ar-242-primeira-igreja-de-sertanopolis.jpg", legenda: "Primeira igreja de Sertanópolis", codigo: "AR 242 · A8.1-A", categoria: "igreja", destaque: true },
  { arquivo: "ar-608-igreja-matriz.jpg", legenda: "Igreja Matriz", codigo: "AR 608 · A8.1", categoria: "igreja" },
  { arquivo: "ar-143-casa-paroquial.jpg", legenda: "Casa Paroquial", codigo: "AR 143 · A8.1-B", categoria: "igreja" },
  { arquivo: "ar-316-bolo-com-o-formato-da-igreja-matriz.jpg", legenda: "Bolo com o formato da Igreja Matriz", codigo: "AR 316 · A8.1-B", categoria: "igreja" },
  { arquivo: "ar-214-vista-parcial-do-largo-da-matriz.jpg", legenda: "Vista parcial do Largo da Matriz", codigo: "AR 214 · A8.1-A", categoria: "igreja" },
  { arquivo: "ar-614-vista-parcial-de-sertanopolis-1930.jpg", legenda: "Vista parcial de Sertanópolis, 1930", codigo: "AR 614 · A1.7", categoria: "cidade", destaque: true },
  { arquivo: "ar-344-vista-da-cidade-de-sertanopolis-1935.jpg", legenda: "Vista da cidade de Sertanópolis, 1935", codigo: "AR 344 · A1.7", categoria: "cidade" },
  { arquivo: "ar-904-vista-aerea-da-rua-domingos-goncalves-de-paula-filho-1965.jpg", legenda: "Vista aérea da Rua Domingos Gonçalves de Paula Filho, 1965", codigo: "AR 904 · A4.1-B", categoria: "cidade" },
  { arquivo: "ar-62-portal-de-sertanopolis.jpg", legenda: "Portal de Sertanópolis", codigo: "AR 62 · A1.7-B", categoria: "cidade" },
  { arquivo: "ar-401-paco-municipal-santo-soriani-1970.jpg", legenda: "Paço Municipal Santo Soriani, 1970", codigo: "AR 401 · A4.1-B", categoria: "cidade" },
  { arquivo: "ar-520-estabelecimentos-comerciais-de-sertanopolis.jpg", legenda: "Estabelecimentos comerciais de Sertanópolis", codigo: "AR 520 · A7.1-B", categoria: "comercio" },
  { arquivo: "ar-59-farmacia-do-sr-carlos-arruda-de-freitas.jpg", legenda: "Farmácia do Sr. Carlos Arruda de Freitas", codigo: "AR 59 · A7.1", categoria: "comercio" },
  { arquivo: "ar-909-empresa-de-transportes-coletivos-bordin.jpg", legenda: "Empresa de Transportes Coletivos Bordin", codigo: "AR 909 · A5.1", categoria: "comercio" },
  { arquivo: "ar-146-florada-do-cafe-1941.jpg", legenda: "Florada do café, 1941", codigo: "AR 146 · A7.2-B", categoria: "trabalho", destaque: true },
  { arquivo: "ar-581-colheita-de-trigo-1942.jpg", legenda: "Colheita de trigo, 1942", codigo: "AR 581 · A7.2", categoria: "trabalho" },
  { arquivo: "ar-13-serraria-de-lourenco-antonio-da-veiga.jpg", legenda: "Serraria de Lourenço Antônio da Veiga", codigo: "AR 13 · A7.4-B", categoria: "trabalho" },
  { arquivo: "ar-595-maquina-na-serrinha.jpg", legenda: "Máquina na Serrinha", codigo: "AR 595 · A2.3-B", categoria: "trabalho" },
  { arquivo: "ar-586-pedreira.jpg", legenda: "Pedreira", codigo: "AR 586 · A2.3-B", categoria: "trabalho" },
  { arquivo: "ar-582-construcao-da-ponte-sobre-o-rio-tibagi.jpg", legenda: "Construção da ponte sobre o Rio Tibagi", codigo: "AR 582 · A5.1", categoria: "obras", destaque: true },
  { arquivo: "ar-553-rio-tibagi-1940.jpg", legenda: "Rio Tibagi, 1940", codigo: "AR 553 · A3.5-B", categoria: "obras" },
  { arquivo: "ar-554-rio-tibagi.jpg", legenda: "Rio Tibagi", codigo: "AR 554 · A3.5-B", categoria: "obras" },
  { arquivo: "ar-597-rede-eletrica.jpg", legenda: "Rede elétrica", codigo: "AR 597 · A4.1-B", categoria: "obras" },
  { arquivo: "ar-605-tubos-para-rede-de-esgoto.jpg", legenda: "Tubos para rede de esgoto", codigo: "AR 605 · A4.7-B", categoria: "obras" },
  { arquivo: "ar-209-aeroporto-de-sertanopolis-olindo-totti-1953.jpg", legenda: "Aeroporto de Sertanópolis Olindo Totti, 1953", codigo: "AR 209 · A5.2-B", categoria: "obras" },
  { arquivo: "ar-09-inauguracao-da-agencia-de-rendas-de-sertanopolis.jpg", legenda: "Inauguração da Agência de Rendas de Sertanópolis", codigo: "AR 09 · A7.6-B", categoria: "eventos" },
  { arquivo: "ar-326-aviao-na-festa-das-nacoes-chuva-de-rosas.jpg", legenda: "Avião na Festa das Nações, chuva de rosas", codigo: "AR 326 · A10.6-B", categoria: "eventos" },
];