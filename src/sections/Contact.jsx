import React, { useState } from 'react';
import emailjs from '@emailjs/browser';


function Contact() {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const adminTemplateId = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const adminToEmail = import.meta.env.VITE_EMAILJS_ADMIN_TO_EMAIL;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: '', message: '' });

    if (!serviceId || !adminTemplateId || !publicKey) {
      setStatus({
        type: 'error',
        message: 'Configuración de EmailJS incompleta. Verifica las variables de entorno.',
      });
      return;
    }

    setIsSending(true);

    try {
      const adminPayload = {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
        to_email: adminToEmail,
      };

      await emailjs.send(serviceId, adminTemplateId, adminPayload, { publicKey });

      setStatus({
        type: 'success',
        message: 'Gracias por contactarnos. Te responderemos pronto.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'No pudimos enviar tu mensaje. Intenta nuevamente en unos minutos.',
      });
      console.error('EmailJS contact error', error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary text-secondary pt-20 pb-40">
      <section className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="bg-tertiary text-secondary shadow-lg rounded-2xl p-8 border border-gray-200 flex flex-col items-center">
          <img
            src="/img/img-header/logo1.png"
            alt="Logo Claudia Castedo"
            className="w-20 h-20 object-contain mb-4 rounded-full bg-primary shadow-md shadow-black/50"
          />
          <h3 className="font-script text-2xl font-normal mb-2 text-secondary">Contáctanos</h3>
          <p className="mb-6 text-sm text-secondary/80 text-center">
            ¿Tienes preguntas? Escríbenos
          </p>
          <div className="mb-6 space-y-2 text-sm text-secondary/80 text-center">
            <p><strong>Contacto:</strong> Claudia Castedo Propiedades</p>
            <p><strong>Empresa:</strong> Chamanne Propiedades SPA</p>
            <p>
              <strong>Teléfono:</strong>
              <a href="tel:+56990179584" className="ml-1 underline">+56990179584</a>
            </p>
            <p>
              <strong>Correo:</strong>
              <a href="mailto:ingrid.gestioninmobiliaria@gmail.com" className="ml-1 underline break-all">
                ingrid.gestioninmobiliaria@gmail.com
              </a>
            </p>
          </div>
          <form className="space-y-4 w-full" onSubmit={handleSubmit}>
            <input
              name="name"
              required
              type="text"
              placeholder="Nombre"
              className="w-full px-4 py-3 bg-white rounded-md text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
              value={formData.name}
              onChange={handleChange}
              disabled={isSending}
            />
            <input
              name="email"
              required
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 bg-white rounded-md text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
              value={formData.email}
              onChange={handleChange}
              disabled={isSending}
            />
            <textarea
              name="message"
              required
              rows="5"
              placeholder="Mensaje"
              className="w-full px-4 py-3 bg-white rounded-md text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
              value={formData.message}
              onChange={handleChange}
              disabled={isSending}
            ></textarea>
            {status.message && (
              <p className={`text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                {status.message}
              </p>
            )}
            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-secondary hover:bg-secondary/80 text-primary py-3 rounded-full font-semibold transition"
            >
              {isSending ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
        </div>
        <div
          className="h-[500px] rounded-2xl shadow-lg relative bg-cover bg-center"
          style={{
            backgroundImage: `url("/img/contacto/casa.jpg")`,
          }}
        >
          <div className="absolute inset-0 bg-secondary/10 rounded-2xl"></div>
          <div className="absolute top-1/2 left-6 -translate-y-1/2 text-secondary max-w-xs">
            <h2 className="font-script text-4xl font-normal mb-4">
              Estamos encantados de resolver tus dudas.
            </h2>
            <p className="text-base text-secondary/80">
              Estamos aquí para ayudarte. Ya sea que tengas una consulta, sugerencia o quieras saber más
              sobre nuestros servicios, no dudes en escribirnos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
