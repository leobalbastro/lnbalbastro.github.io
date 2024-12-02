import './globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    <html lang="en" >
      <body className="bg-slate-400 dark:bg-slate-900">
        {/* burger button */}
        {/* NavBar */}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {/* go to top button */}
        {/* Footer */}
        <button className="dark:bg-white bg-slate-900 text-white dark:text-slate-700 p-1 rounded-3xl w-1/12 z-50 fixed bottom-10 right-10 h-12 w-12"><FontAwesomeIcon icon={faChevronUp} /></button>
      </body>
    </html>
  )
}