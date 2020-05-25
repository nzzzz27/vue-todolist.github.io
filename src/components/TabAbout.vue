<template>
  <div>
    <div class="text-left">
      <h2>About</h2>
      <p>Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Laudantium, eveniet.
        Sit exercitationem nam, necessitatibus
        quisquam odio quidem consequatur, molestiae,
        ipsa pariatur neque magni. Debitis esse rem
        obcaecati voluptatibus, praesentium sed!</p>
        <div class="memo-area">
          <p>MEMO：</p>
          <textarea cols="30"></textarea>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabAbout',
};
</script>

<style scoped>
  .memo-area p {
    margin-top: 30px;
    margin-bottom: 15px;
  }
  .memo-area textarea {
    resize: none;
    font-size: 16px;
    letter-spacing: .1em;
    padding: 8px;
    width: 100%;
    min-height: 200px;
  }
</style>
