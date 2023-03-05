import { component$ } from "@builder.io/qwik";

export const MainWhatMej = component$(() => {
  return (
    <>
      <div class=" m-auto p-4 w-full max-w-6xl">
        <div class="flex flex-row gap-3 flex-wrap justify-center ">
          <h2 class="text-lg text-purple-900">O que é o MEJ?</h2>
          <p class="text-xs text-center text-gray-700 mr-4 font-bold dark:text-white">
            O Movimento Empresa Júnior é um empreendimento que não tem fins
            lucrativos, mas no qual todos saem ganhando. A sua organização é
            feita por estudantes de graduação e sua orientação, por professores.
            Nela, os estudantes podem realizar projetos e prestar serviços para
            outras empresas, aprendendo na prática a exercer a profissão para a
            qual estão se formando. É uma oportunidade incrível de empreender.
            Afinal, quem participa do MEJ passa a entender como se organiza uma
            empresa. Também é uma grande vantagem para a faculdade, que ganha em
            visibilidade, e para os clientes, que podem ter acesso a um serviço
            de qualidade por um baixo custo.
          </p>
        </div>
      </div>
    </>
  );
});
