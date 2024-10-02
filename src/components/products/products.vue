<template>
  <section>
    <product-details
      :show="showSingleProduct"
      @close="productDetailVisibility"
      :product="singleProduct"
    ></product-details>
    <div class="spin" v-if="isLoading">
      <spinner></spinner>
    </div>
    <h2 v-else-if="!!error">{{ error }}</h2>
    <div class="products" v-else>
      <product-item
        v-for="(prd, index) in products"
        :key="prd.id"
        :id="prd.id"
        :title="prd.title"
        :image="prd.image"
        :price="prd.price"
        @click="loadProductDetails(prd.id)"
        draggable="true"
        @dragstart="dragStart(index)"
        @dragover.prevent
        @drop="drop(index)"
      ></product-item>
    </div>
  </section>
</template>

<script>
import Spinner from "../UI/Spinner.vue";
import ProductDetails from "./productDetails.vue";
import ProductItem from "./productItem.vue";

export default {
  components: {
    ProductItem,
    ProductDetails,
    Spinner,
  },
  data() {
    return {
      products: [],
      singleProduct: {},
      showSingleProduct: false,
      isLoading: false,
      error: null,
      draggedItemIndex: null,
    };
  },
  created() {
    this.loadProducts();
  },
  methods: {
    async loadProducts() {
      this.isLoading = true;
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const responseData = await response.json();
        this.products = responseData;
      } catch (err) {
        this.error = "something went wrong,try again later";
      }
      this.isLoading = false;
    },
    loadProductDetails(prdId) {
      const selectedPrd = this.products.find((prd) => prd.id === prdId);
      this.singleProduct = selectedPrd;
      this.productDetailVisibility();
    },
    productDetailVisibility() {
      this.showSingleProduct = !this.showSingleProduct;
    },
    dragStart(index) {
      this.draggedItemIndex = index;
    },
    drop(index) {
      const draggedItem = this.products[this.draggedItemIndex];
      this.products.splice(this.draggedItemIndex, 1);//remove the item from his place
      this.products.splice(index, 0, draggedItem);//insert the item in place of the index
      this.draggedItemIndex = null;
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 2rem;
  text-align: center;
}
.products {
  display: flex;
  flex-direction: column;
}
.spin {
  width: fit-content;
  margin: 2rem auto;
}

</style>