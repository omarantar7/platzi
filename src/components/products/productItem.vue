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
  border-radius: 2rem;
  width: 16rem;
  height: 16rem;
  object-fit: contain;
}
p {
  font-size: 1.75rem;
  font-weight: bold;
  color: rgb(23, 228, 16);
}
@media (max-width: 600px) {
  img {
    width: 10rem;
    height: 10rem;
  }
  section{
    flex-direction: column;
    text-align: center;
    padding: 1rem;
    gap: 0;
  }
  h1{
    font-size: 1.5rem;
  }
  p{
    font-size: 1.25rem;
  }
}
</style>