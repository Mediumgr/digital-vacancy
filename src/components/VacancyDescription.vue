<template>
  <div ref="shadow" class="shadow" @click.stop="close()"></div>
  <div class="content">
    <div class="content__header">
      <header>
        <picture>
          <source
            srcset="@/assets/images/logo.svg"
            media="(min-width: 768px)"
          />
          <img
            class="content__menu_image"
            src="@/assets/images/logo-mobile.svg"
            alt="logo"
          />
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
            <p class="link">Хабр</p>
          </li>
          <li class="content__menu_links-item" @click.stop="goToPage('Rutube')">
            <p class="link">Rutube</p>
          </li>
          <li class="content__menu_links-item" @click.stop="goToPage('Telega')">
            <p class="link">Телеграм</p>
          </li>
          <li class="content__menu_links-item" @click.stop="goToPage('Email')">
            <p class="link">Почта</p>
          </li>
        </ul>
      </div>
    </div>
    <p class="content__text">
      Создаем и&nbsp;развиваем сервисы одного из&nbsp;крупнейших
      банков&nbsp;&mdash; ПСБ.<br />Нашими продуктами пользуются миллионы
      людей.<br />
      И&nbsp;нам всегда нужны классные специалисты, которые усилят команду
    </p>
  </div>
  <section class="section">
    <p class="section__topTitle">Системный аналитик</p>
    <div class="section__requirements">
      <div class="section__requirements_block">
        Требуемый опыт работы: 3–6 лет
      </div>
      <div class="section__requirements_block">
        Полная занятость, полный день
      </div>
    </div>
    <div class="section__box">
      <p class="section__title">Описание проекта:</p>
      <p class="section__text">
        Разрабатываем собственные решения: системы ДБО для юридических
        и&nbsp;физических лиц, внутренние банковские приложения. Используем
        стек: Angular, C#, Java, Kafka, Postgres. Работаем по&nbsp;Agile
        (70&nbsp;команд) и&nbsp;по&nbsp;Waterfall.
      </p>
    </div>
    <div class="section__box">
      <p class="section__title">Ключевые задачи:</p>
      <ul class="section__text">
        <li>Участие в&nbsp;разработке новых продуктов и&nbsp;платформ</li>
        <li>Сбор, анализ, формирование и&nbsp;согласование требований</li>
        <li>Помощь команде на&nbsp;стадии разработки и&nbsp;тестирования</li>
        <li>
          Участие в&nbsp;разработке архитектурных решений и&nbsp;проектировании
          систем
        </li>
        <li>
          Участие в&nbsp;формировании и&nbsp;поддержании общего информационного
          пространства подразделения в&nbsp;Confluence
        </li>
      </ul>
    </div>
    <div class="section__box">
      <p class="section__title">Что важно для нас:</p>
      <ul class="section__text">
        <li>Высшее образование</li>
        <li>Опыт работы в&nbsp;должности системного аналитика</li>
        <li>
          Способность грамотно и&nbsp;последовательно составить техническое
          задание
        </li>
        <li>
          Готовность и&nbsp;желание погружаться в&nbsp;технические детали
          разрабатываемого функционала
        </li>
        <li>
          Развитые коммуникационные навыки, умение находить общий язык
          с&nbsp;бизнес-заказчиками, с&nbsp;разработчиками
        </li>
        <li>Знание и&nbsp;опыт работы с&nbsp;SQL</li>
        <li>
          Понимание принципов интеграции нескольких систем (SOAP, REST, MQ)
        </li>
        <li>Знание нотаций UML, BPMN или других</li>
        <li>Опыт работы с&nbsp;Jira, Confluence</li>
      </ul>
    </div>
    <div class="section__box">
      <p class="section__title">Что предлагаем:</p>
      <ul class="section__text">
        <li>
          График работы 5/2 (пн-чт с&nbsp;9:00 до&nbsp;18:00, сокращенный
          рабочий день по&nbsp;пятницам)
        </li>
        <li>Возможность удаленного формата работы</li>
        <li>Оформление по&nbsp;ТК&nbsp;РФ</li>
        <li>Конкурентный уровень дохода: оклад + премии</li>
        <li>Кафетерий льгот: ДМС, оплата отдыха или фитнес по&nbsp;выбору</li>
        <li>Страховка для выезжающих за&nbsp;границу</li>
        <li>Доплаты к&nbsp;отпуску и&nbsp;больничному</li>
        <li>
          Дополнительные льготы при заключении брака и&nbsp;рождении детей
        </li>
        <li>Социальная поддержка при сложных жизненных ситуациях</li>
        <li>Льготное кредитование для сотрудников</li>
        <li>Обучение в&nbsp;корпоративном университете банка</li>
        <li>Корпоративная библиотека</li>
      </ul>
    </div>
  </section>
  <p class="resume__title">Мы ждем ваше резюме</p>
  <div class="resume__content">
    <div class="resume__content_block">
      <p class="resume__content_title">Найти стабильную работу</p>
      <BaseButton @click.stop="openModal()" class="resume__content_btn"
        ><span>ОТПРАВИТЬ РЕЗЮМЕ</span></BaseButton
      >
    </div>
    <div class="resume__content_block">
      <p class="resume__content_title">Получить 100 000 рублей</p>
      <BaseButton
        @click.stop="goToPage('Recommend')"
        class="resume__content_btn"
        ><span>РЕКОМЕНДОВАТЬ ДРУГА</span></BaseButton
      >
    </div>
  </div>
  <Teleport to="body">
    <FormVacancy
      :modalStatus="showModal"
      @closeModal="toggleModal($event)"
    ></FormVacancy>
  </Teleport>
  <footer class="footer">
    <div class="footer__logo">&copy; ПСБ</div>
    <div class="footer__email">Почта</div>
  </footer>
