<template>
    <div class="l-container">
        <main>
          <h1>Tab Menu</h1>
          <ul>
            <li
            v-for="(tabname, index) of tabnames"
            :key="index"
            class="tab-name"
            @click="getTabindex(tabname)"
            :class="[{ isActive: tabname.id == current }]"
            >
            {{ tabname.id }}
            </li>
          </ul>

          <keep-alive> <!-- データ破棄されても内容をkeepする -->
            <component
                v-bind:is="currentTab"
                class="tab-content"
            >
            </component>
          </keep-alive>
        </main>
        <footer class="footer">
            <i class="material-icons">keyboard_arrow_left</i>
            <router-link to="/">HOME</router-link>
        </footer>
    </div>
</template>

<script>
import TabAbout from '@/components/TabAbout';
import TabPrice from '@/components/TabPrice';
import TabAccess from '@/components/TabAccess';

export default {
  name: 'Tabs',
  components: {
    TabAbout,
    TabPrice,
    TabAccess,
  },
  data() {
    return {
      current: 'about',
      tabnames: [
        { id: 'about', about: 'About' },
        { id: 'price', price: 'Price' },
        { id: 'access', access: 'Access' },
      ],
    };
  },
  computed: {
    currentTab() {
      return `tab-${this.current}`;
    },
  },
  methods: {
    getTabindex(tabname) {
      this.current = tabname.id;
    },
  },
};
</script>

<style scoped>
  .tab-name {
    display: inline-block;
    list-style: none;
    width: 33%;
    padding: 5px 0;
    color: #2c3e50;
    opacity: .7;
    font-size: 16px;
    font-weight: bold;
    background-color: #bbc3cc;
    cursor: pointer;
  }
  .tab-name:not(:last-child) {
    border-right: 1px solid white;
  }
  .tab-name:hover {
    opacity: .9;
  }
  .tab-name.isActive {
    color: white;
    background-color: #2c3e50;
    opacity: 1;
  }
  .tab-content {
    margin-top: 5px;
    background-color: rgba(0,0,0,.05);
    border: 1px solid #2c3e50;
    padding: 20px;
  }
</style>
