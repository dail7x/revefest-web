import React from 'react';

export default function AvisoLegalPage() {
    return (
        <main className="min-h-screen bg-white pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12">Aviso Legal</h1>

                <div className="prose prose-lg max-w-none text-gray-700 font-light leading-relaxed flex flex-col gap-6">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">1. Información General</h2>
                    <p>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                    </p>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">2. Propiedad Intelectual</h2>
                    <p>
                        Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                        Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                    </p>

                    <h2 className="text-2xl font-bold uppercase mt-8 text-black">3. Responsabilidad</h2>
                    <p>
                        Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                    </p>
                </div>
            </div>
        </main>
    );
}
