const { createApp } = Vue;

createApp({
  components: {
    'mi-header': MiHeader,
    'mi-footer': MiFooter,
    'vista-inicio': VistaInicio,
    'vista-municipalidad': VistaMunicipalidad
  },
  data() {
    return {
      vista_inicio: true,
      vista_municipalidad: false,
      vista_servicios: false,
      vista_contacto: false,
      vistaInfo: 'vista-municipalidad',
      confirmacion: '',
      incompleto: false,
      form: { nombre: '', area: '', mensaje: '' },
      mensajes: [],
      noticias: [
        { id: 1, titulo: 'Nueva plaza', texto: 'Se inauguró la plaza del centro.', imagen: 'https://picsum.photos/seed/n1/400/220' },
        { id: 2, titulo: 'Vacunación', texto: 'Campaña gratuita en los centros de salud.', imagen: 'https://picsum.photos/seed/n2/400/220' },
        { id: 3, titulo: 'Residuos', texto: 'Nuevo cronograma de recolección.', imagen: 'https://picsum.photos/seed/n3/400/220' },
        { id: 4, titulo: 'Murales', texto: 'Concurso de murales para jóvenes.', imagen: 'https://picsum.photos/seed/n4/400/220' }
      ],
      servicios: [
        { id: 1, nombre: 'Rentas', area: 'Tributos', horario: 'Lun a vie 8 a 13 hs', imagen: 'https://picsum.photos/seed/s1/400/220', interesados: 0 },
        { id: 2, nombre: 'Obras privadas', area: 'Obras', horario: 'Lun a vie 8 a 12 hs', imagen: 'https://picsum.photos/seed/s2/400/220', interesados: 0 },
        { id: 3, nombre: 'Tránsito', area: 'Seguridad vial', horario: 'Lun a sáb 7 a 19 hs', imagen: 'https://picsum.photos/seed/s3/400/220', interesados: 0 },
        { id: 4, nombre: 'Salud', area: 'Salud pública', horario: 'Todos los días 24 hs', imagen: 'https://picsum.photos/seed/s4/400/220', interesados: 0 },
        { id: 5, nombre: 'Cultura', area: 'Cultura', horario: 'Mar a dom 10 a 20 hs', imagen: 'https://picsum.photos/seed/s5/400/220', interesados: 0 }
      ]
    };
  },
  computed: {
    totalInteresados() {
      return this.servicios.reduce((total, s) => total + s.interesados, 0);
    }
  },
  watch: {
    'form.mensaje'(nuevo) {
      if (nuevo.length > 200) {
        this.form.mensaje = nuevo.slice(0, 200);
      }
    }
  },
  methods: {
    mostrarVista(vista) {
      this.vista_inicio = false;
      this.vista_municipalidad = false;
      this.vista_servicios = false;
      this.vista_contacto = false;
      this['vista_' + vista] = true;
    },
    meInteresa(servicio) {
      servicio.interesados++;
    },
    guardar() {
      this.confirmacion = '';
      if (!this.form.nombre.trim() || !this.form.area || !this.form.mensaje.trim()) {
        this.incompleto = true;
        return;
      }
      this.incompleto = false;
      this.mensajes.push({ ...this.form });
      this.form = { nombre: '', area: '', mensaje: '' };
      this.confirmacion = '¡Mensaje guardado correctamente!';
      this.$refs.campoNombre.focus();
    }
  }
}).mount('#app');
