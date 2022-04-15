<template>
  <section class="flex flex-col p-1 lg:p4">
    <div v-if="$fetchState.pending" class="flex flex-row justify-center">
        <svg class="animate-spin h-5 w-5 mr-3 border-b-2 border-r-2 rounded-full border-a2blue" viewBox="0 0 24 24">
            <!-- ... -->
        </svg>
    </div>

    <div v-else-if="$fetchState.error">
            <!-- {{$fetchState}} -->
        <div class="flex flex-row justify-center">
          <img class="w-40 h-40" src="~/assets/images/empty.svg" alt=""><br>
        </div>
        <p class="flex flex-row justify-center text-red-900 text-md font-thin">Something went wrong, please refresh the page</p>
      </div>

    <div class="w-full flex justify-center overflow-hidden">
      <div class="inner w-screen" ref="inner" :style="innerStyles">
        <div class="inline-flex justify-center items-center h-carousel" v-for="(card, index) in cards" :key="index">
          <!-- <p class="text-a2blue">{{ card }}</p> -->
          <img class="w-full" :id="card" :src="card" :alt="card">
        </div>
      </div>
    </div>

    <div class="flex justify-center text-a2blue mt-1">
      <!-- <button @click="prev" class="p-1"><solid-arrow-narrow-left-icon class="w-4 h-4"/></button> -->
      <div class="flex flex-row" v-for="(card, index) in cards" :key="index">
          <a :href="`#${card}`" class="rounded-2xl w-1 h-1 bg-a2yellow border-2 border-a2blue mr-1"></a>
      </div>
      <!-- <button @click="next" class="p-1"><solid-arrow-narrow-right-icon class="w-4 h-4"/></button> -->
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      cards: [],
      innerStyles: {},
      step: '',
      transitioning: false
    }
  },
  async fetch() {
    let cards = await this.$axios.$get('/slider');

    cards.images.forEach(image => {
    this.cards.push(this.productPicture(image.url))

    });

    this.setStep()
    this.resetTranslate()
    this.autoScroll()
  },
  // mounted () {
  //   this.setStep()
  //   this.resetTranslate()
  //   this.autoScroll()
  // },
  methods: {
    setStep () {
      const innerWidth = this.$refs.inner.scrollWidth
      const totalCards = this.cards.length
      this.step = `${innerWidth}px`
    },
    next () {
      if (this.transitioning) return
      this.transitioning = true
      this.moveLeft()
      this.afterTransition(() => {
        const card = this.cards.shift()
        this.cards.push(card)
        this.resetTranslate()
        this.transitioning = false
      })
    },
    prev () {
      if (this.transitioning) return
      this.transitioning = true
      this.moveRight()
      this.afterTransition(() => {
        const card = this.cards.pop()
        this.cards.unshift(card)
        this.resetTranslate()
        this.transitioning = false
      })
    },
    moveLeft () {
      this.innerStyles = {
        transform: `translateX(-${this.step})
                    translateX(-${this.step})`
      }
    },
    moveRight () {
      this.innerStyles = {
        transform: `translateX(${this.step})
                    translateX(-${this.step})`
      }
    },
    afterTransition (callback) {
      const listener = () => {
        callback()
        this.$refs.inner.removeEventListener('transitionend', listener)
      }
      this.$refs.inner.addEventListener('transitionend', listener)
    },
    resetTranslate () {
      this.innerStyles = {
        transition: 'none',
        transform: `translateX(-${this.step})`
      }
    },
    imageUrl(src) {
      return require(`~/assets/images/${src}`)
    },
    autoScroll() {
      setInterval(() => {
        this.next()
      }, 5000);
    },
    productPicture(productImageUrl) {
      if (productImageUrl.includes("https")) {
        return productImageUrl
      }
      return `${process.env.baseUrl}${productImageUrl}`
    }
  }
}
</script>

<style scoped>
.inner {
  transition: transform 0.2s;
  white-space: nowrap;
}
.h-carousel{
  height: 100px;
}
</style>
