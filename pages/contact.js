export default function Contact() {
  return (
    <main className="p-10 max-w-2xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Kontakt</h1>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full px-4 py-2 border rounded" required />
        <input type="email" placeholder="E-Mail" className="w-full px-4 py-2 border rounded" required />
        <textarea placeholder="Nachricht" className="w-full px-4 py-2 border rounded" rows="5" required></textarea>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Absenden</button>
      </form>
    </main>
  )
}