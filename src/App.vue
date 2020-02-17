<template>
    <div
        id="app"
        class="app"
    >
        <TheHeader></TheHeader>
        <div class="wrapper wrapper_main">
            <router-view></router-view>
        </div>
        <TheFooter></TheFooter>
    </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';

export default {
    name: 'MainLayout',
    components: {
        TheHeader,
        TheFooter,
    },
};
</script>

<style>
@import "./assets/styles/main.css";

.app {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto 1fr auto;
    min-height: 100%;
    background-color: var(--layout-color);
}

.wrapper {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 15px;

    &_main {
        display: flex;
    }
}
</style>
