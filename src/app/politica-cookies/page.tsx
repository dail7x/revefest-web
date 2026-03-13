import React from 'react';

export default function PoliticaCookiesPage() {
    return (
        <main className="min-h-screen bg-white pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12">Política de Cookies</h1>

                <div className="prose prose-lg max-w-none text-gray-700 font-light leading-relaxed flex flex-col gap-6">
                    <p className="text-sm text-gray-500 uppercase tracking-wider">
                        Última actualización: 12 de marzo de 2026<br />
                        Sitio web: https://www.revefest.com
                    </p>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">1. Introducción</h2>
                    <p>
                        En este sitio web utilizamos cookies y tecnologías similares para mejorar la experiencia de navegación, 
                        analizar el uso del sitio y mostrar contenido integrado de terceros.
                    </p>
                    <p>
                        Las cookies pueden ser establecidas por nuestro propio sitio web o por servicios externos que utilizamos.
                    </p>
                    <p>
                        Cuando visitas nuestra web por primera vez, se te mostrará un banner de consentimiento que te permitirá 
                        aceptar, rechazar o configurar el uso de cookies.
                    </p>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">2. ¿Qué son las cookies?</h2>
                    <p>
                        Una cookie es un pequeño archivo de texto que un sitio web almacena en tu dispositivo cuando lo visitas. 
                        Estas cookies permiten recordar información sobre tu navegación, como tus preferencias o la identificación de sesión.
                    </p>
                    <p>Las cookies pueden ser:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li><strong>Cookies propias:</strong> establecidas por nuestro sitio web.</li>
                        <li><strong>Cookies de terceros:</strong> establecidas por servicios externos integrados en el sitio.</li>
                    </ul>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">3. ¿Qué son los scripts?</h2>
                    <p>
                        Un script es un fragmento de código que permite que el sitio web funcione correctamente o proporcione 
                        funcionalidades interactivas. Este código puede ejecutarse en nuestros servidores o en tu dispositivo.
                    </p>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">4. ¿Qué es una baliza web?</h2>
                    <p>
                        Una baliza web (también conocida como pixel de seguimiento) es un pequeño elemento gráfico invisible 
                        que se utiliza para monitorizar la actividad de los usuarios en una página web o en correos electrónicos.
                    </p>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">5. Tipos de cookies utilizadas</h2>
                    
                    <h3 className="text-xl font-bold mt-6 text-black">5.1 Cookies necesarias</h3>
                    <p>
                        Estas cookies son esenciales para el funcionamiento del sitio web y no pueden desactivarse en nuestros sistemas.
                    </p>
                    <p>Permiten funciones básicas como:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>navegación segura</li>
                        <li>carga de contenido</li>
                        <li>gestión de preferencias de consentimiento</li>
                    </ul>

                    <h3 className="text-xl font-bold mt-6 text-black">5.2 Cookies de estadísticas</h3>
                    <p>
                        Estas cookies nos ayudan a comprender cómo interactúan los visitantes con el sitio web recopilando 
                        información de forma anónima.
                    </p>
                    <p>Utilizamos estas cookies para mejorar el rendimiento del sitio y la experiencia de usuario.</p>

                    <h3 className="text-xl font-bold mt-6 text-black">5.3 Cookies de marketing o seguimiento</h3>
                    <p>
                        Estas cookies pueden ser utilizadas por servicios de terceros para rastrear la actividad del usuario 
                        con fines analíticos o publicitarios.
                    </p>
                    <p>Solo se activan si el usuario otorga su consentimiento.</p>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">6. Cookies utilizadas en este sitio web</h2>
                    <p>
                        A continuación se describen las principales cookies utilizadas por los servicios integrados en nuestro sitio web.
                    </p>

                    <h3 className="text-xl font-bold mt-6 text-black">Google Analytics (Google LLC)</h3>
                    <p>Utilizamos Google Analytics para analizar el tráfico y el comportamiento de los usuarios en el sitio web.</p>
                    <p className="font-bold mt-4">Cookies utilizadas:</p>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse border border-gray-300 mt-2">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-300 px-4 py-2 text-left">Cookie</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Duración</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Descripción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2 font-mono">_ga</td>
                                    <td className="border border-gray-300 px-4 py-2">2 años</td>
                                    <td className="border border-gray-300 px-4 py-2">Distingue a los usuarios</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2 font-mono">_ga_*</td>
                                    <td className="border border-gray-300 px-4 py-2">1 año</td>
                                    <td className="border border-gray-300 px-4 py-2">Mantiene el estado de sesión</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2 font-mono">_gid</td>
                                    <td className="border border-gray-300 px-4 py-2">24 horas</td>
                                    <td className="border border-gray-300 px-4 py-2">Identifica usuarios únicos</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-4">
                        <strong>Más información:</strong>{' '}
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            https://policies.google.com/privacy
                        </a>
                    </p>

                    <h3 className="text-xl font-bold mt-6 text-black">Google Tag Manager</h3>
                    <p>
                        Google Tag Manager se utiliza para gestionar etiquetas y scripts en nuestro sitio web. 
                        Este servicio no instala cookies directamente, pero puede activar cookies de otros servicios integrados.
                    </p>
                    <p>
                        <strong>Más información:</strong>{' '}
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            https://policies.google.com/privacy
                        </a>
                    </p>

                    <h3 className="text-xl font-bold mt-6 text-black">YouTube (Google LLC)</h3>
                    <p>Nuestro sitio puede incluir vídeos incrustados desde YouTube.</p>
                    <p>Cuando se reproduce un vídeo, YouTube puede establecer cookies para recopilar información sobre la interacción del usuario con el contenido.</p>
                    <p className="font-bold mt-4">Cookies comunes:</p>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse border border-gray-300 mt-2">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-300 px-4 py-2 text-left">Cookie</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Descripción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2 font-mono">YSC</td>
                                    <td className="border border-gray-300 px-4 py-2">Registra estadísticas de visualización</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2 font-mono">VISITOR_INFO1_LIVE</td>
                                    <td className="border border-gray-300 px-4 py-2">Estima el ancho de banda</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2 font-mono">PREF</td>
                                    <td className="border border-gray-300 px-4 py-2">Almacena preferencias del usuario</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-4">
                        <strong>Más información:</strong>{' '}
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            https://policies.google.com/privacy
                        </a>
                    </p>

                    <h3 className="text-xl font-bold mt-6 text-black">Spotify</h3>
                    <p>
                        En algunas páginas puede mostrarse contenido incrustado de Spotify. 
                        Spotify puede utilizar cookies para habilitar la reproducción del contenido y recopilar información sobre la interacción con el reproductor.
                    </p>
                    <p>
                        <strong>Más información:</strong>{' '}
                        <a href="https://www.spotify.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            https://www.spotify.com/privacy
                        </a>
                    </p>

                    <h3 className="text-xl font-bold mt-6 text-black">Fourvenues</h3>
                    <p>
                        Nuestro sitio puede integrar un iframe del servicio Fourvenues para la compra o gestión de entradas a eventos. 
                        Este servicio puede establecer cookies necesarias para:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>gestionar el proceso de compra</li>
                        <li>mantener sesiones seguras</li>
                        <li>procesar pagos</li>
                    </ul>
                    <p className="mt-4">
                        <strong>Más información:</strong>{' '}
                        <a href="https://fourvenues.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            https://fourvenues.com/privacy
                        </a>
                    </p>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">7. Consentimiento</h2>
                    <p>
                        Cuando visites nuestro sitio web por primera vez, se mostrará un banner que te permitirá aceptar o rechazar el uso de cookies.
                    </p>
                    <p>
                        Puedes modificar tus preferencias en cualquier momento utilizando la herramienta de configuración de cookies disponible en el sitio web.
                    </p>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">8. Gestión y eliminación de cookies</h2>
                    <p>
                        Puedes eliminar o bloquear cookies desde la configuración de tu navegador.
                    </p>
                    <p>Consulta la documentación de tu navegador para obtener más información:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
                        <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitio-web" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
                        <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
                        <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
                    </ul>
                    <p className="mt-4">
                        Ten en cuenta que desactivar cookies puede afectar al funcionamiento del sitio web.
                    </p>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">9. Derechos sobre tus datos personales</h2>
                    <p>De acuerdo con el Reglamento General de Protección de Datos (RGPD), tienes derecho a:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>acceder a tus datos personales</li>
                        <li>rectificar datos incorrectos</li>
                        <li>solicitar la eliminación de tus datos</li>
                        <li>limitar el tratamiento de datos</li>
                        <li>oponerte al tratamiento</li>
                        <li>solicitar la portabilidad de tus datos</li>
                        <li>retirar el consentimiento en cualquier momento</li>
                    </ul>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">10. Datos de contacto</h2>
                    <div className="bg-gray-50 p-6 rounded-sm mt-4">
                        <p className="font-bold">Responsable del tratamiento:</p>
                        <p className="mt-2">
                            REVE MUSIC VALENCIA SL<br />
                            Tres Forques 31, 1ª planta<br />
                            46018 Valencia<br />
                            España
                        </p>
                        <p className="mt-4">
                            <strong>Web:</strong>{' '}
                            <a href="https://www.revefest.com" className="text-primary hover:underline">https://www.revefest.com</a>
                        </p>
                        <p>
                            <strong>Email:</strong>{' '}
                            <a href="mailto:hola@revefest.com" className="text-primary hover:underline">hola@revefest.com</a>
                        </p>
                    </div>
                </div>

                {/* Last Updated */}
                <div className="mt-16 pt-8 border-t border-gray-200">
                    <p className="text-sm text-gray-500 uppercase tracking-wider">
                        Última actualización: 12 de marzo de 2026
                    </p>
                </div>
            </div>
        </main>
    );
}
