<template>
  <div v-if="isSetLanguage" class="landing">
    <header class="landing-header">
      <div class="container landing-header__container">
        <img
          class="landing-header__fox"
          src="~/assets/images/fox.png"
          width="1699px"
          height="1774px"
        />
        <img
          class="landing-header__cocoacaa"
          src="~/assets/images/cocoacaa.png"
          width="395px"
          height="637px"
        />
        <div class="landing-header__right">
          <div class="landing-header__info">
            <h1 class="landing-header__title">{{ $t('landing.title') }}</h1>
            <p class="landing-header__headline">{{ $t('landing.headline') }}</p>
            <p>{{ $t('landing.eventDate') }}</p>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div class="container flex flex-col items-center pt-5">
        <h2 class="mb-5">{{ $t('landing.joinEvent.title') }}</h2>
        <div class="landing-steps">
          <StepCard
            :title="$t('landing.joinEvent.steps.0.title')"
            :description="$t('landing.joinEvent.steps.0.description')"
          >
          </StepCard>
          <StepCard
            :title="$t('landing.joinEvent.steps.1.title')"
            :description="$t('landing.joinEvent.steps.1.description')"
          >
            <iframe
              class="mx-auto mt-5"
              src="https://discord.com/widget?id=413200888010637313&theme=dark"
              width="350"
              height="500"
              allowtransparency="true"
              frameborder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            ></iframe>
          </StepCard>
          <StepCard
            :title="$t('landing.joinEvent.steps.2.title')"
            :description="$t('landing.joinEvent.steps.2.description', { inviteUrl: 'https://discord.gg/ErA73PhPAw' })"
          >
          </StepCard>
          <StepCard
            :title="$t('landing.joinEvent.steps.3.title')"
            :description="$t('landing.joinEvent.steps.3.description')"
          >
          </StepCard>
        </div>
      </div>
    </main>
    <footer class="footer">
      <div class="container">
        <p>Copyright © 2021 bananape.win</p>
        <p>
          <a href="https://animalroyale.com/" target="_blank"
            >Super Animal Royale</a
          >
          is copyright
          <a href="https://pixilestudios.com/" target="_blank">Pixile, Inc</a>
          and is not affiliated with this site.
        </p>
      </div>
    </footer>
  </div>
  <div v-else />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { RootState } from '~/store'

@Component
export default class Index extends Vue {
  get isSetLanguage(): boolean {
    return (this.$store.state as RootState).isSetLanguage;
  }
}
</script>

<style>
.landing-header {
  background-image: linear-gradient(#00fff2, #00ffa6);
  height: 400px;
  overflow: hidden;
}

.landing-header__container {
  position: relative;
  height: 100%;
}

.landing-header__fox {
  height: 480px;
  width: auto;
  position: absolute;
  left: 5%;
  top: 20px;
  animation: landing-header__fox 2s forwards;
}

@keyframes landing-header__fox {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.landing-header__cocoacaa {
  height: 150px;
  width: auto;
  position: absolute;
  bottom: -40px;
  right: 50px;
  opacity: 0;
  animation: landing-header__cocoacaa 2s 1s forwards;
}

@screen md {
  .landing-header__cocoacaa {
    right: 50%;
  }
}

@keyframes landing-header__cocoacaa {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.landing-header__right {
  @apply -mx-5;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
}

@screen md {
  .landing-header__right {
    @apply mx-0;
    margin-left: 420px;
    height: 100%;
  }
}

.landing-header__info {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 10px 20px;
  color: #fecd44;
}

@screen md {
  .landing-header__info {
    @apply rounded-lg;
    width: 400px;
    height: 250px;
  }
}

.landing-header__title {
  color: #fbe35a;
  font-weight: bold;
}

.landing-header__headline {
  @apply text-xl;
}

.landing-steps {
  display: flex;
  flex-direction: column;
  max-width: 500px;
}

.footer {
  @apply py-5;
  background-color: rgba(0, 0, 0, 0.5);
  color: #666;
}
</style>
