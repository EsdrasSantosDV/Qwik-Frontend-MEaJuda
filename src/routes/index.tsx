import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { MainEnej } from "~/components/dumbs/MainEnej";
import { MainHistory } from "~/components/dumbs/MainHistory";
import { MainStats } from "~/components/dumbs/MainStats";
import { MainWhatMej } from "~/components/dumbs/MainWhatMej";



import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
    
      <MainEnej></MainEnej>
      <MainWhatMej></MainWhatMej>
      <MainHistory></MainHistory>
      <MainStats></MainStats>


    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};
