import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { IconFacebook } from "../icons/IconFacebook";
import { IconInstagram } from "../icons/IconInstagram";
import { IconYoutube } from "../icons/IconYoutube";

export default component$(() => {


  const socialMedia = [
    { label: "Facebook", icon: IconFacebook, href: "#" },
    { label: "Instagram", icon: IconInstagram, href: "#" },
    { label: "Youtube", icon: IconYoutube, href: "#" },
  ];

  return (
    <>
    <footer class="border-t border-gray-200 dark:border-slate-800">
     <div class="max-w-6xl mx-auto px-4 sm:px-6">
      
        <div class="md:flex flex md:items-center md:justify-between py-6 md:py-8">
          
          <ul class="flex gap-2 mb-4 md:order-1 -ml-2 md:ml-4 md:mb-0">
            {socialMedia.map(({ label, href, icon: Icon }) => (
              <li>
                <Link
                  class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
                  aria-label={label}
                  title={label}
                  href={href}
                >
                  {Icon && <Icon />}
                </Link>
              </li>
            ))}
          </ul>
          <div class="text-sm text-gray-700 mr-4 dark:text-slate-400">
            Made by{" "}
            <a
              class="text-secondary-700 hover:underline dark:text-gray-200"
              href="https://github.com/EsdrasSantosDV"
            >
              {" "}
              Esdras Santos 
            </a>{" "}
            and
            
            <a
              class="text-secondary-700 hover:underline dark:text-gray-200"
              href="https://github.com/Emanuelle-Oliveira"
            >
              {" "}
              Emanuelle Oliveira
            </a>{" "}


            · All rights reserved.
          </div>

        </div>
      </div>
      
    </footer>
    </>
    
  );
});
