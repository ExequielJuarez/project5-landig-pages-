const MiHeader = {
  template: `
    <header class="container-fluid bg-light py-3 text-center border-bottom">
      <h1 class="h3 mb-0">Municipalidad de Villa Nueva</h1>
      <p class="text-muted mb-0">Trabajando junto a los vecinos</p>
    </header>`
};

const MiFooter = {
  template: `
    <footer class="container-fluid bg-dark text-light py-4 mt-4">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4 mb-3 mb-md-0">
            <h5>Municipalidad de Villa Nueva</h5>
            <p class="mb-0">Atención al vecino.</p>
          </div>
          <div class="col-12 col-md-4 mb-3 mb-md-0">
            <h5>Enlaces</h5>
            <ul class="list-unstyled mb-0"><li>Servicios</li><li>Noticias</li><li>Contacto</li></ul>
          </div>
          <div class="col-12 col-md-4">
            <h5>Contacto</h5>
            <p class="mb-0">San Martín 123<br>info@villanueva.gob.ar</p>
          </div>
        </div>
      </div>
    </footer>`
};

const VistaInicio = {
  data() {
    return { lema: 'Bienvenidos a Villa Nueva', hover: false };
  },
  methods: {
    cambiar(estado) {
      this.hover = estado;
      this.lema = estado ? '¡Gracias por visitarnos!' : 'Bienvenidos a Villa Nueva';
    }
  },
  template: `
    <section class="p-4 mb-4 bg-primary text-white rounded"
             @mouseover="cambiar(true)" @mouseleave="cambiar(false)">
      <h2>{{ lema }}</h2>
      <p class="lead mb-0">Realizá tus trámites y conocé las novedades de tu ciudad.</p>
    </section>`
};

const VistaMunicipalidad = {
  template: `
    <section>
      <h2 class="mb-3 border-bottom pb-2">La municipalidad</h2>
      <div class="row align-items-center">
        <div class="col-12 col-md-6">
          <p class="lead">Trabajamos cada día para mejorar la calidad de vida de nuestros vecinos.</p>
          <p>Brindamos atención al vecino, obras públicas, salud, cultura y ambiente.</p>
        </div>
        <div class="col-12 col-md-6">
          <img src="https://picsum.photos/seed/edificio/600/350" class="img-fluid rounded shadow" alt="Edificio municipal">
        </div>
      </div>
    </section>`
};
