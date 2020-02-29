<template>
  <div>
    <div class="flex">
      <nav class="sidenav bg-indigo-900 font-bold pl-4 h-screen">
        <ul class="flex flex-col p-4 text-gray-300">
          <li class="my-2"><span class="mr-3">1</span>Painel</li>
          <li class="my-2"><span class="mr-3">2</span>Enviar</li>
          <li class="my-2"><span class="mr-3">3</span>Receber</li>
          <li class="my-2"><span class="mr-3">4</span>Transações</li>
          <li class="my-2"><span class="mr-3">5</span>Privacidade</li>
          <li class="my-2"><span class="mr-3">6</span>Termos e contratos</li>
        </ul>
      </nav>
      <main class="p-4 w-full">
        <div>
          <h1>Olá, está é sua carteira de investimento.</h1>
          <span>Este é o sumário das suas carteiras</span>
        </div>
        <div class="inline-flex justify-between w-full mt-3">
          <div class="flex justify-between w-full w-2/4">
            <div class="flex text-white flex-wrap">
              <div
                class="m-3 flex flex-col justify-center shadow-md rounded bg-blue-500 mx-2 p-3"
              >
                <span>RUPX Balance</span>
                <h2>2,245.85 <sub>RUPX</sub></h2>
              </div>
              <div
                class="m-3 flex flex-col justify-center shadow-md rounded bg-blue-500 mx-2 p-3"
              >
                <span>RUPX Balance</span>
                <h2>2,245.85 <sub>RUPX</sub></h2>
              </div>
              <div
                class="m-3 flex flex-col justify-center shadow-md rounded bg-blue-500 mx-2 p-3"
              >
                <span>RUPX Balance</span>
                <h2>2,245.85 <sub>RUPX</sub></h2>
              </div>
            </div>
            <div class="flex w-1/2 bg-white shadow-md">
              <div class="w-full p-3">
                <span class="font-bold">Transações recentes</span>
                <hr />

                <div class="flex">
                  <ul class="w-full">
                    <li class="flex justify-between mb-3">
                      <div class="flex items-center">
                        <i class="mr-4">ceta</i>
                        <div class="flex flex-col">
                          <span>28</span>
                          <span>Nov</span>
                        </div>
                      </div>
                      <div>
                        <div class="flex flex-col">
                          <span class="text-green-600 font-bold"
                            >+12,098,00</span
                          >
                          <span class="text-gray-600">See transação</span>
                        </div>
                      </div>
                    </li>
                    <li class="flex justify-between mb-3">
                      <div class="flex items-center">
                        <i class="mr-4">ceta</i>
                        <div class="flex flex-col">
                          <span>28</span>
                          <span>Nov</span>
                        </div>
                      </div>
                      <div>
                        <div class="flex flex-col">
                          <span class="text-green-600 font-bold"
                            >+12,098,00</span
                          >
                          <span class="text-gray-600">See transação</span>
                        </div>
                      </div>
                    </li>
                    <li class="flex justify-between mb-3">
                      <div class="flex items-center">
                        <i class="mr-4">ceta</i>
                        <div class="flex flex-col">
                          <span>28</span>
                          <span>Nov</span>
                        </div>
                      </div>
                      <div>
                        <div class="flex flex-col">
                          <span class="text-green-600 font-bold"
                            >+12,098,00</span
                          >
                          <span class="text-gray-600">See transação</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard"
};
</script>

<style scoped>
@import "https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css";

.sidenav {
  min-width: 300px;
}
</style>
