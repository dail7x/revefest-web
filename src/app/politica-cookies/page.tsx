import React from 'react';

export default function PoliticaCookiesPage() {
    return (
        <main className="min-h-screen bg-white pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12">Política de Cookies</h1>

                <div className="prose prose-lg max-w-none text-gray-700 font-light leading-relaxed flex flex-col gap-6">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Esta política de cookies explica qué son las cookies y cómo las utilizamos en nuestro sitio web.
                    </p>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">1. ¿Qué son las Cookies?</h2>
                    <p>
                        Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet o móvil) cuando visita un sitio web. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Estas cookies nos ayudan a hacer que el sitio web funcione correctamente, a hacerlo más seguro, 
                        a proporcionar una mejor experiencia de usuario y a entender cómo se comporta el sitio web.
                    </p>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">2. Tipos de Cookies que Utilizamos</h2>
                    
                    <h3 className="text-xl font-bold mt-6 text-black">2.1 Cookies Necesarias</h3>
                    <p>
                        Estas cookies son esenciales para que el sitio web funcione correctamente. No pueden desactivarse en nuestros sistemas. 
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
                    </p>

                    <h3 className="text-xl font-bold mt-6 text-black">2.2 Cookies de Análisis</h3>
                    <p>
                        Nos permiten contar las visitas y fuentes de tráfico para poder medir y mejorar el rendimiento de nuestro sitio. 
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                    </p>

                    <h3 className="text-xl font-bold mt-6 text-black">2.3 Cookies de Marketing</h3>
                    <p>
                        Estas cookies pueden ser establecidas a través de nuestro sitio por nuestros socios publicitarios. 
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                    </p>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">3. Gestión de Cookies</h2>
                    <p>
                        Puede configurar o rechazar las cookies, así como borrar sus datos de navegación desde la configuración de su navegador. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        A continuación le proporcionamos los enlaces a los principales navegadores:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>Google Chrome</li>
                        <li>Mozilla Firefox</li>
                        <li>Microsoft Edge</li>
                        <li>Safari</li>
                    </ul>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">4. Consentimiento</h2>
                    <p>
                        Al utilizar nuestro sitio web, usted acepta el uso de cookies de acuerdo con esta política. 
                        Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur.
                        Si no está de acuerdo con el uso de cookies, debe configurar su navegador para rechazarlas o abstenerse de usar este sitio web.
                    </p>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">5. Actualizaciones de la Política</h2>
                    <p>
                        Nos reservamos el derecho de actualizar esta política de cookies en cualquier momento. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Cualquier cambio será publicado en esta página con la fecha de actualización correspondiente.
                    </p>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">6. Contacto</h2>
                    <p>
                        Si tiene alguna pregunta sobre nuestra política de cookies, puede contactarnos a través de:
                        Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.
                    </p>
                </div>

                {/* Last Updated */}
                <div className="mt-16 pt-8 border-t border-gray-200">
                    <p className="text-sm text-gray-500 uppercase tracking-wider">
                        Última actualización: Marzo 2026
                    </p>
                </div>
            </div>
        </main>
    );
}
