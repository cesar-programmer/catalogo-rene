function App() {
  const categorias = ['Catalogo digital', 'Promociones', 'Pedidos por WhatsApp']
  const productos = [
    { nombre: 'Producto destacado', detalle: 'Espacio listo para imagen, precio y descripcion.' },
    { nombre: 'Nueva coleccion', detalle: 'Bloque preparado para organizar el catalogo.' },
    { nombre: 'Mas vendido', detalle: 'Tarjeta base para futuros productos.' },
  ]

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a className="text-lg font-semibold text-slate-950" href="/">
            Catalogo Rene
          </a>
          <a
            className="rounded-md bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
            href="#contacto"
          >
            Contactar
          </a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-24">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Landing inicial
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-slate-950 md:text-6xl">
            Catalogo digital listo para crecer en GitHub.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Base creada con React, Vite y Tailwind. La estructura queda preparada para
            agregar productos, imagenes, precios, categorias y botones de contacto.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="rounded-md bg-emerald-700 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-emerald-800"
              href="#catalogo"
            >
              Ver catalogo
            </a>
            <a
              className="rounded-md border border-slate-300 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-900 transition hover:border-slate-400"
              href="https://github.com/cesar-programmer/catalogo-rene.git"
              target="_blank"
              rel="noreferrer"
            >
              Repositorio
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <div className="aspect-[4/3] rounded-md bg-[linear-gradient(135deg,#0f172a,#047857)] p-6 text-white">
            <p className="text-sm font-medium text-emerald-100">Vista previa</p>
            <div className="mt-16">
              <p className="text-3xl font-bold">Rene</p>
              <p className="mt-2 max-w-xs text-sm leading-6 text-slate-100">
                Aqui ira la imagen principal o el producto estrella del catalogo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="catalogo" className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Secciones
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-950">
                Base para el catalogo
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {categorias.map((categoria) => (
                <span
                  className="rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-700"
                  key={categoria}
                >
                  {categoria}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {productos.map((producto) => (
              <article
                className="rounded-lg border border-slate-200 bg-slate-50 p-5"
                key={producto.nombre}
              >
                <div className="mb-5 aspect-[5/4] rounded-md bg-slate-200" />
                <h3 className="text-lg font-semibold text-slate-950">{producto.nombre}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{producto.detalle}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer id="contacto" className="border-t border-slate-200 bg-slate-950 px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-slate-200 md:flex-row md:items-center">
          <p className="font-semibold">Catalogo Rene</p>
          <p className="text-sm text-slate-400">
            Listo para conectar productos, redes sociales y WhatsApp.
          </p>
        </div>
      </footer>
    </main>
  )
}

export default App
