import { Layout } from '@/components/dom/Layout'
import { MainNav } from '@/components/nav/main-nav'
import '@/global.css'
import { cn } from '@/lib/utils'
import { fontSans } from "@/lib/fonts"
import { ThemeProvider } from '@/components/theme-provider'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { SiteHeader } from '@/components/nav/site-header'
import { siteConfig } from '@/config/site'

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/icons/favicon.ico",
    shortcut: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
}

export default function RootLayout({ children }) {
  const navBarHeight = '65px';

  return (
    // We can use suppressHydrationWarning to avoid the DOM hydration warning
    <html lang='en' className='antialiased' >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >

        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        <Layout>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1 flex flex-col">{children}</div>
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </Layout>
      </body>
    </html>
  )
}
