import { test, expect } from "@playwright/test";
const botaoFechar = '//*[@id="j_idt307:5:j_idt314"]';

test("Teste de fluxo", async ({ page }) => {
  await page.goto("https://ocean.smartbr.com/login.xhtml");
  await page.getByPlaceholder("login").click();
  await page.getByPlaceholder("login").fill("GUILHERMERO");
  await page.getByPlaceholder("SENHA").click();
  await page.getByPlaceholder("SENHA").fill("GMR189");
  await page.locator("#j_idt99").click();
  await page.getByRole("link", { name: "mergulhar" }).click();
  await page.getByRole("link", { name: "continuar" }).click();
  await page.waitForTimeout(1000);
  //teste de fluxos/menu
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: '' }).first().click();
  await page.waitForTimeout(2000);
  //abir o Parâmetro do sistema
  await page.getByLabel("Acessar Parâmetros do Sistema").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  //     //abrir  parametros de Titulos a Receber
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Titulos a Receber").click();
  await page.keyboard.down("End"); //preciso ver com o vier se ele sabe como fazer o scroll para a direita
  await page.waitForTimeout(2000);
  //abrir  parametros de Apuração Simples Nacional
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Apuração Simples").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  //abrir  parametros de Cadastro de CFOP
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Cadastro de CFOP").click();
  await page.waitForTimeout(2000);
  //abrir o Acessar Cadastro de Séries
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Cadastro de Séries").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  //abrir o Acessar Acessar Controle de Antecipa
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Controle de Antecipa").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  //abrir o Acessar Acessar Cadastro de Histó
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Cadastro de Histó").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  //abrir o Gestão de Correios
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page
    .locator("#j_idt21 div")
    .filter({ hasText: "C Gestão de Correios" })
    .first()
    .click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  //abrir o Acessar Gestão de Módulos
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Gestão de Módulos").click();
  await page.keyboard.down("End");
  // Abrir o Acessar Revisões
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Revisões").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir o Produtos com inconsistências Fiscais
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Produtos com").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir importações de dados
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Importação de dados").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Cadastro de Grade
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Cadastro de Grade").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Contratos e Financeiras
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Contratos e").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Cadastro de contas
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Cadastro de Contas", { exact: true }).click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Cadastro de mídias
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Cadastro de Mídias").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir despesas Formação preço
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Despesas Formaçao").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Configurador Chat
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Configurador Chat").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Configurador Chat
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Configurador Chat").click();
  // Abrir cadastro grupo apoio
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Cadastro Grupo Apoio").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Comunicação
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Comunicação").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Usabilidade do Produto
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Usabilidade do Produto").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Cadastro de Celulares
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Cadastro de Celulares").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Novo Fornecedor
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Novo Fornecedor").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Gestão de Feriados
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Gestão de Feriados").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Gestão de Feriados
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Gestão de Feriados").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Reimpressão de etiquetas de volume
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Reimpressão de").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Vinculo forma de Pagamento BIOnexo
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Vinculo forma de").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Taxa de Juros/Multa Cobrança
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Taxa de Juros/Multa").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Controle de carga
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Controle de Carga").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Conciliação RH
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Conciliação RH").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Cadastro de Carteiras
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Cadastro de Carteiras").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Renegociar Titulo
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Renegociar Titulo").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Solicitação de tarefa
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Solicitação de Tarefa").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Cconciliação Financeira
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Conciliação Financeira").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Recalculo Fiscal
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Recalculo Fiscal").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Gestão Empenho Manual
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Gestão Empenho Manual").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Aviso de Chegada NFe
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Aviso de Chegada NFe").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Bancos ISPB
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Bancos ISPB").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Nota Fiscal de Entrada manual
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Nota Fiscal de").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Configuração Consultador de Preços
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Configuração Consultador de Preços").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Configuração Abastecimento Loja
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Configuração Abastecimento Loja").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Endereços Armazenagem v2
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Endereços Armazenagem").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Abastecimento Loja V2
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Abastecimento Loja V2").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Responsável Transação
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Responsável Transação").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir CFOPs Sped
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar CFOPs Sped").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Clicksign
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Clicksign").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Configurações de pagamento padrão
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Configurações de").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Cartões Corporativos
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Cartões Corporativos").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Cartões Corporativos
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Estorno Pré-separação").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Estorno Pré-separação
  await page.getByLabel("Acessar Estorno Pré-separação").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Controle Pix
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Controle Pix").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Faturamento Entrega do vale gás
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Faturamento Entrega").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Baixa Manual - Via Nota fiscal
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Baixa Manual - Via").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Troca de Responsáveis Contabil
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Troca de Responsáveis").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Gestão Mídias Social
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Gestão Mídias Social").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Cadastro de Fluxo Fiscal
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Cadastro de Fluxo").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Cadastro de Grupo Tribitário
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Cadastro de Grupo").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Cadastro de Impostos - ICMS-ST.
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Cadastro de Impostos - ICMS-ST").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Cadastro de Impostos - IPI
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Cadastro de Impostos - IPI").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Lista de Ramais
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Lista de Ramais").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Comissão para Recisão de consulto
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Comissão para Recisão").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Relatório Demonstrativo de Resultado DRE
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page
    .getByLabel("Acessar Relatório Demonstrativo de Resultado DRE")
    .click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Pilotar
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Pilotar").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Marketing Campanhas - Dashboard
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Marketing Campanhas").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Importação Cobrança financeira
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Importação Cobrança").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Tags de interação de cobrança
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Tags de interação de").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Custo ReposiçãoCalculado
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Custo Reposição").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Retenção Conta garantida
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Retenção Conta").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Sócio Empresa
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Sócio Empresa").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Configuração DDA
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Configuração DDA").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Cadastro de Financeiras
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Cadastro de Financeiras").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Novo Usuário
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Novo Usuário").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Cadastro de Exceção
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Cadastro de Exceção").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Cadastro de Centros
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Cadastro de Centros").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir CEE Configuração de envio de
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page
    .locator("#j_idt21 div")
    .filter({ hasText: "CEE Configuração de envio de" })
    .first()
    .click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Gestão de Utilizadores
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Gestão de Utilizadores").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Parcelas a Pagar
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Parcelas a Pagar").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Dispositivo Legal
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Dispositivo Legal").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Comissão, Taxa de
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Comissão, Taxa de").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Cancelamento de Saida
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Cancelamento de Saida").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Cadastro de Formas de
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Cadastro de Formas de").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Cadastro de Portador
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Cadastro de Portador").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Cadastro de Contas Contábeis
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Cadastro de Contas Contábeis").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Cadastro de Armazém
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Cadastro de Armazém").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Boleto Parametro
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Boleto Parametro").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Livro Fiscal de
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Livro Fiscal de").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Lançamento Contábil
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Lançamento Contábil (").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Cadastro de Usuário
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Cadastro de Usuário").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Parcelas a Receber
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Parcelas a Receber").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Parâmetros de Filiais
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Parâmetros de Filiais").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Conciliação Fiscal
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Conciliação Fiscal").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Comparação Margem
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Comparação Margem").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Renegociar títulos a
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Renegociar títulos a").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Cadastro Faturas
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Cadastro Faturas -").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Margem Segmento
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Margem Segmento").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Grupo de Produtos
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Grupo de Produtos").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Gestor de Perfis
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Gestor de Perfis").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Tabela Simples
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Tabela Simples").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Integração Senior
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Integração Senior").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  // Abrir Relatório Livro Razão
  await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
  await page.getByLabel("Acessar Relatório Livro Razão").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(2000);
  //fechar as abas
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
  await page.getByRole("link", { name: "" }).nth(2).click();
    //voltara para a tela inicial
    await page.getByTitle('Dashboard Inicial').locator('i').click()
    //teste de fluxos/sistema/"Acessar Crud\'s"
    await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
    await page.getByRole("link", { name: "" }).nth(2).click();
    await page.getByRole("link", { name: "" }).nth(2).click();
    await page.getByLabel('Acessar Crud\'s').click()
    await page.keyboard.down("End");
    await page.waitForTimeout(2000);
    //teste de cadastro/ cabeçalhos
    await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
    await page.locator('#j_idt21 div').filter({ hasText: 'Cadastros' }).first().click()
    await page.getByLabel('Acessar Cabeçalhos').click()
    await page.keyboard.down("End");
    await page.waitForTimeout(2000);
      //teste de cadastro/ Consultas
    await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
    await page.getByLabel('Acessar Consultas').click()
    await page.keyboard.down("End");
    await page.waitForTimeout(2000);
    //teste de cadastro/ Cadastro de Aplicações
      await page.getByTitle("Fluxos & Aplicativos").locator("i").click();
    await page.getByLabel('Acessar Cadastro de Aplicações').click()
    await page.keyboard.down("End");//preciso ver com o vier se ele sabe como fazer o scroll para a direita
    await page.waitForTimeout(2000);
    //voltara para a tela inicial
    await page.getByTitle('Dashboard Inicial').locator('i').click()
  //testar Dashboard
  await page.getByRole('link', { name: '' }).nth(2).click()
  await page..click()
  await page..click()
  await page..click()
  await page..click()
  await page..click()
  await page..click()
  await page..click()
  await page..click()
  await page..click()
  await page..click()
  await page..click()
  await page..click()
  await page..click()
  await page..click()
  await page..click()
  await page..click()
  await page..click()
});
//98