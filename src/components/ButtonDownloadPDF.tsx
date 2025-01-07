export const ButtonDownloadPDF = () => {
  const handleDownload = async () => {
    try {
      const response = await fetch('/api/generate-pdf')
      if (!response.ok) throw new Error('Error descargando PDF')

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'documento.pdf'
      a.click()

      // Limpieza
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error:', error)
      alert('Error al descargar el PDF')
    }
  }

  return (
    <button className="bg-[#58C4DC] text-neutral-950 text-xl font-bold rounded-3xl px-6 pt-2.5 pb-2" onClick={handleDownload}>
      Descargar en PDF
    </button>
  )
}
