<!-- <template>
  <section>
    <div class="carousel">
    <div class="inner">
      <div class="card" v-for="card in cards" :key="card">
        {{ card }}
      </div>
    </div>
  </div>
  <button>prev</button>
  <button @click="next">next</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cards: [1, 2, 3, 4, 5, 6, 7, 8],
      innerStyles: {},
      step: ''
    }
  },
    mounted() {
    this.setStep()
    },
    methods: {
      setStep () {
        const innerWidth = this.$refs.inner.scrollWidth;
        const totalCards = this.cards.length
        this.step = `${innerWidth / totalCards}px`
      },

      next() {
        this.moveLeft()

        this.afterTransition(() => {
        const card = this.cards.shift()
        this.cards.push(card)
      }),

      afterTransition(callback) {
        const listener = () => {
          callback()
          this.$refs.inner.removeEventListener('transitionend', listener)
        }
        this.$refs.inner.addEventListener('transitionend', listener)
      }

    },
      moveLeft() {
        this.innerStyles = {
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
  white-space: nowrap;
  transition: transform 0.2s;
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
/* optional */
button {
  margin-right: 5px;
  margin-top: 10px;
}
</style> -->
