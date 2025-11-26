// // src/app/doc/layout.tsx
// 'use client';

// import React from 'react';
// import { allDocs } from 'contentlayer/generated';
// import SearchDialog from '@/components/search-dialog';
// import { sidebarNav } from 'config/sidebar';
// import Image from 'next/image';
// import {
//   SidebarProvider,
//   SidebarLayout,
//   MainContent,
//   Sidebar,
//   SidebarHeader,
//   SidebarContent,
//   SidebarFooter,
//   SidebarMenuItem,
//   SidebarTrigger,
//   UserAvatar,
//   NestedLink,
//   SidebarHeaderLogo,
// } from '@/components/sidebar';
// import { Github } from 'lucide-react';
// import Script from 'next/script';

// import { useRouter } from 'next/navigation';

// import Header from '@/components/header';
// import { ModeToggle } from '@/components/mode-toggle';
// import { Button } from '@/components/button';
// import { useIsMobile } from '@/hooks/use-mobile';

// export default function DocsLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   // Destructure sidebarNav from configDocs
//   const router = useRouter();
//   const isMobile = useIsMobile();
//   return (
//     <SidebarLayout>
//       {/* Left Sidebar Provider */}
//       <SidebarProvider
//         defaultOpen={isMobile ? false : true}
//         defaultSide="left"
//         defaultMaxWidth={280}
//         showIconsOnCollapse={true}
//       >
//         <Sidebar>
//           <SidebarHeader>
//             <SidebarHeaderLogo
//               logo={
//                 <Image
//                   alt="logo"
//                   className={'h-auto w-aut dark:invert'}
//                   width={100}
//                   height={100}
//                   src={`/favicon.png`}
//                 />
//               }
//             />
//           </SidebarHeader>
//           <SidebarContent>
//             {sidebarNav.map((section) => (
//               <SidebarMenuItem
//                 isCollapsable={section.pages && section.pages.length > 0}
//                 key={section.title}
//                 label={section.title}
//                 href={section.href}
//                 icon={section.icon}
//                 defaultOpen={section.defaultOpen}
//               >
//                 {section.pages?.map((page) => (
//                   <NestedLink key={page.href} href={page.href}>
//                     {page.title}
//                   </NestedLink>
//                 ))}
//               </SidebarMenuItem>
//             ))}
//           </SidebarContent>

//           <SidebarFooter>
//             <UserAvatar>
//               {
//                 <Image
//                   alt="logo"
//                   src={'/Sendexa.jpg'}
//                   width={100}
//                   height={100}
//                 />
//               }
//             </UserAvatar>
//             <div className="flex flex-col">
//               <span className="text-sm font-medium text-gray-900 dark:text-white">
//                 Dev Support
//               </span>
//               <span className="text-xs text-gray-500 dark:text-gray-400">
//                 dev@sendexa.co
//               </span>
//             </div>
//           </SidebarFooter>
//         </Sidebar>

//         {/* Main Content */}
//         <MainContent>
//           <Header className="justify-between py-2">
//             <div className="flex items-center gap-4">
//               <SidebarTrigger />
//               <h1 className="text-xl font-bold">Sendexa Docs</h1>
//             </div>
//             <div className="flex gap-2 items-center pr-0 lg:pr-8">
//               <SearchDialog searchData={allDocs} />
//               <ModeToggle />
//               <Button onClick={() => router.push('https://github.com/sendexa')}>
//                 <Github className="h-[1.2rem] w-[1.2rem] transition-all" />
//               </Button>
//             </div>
//           </Header>
//           {/* <div className={`grid xl:grid xl:grid-cols-[1fr_270px]`}> */}
//           <main className="overflow-auto p-6">{children}</main>

//           <Script
//             data-name="BMC-Widget"
//             data-cfasync="false"
//             src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
//             data-id="sendexa"
//             data-description="Support me on Buy me a coffee!"
//             data-message=""
//             data-color="#40DCA5"
//             data-position="Right"
//             data-x_margin="18"
//             data-y_margin="18"
//             strategy="afterInteractive"
//           />
//           <script type="application/ld+json">
//             {`
// {
//   "@context": "https://schema.org",
//   "@type": "TechArticle",
//   "headline": "Sendexa Developer Documentation",
//   "description": "Sendexa provides SMS, Email, Voice, WhatsApp, Verify, and Push APIs for modern communication workflows.",
//   "publisher": {
//     "@type": "Organization",
//     "name": "Sendexa",
//     "logo": {
//       "@type": "ImageObject",
//       "url": "https://docs.sendexa.co/logo.png"
//     }
//   },
//   "url": "https://docs.sendexa.co",
//   "author": {
//     "@type": "Organization",
//     "name": "Sendexa"
//   }
// }
// `}
//           </script>
//         </MainContent>
//       </SidebarProvider>
//     </SidebarLayout>
//   );
// }

