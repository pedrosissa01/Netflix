<template>
    <div class="bg-[url('/assets/img/bg-login.jpg')] bg-cover">
        <div class="bg-black/50">
            <div class="pt-[1.95rem] pl-20">
                <img src="@/assets/img/netflix-logo.svg" alt="" class="h-11">
            </div>
            <div class="flex justify-center">
                <div class="bg-black/80 w-[28.125rem] h-auto pt-20 pb-28 px-16 mb-29 mt-20 rounded-md">
                    <h3 class="text-white font-bold text-3xl pb-7">Entrar</h3>
                    <input type="text" name="" id="" placeholder="Email ou número de telefone" class="w-full h-12 px-3 mb-4 rounded-md bg-[#333333] hover:bg-neutral-800 text-[#8c8c8c]"/>
                    <input type="password" name="" id="" placeholder="Senha" class="w-full h-12 px-3 mb-4 rounded-md bg-[#333333] hover:bg-neutral-800 text-[#8c8c8c]"/>
                    <NuxtLink to="/perfil">
                        <button class="bg-[#e50914] w-full h-12 text-white font-bold rounded-md hover:bg-red-600">Entrar</button>
                    </NuxtLink>
                    
                    <div class="grid grid-cols-2 mt-8 font-normal text-xs text-neutral-500">
                        <div>
                            <input type="checkbox" name="" id="" class="bg-neutral-500 text-neutral-500 border-neutral-500">
                            <label for="">
                                Lembre-se de mim
                            </label>
                        </div>
                        <div class="text-end">
                            <a href="#" class="hover:underlin">Precisa de ajuda?</a>
                        </div>
                    </div>
                    <h3 class="text-neutral-500 mt-10 text-semibold">
                        Novo por aqui? <a href="#" class="text-white hover:underlin">Assine agora.</a>
                    </h3>
                    <p class="text-neutral-500 text-sm mt-3 text-justify">
                        Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <a href="" class="text-[#0071eb] hover:underlin">Saiba mais.</a>
                    </p>
                </div>
            </div>
            <footer class="bg-black/60 text-neutral-500 font-medium text-base mt-24 py-8 mx-auto footer footer-center">
                <div class="lg:mx-50 sm:mx-12 xl:mx-96">
                    Dúvidas? Ligue <a href="#" class="hover:underline ml-1">0800 591 2876</a>
                    <div class="grid grid-cols-4 gap-4 mt-8 font-normal text-sm">
                        <div>
                            <a href="#" class="hover:underline">Perguntas frequentes</a>
                        </div>
                        <div>
                            <a href="#" class="hover:underline">Central de ajuda</a>
                        </div>
                        <div>
                            <a href="#" class="hover:underline">Termos de uso</a>
                        </div>
                        <div>
                            <a href="#" class="hover:underline">Privacidade</a>
                        </div>
                        <div>
                            <a href="#" class="hover:underline">Preferências de cookies</a>
                        </div>
                        <div>
                            <a href="#" class="hover:underline">Informações corporativas</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>