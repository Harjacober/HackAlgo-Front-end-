<template>
  <footer class="page-footer">
    <div class="page-footer__panel">
      <ul class='lists'>
        <li> <a href='#'> <i class="uil uil-envelope-minus"></i> Email</a> </li>
        <li> <a href='#'><i class="uil uil-twitter-alt"></i> Twitter</a> </li>
        <li> <a href='#'><i class="uil uil-facebook-messenger-alt"></i> Facebook</a> </li>
        <li> <a href='#'><i class="uil uil-instagram"></i> Instagram</a> </li>
        <li> <a href='#'><i class="uil uil-slack"></i> Slack</a> </li>
      </ul>
      <p class='text'>© 2020 · CodeGees.com · All rights reserved</p>
    </div>
  </footer>
</template>
<script>
export default {
    name: 'page-footer',
};
</script>
<style lang="scss">
.page-footer{
  width:100%;
  .page-footer__panel{
    max-width: 1100px;
    margin: 0 auto;
    padding:60px 20px;
    font-size:0.8rem;
  }
  .lists {
    li {
      display: inline-block;
      padding:10px 0;
      padding-right:20px;
      font-weight:500;
    }
  }
}
</style>
