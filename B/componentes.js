const MiHeader = {
  template: `
    <header class="text-center py-3 border-bottom mb-3">
      <h1 class="h3 mb-0">Clínica Santa Fe</h1>
      <p class="text-muted mb-0">Tu salud, nuestra prioridad</p>
    </header>`
};

const MiFooter = {
  template: `
    <footer class="bg-dark text-light rounded p-4 mb-4">
      <div class="row">
        <div class="col-12 col-md-4 mb-3 mb-md-0">
          <h5>Clínica Santa Fe</h5>
          <p class="mb-0">Atención médica integral.</p>
        </div>
        <div class="col-12 col-md-4 mb-3 mb-md-0">
          <h5>Enlaces</h5>
          <ul class="list-unstyled mb-0"><li>Especialidades</li><li>Noticias</li><li>Contacto</li></ul>
        </div>
        <div class="col-12 col-md-4">
          <h5>Contacto</h5>
          <p class="mb-0">Av. Libertad 456<br>Tel. (0343) 400-1234</p>
        </div>
      </div>
    </footer>`
};

const VistaInicio = {
  data() {
    return { lema: 'Bienvenidos a la Clínica Santa Fe' };
  },
  methods: {
    cambiarLema(entra) {
      this.lema = entra ? '¡Gracias por visitarnos!' : 'Bienvenidos a la Clínica Santa Fe';
    }
  },
  template: `
    <section class="p-4 mb-4 bg-primary text-white rounded" @mouseover="cambiarLema(true)" @mouseleave="cambiarLema(false)">
      <h2>{{ lema }}</h2>
      <p class="lead mb-0">Atención médica integral, turnos programados y guardia las 24 horas.</p>
    </section>`
};

const VistaClinica = {
  template: `
    <section>
      <h2 class="border-bottom pb-2 mb-4">La clínica</h2>
      <div class="row align-items-center">
        <div class="col-12 col-md-6">
          <p class="lead">Más de 25 años cuidando la salud de nuestra comunidad.</p>
          <p>Contamos con profesionales de distintas especialidades, consultorios modernos y guardia las 24 horas.</p>
        </div>
        <div class="col-12 col-md-6">
          <img src="https://picsum.photos/seed/clinica4/600/380" class="img-fluid rounded shadow" alt="Interior de la clínica">
        </div>
      </div>
    </section>`
};
