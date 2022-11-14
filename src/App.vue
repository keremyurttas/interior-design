<template>
  <main class="brand-container pt-10 pb-20">
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
      <h1
        class="md:text-7xl leading-normal font-bold w-full lg:w-[55%] mb-12 text-4xl"
      >
        Design your interor with high quality.
      </h1>
      <div
        class="line hidden lg:block w-1/2 h-[2px] bg-black absolute top-14 right-0"
      ></div>
      <div
        class="absolute right-0 top-20 text-lg font-medium rotate-[270deg] origin-bottom-right hidden lg:block"
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
    <section class="mb-40">
      <p class="brand-custom-title">about</p>
      <h2 class="brand-custom-header mb-14">
        “We're one of the best furniture agency. Prioritizing customers and
        making purchases easy are the hallmarks of our agency.”
      </h2>
      <div class="flex justify-between flex-col xl:flex-row relative">
        <img src="./assets/second-image.svg" alt="second" />
        <div
          class="w-full xl:max-w-[223px] max-w-[240px] mt-10 xl:mt-48 text-xl"
        >
          <div
            class="flex xl:hidden bg-white xl:px-5 py-4 items-center space-x-5"
          >
            <img src="./assets/avatar.svg" alt="aba" />
            <div>
              <p>Arga Danaan</p>
              <p>CEO of Dananz</p>
            </div>
          </div>
          <p class="md:text-lg font-normal mb-10 text-xl">
            Online learning with us does not interfere with your daily life.
            because learning can be done anytime and anywhere.
          </p>
          <button class="brand-button">Learn More</button>
        </div>
        <div
          class="hidden xl:flex bg-white px-5 py-4 items-center space-x-5 absolute top-7 right-44"
        >
          <img src="./assets/avatar.svg" alt="aba" />
          <div>
            <p>Arga Danaan</p>
            <p>CEO of Dananz</p>
          </div>
        </div>
      </div>
    </section>
    <section class="relative mb-40 md:h-[800px]">
      <div class="bg-white md:w-3/4 z-10 relative md:pr-10 pb-10">
        <p class="brand-custom-title">service</p>
        <h2 class="brand-custom-header mb-6">
          atrractive furniture with the best quality.
        </h2>
        <p class="brand-par max-w-[80%] lg:max-w-[55%] mb-10">
          Customize your interior design into a dream place with the best
          designers and quality furniture. We try our best to fulfill your
          expectations.
        </p>
        <ul class="service-nav">
          <li
            :key="index"
            v-for="(item, index) in serviceNav"
            :class="{ 'mb-9': !item.last }"
            class="text-secondary flex text-2xl font-semibold w-full justify-between hover:cursor-pointer"
          >
            <div class="flex">
              <span class="mr-10">0{{ index + 1 }}</span>
              <p class="capitalize">{{ item.content }}</p>
            </div>
            <button>
              <img
                width="32"
                height="32"
                src="./assets/arrow-right.png"
                alt=""
              />
            </button>
          </li>
        </ul>
      </div>
      <img
        class="md:absolute top-[304px] right-0"
        src="./assets/third-image.svg"
        alt=""
      />
    </section>
    <section class="mb-40">
      <p class="brand-custom-title">product</p>
      <div class="md:flex justify-between mb-20">
        <h2 class="brand-custom-header mb-4 md:mb-0 md:max-w-[30%]">
          Choose your product themes.
        </h2>
        <p class="md:max-w-[39%] brand-par">
          Find the theme you want. If our choice of theme is not what you want,
          you can customize it as you want.
        </p>
      </div>
      <ul class="theme-cont">
        <li
          v-for="(item, index) in themeNav"
          :class="{ 'mb-10': !item.last }"
          class="flex justify-between hover:cursor-pointer"
        >
          <div class="flex text-3xl font-semibold space-x-5 md:space-x-20">
            <span class=""> 0{{ index + 1 }} </span>
            <div class="">
              <h4 class="mb-6">{{ item.header }}</h4>
              <p class="text-lg font-normal max-w-[470px]">
                the use of simple and limited elements to get the best effect or
                impression.
              </p>
            </div>
          </div>
          <button>
            <img class="w-8 h-8" src="./assets/arrow-right.png" alt="" />
          </button>
        </li>
      </ul>
    </section>
    <section class="relative lg:mb-30 h-[490px] mb-64">
      <p class="brand-custom-title">material</p>
      <h2 class="brand-custom-header lg:max-w-[26%]">
        choice of materials for quality furniture.
      </h2>
      <p class="text-lg font-normal text-light lg:max-w-[40%] mb-6">
        You can custom the material as desired. And our furniture uses the best
        materials and selected quality materials.
      </p>
      <button class="px-8 py-3 border border-secondary mb-4 lg:mb-0">
        See Materials
      </button>
      <img
        width="623"
        height="490"
        class="lg:absolute lg:right-0 lg:top-[-47px] relative"
        src="./assets/image-group.svg"
        alt=""
      />
    </section>
    <section class="bg-primary py-9 relative mb-20">
      <div class="md:flex w-full">
        <h2
          class="brand-custom-header text-white md:min-w-[55%] mr-40 mb-6 md:mb-0"
        >
          let's discuss making your interior like a dream place!
        </h2>
        <div class="w-full">
          <p class="mb-5 text-lightGray font-lg md:min-w-[70%]">
            Contact us below to work together to build your amazing interior
          </p>
          <button class="bg-white text-secondary py-3 px-8">
            <a class="text-sm font-medium" href="#">Contact Us</a>
          </button>
        </div>
      </div>
    </section>
    <footer class="sm:flex justify-between relative">
      <div class="max-w-[40%] mb-4 sm:mb-0">
        <img src="./assets/logo.svg" alt="" />
        <h3 class="brand-custom-header">One of the best furniture agency.</h3>
      </div>
      <div class="relative">
        <div class="flex items-center gap-x-7 mb-10">
          <div class="">
            <div class="mb-6 flex items-center">
              <img class="mr-2.5" src="./assets/Ellipse74.png" alt="" />
              <span class="font-normal text-lg text-secondary"
                >Enter your email to get the latest news</span
              >
            </div>
            <input placeholder="Email Adress" type="text" class="mb-4" />
            <div class="line w-[115%] bg-[#141414] h-[1px]"></div>
          </div>
          <button>
            <img src="./assets/half-arrow.png" alt="" />
          </button>
        </div>
        <div class=" sm:absolute right-0">
          <span class="text-secondary mb-4">Follow us On</span>
          <div class="flex gap-x-8">
            <img src="./assets/facebook.svg" alt="" />
            <img src="./assets/instagram.svg" alt="" />
            <img src="./assets/tiktok.svg" alt="" />
            <img src="./assets/youtube.svg" alt="" />
          </div>
        </div>
      </div>
    </footer>
  </main>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      serviceNav: [
        {
          content: "interior design",
        },
        {
          content: "Consultant",
        },
        {
          content: "Construction Consultant",
          last: true,
        },
      ],
      themeNav: [
        {
          header: "Vintage",
        },
        {
          header: "Minimalist",
        },
        {
          header: "Modern",
        },
        {
          header: "transitional",
          last: true,
        },
      ],
    };
  },
};
</script>

<style lang="postcss"></style>
