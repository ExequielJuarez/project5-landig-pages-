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
        { id: 1, titulo: 'Nuevo tomógrafo', texto: 'Ya está disponible en diagnóstico por imágenes.', imagen: '../imagenes/n1.webp' },
        { id: 2, titulo: 'Vacunación antigripal', texto: 'Campaña abierta hasta fin de mes.', imagen: '../imagenes/n2.webp' },
        { id: 3, titulo: 'Nuevo especialista', texto: 'Se suma una dermatóloga al equipo.', imagen: '../imagenes/n3.webp' },
        { id: 4, titulo: 'Jornada de prevención', texto: 'Controles gratuitos el próximo sábado.', imagen: '../imagenes/n4.webp' }
      ],
      especialidades: [
        { id: 1, nombre: 'Cardiología', profesional: 'Dr. Martín Pereyra', dias: 'Lunes y miércoles', imagen: '../imagenes/esp1.webp', interesados: 0 },
        { id: 2, nombre: 'Pediatría', profesional: 'Dra. Laura Gómez', dias: 'Martes y jueves', imagen: '../imagenes/esp2.webp', interesados: 0 },
        { id: 3, nombre: 'Traumatología', profesional: 'Dr. Sergio Ledesma', dias: 'Lunes a viernes', imagen: '../imagenes/esp3.webp', interesados: 0 },
        { id: 4, nombre: 'Dermatología', profesional: 'Dra. Carolina Ríos', dias: 'Miércoles y viernes', imagen: '../imagenes/esp4.webp', interesados: 0 }
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
