import { component$ } from "@builder.io/qwik";

// @ts-ignore
import srcsetAvif from "~/assets/images/foto-enej.png?w=400;900&avif&srcset";
// @ts-ignore
import srcsetWebp from "~/assets/images/foto-enej.png?w=400;900&webp&srcset";
// @ts-ignore
import { srcEnej as placeholder } from "~/assets/images/foto-enej.png?width=400&metadata";

export const MainEnej = component$(() => {
  return (
    <>
      <div class="flex m-auto max-w-6xl">
        <picture>
          <source srcSet={srcsetAvif} type="image/avif" />
          <source srcSet={srcsetWebp} type="image/webp" />
          <img
            src={placeholder}
            class="mx-auto w-full  md:h-full drop-shadow-2xl bg-gray-400 dark:bg-slate-700"
            alt="Enej"
            loading="eager"
            decoding="async"
          />
        </picture>
      </div>
    </>
  );
});
