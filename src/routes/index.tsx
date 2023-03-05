import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { MainEnej } from "~/components/dumbs/MainEnej";



import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
    
      <MainEnej></MainEnej>


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
