import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/w2-logo.png";
import {
  Users,
  BookOpen,
  TrendingUp,
  Target,
  CheckCircle,
  Calendar,
  ArrowRight,
  Briefcase,
  BarChart3,
  MessageSquare,
  FileText,
  Zap,
} from "lucide-react";

const CHECKIN_URL = "https://lyra-community-hub.vercel.app/checkin-2";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const CtaBanner = () => (
  <div className="py-12 text-center">
    <div className="container mx-auto px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
      >
        <a href={CHECKIN_URL} target="_blank" rel="noopener noreferrer">
          <Button variant="gold" size="lg" className="px-10 text-base">
            Garantir minha vaga na aula <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </a>
      </motion.div>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <img src={logo} alt="W2 Club" className="h-10" />
          <div className="flex gap-3">
            <a href={CHECKIN_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="gold" size="sm">
                Aula Estratégica
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="relative flex min-h-screen items-center pt-16"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, hsl(42 76% 55% / 0.15) 0%, transparent 50%)",
          }}
        />
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div variants={fadeUp} custom={0} className="mb-6">
              <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
                Proposta Estratégica de Execução
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="mb-6 font-display text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
            >
              <span className="gold-text">Excelência médica</span>
              <br />
              <span className="text-foreground">não é suficiente.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl"
            >
              A comunidade que transforma médicos em empresários de alta
              performance.
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={3}
              className="gold-line mx-auto mb-10 w-24"
            />
            <motion.p
              variants={fadeUp}
              custom={4}
              className="mx-auto max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base"
            >
              O W2 Club nasce com a missão de ajudar médicos a evoluírem além da
              excelência clínica, desenvolvendo competências de gestão,
              crescimento de clínicas, posicionamento estratégico e construção
              de negócios médicos sustentáveis.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 1. Contexto e Visão */}
      <Section num="01" title="Contexto e Visão Estratégica">
        <p className="mb-6 text-muted-foreground">
          O mercado médico brasileiro enfrenta um paradoxo: profissionais
          altamente qualificados clinicamente, porém com lacunas críticas em
          gestão empresarial. Este cenário cria desafios estruturais que limitam
          o crescimento e a sustentabilidade das clínicas médicas.
        </p>
        <div className="mb-8 grid gap-4 md:grid-cols-2">
          {[
            "Médicos aprendem medicina, mas não aprendem gestão",
            "Clínicas crescem sem estrutura organizacional",
            "Médicos se tornam reféns da própria agenda",
            "Ausência de comunidade estratégica entre médicos",
          ].map((t, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="flex items-start gap-3 rounded-lg border border-border bg-secondary/50 p-4"
            >
              <Target className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm text-foreground">{t}</span>
            </motion.div>
          ))}
        </div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
          Três pilares fundamentais
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Users,
              title: "Comunidade",
              desc: "Networking qualificado entre médicos empreendedores",
            },
            {
              icon: BookOpen,
              title: "Conhecimento",
              desc: "Frameworks de gestão e crescimento aplicados à medicina",
            },
            {
              icon: TrendingUp,
              title: "Crescimento",
              desc: "Aceleração da jornada para clínicas estruturadas e lucrativas",
            },
          ].map((p, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="section-card text-center"
            >
              <p.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
              <h4 className="mb-2 font-display text-lg font-semibold text-foreground">
                {p.title}
              </h4>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 2. Modelo */}
      <Section num="02" title="O Modelo do W2 Club" dark>
        <p className="mb-8 text-muted-foreground">
          O W2 Club é um ecossistema completo de desenvolvimento para médicos
          que desejam construir clínicas estruturadas, lucrativas e escaláveis.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: MessageSquare,
              t: "Mentorias Estratégicas",
              d: "Encontros com especialistas em gestão médica",
            },
            {
              icon: Users,
              t: "Eventos Presenciais",
              d: "Networking exclusivo entre médicos empreendedores",
            },
            {
              icon: BarChart3,
              t: "Frameworks de Gestão",
              d: "Métodos validados para crescimento de clínicas",
            },
            {
              icon: Zap,
              t: "Troca de Experiências",
              d: "Comunidade ativa de médicos em expansão",
            },
            {
              icon: BookOpen,
              t: "Conteúdos Exclusivos",
              d: "Material estratégico sobre gestão na saúde",
            },
            {
              icon: Briefcase,
              t: "Networking Qualificado",
              d: "Conexões estratégicas no mercado médico",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="group rounded-lg border border-border p-5 transition-all hover:border-primary/40 hover:shadow-[var(--shadow-gold)]"
            >
              <item.icon className="mb-3 h-6 w-6 text-primary" />
              <h4 className="mb-1 font-display text-base font-semibold text-foreground">
                {item.t}
              </h4>
              <p className="text-sm text-muted-foreground">{item.d}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 3. Funil */}
      <Section
        num="03"
        title="Aquisição de Membros através da Aula Estratégica"
      >
        <p className="mb-8 text-muted-foreground">
          A entrada de novos membros acontece através de uma Aula Estratégica
          conduzida pelo Dr. Alexandre. Antes da aula, os médicos preenchem um
          diagnóstico sobre sua clínica ou momento profissional, permitindo que
          o conteúdo seja mais direcionado e relevante.
        </p>

        {/* Fluxo principal — 4 etapas */}
        <div className="flex flex-col items-center gap-2 mb-10">
          {[
            {
              step: "1",
              title: "Cadastro",
              desc: "Inscrição do médico na aula estratégica",
            },
            {
              step: "2",
              title: "Diagnóstico Estratégico",
              desc: "Formulário rápido sobre clínica, desafios e momento profissional",
            },
            {
              step: "3",
              title: "Aula Estratégica",
              desc: "Conteúdo conduzido pelo Dr. Alexandre apresentando visão, frameworks de crescimento e o ecossistema W2 Club",
            },
            {
              step: "4",
              title: "Decisão do Participante",
              desc: "Dois caminhos possíveis após a aula",
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="w-full max-w-lg"
            >
              <div className="flex items-center gap-4 rounded-lg border border-border bg-secondary/30 p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-display text-lg font-bold text-primary-foreground">
                  {s.step}
                </span>
                <div>
                  <h4 className="font-display text-base font-semibold text-foreground">
                    {s.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
              {i < 3 && (
                <ArrowRight className="mx-auto my-1 h-5 w-5 rotate-90 text-primary/50" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Dois fluxos paralelos */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Fluxo 1 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="rounded-lg border border-primary/30 bg-primary/5 p-6"
          >
            <h4 className="mb-5 text-center font-display text-lg font-bold text-primary">
              Conversão Imediata
            </h4>
            <div className="flex flex-col items-center gap-1">
              {["Aula", "Contrato", "Pagamento", "Onboarding"].map(
                (label, i, arr) => (
                  <div key={i} className="w-full">
                    <div className="rounded border border-border bg-secondary/40 px-4 py-3 text-center text-sm font-medium text-foreground">
                      {label}
                      {label === "Onboarding" && (
                        <span className="mt-1 block text-xs font-normal text-muted-foreground">
                          Apresentação da plataforma e diagnóstico, eventos,
                          conteúdos e plano de ação
                        </span>
                      )}
                    </div>
                    {i < arr.length - 1 && (
                      <ArrowRight className="mx-auto my-1 h-4 w-4 rotate-90 text-primary/50" />
                    )}
                  </div>
                ),
              )}
            </div>
          </motion.div>

          {/* Fluxo 2 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="rounded-lg border border-border bg-secondary/30 p-6"
          >
            <h4 className="mb-5 text-center font-display text-lg font-bold text-primary">
              Conversão com Gatilho de Diagnóstico
            </h4>
            <div className="flex flex-col items-center gap-1">
              {[
                "Aula",
                "Envio do Diagnóstico",
                "Reunião Estratégica (SLA 24H)",
                "Contrato",
                "Pagamento",
                "Onboarding",
              ].map((label, i, arr) => (
                <div key={i} className="w-full">
                  <div className="rounded border border-border bg-secondary/40 px-4 py-3 text-center text-sm font-medium text-foreground">
                    {label}
                    {label === "Envio do Diagnóstico" && (
                      <span className="mt-1 block text-xs font-normal text-muted-foreground">
                        Abordagem comercial para falar sobre o diagnóstico
                      </span>
                    )}
                  </div>
                  {i < arr.length - 1 && (
                    <ArrowRight className="mx-auto my-1 h-4 w-4 rotate-90 text-primary/50" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* CTA após seções 01-03 */}
      <CtaBanner />

      {/* 4. Diagnóstico */}
      <Section num="04" title="O Diagnóstico Estratégico" dark>
        <p className="mb-6 text-muted-foreground">
          Através de uma landing page com formulário estratégico, o diagnóstico
          coleta informações essenciais para personalizar a abordagem comercial
          e gerar inteligência sobre o público.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Especialidade médica",
            "Tempo de atuação",
            "Clínica própria (sim/não)",
            "Pacientes atendidos/mês",
            "Faturamento médio",
            "Desafios na gestão",
            "Objetivos de crescimento",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-sm text-foreground"
            >
              <CheckCircle className="h-4 w-4 text-primary" /> {item}
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Todos os participantes da aula receberão, ao final, o relatório
          completo com os resultados do seu diagnóstico.
        </p>
      </Section>

      {/* 5. Aula */}
      <Section num="05" title="Aula Estratégica de Conversão">
        <p className="mb-6 text-muted-foreground">
          Aula online de 60-90 minutos com médicos interessados, conduzida pelo
          Dr. Alexandre. Objetivo: gerar valor, apresentar o método e converter
          para o W2 Club.
        </p>
        <div className="space-y-3">
          {[
            "Autoridade e contexto do Dr. Alexandre",
            "Os erros que impedem médicos de crescer",
            "Diagnóstico das clínicas médicas",
            "Modelo de clínica estruturada",
            "Provas e resultados",
            "Apresentação da comunidade",
            "Oferta para ingresso no W2 Club",
          ].map((b, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="flex items-center gap-4 rounded border border-border bg-secondary/30 p-3"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-primary/20 font-display text-sm font-bold text-primary">
                {i + 1}
              </span>
              <span className="text-sm text-foreground">{b}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 6. Oferta */}
      <Section num="06" title="Oferta e Conversão" dark>
        <p className="mb-6 text-muted-foreground">
          Ao final da aula, será apresentada a oportunidade de ingresso na
          comunidade, utilizando gatilhos estratégicos de conversão.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              icon: Target,
              t: "Vagas Limitadas",
              d: "Exclusividade e urgência na decisão",
            },
            {
              icon: Calendar,
              t: "Eventos Exclusivos",
              d: "Acesso a encontros presenciais premium",
            },
            {
              icon: Zap,
              t: "Bônus de Aula",
              d: "Condições especiais para participantes",
            },
            {
              icon: CheckCircle,
              t: "Garantia de Satisfação",
              d: "Segurança na decisão de entrada",
            },
          ].map((g, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4"
            >
              <g.icon className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <h4 className="text-sm font-semibold text-foreground">{g.t}</h4>
                <p className="text-xs text-muted-foreground">{g.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA após seções 04-06 */}
      <CtaBanner />

      {/* 7. Follow-up */}
      <Section num="07" title="Follow-up Comercial">
        <p className="mb-4 text-muted-foreground">
          Após a aula, os participantes que não converterem serão analisados com
          base no diagnóstico e abordados pelo time comercial.
        </p>
        <div className="space-y-2 text-sm text-foreground">
          {[
            "Análise do diagnóstico preenchido",
            "Agendamento de calls personalizadas",
            "Apresentação individualizada do programa",
            "Conversão para a comunidade",
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4 text-primary" /> {s}
            </div>
          ))}
        </div>
      </Section>

      {/* 8. To-Dos */}
      <Section num="08" title="To-Dos Necessários e Responsáveis">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              category: "To-Dos Comerciais",
              items: ["Script de vendas", "Link de pagamento / contrato"],
            },
            {
              category: "To-Dos Operacionais",
              items: [
                "Slides da aula estratégica",
                "Script da aula",
                "Slides de pitch da comunidade",
                "Divulgação da aula no grupo pelo Dr. Alexandre",
                "Reforço de divulgação no grupo pelo Dr. Alexandre",
                "Criação do Invite no Google Calendar",
                "Criação de Pesquisa NPS da aula para ser enviado pós evento",
                "Fluxo de Mensagens até o evento",
                "Mensagem pós evento de agradecimento envio do NPS",
              ],
            },
            {
              category: "To-Dos Tech",
              items: [
                "Landing page com diagnóstico",
                "Integração do formulário com redirecionamento para diagnóstico",
                "Página de confirmação com botão salvar na agenda",
                "Automação de confirmação da inscrição",
                "Definição e Criação do Ambiente Virtual onde acontecerá a aula. Meet?",
              ],
            },
          ].map((group, gi) => (
            <motion.div
              key={gi}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={gi}
            >
              <h4 className="mb-4 font-display text-base font-semibold text-primary">
                {group.category}
              </h4>
              <div className="space-y-2">
                {group.items.map((m, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <FileText className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{" "}
                    {m}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 9. Cronograma */}
      <Section num="09" title="Cronograma de Execução (Micro)" dark>
        <p className="mb-6 text-muted-foreground">
          Etapas operacionais imediatas para viabilizar a Aula Estratégica de
          Conversão.
        </p>
        <div className="space-y-4">
          {[
            {
              step: "ETAPA 1",
              task: "Estruturação do diagnóstico e landing page",
            },
            { step: "ETAPA 2", task: "Produção da aula e materiais" },
            { step: "ETAPA 3", task: "Divulgação da aula e inscrições" },
            { step: "ETAPA 4", task: "Realização da aula e conversões" },
          ].map((w, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="flex items-center gap-4"
            >
              <span className="shrink-0 rounded bg-primary px-3 py-1 font-display text-sm font-bold text-primary-foreground">
                {w.step}
              </span>
              <div className="h-px flex-1 bg-border" />
              <span className="text-sm text-foreground">{w.task}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA após seções 07-09 */}
      <CtaBanner />

      {/* 11. Resultado */}
      <Section num="10" title="Resultado Esperado">
        <p className="mb-6 text-muted-foreground">
          O objetivo é criar um processo previsível de aquisição de novos
          membros para o W2 Club.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "Aumento do número de membros da comunidade",
            "Fortalecimento da autoridade do Dr. Alexandre",
            "Funil de aquisição recorrente e escalável",
            "Base qualificada de médicos interessados em crescimento",
          ].map((r, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4"
            >
              <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
              <span className="text-sm text-foreground">{r}</span>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href={CHECKIN_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="gold" size="lg" className="px-10 text-base">
              Garantir minha vaga na aula{" "}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center">
        <img src={logo} alt="W2 Club" className="mx-auto mb-3 h-8" />
        <p className="text-xs text-muted-foreground">
          W2 Club — Transformando médicos em empresários de sucesso.
        </p>
      </footer>
    </div>
  );
};

const Section = ({
  num,
  title,
  children,
  dark,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
  dark?: boolean;
}) => (
  <section className={`py-16 md:py-24 ${dark ? "bg-secondary/30" : ""}`}>
    <div className="container mx-auto px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
        className="mb-10"
      >
        <span className="mb-2 block font-display text-sm font-medium text-primary">
          {num}
        </span>
        <h2 className="mb-3 font-display text-2xl font-bold text-foreground md:text-3xl">
          {title}
        </h2>
        <div className="gold-line w-16" />
      </motion.div>
      {children}
    </div>
  </section>
);

export default Index;
