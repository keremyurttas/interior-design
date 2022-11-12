<template>
  <main class="brand-container pt-10 pb-96">
    <header class="flex items-center justify-between mb-24">
      <a href="#" class="logo">
        <img
          width="126"
          height="54"
          src="./assets/logo.svg"
          class="w-[126px] h-[54px]"
          alt="aa"
        />
      </a>
      <div class="flex items-center">
        <nav class="mr-16 hidden md:block">
          <ul class="capitalize flex items-center space-x-8 lg:space-x-16">
            <li><a href="#">home</a></li>
            <li><a href="#">about us</a></li>
            <li><a href="#">services</a></li>
            <li><a href="#">our teams</a></li>
          </ul>
        </nav>
        <button class="brand-button hidden md:block">Contact Us</button>
        <button class="p-2 block md:hidden">HMB</button>
      </div>
    </header>
    <section class="relative mb-40">
      <h1 class="text-7xl leading-normal font-bold w-full lg:w-1/2 mb-12">
        Design your interor with high quality.
      </h1>
      <div
        class="line hidden lg:block w-1/2 h-[2px] bg-black absolute top-14 right-0"
      ></div>
      <div
        class="absolute right-0 top-20 text-lg font-medium rotate-[270deg] origin-bottom-right"
      >
        <p class="text-secondary">2022</p>
        <p class="text-secondary">ALL RIGHT RESERVED</p>
      </div>
      <div
        class="statistic-card hidden lg:block bg-primary px-12 py-10 space-y-14 w-max absolute lg:right-36 lg:bottom-56"
      >
        <div>
          <p class="text-5xl leading-normal">350+</p>
          <p>Project Completed</p>
        </div>
        <div class="text-white">
          <p class="text-5xl leading-normal">23+</p>
          <p>Professional Teams</p>
        </div>
        <div>
          <p class="text-5xl leading-normal">15+</p>
          <p>Years Experience</p>
        </div>
      </div>
      <img src="./assets/first-image.svg" alt="first-image" />
    </section>
    <section>
      <p class="brand-custom-title">about</p>
      <h2 class="text-4xl font-semibold mb-14 leading-normal">
        “We're one of the best furniture agency. Prioritizing customers and
        making purchases easy are the hallmarks of our agency.”
      </h2>
      <div class="flex justify-between relative">
        <img src="./assets/second-image.svg" alt="second" />
        <div class="w-full max-w-[223px] mt-48">
          <p class="text-lg font-normal mb-10">
            Online learning with us does not interfere with your daily life.
            because learning can be done anytime and anywhere.
          </p>
          <button class="brand-button">Learn More</button>
        </div>
        <div
          class="bg-white px-5 py-4 flex items-center space-x-5 absolute top-7 right-44"
        >
          <img src="./assets/avatar.svg" alt="aba" />
          <div>
            <p>Arga Danaan</p>
            <p>CEO of Dananz</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="postcss"></style>
