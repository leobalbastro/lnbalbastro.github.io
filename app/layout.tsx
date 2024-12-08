import './globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Link from 'next/link';
import GoToTopButton from './components/GoToTopButton'
import NavBar from './components/NavBar';
config.autoAddCss = false;

export const metadata = {
  title: "Leonardo Balbastro - Personal Blog",
  description: "Esta es mi blog personal donde iré actualizandolo con proyectos nuevos, proyectos a futuros, experiencias laborales y que tipo de conocimientos poseo."
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        {/* burger button */}
        {/* NavBar */}
        <NavBar />

        {children}
        {/* go to top button */}
        <GoToTopButton />
        {/* Footer */}
      </body>
    </html >
  )
}