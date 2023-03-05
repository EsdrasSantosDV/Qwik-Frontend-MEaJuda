
import { renderToStream, RenderToStreamOptions } from "@builder.io/qwik/server";
import { manifest } from "@qwik-client-manifest";
import Root from "./root";

export default function (opts: RenderToStreamOptions) {
  return renderToStream(<Root />, {
    manifest,
    ...opts,

    containerAttributes: {
      lang: "en",
      dir: "ltr",
      class: "motion-safe:scroll-smooth 2xl:text-[20px]",
      ...opts.containerAttributes,
    },
  });
}
