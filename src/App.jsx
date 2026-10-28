import React, { useState } from 'react';
import {
  Clock,
  DollarSign,
  Server,
  Percent,
  Calculator,
  TrendingUp,
  Receipt,
  Sparkles,
  HelpCircle,
  RotateCcw
} from 'lucide-react';

export default function App() {
  const [horas, setHoras] = useState(40);
  const [valorHora, setValorHora] = useState(85);
  const [custosFixos, setCustosFixos] = useState(450);
  const [margemLucro, setMargemLucro] = useState(25);

  // Tratamento seguro para valores vazios ou inválidos (evita NaN)
  const numHoras = Number.isNaN(parseFloat(horas)) ? 0 : Math.max(0, parseFloat(horas));
  const numValorHora = Number.isNaN(parseFloat(valorHora)) ? 0 : Math.max(0, parseFloat(valorHora));
  const numCustosFixos = Number.isNaN(parseFloat(custosFixos)) ? 0 : Math.max(0, parseFloat(custosFixos));
  const numMargemLucro = Number.isNaN(parseFloat(margemLucro)) ? 0 : Math.max(0, parseFloat(margemLucro));

  // Cálculos de precificação
  const custoMaoDeObra = numHoras * numValorHora;
  const custoTotalOperacional = custoMaoDeObra + numCustosFixos;
  const lucroProjetado = custoTotalOperacional * (numMargemLucro / 100);
  const precoFinalVenda = custoTotalOperacional + lucroProjetado;

  // Formatador monetário pt-BR
  const formatMoeda = (valor) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Number.isFinite(valor) ? valor : 0);
  };

  const handleReset = () => {
    setHoras(0);
    setValorHora(0);
    setCustosFixos(0);
    setMargemLucro(0);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                Calculadora de Precificação
              </h1>
              <p className="text-xs text-slate-500 font-medium">Serviços de TI & Consultoria</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
              title="Zerar campos"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Limpar Campos</span>
            </button>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Tempo Real
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Dashboard */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Intro Banner */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Painel Financeiro do Projeto
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-1">
            Defina os parâmetros técnicos e operacionais para gerar uma proposta comercial equilibrada e competitiva.
          </p>
        </div>

        {/* 2-Column Grid (Desktop) / Stacked (Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Coluna da Esquerda: Formulário de Entrada */}
          <section className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-7">
            <div className="flex items-center justify-between pb-5 mb-6 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span>Parâmetros de Custo</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">Preencha as variáveis de esforço e despesas</p>
              </div>
              <span className="text-xs font-medium text-slate-400">Passo 1 de 2</span>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              {/* Campo 1: Horas trabalhadas estimadas */}
              <div>
                <label
                  htmlFor="horas"
                  className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center justify-between"
                >
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-blue-600" />
                    Horas trabalhadas estimadas
                  </span>
                  <span className="text-xs font-normal text-slate-400">Total de horas</span>
                </label>
                <div className="relative rounded-xl shadow-xs">
                  <input
                    id="horas"
                    type="number"
                    min="0"
                    step="0.5"
                    value={horas}
                    onChange={(e) => setHoras(e.target.value)}
                    placeholder="0"
                    className="block w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-4 pr-12 text-slate-900 text-sm font-medium focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all"
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                    <span className="text-xs font-semibold text-slate-400">hrs</span>
                  </div>
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  Estimativa de dedicação da equipe ou especialista no escopo acordado.
                </p>
              </div>

              {/* Campo 2: Valor da hora do profissional */}
              <div>
                <label
                  htmlFor="valorHora"
                  className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center justify-between"
                >
                  <span className="flex items-center gap-1.5">
                    <DollarSign className="w-4 h-4 text-blue-600" />
                    Valor da hora do profissional (R$)
                  </span>
                  <span className="text-xs font-normal text-slate-400">Taxa horária</span>
                </label>
                <div className="relative rounded-xl shadow-xs">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <span className="text-xs font-bold text-slate-400">R$</span>
                  </div>
                  <input
                    id="valorHora"
                    type="number"
                    min="0"
                    step="1"
                    value={valorHora}
                    onChange={(e) => setValorHora(e.target.value)}
                    placeholder="0,00"
                    className="block w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-11 pr-4 text-slate-900 text-sm font-medium focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all"
                  />
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  Remuneração técnica por hora (CLT rateado ou valor PJ de consultoria).
                </p>
              </div>

              {/* Campo 3: Custos fixos do projeto */}
              <div>
                <label
                  htmlFor="custosFixos"
                  className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center justify-between"
                >
                  <span className="flex items-center gap-1.5">
                    <Server className="w-4 h-4 text-blue-600" />
                    Custos fixos do projeto (R$)
                  </span>
                  <span className="text-xs font-normal text-slate-400">Infra & Softwares</span>
                </label>
                <div className="relative rounded-xl shadow-xs">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <span className="text-xs font-bold text-slate-400">R$</span>
                  </div>
                  <input
                    id="custosFixos"
                    type="number"
                    min="0"
                    step="10"
                    value={custosFixos}
                    onChange={(e) => setCustosFixos(e.target.value)}
                    placeholder="0,00"
                    className="block w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-11 pr-4 text-slate-900 text-sm font-medium focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all"
                  />
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  Servidores cloud (AWS, Vercel), licenças de software, APIs e ferramentas pagas.
                </p>
              </div>

              {/* Campo 4: Margem de lucro desejada */}
              <div>
                <label
                  htmlFor="margemLucro"
                  className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center justify-between"
                >
                  <span className="flex items-center gap-1.5">
                    <Percent className="w-4 h-4 text-blue-600" />
                    Margem de lucro desejada (%)
                  </span>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                    {numMargemLucro}%
                  </span>
                </label>
                <div className="relative rounded-xl shadow-xs">
                  <input
                    id="margemLucro"
                    type="number"
                    min="0"
                    max="500"
                    step="1"
                    value={margemLucro}
                    onChange={(e) => setMargemLucro(e.target.value)}
                    placeholder="0"
                    className="block w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-4 pr-10 text-slate-900 text-sm font-medium focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all"
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                    <span className="text-xs font-semibold text-slate-400">%</span>
                  </div>
                </div>

                {/* Atalhos rápidos de margem */}
                <div className="mt-2.5 flex items-center gap-2">
                  <span className="text-xs text-slate-400">Atalhos:</span>
                  {[15, 20, 25, 35, 50].map((perc) => (
                    <button
                      key={perc}
                      type="button"
                      onClick={() => setMargemLucro(perc)}
                      className={`text-xs px-2 py-1 rounded-md transition-all font-medium ${
                        numMargemLucro === perc
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {perc}%
                    </button>
                  ))}
                </div>
              </div>
            </form>
          </section>

          {/* Coluna da Direita: Relatório Visual em Tempo Real */}
          <section className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span>Relatório Visual</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">Métricas comerciais calculadas instantaneamente</p>
              </div>
              <span className="text-xs font-medium text-slate-400">Passo 2 de 2</span>
            </div>

            {/* Grid dos Cards Menores (Card 1 e Card 2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Card 1: Custo Total Operacional */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs relative overflow-hidden transition-all hover:shadow-md">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/60 rounded-full blur-2xl -mr-6 -mt-6 pointer-events-none"></div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Card 1</span>
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600">
                    <Receipt className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="text-sm font-semibold text-slate-700">Custo Total Operacional</h4>
                <div className="text-2xl font-black text-slate-900 mt-2 tracking-tight">
                  {formatMoeda(custoTotalOperacional)}
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                  <div className="flex justify-between">
                    <span>Mão de obra ({numHoras}h × {formatMoeda(numValorHora)}):</span>
                    <span className="font-semibold text-slate-700">{formatMoeda(custoMaoDeObra)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Custos fixos / licenças:</span>
                    <span className="font-semibold text-slate-700">{formatMoeda(numCustosFixos)}</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Lucro Projetado */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs relative overflow-hidden transition-all hover:shadow-md">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50/60 rounded-full blur-2xl -mr-6 -mt-6 pointer-events-none"></div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Card 2</span>
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="text-sm font-semibold text-slate-700">Lucro Projetado</h4>
                <div className="text-2xl font-black text-blue-600 mt-2 tracking-tight">
                  {formatMoeda(lucroProjetado)}
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                  <div className="flex justify-between">
                    <span>Margem aplicada:</span>
                    <span className="font-semibold text-blue-600">{numMargemLucro}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Retorno sobre o custo:</span>
                    <span className="font-semibold text-slate-700">
                      {custoTotalOperacional > 0
                        ? `${((lucroProjetado / custoTotalOperacional) * 100).toFixed(1)}%`
                        : '0%'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Preço Final de Venda (O maior e mais destacado) */}
            <div className="relative rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 text-white p-7 sm:p-9 shadow-xl shadow-blue-900/15 overflow-hidden">
              {/* Efeitos visuais de fundo */}
              <div className="absolute -right-16 -top-16 w-56 h-56 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute left-1/3 -bottom-10 w-44 h-44 bg-blue-400/20 rounded-full blur-2xl pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-white/15 text-blue-100 backdrop-blur-md border border-white/20">
                    <Sparkles className="w-3.5 h-3.5" />
                    Valor Comercial Sugerido
                  </span>
                  <span className="text-xs text-blue-200 font-medium">Card 3 • Destaque Comercial</span>
                </div>

                <h4 className="text-lg sm:text-xl font-medium text-blue-100">
                  Preço Final de Venda
                </h4>

                <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mt-3 mb-6 text-white drop-shadow-sm">
                  {formatMoeda(precoFinalVenda)}
                </div>

                {/* Resumo da Composição Financeira */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/15 space-y-3">
                  <div className="text-xs uppercase tracking-wider font-semibold text-blue-200">
                    Composição da Proposta
                  </div>

                  {/* Barra visual de proporção */}
                  <div className="w-full bg-blue-950/40 rounded-full h-3 flex overflow-hidden p-0.5">
                    <div
                      className="bg-sky-300 rounded-l-full transition-all duration-300"
                      style={{
                        width: `${
                          precoFinalVenda > 0
                            ? Math.min(100, (custoTotalOperacional / precoFinalVenda) * 100)
                            : 50
                        }%`,
                      }}
                      title="Custo Total Operacional"
                    ></div>
                    <div
                      className="bg-emerald-400 rounded-r-full transition-all duration-300"
                      style={{
                        width: `${
                          precoFinalVenda > 0
                            ? Math.min(100, (lucroProjetado / precoFinalVenda) * 100)
                            : 50
                        }%`,
                      }}
                      title="Lucro Projetado"
                    ></div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs pt-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-sm bg-sky-300"></span>
                      <div>
                        <span className="text-blue-200">Custos: </span>
                        <span className="font-bold text-white">
                          {precoFinalVenda > 0
                            ? `${((custoTotalOperacional / precoFinalVenda) * 100).toFixed(1)}%`
                            : '0%'}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-sm bg-emerald-400"></span>
                      <div>
                        <span className="text-blue-200">Margem Líquida: </span>
                        <span className="font-bold text-white">
                          {precoFinalVenda > 0
                            ? `${((lucroProjetado / precoFinalVenda) * 100).toFixed(1)}%`
                            : '0%'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dica consultiva rápida */}
            <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-4 text-xs text-blue-900 flex items-start gap-3">
              <HelpCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold">Regra de Precificação Aplicada</p>
                <p className="text-blue-800/80 mt-0.5">
                  Preço de Venda = Custos Operacionais ((Horas × Valor/h) + Custos Fixos) + Lucro Projetado.
                  Se houver tributação sobre a nota fiscal (Simples Nacional ou Lucro Presumido), lembre-se de incorporar a alíquota de impostos ao valor final.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-4 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500">
          Calculadora de Precificação para Serviços de TI • Layout Responsivo & Dashboard Clean
        </div>
      </footer>
    </div>
  );
}