</template>

<script setup>
import FormVacancy from "./FormVacancy.vue";
import { onMounted, ref } from "vue";

const shadow = ref(null);
const menuList = ref(null);
const showModal = ref(false);

const openModal = () => {
  showModal.value = true;
  shadow.value.classList.add("active");
  document.body.style.overflow = "hidden";
};

const toggleModal = (event) => {
  let isModalWrapperClick = event.target?.classList.contains("modal-wrapper");
  let isCrossClick = event.target?.classList.contains("cross");

  if (isModalWrapperClick || isCrossClick || event === "close") {
    showModal.value = false;
    shadow.value.classList.remove("active");
    document.body.style.overflow = "";
  }
};

const checked = () => {
  menuList.value.classList.add("content__menu_links-active");
  shadow.value.classList.add("active");
};

const close = () => {
  menuList.value.classList.remove("content__menu_links-active");
  shadow.value.classList.remove("active");
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
    case "Recommend":
      window.open("https://work.psblab.ru", "_blank");
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
  padding: 2rem 2rem 0;

  @include mq(768) {
    padding: 2rem 5rem 0;
  }
  @include mq(1024) {
    padding: 2rem 10rem 0;
  }
  @include mq(1440) {
    padding: 5rem 10rem 0;
  }

  &__header {
    @include mq(768) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      align-items: flex-end;
    }
  }

  &__text {
    color: #fff;
    text-align: center;
    line-height: 120%;
    padding: 4rem 0;

    @include mq(768) {
      font-size: 1.8rem;
    }

    @include mq(1024) {
      font-size: 2.26rem;
      padding: 8rem 0;
    }

    @include mq(1440) {
      font-size: 3.2rem;
      letter-spacing: -0.128rem;
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
    &_image {
      height: 3.7rem;
      @include mq(1024) {
        height: auto;
      }
    }
    &_list {
      color: #fff;
      text-align: center;
      line-height: 140%;
      letter-spacing: -0.0853rem;

      @include mq(768) {
        display: flex;
        justify-content: flex-end;
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

      &-active {
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
        transition: all 0.5s ease;

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
          border-radius: 2.7rem;
          padding: 1rem 2rem;
          margin: 0;
        }

        @include mq(1024) {
          padding: 1.3rem 2.6rem;
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

.shadow {
  z-index: -1;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  backdrop-filter: blur(0.5rem);
  transition: all 1s ease;
  &.active {
    z-index: 1;
    opacity: 1;
    background: rgba(24, 24, 34, 0.4);
  }
}

.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 3rem 2rem 2rem;

  @include mq(768) {
    padding: 5rem 7rem 4rem;
  }
  @include mq(1024) {
    padding: 8rem 24rem 0;
  }
  @include mq(1440) {
    padding: 8rem 0 0;
    width: 96rem;
    margin: 0 auto;
  }
  &__topTitle {
    font-size: 3rem;
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
    white-space: nowrap;

    @include mq(768) {
      font-size: 6rem;
      padding-bottom: 3.2rem;
    }
    @include mq(1024) {
      font-size: 7.5rem;
    }
  }
  &__box {
    display: flex;
    flex-direction: column;
    grid-row-gap: 1rem;
    border-radius: 5rem;
    background: #fff;
    box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.07);
    padding: 2rem;
    margin-top: 2rem;
    width: 100%;

    @include mq(768) {
      grid-row-gap: 1.6rem;
      padding: 4rem;
    }

    @include mq(1024) {
      padding: 6rem;
    }
  }
  &__title {
    color: #13144b;
    letter-spacing: -0.096rem;

    @include mq(768) {
      font-size: 2rem;
    }
    @include mq(1024) {
      font-size: 2.4rem;
      line-height: 2.85rem;
    }
  }
  &__text {
    font-weight: 400;
    opacity: 0.8;
    letter-spacing: -0.084rem;
    color: #13144b;
    line-height: 120%;

    @include mq(1024) {
      font-size: 2.1rem;
    }
    > li {
      list-style-type: initial;
      color: #13144b;
      opacity: 0.8;
    }
  }
  &__requirements {
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-column-gap: 1rem;

    @include mq(768) {
      flex-direction: row;
      padding-bottom: 2rem;
      grid-column-gap: 2.8rem;
    }

    &_block {
      color: #13144b;
      padding: 1rem;
      letter-spacing: -0.072rem;
      border-radius: 12rem;
      background: #fff;
      box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.07);
      text-align: center;

      @include mq(768) {
        padding: 2.5rem;
        line-height: 2.85rem;
      }
      @include mq(1024) {
        padding: 2.7rem 3.5rem;
        font-size: 1.8rem;
      }
    }
  }
}

ul {
  padding-left: 2rem;
  @include mq(768) {
    padding-left: 3rem;
  }
}

.resume {
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    grid-row-gap: 2rem;
    padding: 2rem 2rem 3rem;

    @include mq(768) {
      padding: 0 7rem 8rem;
    }
    @include mq(1024) {
      flex-direction: row;
      padding: 9rem 18rem 10rem;
      grid-column-gap: 6rem;
    }
    @include mq(1440) {
      grid-column-gap: 8rem;
    }
    &_block {
      padding: 2rem;
      border-radius: 26px;
      box-shadow: 0 0.67rem 2.67rem 0 #00000012;
      width: 100%;
      @include mq(1024) {
        padding: 3rem;
      }
    }
    &_title {
      font-size: 1.8rem;
      text-align: center;
      background: linear-gradient(
        85.82deg,
        #8e54f5 3.39%,
        #ff4236 50.02%,
        #ffb55c 96.64%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      padding-bottom: 1rem;
      @include mq(768) {
        font-size: 2.8rem;
        line-height: 3.8rem;
        padding-bottom: 2rem;
      }
      @include mq(1440) {
        font-size: 3.3rem;
      }
    }
    &_btn {
      position: relative;
      border-radius: 26px;
      width: 100%;
      @include mq(768) {
        padding: 2.6rem;
      }
      @include mq(1024) {
        font-size: 2rem;
      }
      @include mq(1440) {
        font-size: 2.4rem;
      }
      & > span {
        position: relative;
      }
    }
  }
  &__title {
    padding: 1rem 2rem 0;
    text-align: center;
    font-size: 3.5rem;
    line-height: 90%;
    @include mq(768) {
      padding: 0 7rem 4rem;
      font-size: 8rem;
    }
    @include mq(1024) {
      padding: 7rem 24rem 0;
      font-size: 11rem;
    }
    @include mq(1440) {
      padding: 7rem 17rem 0;
      font-size: 15rem;
      letter-spacing: -0.9rem;
    }
  }
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: url("../assets/images/gradient_footer.png") center/cover;
  padding: 1rem 2rem;

  @include mq(768) {
    padding: 2rem 5rem 2rem;
  }
  @include mq(1024) {
    padding: 2rem 10rem 2rem;
  }
  @include mq(1440) {
    padding: 3.5rem 10rem 3.5rem;
  }

  &__logo,
  &__email {
    color: #fff;
    letter-spacing: -0.0853rem;
    @include mq(1024) {
      font-size: 2.13rem;
      line-height: 140%;
    }
  }
}
</style>
