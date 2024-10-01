<template>
  <section>
    <img :src="image" alt="product image" />
    <div>

      <h1>{{ title }}</h1>
      <p>{{ price }} $</p>
    </div>
  </section>
</template>

<script>
export default {
  props: ["title", "price", "image"],
};
</script>

<style scoped>
section {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  margin: 1rem auto;
  background-color: white;
  width: 80%;
  display: flex;
  gap: 3rem;
  align-items: center;
}
h1 {
  font-size: 2rem;
}
h1,
h2 {
  margin: 0;
}
img {
  border-radius: 50%;
  width: 16rem;
  height: 16rem;
  object-fit: contain;
}
p {
  font-size: 1.75rem;
  font-weight: bold;
  color: rgb(23, 228, 16);
}
@media (max-width: 450px) {
  img {
    width: 16rem;
    height: 16rem;
  }
}
</style>