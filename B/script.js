const { createApp } = Vue;

createApp({
  components: {
    'mi-header': MiHeader,
    'mi-footer': MiFooter,
    'vista-inicio': VistaInicio,
    'vista-clinica': VistaClinica
  },
  data() {
    return {
      vista_inicio: true,
      vista_clinica: false,
      vista_especialidades: false,
      vista_contacto: false,
      incompleto: false,
      confirmacion: '',
      form: { nombre: '', especialidad: '', mensaje: '' },
      consultas: [],
      noticias: [
        { id: 1, titulo: 'Nuevo tomógrafo', texto: 'Ya está disponible en diagnóstico por imágenes.', imagen: 'https://picsum.photos/seed/n1/400/220' },
        { id: 2, titulo: 'Vacunación antigripal', texto: 'Campaña abierta hasta fin de mes.', imagen: 'https://picsum.photos/seed/n2/400/220' },
        { id: 3, titulo: 'Nuevo especialista', texto: 'Se suma una dermatóloga al equipo.', imagen: 'https://picsum.photos/seed/n3/400/220' },
        { id: 4, titulo: 'Jornada de prevención', texto: 'Controles gratuitos el próximo sábado.', imagen: 'https://picsum.photos/seed/n4/400/220' }
      ],
      especialidades: [
        { id: 1, nombre: 'Cardiología', profesional: 'Dr. Martín Pereyra', dias: 'Lunes y miércoles', imagen: 'https://picsum.photos/seed/esp1/400/220', interesados: 0 },
        { id: 2, nombre: 'Pediatría', profesional: 'Dra. Laura Gómez', dias: 'Martes y jueves', imagen: 'https://picsum.photos/seed/esp2/400/220', interesados: 0 },
        { id: 3, nombre: 'Traumatología', profesional: 'Dr. Sergio Ledesma', dias: 'Lunes a viernes', imagen: 'https://picsum.photos/seed/esp3/400/220', interesados: 0 },
        { id: 4, nombre: 'Dermatología', profesional: 'Dra. Carolina Ríos', dias: 'Miércoles y viernes', imagen: 'https://picsum.photos/seed/esp4/400/220', interesados: 0 }
      ]
    };
  },
  methods: {
    mostrarVista(vista) {
      this.vista_inicio = false;
      this.vista_clinica = false;
      this.vista_especialidades = false;
      this.vista_contacto = false;
      this['vista_' + vista] = true;
    },
    meInteresa(especialidad) {
      especialidad.interesados++;
    },
    guardar() {
      this.confirmacion = '';
      if (!this.form.nombre.trim() || !this.form.especialidad || !this.form.mensaje.trim()) {
        this.incompleto = true;
        return;
      }
      this.incompleto = false;
      this.consultas.push({ nombre: this.form.nombre, especialidad: this.form.especialidad, mensaje: this.form.mensaje });
      this.form.nombre = '';
      this.form.especialidad = '';
      this.form.mensaje = '';
      this.confirmacion = '¡Consulta guardada correctamente!';
    }
  }
}).mount('#app');
