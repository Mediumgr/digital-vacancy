<template>
  <div class="content">
    <div class="content__header">
      <header>
        <picture>
          <source
            srcset="@/assets/images/logo.svg"
            media="(min-width: 768px)"
          />
          <img src="@/assets/images/logo-mobile.svg" alt="logo" />
        </picture>
        <img
          @click.stop="checked()"
          class="content__menu_burger"
          src="@/assets/images/switcher.svg"
        />
      </header>
      <div class="content__menu_links" ref="menuList">
        <ul class="content__menu_list">
          <span class="content__menu_links-line"></span>
          <li class="content__menu_links-item" @click.stop="goToPage('Habr')">
            <a class="link">Хабр</a>
          </li>
          <li class="content__menu_links-item" @click.stop="goToPage('Rutube')">
            <a class="link">Rutube</a>
          </li>
          <li class="content__menu_links-item" @click.stop="goToPage('Telega')">
            <a class="link">Телеграм</a>
          </li>
          <li class="content__menu_links-item" @click.stop="goToPage('Email')">
            <a class="link">Почта</a>
          </li>
        </ul>
      </div>
      <div class="substrate" v-if="showBlur" @click.stop="close()"></div>
    </div>
    <p class="content__text">
      Создаем и&nbsp;развиваем сервисы одного из&nbsp;крупнейших
      банков&nbsp;&mdash; ПСБ. Нашими продуктами пользуются миллионы людей.
      И&nbsp;нам всегда нужны классные специалисты, которые усилят команду
    </p>
  </div>
  <section class="section">
    <p class="section__title">Системный аналитик</p>
    <div class="section__requirements">
      <div class="section__requirements_block">
        Требуемый опыт работы: 3–6 лет
      </div>
      <div class="section__requirements_block">
        Полная занятость, полный день
      </div>
    </div>
    <div class="section__commonStyle">
      <p class="section__description_title">Описание проекта:</p>
      <p class="section__description_text">
        Разрабатываем собственные решения: системы ДБО для юридических
        и&nbsp;физических лиц, внутренние банковские приложения. Используем
        стек: Angular, C#, Java, Kafka, Postgres. Работаем по&nbsp;Agile
        (70&nbsp;команд) и&nbsp;по&nbsp;Waterfall.
      </p>
    </div>
    <div class="section__commonStyle">
      <p class="section__key_title">Ключевые задачи:</p>
      <ul class="section__key_text">
        <li>Участие в разработке новых продуктов и платформ</li>
        <li>Сбор, анализ, формирование и согласование требований</li>
        <li>Помощь команде на стадии разработки и тестирования</li>
        <li>
          Участие в разработке архитектурных решений и проектировании систем
        </li>
        <li>
          Участие в формировании и поддержании общего информационного
          пространства подразделения в Confluence
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
const showBlur = ref(false);
const menuList = ref(null);

const checked = () => {
  menuList.value.classList.add("content__menu_links_active");
  showBlur.value = true;
};

const close = () => {
  menuList.value.classList.remove("content__menu_links_active");
  showBlur.value = false;
};

const goToPage = (link) => {
  switch (link) {
    case "Habr":
      window.open("https://habr.com/ru/companies/psb/articles/", "_blank");
      break;
    case "Rutube":
      window.open("https://rutube.ru/plst/232091", "_blank");
      break;
    case "Telega":
      window.open("https://t.me/psb_it_team", "_blank");
      break;
    case "Email":
      window.open("mailto:BIT_communications@psbank.ru", "_blank");
      break;
  }
};

const swipeMenu = () => {
  let startY = 0;
  let threshold = 20; // Пороговое значение для определения смахивания вниз

  menuList.value.addEventListener("touchstart", function (event) {
    startY = event.touches[0].clientY;
  });
  menuList.value.addEventListener("touchmove", function (event) {
    event.preventDefault();
    let currentY = event.touches[0].clientY;
    let distance = currentY - startY;

    if (distance > threshold) {
      close();
    }
  });
};

