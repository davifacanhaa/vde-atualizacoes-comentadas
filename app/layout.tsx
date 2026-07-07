import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'VDE Atualizações Comentadas | Pare de estudar conteúdo desatualizado',
  description:
    'Assinatura de atualizações mensais para concursos: mudanças na legislação, jurisprudência, informativos e teses de repercussão geral que realmente caem na sua prova. Tudo filtrado, sem você garimpar.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body>{children}</body>
    </html>
  )
}
