<template>
  <section class="flex flex-col p-4">
    <div class="w-full flex justify-center overflow-hidden">
      <div class="inner w-screen" ref="inner" :style="innerStyles">
        <div class="inline-flex mr-3 justify-center items-center w-screen h-96 text-white bg-a2blue" v-for="card in cards" :key="card">
          {{ card }}
        </div>
      </div>
    </div>

    <div class="divide-x divide-a2blue text-a2yellow mt-1">
      <button @click="prev" class="p-1">prev</button>
      <button @click="next" class="p-1">next</button>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      cards: ["Advert Item 1", "Advert Item 2", "Advert Item 3", "Advert Item 4", "Advert Item 5", "Advert Item 6", "Advert Item 7", "Advert Item 8"],
      innerStyles: {},
      step: '',
      transitioning: false
    }
  },
  mounted () {
    this.setStep()
    this.resetTranslate()
  },
  methods: {
    setStep () {
      const innerWidth = this.$refs.inner.scrollWidth
      const totalCards = this.cards.length
      this.step = `${innerWidth / totalCards}px`
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
    }
  }
}
</script>

<style scoped>
.carousel {
  width: 170px;
  overflow: hidden;
}
.inner {
  transition: transform 0.2s;
  white-space: nowrap;
}
.card {
  width: 40px;
  margin-right: 10px;
  display: inline-flex;
  /* optional */
  height: 40px;
  background-color: #39b1bd;
  color: white;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
}
</style>