onMounted(async () => {
  swipeMenu();
});
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.content {
  background: url("../assets/images/gradient.png") center/cover;
  padding: 2rem 2rem 0 2rem;

  @include mq(1024) {
    padding: 2rem 16.6rem 0;
  }

  @include mq(1440) {
    padding: 4rem 8rem 0;
  }

  @include mq(1920) {
    padding: 5rem 10rem 0;
  }

  &__header {
    @include mq(768) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  &__text {
    color: #fff;
    text-align: center;
    letter-spacing: -0.128rem;
    line-height: 120%;
    padding: 4rem 0;

    @include mq(768) {
      font-size: 1.7rem;
      padding: 8rem 0;
    }

    @include mq(1024) {
      font-size: 2.26rem;
    }

    @include mq(1440) {
      font-size: 3rem;
    }

    @include mq(1920) {
      font-size: 4.26rem;
    }
  }
  &__menu {
    &_burger {
      width: 3.6rem;
      height: 3.7rem;
      @include mq(768) {
        display: none;
      }
    }
    &_list {
      color: #fff;
      text-align: center;
      font-size: 2.1rem;
      line-height: 140%;
      letter-spacing: -0.0853rem;

      @include mq(768) {
        display: flex;
        justify-content: center;
        align-items: center;
        grid-column-gap: 1rem;
      }
    }
    &_links {
      position: fixed;
      width: 100%;
      z-index: 2;
      bottom: -80rem;
      left: 0;
      background: #fff;
      border-top-left-radius: 2rem;
      border-top-right-radius: 2rem;
      transition: bottom 1s ease-out;

      @include mq(768) {
        position: static;
        background: none;
      }

      &_active {
        bottom: 0;
      }

      &-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 29.5rem;
        border-radius: 2rem;
        border: 0.1rem solid rgba(0, 0, 0, 0.2);
        padding: 1.5rem 2rem;
        margin: 2rem auto 2rem;
        text-align: center;
        cursor: pointer;
        opacity: 0;
        animation: appearance 800ms ease-out forwards;

        &:hover {
          background: #fff;

          .link {
            color: #13144b;
            font-weight: 400;
            border: none;
            outline: none;
          }
        }

        &:nth-child(2) {
          animation-delay: 500ms;
        }

        &:nth-child(3) {
          animation-delay: 600ms;
        }

        &:nth-child(4) {
          animation-delay: 700ms;
        }

        &:nth-child(5) {
          animation-delay: 800ms;
        }

        &:last-child {
          margin-bottom: 6rem;

          @include mq(768) {
            margin-bottom: 0;
          }
        }

        @include mq(768) {
          width: auto;
          background: none;
          border: 0.1rem solid rgba(255, 255, 255, 0.2);
          padding: 1rem 2rem;
          margin: 0;
        }

        @include mq(1024) {
          padding: 1.3rem 2.6rem;
        }

        @include mq(1920) {
          border-radius: 2.7rem;
        }
        > .link {
          line-height: 120%;
          letter-spacing: -0.048rem;
          color: #3a3a54;

          @include mq(768) {
            color: #fff;
          }

          @include mq(1440) {
            line-height: 120%;
            letter-spacing: -0.064rem;
          }
        }
      }

      &-line {
        display: block;
        width: 5.4rem;
        height: 0.6rem;
        border-radius: 3rem;
        background: #d9d9d9;
        margin: 1.5rem auto 0;

        @include mq(768) {
          display: none;
        }
      }
    }
  }
}

.substrate {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  background: rgba(24, 24, 34, 0.4);
  backdrop-filter: blur(0.5rem);
}

.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;

  @include mq(768) {
    padding: 8rem 0;
  }

  &__commonStyle {
    display: flex;
    flex-direction: column;
    grid-row-gap: 1.6rem;
    padding: 1rem 0;
    border-radius: 5rem;
    background: #fff;
    box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.07);
    padding: 2rem;
    margin: 1rem 0;
  }

  &__title {
    font-size: 2rem;
    opacity: 0.8;
    background: linear-gradient(
      86deg,
      #8e54f5 -17.64%,
      #ff4236 30.73%,
      #ffb55c 79.1%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-bottom: 1rem;
    line-height: 120%;

    @include mq(768) {
      font-size: 2rem;
      padding-bottom: 1.5rem;
    }
    @include mq(1920) {
      font-size: 10rem;
      padding-bottom: 3rem;
    }
  }
  &__requirements {
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-column-gap: 1rem;

    @include mq(768) {
      flex-direction: row;
      padding-bottom: 1.5rem;
    }

    @include mq(1920) {
      padding-bottom: 6rem;
    }

    &_block {
      color: #13144b;
      padding: 1rem;
      letter-spacing: -0.072rem;
      border-radius: 12rem;
      background: #fff;
      box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.07);
      text-align: center;

      @include mq(1920) {
        font-size: 2.4rem;
        padding: 4rem;
      }
    }
  }
  &__description {
    &_title {
      color: #13144b;
      letter-spacing: -0.096rem;
      @include mq(1920) {
        font-size: 3.2rem;
      }
    }
    &_text {
      color: #13144b;
      font-weight: 400;
      line-height: 120%;
      letter-spacing: -0.084rem;
      opacity: 0.8;
      @include mq(1920) {
        font-size: 2.8rem;
      }
    }
  }
  &__key {
    &_text {
      font-weight: 400;
      opacity: 0.8;
      letter-spacing: -0.084rem;
    }
  }
}

@keyframes appearance {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
