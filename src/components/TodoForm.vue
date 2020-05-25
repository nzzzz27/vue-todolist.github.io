<template>
  <div class="form-wrap">
    <input
      type="text"
      class="form"
      v-model="value"
      v-on:keydown.enter="handleValue()"
    >
    <button
      class="btn -send"
      @click="handleValue()"
    >
      送信
    </button>
  </div>
</template>

<script>
export default {
  name: 'TodoForm',
  data() {
    return {
      value: '',
    };
  },
  methods: {
    handleValue() {
      this.$emit('sendValue', this.value);
      this.value = '';
    },
  },
};
</script>

<style scoped>
.form-wrap {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 38px;
}
.form {
  flex: 1 1 100%;
  padding: 5px;
  height: 100%;
  border-radius: 3px 0 0 3px;
  border: 1px solid #ced4da;
  border-right: none;
  font-size: 16px;
}

</style>
