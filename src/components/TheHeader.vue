<template>
    <header class="header">
        <div class="logo"></div>
        <ul class="navigation">
            <li>
                <router-link
                    class="navigation__link"
                    :to="{ name: 'Home' }"
                >
                    Home
                </router-link>
            </li>
            <li>
                <router-link
                    class="navigation__link"
                    :to="{ name: 'News' }"
                >
                    News
                </router-link>
            </li>
            <li>
                <router-link
                    class="navigation__link"
                    :to="{ name: 'About' }"
                >
                    About
                </router-link>
            </li>
        </ul>
    </header>
</template>

<script>
export default {
    name: 'TheHeader',
};
</script>

<style>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    background-color: #ce93d8;
    padding: 10px 20px;
}

.navigation {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #000;
    padding: 0 -15px;
    margin: 0;

    &__link {
        display: inline-block;
        text-decoration: none;
        font-size: 18px;
        font-weight: 600;
        padding: 10px 15px;
        color: #fff;
        transition: color .3s;

        &:hover {
            color: #000;
        }
    }
}

.logo {
    width: 100px;
    height: 45px;
    background-color: #ff445f;
}

</style>
