<script setup lang="ts">
import { VuiButton, VuiTabs, VuiTab } from '@magro/vui';
</script>

<template>
  <main class="mx-auto mt-12 max-w-xl flex flex-col items-center gap-y-8">
    <h1 class="text-3xl text-gray-700 font-semibold">Vui Sink</h1>
    <div>
      <VuiButton label="Click me!" primary />
    </div>
    <div>
      <VuiTabs :selectedIndex="1">
        <VuiTab title="Options API">
          <h2 class="text-lg">Topic 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            repellendus animi quasi sint quibusdam quod perferendis odit alias
            illo impedit velit, quis, voluptas quisquam fuga temporibus. Beatae
            voluptatum dolore rerum.
          </p>
          <h2 class="text-lg mt-4">Topic 2</h2>
          <p>
            Cupiditate nobis nam ipsam reprehenderit officiis consectetur
            placeat aperiam neque ex natus sed exercitationem harum blanditiis,
            veniam labore alias soluta sint, aliquam tenetur dolor temporibus.
            Corrupti voluptas ab at omnis.
          </p>
        </VuiTab>
        <VuiTab title="Composition API">
          <h2 class="text-lg">Topic 3</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            temporibus quod quasi quo repellat reprehenderit veniam nesciunt
            fugit cumque iure quis porro et maxime. Nulla iste veritatis ex
            reprehenderit accusantium.
          </p>
          <h2 class="text-lg mt-4">Topic 4</h2>
          <p>
            Provident ullam quasi nemo, recusandae error fugiat maxime?
            Recusandae placeat dignissimos fugiat? Ullam quia fugiat reiciendis
            ut cumque laborum animi quos nobis hic architecto placeat harum,
            cupiditate veniam fuga possimus!
          </p>
        </VuiTab>
      </VuiTabs>
    </div>
  </main>
</template>
