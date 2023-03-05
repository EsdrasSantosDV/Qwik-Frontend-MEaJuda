import { component$ } from "@builder.io/qwik";
// @ts-ignore
import srcsetAvif from "~/assets/images/historyMej.png?w=400;900&avif&srcset";
// @ts-ignore
import srcsetWebp from "~/assets/images/historyMej.png?w=400;900&webp&srcset";
// @ts-ignore
import { srcEnej as placeholder } from "~/assets/images/historyMej.png?width=400&metadata";

export const MainHistory = component$(() => {
  return (
    <>
      <div class=" m-auto p-8 w-full max-w-6xl">
        <div class="flex flex-row gap-3">
          <div class="flex-1">
            <picture>
              <source srcSet={srcsetAvif} type="image/avif" />
              <source srcSet={srcsetWebp} type="image/webp" />
              <img
                src={placeholder}
                class=" w-72  md:h-full drop-shadow-2xl bg-gray-400 dark:bg-slate-700"
                alt="Enej"
                loading="eager"
                decoding="async"
              />
            </picture>
          </div>

            <div class="flex-1">
            <div class="flex flex-col gap-3 flex-wrap justify-start items-center">
              <h2 class="text-lg text-purple-900 text-center">História</h2>
              <p class="text-xs text-center text-gray-700 mr-4 font-bold dark:text-white">
                Iniciado em Paris, em 1967, por alunos da L’École Supérieure des
                Sciences Economiques et Commerciales. O MEJ cresceu na Europa e
                foi trazido para o Brasil em 1987 por João Carlos Chaves,
                diretor da Câmara de Comércio Franco-Brasileira. A 1ª empresa
                júnior no país nasceu na Escola de Administração da Fundação
                Getúlio Vargas.
              </p>
              <p class="text-xs text-center text-gray-700 mr-4 font-bold dark:text-white">
                As Empresas Juniores (EJs) são organizações estudantis sem fins
                lucrativos geridas por estudantes universitários, que prestam
                serviços de consultoria a empresas e outras organizações. Elas
                são criadas com o objetivo de proporcionar aos estudantes uma
                experiência prática de mercado e de empreendedorismo, além de
                contribuir para o desenvolvimento econômico e social do país.
              </p>

              <p class="text-xs text-center text-gray-700 mr-4 font-bold dark:text-white">
                As EJs são reconhecidas e regulamentadas pela Confederação
                Brasileira de Empresas Juniores (Brasil Júnior), que é a
                entidade representativa do movimento no país. Além disso, as EJs
                têm parcerias com empresas e instituições que oferecem suporte e
                mentoria para a gestão e desenvolvimento dessas organizações.
              </p>

              <p class="text-xs text-center text-gray-700 mr-4 font-bold dark:text-white">
                As atividades realizadas pelas Empresas Juniores incluem
                consultoria empresarial, desenvolvimento de projetos de pesquisa
                e extensão, organização de eventos e treinamentos, entre outros.
                O trabalho é realizado por equipes multidisciplinares de
                estudantes, que são supervisionados por professores e
                profissionais do mercado.
              </p>

              <p class="text-xs text-center text-gray-700 mr-4 font-bold dark:text-white">
                O movimento das Empresas Juniores começou no Brasil na década de
                1980, quando um grupo de estudantes da Universidade Federal de
                Viçosa (UFV) decidiu criar uma organização para prestar serviços
                de consultoria a empresas. A iniciativa se espalhou para outras
                universidades do país, e hoje existem mais de 20 mil estudantes
                envolvidos em cerca de mil EJs em todo o Brasil.
              </p>

              <p class="text-xs text-center text-gray-700 mr-4 font-bold dark:text-white">
                O trabalho realizado pelas EJs é valorizado pelas empresas, que
                veem nesses jovens talentos a oportunidade de solucionar
                problemas e trazer novas ideias para seus negócios. Além disso,
                as EJs oferecem aos estudantes uma experiência prática de
                mercado e de empreendedorismo, que complementa a formação
                acadêmica e ajuda a desenvolver habilidades profissionais e
                pessoais importantes para a carreira.
              </p>
            </div>
            
            </div>
          
            
          </div>
        </div>
      
    </>
  );
});
