<template>
  <footer class="footer">
    <div class="container">
      <div></div>

      <nav class="footer__nav">
        <ul class="footer__list">
          <li class="footer__list-title footer__menu">
            <h3>Примеры работ</h3>
            <ul class="footer__inner-list">
              <li class="footer__list-item"><a href="#1">Малый бюджет</a></li>
              <li class="footer__list-item"><a href="#2">Средний бюджет</a></li>
              <li class="footer__list-item"><a href="#3">Большой бюждет</a></li>
            </ul>
          </li>

          <li class="footer__list-title footer__info">
            <h3>Информация</h3>
            <ul class="footer__inner-list">
              <li class="footer__list-item"><router-link to="/about">О нас</router-link></li>
              <li class="footer__list-item"><router-link to="/register">Регистрация</router-link></li>
              <li class="footer__list-item"><router-link to="/login">Войти</router-link></li>
            </ul>
          </li>

          <li class="footer__list-title footer__links">
            <h3>Ссылки</h3>
            <ul class="footer__inner-list">
              <li class="footer__list-item"><a href="#7">Наши мастера</a></li>
              <li class="footer__list-item"><a href="#8">Поддержка</a></li>
            </ul>
          </li>
        </ul>
      </nav>

      <div class="footer__socials">
        <h3>Социальные сети</h3>
        <div class="footer__socials-icons">
          <ul class="footer__icons-list">
            <li class="footer__list-item"><a href="#facebook"><img src="@/assets/img/facebook.png" alt="facebook"></a></li>
            <li class="footer__list-item"><a href="#twitter"><img src="@/assets/img/twitter.png" alt="twitter"></a></li>
            <li class="footer__list-item"><a href="#instagram"><img src="@/assets/img/instagram.png" alt="instagram"></a></li>
            <li class="footer__list-item"><a href="#linkedin"><img src="@/assets/img/linkedin.png" alt="linkedin"></a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>
