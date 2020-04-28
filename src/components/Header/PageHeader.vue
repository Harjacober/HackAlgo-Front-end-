<template>
    <header class="page-header">
        <div class='page-header__panel'>
            <div class='header-left'>
                <h3 class='logo'>
                    <router-link to='/'> CodeGees </router-link>
                </h3>
            </div>
            <nav class='header-nav'>
                <ul>
                    <li>
                        <router-link to='/login'>Login</router-link>
                    </li>
                    <li>
                        <LinkButton to='/register' type='secondary' DisableRipple>Register</LinkButton>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
<script>
import LinkButton from '../Button/LinkButton.vue';

export default {
    name: 'page-header',
    components: {
        LinkButton,
    },
};
</script>
<style lang="scss">
.page-header {
    width:100%;
    border-bottom: 1px solid rgb(224, 224, 224);
    .page-header__panel{
        max-width: 1150px;
        margin:0 auto;
        position: relative;
        padding:10px;
    }
    .header-left{
        padding:15px;
        .logo {
            font-weight:700;
            font-size: 1.8rem;
             font-family: $font-family-segoe;
        }
    }
    .header-nav{
        position: absolute;
        right:0;
        top:10px;
        li {
            margin:20px 20px;
            display: inline-block;
        }
        .btn {
            position: relative;
            display: inline-block;
            margin:0;
        }
    }
}
</style>