// src/app/doc/layout.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { allDocs } from 'contentlayer/generated';
import SearchDialog from '@/components/search-dialog';
import { sidebarNav } from 'config/sidebar';
import Image from 'next/image';
import {
  SidebarProvider,
  SidebarLayout,
  MainContent,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenuItem,
  SidebarTrigger,
  UserAvatar,
  NestedLink,
  SidebarHeaderLogo,
  // SidebarHeaderTitle,
} from '@/components/sidebar';
import { Github } from 'lucide-react';
import Script from 'next/script';
import { useRouter } from 'next/navigation';

import Header from '@/components/header';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/button';
import { useIsMobile } from '@/hooks/use-mobile';
//import Link from 'next/link';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering sidebar after mount
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <SidebarLayout>
      <SidebarProvider
        defaultOpen={mounted ? !isMobile : true}
        defaultSide="left"
        defaultMaxWidth={280}
        showIconsOnCollapse={true}
      >
        <Sidebar>
          <SidebarHeader>
            <SidebarHeaderLogo
              logo={
                <Image
                  alt="logo"
                  className="h-auto w-auto dark:invert"
                  width={100}
                  height={100}
                  src="/favicon.png"
                  priority
                />
              }
            />
            {/* <Link href={'/'} className="flex flex-1 gap-3">
              <SidebarHeaderTitle>
                Sendexa Docs
              </SidebarHeaderTitle>
            </Link> */}
          </SidebarHeader>
          <SidebarContent>
            {sidebarNav.map((section) => (
              <SidebarMenuItem
                isCollapsable={!!section.pages && section.pages.length > 0}
                key={section.title}
                label={section.title}
                href={section.href}
                icon={section.icon}
                defaultOpen={section.defaultOpen}
              >
                {section.pages?.map((page) => (
                  <NestedLink key={page.href} href={page.href}>
                    {page.title}
                  </NestedLink>
                ))}
              </SidebarMenuItem>
            ))}
          </SidebarContent>

          <SidebarFooter>
            <UserAvatar>
              <Image
                alt="Sendexa logo"
                src="/Sendexa.jpg"
                width={100}
                height={100}
                className="rounded-full"
              />
            </UserAvatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Dev Support
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                dev@sendexa.co
              </span>
            </div>
          </SidebarFooter>
        </Sidebar>

        <MainContent>
          <Header className="justify-between py-2">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <h1 className="text-xl font-bold">Sendexa Docs</h1>
            </div>
            <div className="flex gap-2 items-center pr-0 lg:pr-8">
              <SearchDialog searchData={allDocs} />
              <ModeToggle />
              <Button
                onClick={() => router.push('https://github.com/sendexa')}
                // variant="ghost"
                // size="icon"
              >
                <Github className="h-[1.2rem] w-[1.2rem] transition-all" />
              </Button>
            </div>
          </Header>

          <main className="overflow-auto p-6">{children}</main>

          {/* Correct Script components */}
          <Script
            data-name="BMC-Widget"
            data-cfasync="false"
            src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
            data-id="sendexa"
            data-description="Support me on Buy me a coffee!"
            data-message=""
            data-color="#40DCA5"
            data-position="Right"
            data-x_margin="18"
            data-y_margin="18"
            strategy="afterInteractive"
          />

          <Script
            id="structured-data"
            type="application/ld+json"
            strategy="afterInteractive"
          >
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'TechArticle',
              headline: 'Sendexa Developer Documentation',
              description:
                'Sendexa provides SMS, Email, Voice, WhatsApp, Verify, and Push APIs for modern communication workflows.',
              publisher: {
                '@type': 'Organization',
                name: 'Sendexa',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://docs.sendexa.co/logo.png',
                },
              },
              url: 'https://docs.sendexa.co',
              author: {
                '@type': 'Organization',
                name: 'Sendexa',
              },
            })}
          </Script>
        </MainContent>
      </SidebarProvider>
    </SidebarLayout>
  );
}
