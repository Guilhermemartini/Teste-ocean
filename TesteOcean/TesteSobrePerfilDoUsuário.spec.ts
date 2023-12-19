import { test, expect } from "@playwright/test";
const Email1 = "GUILHERMERO";
const Senha2 = "GMR189";
const NomeUsuario = "guilherme martini ramirez oliveira";
const PrimeiraOpcaoDeCliente = '//*[@id="j_idt319"]/span/div[3]/div/ul/li[1]';
const imagemPerfil = '//*[@id="j_idt126"]';
test("Teste ocean", async ({ page }) => {
  //aqui irá dar inicio a abertura do ocean
  await page.goto("https://ocean.smartbr.com/login.xhtml");
  await page.getByPlaceholder("login").click();
  await page.getByPlaceholder("login").fill("GUILHERMERO");
  await page.getByPlaceholder("SENHA").click();
  await page.getByPlaceholder("SENHA").fill("GMR189");
  await page.locator("#j_idt99").click();
  await page.getByRole("link", { name: "mergulhar" }).click();
  await page.getByRole("link", { name: "continuar" }).click();
  await page.waitForTimeout(1000);
  //aqui vamos buscar pelo usuario
  await page.getByTitle("Localizar").locator("i").click();
  await page.waitForTimeout(500);
  await page.getByPlaceholder("Procurar por clientes,").fill(NomeUsuario);
  await page.waitForTimeout(500);
  await page.keyboard.up("Enter");
  await page.click(PrimeiraOpcaoDeCliente);
  await page.waitForTimeout(500);
  //abrindo os Dados Cadastrais
  await page.getByText("DDados cadastrais").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(1000);
  //abrindo as Permissões e acessos
  await page.getByTitle("Permissões e acessos |").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(1000);
  //abrindo as Grupo do usários
  await page.getByText("GGrupos do usuário").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(1000);
  //abrindo as Exceções a regra
  await page.getByText("EExceções à regra").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(1000);
  //Abrndo o Agendamento de mídia
  await page.getByText("AAgendamento de Mí...").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(1000);
  //abrindo a gestão de carteira
  await page.getByText("CGestão de carteira").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(1000);
  //abrindo a Autenticação 2F
  await page.getByText("AAutenticação 2F").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(1000);
  //abrindo o Avatar
  await page.getByTitle("Avatar | Avatar | /processos/").click();
  await page.keyboard.down("End");
  await page.waitForTimeout(1000);
  //sair do ocean
  await page.click(imagemPerfil);
  await page.getByRole("button", { name: "SAIR" }).click();
  await page.waitForTimeout(1000);
  // await page..click()
  // await page..click()
});
