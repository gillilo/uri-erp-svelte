<script>
  import {link} from 'svelte-spa-router'
</script>

<a
  use:link
  href="/">
  (주)<span>우리회사</span>
</a>

<style lang='scss'>
  a {
    display: block;
    font-weight: 600;
    font-size: 20px;
    color: $color--black-90;
    text-decoration: none;
    
    span {
      color: $color--primary;
    }
  }
</style>