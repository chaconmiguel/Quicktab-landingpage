export type AudienceType = 'restaurant' | 'individual';

export interface ContentData {
  hero: {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
  };
  benefits: {
    title: string;
    subtitle: string;
    items: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
}

export const content: Record<AudienceType, ContentData> = {
  restaurant: {
    hero: {
      title: "Transforma la experiencia de pago en tu establecimiento",
      subtitle: "Agiliza el servicio, mejora la experiencia del cliente y aumenta tus ingresos con pagos digitales.",
      ctaText: "Unirse a la Lista de Espera",
      ctaLink: "#waitlist",
    },
    benefits: {
      title: "Beneficios para Establecimientos",
      subtitle: "Descubre cómo QuickTab puede transformar la operación de tu negocio",
      items: [
        {
          icon: "timer",
          title: "Servicio más rápido",
          description: "Reduce los tiempos de espera para solicitar y pagar cuentas, aumentando la rotación de mesas."
        },
        {
          icon: "users",
          title: "Mejora la experiencia del cliente",
          description: "Ofrece a tus clientes una forma moderna y sin fricciones de pagar sus cuentas."
        },
        {
          icon: "trending-up",
          title: "Aumenta las propinas",
          description: "Los clientes satisfechos con la experiencia digital y el servicio ágil dejan mejores propinas."
        },
        {
          icon: "bar-chart",
          title: "Datos valiosos",
          description: "Obtén información detallada sobre tendencias de consumo y comportamiento de los clientes."
        }
      ]
    }
  },
  individual: {
    hero: {
      title: "Paga tu cuenta al instante con un simple escaneo",
      subtitle: "Olvídate de esperar al mesero o hacer filas en la caja. QuickTab te permite escanear, dividir y pagar en segundos.",
      ctaText: "Escanear un QR",
      ctaLink: "#waitlist",
    },
    benefits: {
      title: "Beneficios para Usuarios",
      subtitle: "Una experiencia de pago sin complicaciones",
      items: [
        {
          icon: "scan",
          title: "Simplemente escanea",
          description: "Escanea el código QR en tu mesa para ver la cuenta en tiempo real."
        },
        {
          icon: "split",
          title: "Divide fácilmente",
          description: "Divide la cuenta por artículos o por partes iguales con tus amigos."
        },
        {
          icon: "credit-card",
          title: "Paga rápidamente",
          description: "Paga con tu método preferido sin necesidad de entregar tu tarjeta."
        },
        {
          icon: "receipt",
          title: "Recibos digitales",
          description: "Recibe recibos digitales automáticamente en tu correo electrónico."
        }
      ]
    }
  }
};

export const testimonials = [
  {
    name: "María González",
    role: "Gerente, Restaurante El Jardín",
    quote: "QuickTab ha revolucionado cómo manejamos los pagos. Nuestros clientes están encantados con la facilidad para dividir la cuenta, y nuestro personal puede concentrarse en brindar un excelente servicio en lugar de procesar pagos.",
    image: "/maria-gonzalez.jpg"
  },
  {
    name: "Carlos Rodríguez",
    role: "Chef y Propietario, La Mesa",
    quote: "Desde que implementamos QuickTab, la rotación de mesas aumentó un 25% y las propinas para nuestro personal han mejorado significativamente. Es una situación en la que todos ganan.",
    image: "/carlos-rodriguez.jpg"
  },
  {
    name: "Ana Martínez",
    role: "Gerente, Establecimiento El Jardín",
    quote: "QuickTab ha revolucionado completamente la forma en que manejamos los pagos. Nuestros clientes están encantados con la rapidez del servicio.",
    image: "/ana-martinez.jpg"
  }
];

export const navLinks = [
  { name: "Inicio", href: "#" },
  { name: "Acerca", href: "#about" },
  { name: "Características", href: "#features" },
  { name: "Contacto", href: "#contact" }
];

export const footerLinks = {
  company: [
    { name: "Acerca", href: "#about" },
    { name: "Términos de Servicio", href: "#terms" },
    { name: "Política de Privacidad", href: "#privacy" }
  ],
  social: [
    { name: "Instagram", href: "#", icon: "instagram" },
    { name: "Twitter", href: "#", icon: "twitter" },
    { name: "Facebook", href: "#", icon: "facebook" }
  ],
  contact: {
    email: "info@quicktab.mx",
    phone: "+52 55 1234 5678"
  }
};
