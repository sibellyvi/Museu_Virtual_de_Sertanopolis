// Pasta dentro de /public onde ficam as fotos (public/banco-de-fotos/)
export const pastaFotos = "banco-de-fotos";

export interface Foto {
  arquivo: string; // nome exato do arquivo .jpg
  legenda: string; // texto que aparece no card
  codigo: string; // código do arquivo de origem
}

// Para adicionar uma foto nova, copie o arquivo para a pasta e inclua mais uma linha aqui
export const fotos: Foto[] = [
  { arquivo: "AR 09 A7.6-B INAUGURAÇÃO DA AGÊNCIA DE RENDAS DE SERTANÓPOLIS.jpg", legenda: "Inauguração da Agência de Rendas de Sertanópolis", codigo: "AR 09 · A7.6-B" },
  { arquivo: "AR 10 A9.1-B GRUPO ESCOLAR DE PRIMEIRO DE MAIO.jpg", legenda: "Grupo Escolar de Primeiro de Maio", codigo: "AR 10 · A9.1-B" },
  { arquivo: "AR 13 A7.4-B SERRARIA DE LOURENÇO ANTÔNIO DA VEIGA.jpg", legenda: "Serraria de Lourenço Antônio da Veiga", codigo: "AR 13 · A7.4-B" },
  { arquivo: "AR 17 A9.1-B ESCOLA RURAL MUNICIPAL MANOEL RIBAS.jpg", legenda: "Escola Rural Municipal Manoel Ribas", codigo: "AR 17 · A9.1-B" },
  { arquivo: "AR 23 A9.1-B ESCOLA MUNICIPAL PRINCESA ISABEL.jpg", legenda: "Escola Municipal Princesa Isabel", codigo: "AR 23 · A9.1-B" },
  { arquivo: "AR 59 A7.1 FARMÁCIA DO SR. CARLOS ARRUDA DE FREITAS.jpg", legenda: "Farmácia do Sr. Carlos Arruda de Freitas", codigo: "AR 59 · A7.1" },
  { arquivo: "AR 62 A1.7-B PORTAL DE SERTANÓPOLIS.jpg", legenda: "Portal de Sertanópolis", codigo: "AR 62 · A1.7-B" },
  { arquivo: "AR 143 A8.1-B CASA PAROQUIAL.jpg", legenda: "Casa Paroquial", codigo: "AR 143 · A8.1-B" },
  { arquivo: "AR 146 A7.2-B FLORADA DO CAFÉ 1941.jpg", legenda: "Florada do café, 1941", codigo: "AR 146 · A7.2-B" },
  { arquivo: "AR 209 A5.2-B AEROPORTO DE SERTANÓPOLIS OLINDO TOTTI 1953.jpg", legenda: "Aeroporto de Sertanópolis Olindo Totti, 1953", codigo: "AR 209 · A5.2-B" },
  { arquivo: "AR 212 A3.3-A OLINDO TOTTI ENTRE AMIGOS.jpg", legenda: "Olindo Totti entre amigos", codigo: "AR 212 · A3.3-A" },
  { arquivo: "AR 214 A8.1-A VISTA PARCIAL DO LARGO DA MATRIZ.jpg", legenda: "Vista parcial do Largo da Matriz", codigo: "AR 214 · A8.1-A" },
  { arquivo: "AR 242 A8.1-A PRIMEIRA IGREJA DE SERTANÓPOLIS.jpg", legenda: "Primeira igreja de Sertanópolis", codigo: "AR 242 · A8.1-A" },
  { arquivo: "AR 316 A8.1-B BOLO COM O FORMATO DA IGREJA MATRIZ.jpg", legenda: "Bolo com o formato da Igreja Matriz", codigo: "AR 316 · A8.1-B" },
  { arquivo: "AR 319 A7.2-B SÍTIO DE ANTONIO PESCADOR 1948.jpg", legenda: "Sítio de Antonio Pescador, 1948", codigo: "AR 319 · A7.2-B" },
  { arquivo: "AR 326 A10.6-B AVIÃO NA FESTA DAS NAÇÕES CHUVA DE ROSAS.jpg", legenda: "Avião na Festa das Nações, chuva de rosas", codigo: "AR 326 · A10.6-B" },
  { arquivo: "AR 344 A1.7 VISTA DA CIDADE DE SERTANÓPOLIS 1935.jpg", legenda: "Vista da cidade de Sertanópolis, 1935", codigo: "AR 344 · A1.7" },
  { arquivo: "AR 401 A4.1-B PACO MUNICIPAL SANTO SORIANI 1970.jpg", legenda: "Paço Municipal Santo Soriani, 1970", codigo: "AR 401 · A4.1-B" },
  { arquivo: "AR 472 A3.3-B CASA DA FAMÍLIA ALMEIDA ÁGUA DO CERNE.jpg", legenda: "Casa da família Almeida, Água do Cerne", codigo: "AR 472 · A3.3-B" },
  { arquivo: "AR 520 A7.1-B ESTABELECIMENTOS COMERCIAIS DE SERTANÓPOLIS.jpg", legenda: "Estabelecimentos comerciais de Sertanópolis", codigo: "AR 520 · A7.1-B" },
  { arquivo: "AR 553 A3.5-B RIO TIBAGI 1940.jpg", legenda: "Rio Tibagi, 1940", codigo: "AR 553 · A3.5-B" },
  { arquivo: "AR 554 A3.5-B RIO TIBAGI.jpg", legenda: "Rio Tibagi", codigo: "AR 554 · A3.5-B" },
  { arquivo: "AR 581 A7.2 COLHEITA DE TRIGO 1942.jpg", legenda: "Colheita de trigo, 1942", codigo: "AR 581 · A7.2" },
  { arquivo: "AR 582 A5.1 CONSTRUÇÃO DA PONTE SOBRE O RIO TIBAGI.jpg", legenda: "Construção da ponte sobre o Rio Tibagi", codigo: "AR 582 · A5.1" },
  { arquivo: "AR 586 A2.3-B PEDREIRA.jpg", legenda: "Pedreira", codigo: "AR 586 · A2.3-B" },
  { arquivo: "AR 595 A2.3-B MÁQUINA NA SERRINHA.jpg", legenda: "Máquina na Serrinha", codigo: "AR 595 · A2.3-B" },
  { arquivo: "AR 597 A4.1-B REDE ELÉTRICA.jpg", legenda: "Rede elétrica", codigo: "AR 597 · A4.1-B" },
  { arquivo: "AR 605 A4.7-B TUBOS PARA REDE DE ESGOTO.jpg", legenda: "Tubos para rede de esgoto", codigo: "AR 605 · A4.7-B" },
  { arquivo: "AR 608 A8.1 IGREJA MATRIZ.jpg", legenda: "Igreja Matriz", codigo: "AR 608 · A8.1" },
  { arquivo: "AR 614 A1.7 VISTA PARCIAL DE SERTANÓPOLIS 1930.jpg", legenda: "Vista parcial de Sertanópolis, 1930", codigo: "AR 614 · A1.7" },
  { arquivo: "AR 904 A4.1-B VISTA AÉREA DA RUA DOMINGOS GONÇALVES DE PAULA FILHO 1965.jpg", legenda: "Vista aérea da Rua Domingos Gonçalves de Paula Filho, 1965", codigo: "AR 904 · A4.1-B" },
  { arquivo: "AR 909 A5.1 EMPRESA DE TRANSPORTES COLETIVOS BORDIN.jpg", legenda: "Empresa de Transportes Coletivos Bordin", codigo: "AR 909 · A5.1" },
];