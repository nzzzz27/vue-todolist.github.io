<template>
    <div class="l-container">
        <main>
            <h1>Tab Menu</h1>
            <ul>
                <li
                v-for="(tabname, index) in tabnames"
                :key="index"
                class="tab-name"
                :class="{ isActive }"
                @click="getTabindex(index)"
                >
                {{ tabname }}
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
      isActive: true,
      tabnames: {
        about: 'About',
        price: 'Price',
        access: 'Access',
      },
    };
  },
  methods: {
    getTabindex(index) {
      this.current = index;
    },
  },
  computed: {
    currentTab() {
      return `tab-${this.current}`;
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
    font-size: 16px;
    font-weight: bold;
    background-color: white;
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
  }
  .tab-content {
    margin-top: 5px;
    background-color: rgba(0,0,0,.05);
    border: 1px solid #2c3e50;
    padding: 20px;
  }
</style>
