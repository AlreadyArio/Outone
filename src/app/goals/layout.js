import '../globals.css'

export const metadata = {
  title: 'Outone',
  description: 'Encouraging simplicity and focus in software design',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
