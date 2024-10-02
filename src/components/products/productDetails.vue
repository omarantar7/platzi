<template>
  <teleport to="body">
    <div v-if="show" @click="tryClose" class="backdrop"></div>
    <transition name="dialog">
      <dialog open v-if="show">
        <section>
          <div class="info">
            <img :src="product.image" alt="">
            <div>
              <h1>{{ product.title }}</h1>
              <p>{{product.description}}</p>
              <span>{{product.rating.rate}} <img src="../../assets/star.png" class="star" alt=""></span><br>
              <span>Rated by: {{ product.rating.count }} users</span>
              <p>{{ product.price }}$</p>
            </div>
          </div>
        </section>
      </dialog>
    </transition>
  </teleport>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    fixed: {
      type: Boolean,
      required: false,
      default: false,
    },
    product:{
      type:Object,
      required:true
    }
  },
  emits: ['close'],
  methods: {
    tryClose() {
      if (this.fixed) {
        return;
      }
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 10%;
  left: 10%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: .5rem;
  margin: 0;
  overflow: hidden;
  background-color: white;
  color: black;
}
p{
  font-size: 1.25rem;
}
h1{
  color: rgb(23, 228, 16);

}

img{
  width: 16rem;
  height: 16rem;
  border-radius: 16px;
  object-fit: contain;
}
.star{
  width:1rem;
  height: 1rem;
}
.info{
  display: flex;
  gap: 4rem;
  align-items: center;
}
section {
  padding: 1rem;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.dialog-enter-active {
  transition: all 0.3s ease-out;
}

.dialog-leave-active {
  transition: all 0.3s ease-in;
}

.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: scale(1);
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
@media (max-width:650px) {
  dialog{
    width:33rem;
    height: fit-content;
    left: 10%;
  }
}
@media (max-width:450px) {
  dialog{
    width:22rem;
    height: fit-content;
    left: 3%;
  }  
  .info{
    flex-direction: column;
    gap: 1rem;
  }
  p{
    font-size: 1rem;
  }
  img{
    width: 10rem;
    height: 10rem;
  }
}
</style>