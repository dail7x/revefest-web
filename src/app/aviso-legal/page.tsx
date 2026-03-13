import React from 'react';

export default function AvisoLegalPage() {
    return (
        <main className="min-h-screen bg-white pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12">Aviso Legal</h1>

                <div className="prose prose-lg max-w-none text-gray-700 font-light leading-relaxed flex flex-col gap-6">
                    
                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">1. Datos identificativos</h2>
                    <p>
                        En cumplimiento de lo dispuesto en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información 
                        y de Comercio Electrónico (LSSI-CE), se informa que el presente sitio web (en adelante, el "Sitio Web") 
                        es titularidad de:
                    </p>
                    <div className="bg-gray-50 p-6 rounded-sm mt-4">
                        <p><strong>Entidad titular / organizadora:</strong> REVEMUSIC VLC, S.L.</p>
                        <p><strong>NIF:</strong> B25906975</p>
                        <p><strong>Domicilio social y fiscal:</strong> C/ Tres Forques, 35, 1ª Planta, Puerta 2, 46018 València (Valencia), España</p>
                        <p><strong>Nombre comercial / Festival:</strong> REVE FEST</p>
                        <p>
                            <strong>Correo electrónico de contacto:</strong>{' '}
                            <a href="mailto:hola@revefest.com" className="text-primary hover:underline">hola@revefest.com</a>
                        </p>
                        <p>
                            <strong>Dominio web:</strong>{' '}
                            <a href="https://www.revefest.com" className="text-primary hover:underline">https://www.revefest.com</a>
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">2. Objeto</h2>
                    <p>
                        El Sitio Web tiene por objeto facilitar al usuario información sobre REVE FEST, incluyendo su programación, 
                        actividades, contenidos informativos, material promocional, noticias y comunicaciones relacionadas con el evento.
                    </p>
                    <p>
                        Asimismo, el Sitio Web puede facilitar el acceso a servicios de terceros relacionados con el evento, 
                        como plataformas externas de venta de entradas.
                    </p>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">3. Condiciones de uso</h2>
                    <p>
                        El acceso y/o uso del Sitio Web atribuye la condición de usuario, lo que implica la aceptación plena 
                        de las presentes condiciones desde dicho acceso.
                    </p>
                    <p>El usuario se compromete a hacer un uso adecuado del Sitio Web y de sus contenidos conforme a:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>la legislación vigente</li>
                        <li>la buena fe</li>
                        <li>el orden público</li>
                    </ul>
                    <p className="font-bold mt-4">Queda expresamente prohibido:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>utilizar el Sitio Web con fines ilícitos o lesivos</li>
                        <li>provocar daños en los sistemas del sitio web o de terceros</li>
                        <li>introducir o difundir virus informáticos u otros sistemas susceptibles de causar daños</li>
                        <li>intentar acceder a áreas restringidas sin autorización</li>
                    </ul>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">4. Propiedad intelectual e industrial</h2>
                    <p>Todos los contenidos del Sitio Web, incluyendo a título enunciativo:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>textos</li>
                        <li>imágenes</li>
                        <li>fotografías</li>
                        <li>vídeos</li>
                        <li>diseños</li>
                        <li>logotipos</li>
                        <li>marcas</li>
                        <li>nombres comerciales</li>
                        <li>código fuente</li>
                        <li>estructura de navegación</li>
                    </ul>
                    <p className="mt-4">
                        están protegidos por derechos de propiedad intelectual e industrial y pertenecen a REVEMUSIC VLC, S.L. 
                        o a terceros que han autorizado su uso.
                    </p>
                    <p>
                        Queda prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otra 
                        forma de explotación, total o parcial, sin autorización expresa y por escrito del titular de los derechos.
                    </p>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">5. Responsabilidad</h2>
                    <p>
                        REVEMUSIC VLC, S.L. no garantiza la disponibilidad continua del Sitio Web ni la ausencia de errores 
                        en sus contenidos, aunque realizará esfuerzos razonables para evitarlos o corregirlos.
                    </p>
                    <p>
                        El usuario reconoce y acepta que el uso del Sitio Web se realiza bajo su exclusiva responsabilidad.
                    </p>
                    <p>REVEMUSIC VLC, S.L. no será responsable de los daños o perjuicios que pudieran derivarse de:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>interferencias</li>
                        <li>interrupciones del servicio</li>
                        <li>virus informáticos</li>
                        <li>fallos del sistema</li>
                        <li>desconexiones de redes de telecomunicaciones</li>
                        <li>uso indebido del sitio por parte de los usuarios</li>
                    </ul>
                    <p className="mt-4">
                        Asimismo, la información relativa a la programación del evento, artistas, horarios o actividades 
                        puede estar sujeta a cambios por motivos organizativos o de fuerza mayor.
                    </p>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">6. Enlaces a terceros (ticketing y otros servicios)</h2>
                    <p>
                        El Sitio Web puede incluir enlaces o integraciones con plataformas externas de terceros, 
                        como servicios de venta de entradas u otros proveedores relacionados con el evento.
                    </p>
                    <p>En estos casos, el usuario será redirigido a entornos ajenos al Sitio Web.</p>
                    <p>
                        REVEMUSIC VLC, S.L. no controla ni se responsabiliza del contenido, políticas, condiciones 
                        o funcionamiento de dichos sitios externos.
                    </p>
                    <p>
                        Las operaciones realizadas en plataformas de terceros, incluida la compra de entradas, 
                        estarán sujetas a los términos y condiciones de dichas plataformas.
                    </p>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">7. Redes sociales</h2>
                    <p>
                        El Sitio Web puede incluir enlaces o contenido proveniente de redes sociales o plataformas externas 
                        como Instagram, TikTok, YouTube o Spotify.
                    </p>
                    <p>
                        REVEMUSIC VLC, S.L. no se responsabiliza del funcionamiento, políticas o contenidos de dichas 
                        plataformas externas, las cuales se rigen por sus propios términos y políticas de privacidad.
                    </p>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">8. Protección de datos</h2>
                    <p>
                        Los datos personales que el usuario facilite a través del Sitio Web serán tratados conforme 
                        a la normativa vigente en materia de protección de datos.
                    </p>
                    <p>
                        Puedes consultar información detallada en nuestra{' '}
                        <a href="/politica-privacidad" className="text-primary hover:underline">Política de Privacidad</a>.
                    </p>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">9. Política de cookies</h2>
                    <p>
                        Este Sitio Web utiliza cookies propias y de terceros para mejorar la experiencia del usuario 
                        y analizar el uso del sitio.
                    </p>
                    <p>
                        Puedes consultar más información en nuestra{' '}
                        <a href="/politica-cookies" className="text-primary hover:underline">Política de Cookies</a>.
                    </p>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">10. Legislación aplicable y jurisdicción</h2>
                    <p>Las presentes condiciones se rigen por la legislación española.</p>
                    <p>
                        Para la resolución de cualquier controversia que pudiera surgir en relación con el Sitio Web 
                        o con estas condiciones, las partes se someten a los Juzgados y Tribunales de València, 
                        salvo que la normativa aplicable establezca otro fuero imperativo.
                    </p>
                </div>
            </div>
        </main>
    );
}
