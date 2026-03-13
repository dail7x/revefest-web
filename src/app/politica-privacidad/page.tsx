import React from 'react';

export default function PoliticaPrivacidadPage() {
    return (
        <main className="min-h-screen bg-white pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12">Política de Privacidad</h1>

                <div className="prose prose-lg max-w-none text-gray-700 font-light leading-relaxed flex flex-col gap-6">
                    <p className="text-sm text-gray-500 uppercase tracking-wider">
                        Última actualización: 12 de marzo de 2026<br />
                        Sitio web: https://www.revefest.com
                    </p>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">1. Responsable del tratamiento</h2>
                    <p>El responsable del tratamiento de los datos personales recogidos en este sitio web es:</p>
                    <div className="bg-gray-50 p-6 rounded-sm mt-4">
                        <p className="font-bold">REVE MUSIC VALENCIA SL</p>
                        <p>Tres Forques 31, 1ª planta</p>
                        <p>46018 Valencia</p>
                        <p>España</p>
                        <p className="mt-4">
                            <strong>Correo electrónico:</strong>{' '}
                            <a href="mailto:hola@revefest.com" className="text-primary hover:underline">hola@revefest.com</a>
                        </p>
                        <p>
                            <strong>Sitio web:</strong>{' '}
                            <a href="https://www.revefest.com" className="text-primary hover:underline">https://www.revefest.com</a>
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">2. Qué datos personales recopilamos</h2>
                    <p>Podemos recopilar diferentes tipos de datos personales dependiendo del uso que hagas del sitio web:</p>

                    <h3 className="text-xl font-bold mt-6 text-black">Datos de navegación</h3>
                    <p>Cuando visitas el sitio web, podemos recopilar información técnica como:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>dirección IP</li>
                        <li>tipo de navegador</li>
                        <li>sistema operativo</li>
                        <li>páginas visitadas</li>
                        <li>duración de la visita</li>
                        <li>interacciones con el sitio</li>
                    </ul>
                    <p className="mt-4">Estos datos se recopilan mediante herramientas de análisis web.</p>

                    <h3 className="text-xl font-bold mt-6 text-black">Datos proporcionados por el usuario</h3>
                    <p>Podemos recopilar datos que el usuario proporcione voluntariamente, por ejemplo:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>nombre</li>
                        <li>dirección de correo electrónico</li>
                        <li>cualquier información incluida en formularios de contacto o comunicaciones enviadas</li>
                    </ul>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">3. Finalidad del tratamiento de datos</h2>
                    <p>Los datos personales pueden utilizarse para:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>gestionar el funcionamiento del sitio web</li>
                        <li>mejorar la experiencia de usuario</li>
                        <li>analizar el uso del sitio web</li>
                        <li>responder a consultas o solicitudes del usuario</li>
                        <li>gestionar servicios o eventos ofrecidos en el sitio web</li>
                        <li>cumplir con obligaciones legales</li>
                    </ul>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">4. Base legal para el tratamiento</h2>
                    <p>Tratamos los datos personales sobre las siguientes bases legales:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>consentimiento del usuario</li>
                        <li>interés legítimo en mejorar nuestros servicios</li>
                        <li>cumplimiento de obligaciones legales</li>
                        <li>ejecución de un contrato, cuando sea necesario para prestar un servicio solicitado</li>
                    </ul>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">5. Herramientas de análisis y terceros</h2>
                    <p>Nuestro sitio web utiliza servicios de terceros que pueden recopilar información sobre el uso del sitio.</p>

                    <h3 className="text-xl font-bold mt-6 text-black">Google Analytics</h3>
                    <p>Utilizamos Google Analytics para analizar el tráfico del sitio web.</p>
                    <p><strong>Proveedor:</strong> Google LLC</p>
                    <p className="mt-4">Este servicio puede recopilar información sobre:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>páginas visitadas</li>
                        <li>tiempo de permanencia</li>
                        <li>interacciones con el sitio</li>
                    </ul>
                    <p className="mt-4">
                        <strong>Más información:</strong>{' '}
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            https://policies.google.com/privacy
                        </a>
                    </p>

                    <h3 className="text-xl font-bold mt-6 text-black">Google Tag Manager</h3>
                    <p>
                        Utilizamos Google Tag Manager para gestionar scripts y herramientas de análisis. 
                        Google Tag Manager no recopila datos personales directamente, pero puede activar otros servicios que sí lo hacen.
                    </p>

                    <h3 className="text-xl font-bold mt-6 text-black">Microsoft Clarity</h3>
                    <p>
                        Utilizamos Microsoft Clarity para analizar cómo interactúan los usuarios con el sitio web 
                        mediante mapas de calor y grabaciones anónimas de sesiones.
                    </p>
                    <p><strong>Proveedor:</strong> Microsoft Corporation</p>
                    <p>
                        <strong>Más información:</strong>{' '}
                        <a href="https://privacy.microsoft.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            https://privacy.microsoft.com
                        </a>
                    </p>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">6. Contenido incrustado de terceros</h2>
                    <p>Algunas páginas del sitio web pueden incluir contenido incrustado de servicios externos.</p>

                    <h3 className="text-xl font-bold mt-6 text-black">YouTube</h3>
                    <p>Podemos mostrar vídeos incrustados de YouTube.</p>
                    <p>
                        YouTube puede recopilar datos de navegación del usuario y establecer cookies para analizar 
                        la interacción con el contenido.
                    </p>
                    <p><strong>Proveedor:</strong> Google LLC</p>
                    <p>
                        <strong>Más información:</strong>{' '}
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            https://policies.google.com/privacy
                        </a>
                    </p>

                    <h3 className="text-xl font-bold mt-6 text-black">Spotify</h3>
                    <p>El sitio puede incluir reproductores de contenido de Spotify.</p>
                    <p>Spotify puede recopilar datos relacionados con la interacción del usuario con el reproductor.</p>
                    <p><strong>Proveedor:</strong> Spotify AB</p>
                    <p>
                        <strong>Más información:</strong>{' '}
                        <a href="https://www.spotify.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            https://www.spotify.com/privacy
                        </a>
                    </p>

                    <h3 className="text-xl font-bold mt-6 text-black">Fourvenues</h3>
                    <p>
                        Nuestro sitio puede integrar el servicio Fourvenues mediante iframe para la venta o gestión 
                        de entradas a eventos.
                    </p>
                    <p><strong>Proveedor:</strong> Fourvenues</p>
                    <p>
                        Fourvenues puede procesar datos personales necesarios para la gestión de compras y servicios relacionados.
                    </p>
                    <p>
                        <strong>Más información:</strong>{' '}
                        <a href="https://fourvenues.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            https://fourvenues.com/privacy
                        </a>
                    </p>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">7. Conservación de los datos</h2>
                    <p>
                        Los datos personales se conservarán únicamente durante el tiempo necesario para cumplir con 
                        la finalidad para la que fueron recogidos o para cumplir obligaciones legales.
                    </p>
                    <p>
                        Los datos de navegación recopilados mediante herramientas de análisis pueden conservarse 
                        según la configuración de dichas herramientas.
                    </p>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">8. Compartición de datos</h2>
                    <p>No vendemos ni alquilamos datos personales a terceros.</p>
                    <p className="mt-4">Sin embargo, algunos datos pueden ser tratados por proveedores de servicios que actúan como encargados del tratamiento, como:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>proveedores de analítica web</li>
                        <li>proveedores de servicios tecnológicos</li>
                        <li>plataformas de contenido incrustado</li>
                        <li>proveedores de venta de entradas</li>
                    </ul>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">9. Transferencias internacionales de datos</h2>
                    <p>
                        Algunos proveedores utilizados en el sitio web pueden estar ubicados fuera del Espacio Económico Europeo.
                    </p>
                    <p>
                        En estos casos, las transferencias de datos se realizan conforme a las garantías adecuadas 
                        establecidas por el Reglamento General de Protección de Datos (RGPD).
                    </p>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">10. Derechos del usuario</h2>
                    <p>De acuerdo con el Reglamento General de Protección de Datos (RGPD), tienes derecho a:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>acceder a tus datos personales</li>
                        <li>rectificar datos inexactos</li>
                        <li>solicitar la supresión de tus datos</li>
                        <li>limitar el tratamiento de datos</li>
                        <li>oponerte al tratamiento</li>
                        <li>solicitar la portabilidad de los datos</li>
                        <li>retirar el consentimiento en cualquier momento</li>
                    </ul>
                    <p className="mt-4">
                        Para ejercer estos derechos puedes contactar con nosotros a través del correo electrónico indicado en esta política.
                    </p>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">11. Autoridad de control</h2>
                    <p>
                        Si consideras que el tratamiento de tus datos personales vulnera la normativa aplicable, 
                        puedes presentar una reclamación ante la autoridad de control correspondiente.
                    </p>
                    <div className="bg-gray-50 p-6 rounded-sm mt-4">
                        <p className="font-bold">En España:</p>
                        <p className="mt-2">Agencia Española de Protección de Datos (AEPD)</p>
                        <p>
                            <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                https://www.aepd.es
                            </a>
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">12. Cambios en la política de privacidad</h2>
                    <p>
                        Podemos actualizar esta política de privacidad ocasionalmente para reflejar cambios legales o técnicos.
                    </p>
                    <p>Se recomienda revisar esta página periódicamente.</p>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-200">
                    <p className="text-sm text-gray-500 uppercase tracking-wider">
                        Última actualización: 12 de marzo de 2026
                    </p>
                </div>
            </div>
        </main>
    );
}
